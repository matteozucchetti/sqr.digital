import { PLANS } from "@/lib/config";
import { getAuthUserId } from "@convex-dev/auth/server";
import { asyncMap } from "convex-helpers";
import { internal } from "./_generated/api";
import { mutation, query } from "./_generated/server";

export const getUser = query({
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return;
    }
    const [user, subscription] = await Promise.all([
      ctx.db.get(userId),
      ctx.db
        .query("subscriptions")
        .withIndex("userId", (q) => q.eq("userId", userId))
        .unique(),
    ]);
    if (!user) {
      return;
    }
    const plan = subscription?.planId
      ? await ctx.db.get(subscription.planId)
      : undefined;
    return {
      ...user,
      subscription:
        subscription && plan
          ? {
              ...subscription,
              planKey: plan.key,
            }
          : undefined,
    };
  },
});

export const getActivePlans = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return;
    }
    const [free, single, pro] = await asyncMap(
      [PLANS.FREE, PLANS.SINGLE, PLANS.PRO] as const,
      (key) =>
        ctx.db
          .query("plans")
          .withIndex("key", (q) => q.eq("key", key))
          .unique(),
    );
    if (!free || !single || !pro) {
      throw new Error("Plan not found");
    }
    return { free, single, pro };
  },
});

export const deleteCurrentUserAccount = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return;
    }
    const user = await ctx.db.get(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const subscription = await ctx.db
      .query("subscriptions")
      .withIndex("userId", (q) => q.eq("userId", userId))
      .unique();
    if (!subscription) {
      console.error("No subscription found");
    } else {
      await ctx.db.delete(subscription._id);
      await ctx.scheduler.runAfter(
        0,
        internal.stripe.cancelCurrentUserSubscriptions,
      );
    }
    await ctx.db.delete(userId);
    await asyncMap(["google"], async (provider) => {
      const authAccount = await ctx.db
        .query("authAccounts")
        .withIndex("userIdAndProvider", (q) =>
          q.eq("userId", userId).eq("provider", provider),
        )
        .unique();
      if (!authAccount) {
        return;
      }
      await ctx.db.delete(authAccount._id);
    });
  },
});

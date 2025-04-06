import { getAuthUserId } from "@convex-dev/auth/server";
import { query } from "./_generated/server";
import { polar } from "./polar";

export const getUser = query({
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return;
    }
    const user = await ctx.db.get(userId);
    if (!user) {
      return;
    }
    const subscription = await polar.getCurrentSubscription(ctx, {
      userId: user._id,
    });
    return {
      ...user,
      subscription,
    };
  },
});

// export const updateUserPlan = mutation({
//   // TODO: Implement this
// });

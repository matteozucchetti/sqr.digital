import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getSquare = query({
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return;
    }
    const square = await ctx.db
      .query("squares")
      .filter((q) => q.eq(q.field("userId"), userId))
      .first();
    if (!square) {
      return;
    }
    return square;
  },
});

export const createSquare = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return;
    }
    const squareId = await ctx.db.insert("squares", {
      name: args.name,
      userId,
    });
    await ctx.db.patch(userId, { squareId: squareId });
  },
});

export const updateSquareName = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return;
    }
    const square = await ctx.db
      .query("squares")
      .filter((q) => q.eq(q.field("userId"), userId))
      .first();
    if (!square) {
      return;
    }
    await ctx.db.patch(square._id, { name: args.name });
  },
});

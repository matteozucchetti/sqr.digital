import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { squareName } from "./validators";

export const getSquare = query({
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return;
    }
    const square = await ctx.db.get(userId);
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
    const validatedName = squareName.safeParse(args.name);
    if (!validatedName.success) {
      throw new Error(validatedName.error.message);
    }
    const squareId = await ctx.db.insert("square", {
      name: validatedName.data,
      userId,
    });
    await ctx.db.patch(userId, { squareId });
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
    const square = await ctx.db.get(userId);
    if (!square) {
      return;
    }
    const validatedName = squareName.safeParse(args.name);
    if (!validatedName.success) {
      throw new Error(validatedName.error.message);
    }
    await ctx.db.patch(square._id, { name: validatedName.data });
  },
});

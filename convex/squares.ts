import { THEMES } from "@/lib/config";
import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";
import { ConvexError } from "convex/values";
import { mutation, query } from "./_generated/server";
import type { DatabaseReader } from "./_generated/server";

async function checkDuplicateSquareName(
  ctx: { db: DatabaseReader },
  name: string,
  excludeId?: string,
) {
  const query = ctx.db
    .query("squares")
    .filter((q) => q.eq(q.field("name"), name));

  if (excludeId) {
    query.filter((q) => q.neq(q.field("_id"), excludeId));
  }

  const existingSquare = await query.first();
  if (existingSquare) {
    throw new ConvexError(`A square with the name "${name}" already exists`);
  }
  return existingSquare;
}

export const getSquareById = query({
  args: { id: v.id("squares") },
  handler: async (ctx, args) => {
    const square = await ctx.db.get(args.id);
    if (!square) return null;
    return square;
  },
});

export const getSquares = query({
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return null;
    }

    const squares = await ctx.db
      .query("squares")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();
    return squares;
  },
});

export const getFirstSquare = query({
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return null;

    return await ctx.db
      .query("squares")
      .filter((q) => q.eq(q.field("userId"), userId))
      .first();
  },
});

export const createSquare = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new ConvexError("Not authenticated");
    }

    await checkDuplicateSquareName(ctx, args.name);
    return await ctx.db.insert("squares", {
      name: args.name,
      userId,
      theme: THEMES.DEFAULT,
    });
  },
});

export const updateSquareName = mutation({
  args: {
    id: v.id("squares"),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const square = await ctx.db.get(args.id);
    if (!square) {
      throw new ConvexError("Square not found");
    }

    await checkDuplicateSquareName(ctx, args.name, args.id);
    await ctx.db.patch(square._id, { name: args.name });
    return square;
  },
});

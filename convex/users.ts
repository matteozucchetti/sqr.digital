// import { username } from "@/convex/validators";
import { getAuthUserId } from "@convex-dev/auth/server";
// import { internal } from "@/convex/_generated/api";
import { query } from "./_generated/server";
// import { asyncMap } from "convex-helpers";
// import { v } from "convex/values";
// import { polar } from "./subscriptions";

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
    // const subscription = await polar.getCurrentSubscription(ctx, {
    //   userId: user._id,
    // });
    return {
      ...user,
      //   subscription,
      //   avatarUrl: user.imageId
      //     ? await ctx.storage.getUrl(user.imageId)
      //     : undefined,
    };
  },
});

// export const updateUsername = mutation({
//   args: {
//     username: v.string(),
//   },
//   handler: async (ctx, args) => {
//     const userId = await getAuthUserId(ctx);
//     if (!userId) {
//       return;
//     }
//     const validatedUsername = username.safeParse(args.username);

//     if (!validatedUsername.success) {
//       throw new Error(validatedUsername.error.message);
//     }
//     await ctx.db.patch(userId, { username: validatedUsername.data });
//   },
// });

// export const generateUploadUrl = mutation({
//   args: {},
//   handler: async (ctx) => {
//     const userId = await getAuthUserId(ctx);
//     if (!userId) {
//       throw new Error("User not found");
//     }
//     return await ctx.storage.generateUploadUrl();
//   },
// });

// export const updateUserImage = mutation({
//   args: {
//     imageId: v.id("_storage"),
//   },
//   handler: async (ctx, args) => {
//     const userId = await getAuthUserId(ctx);
//     if (!userId) {
//       return;
//     }
//     ctx.db.patch(userId, { imageId: args.imageId });
//   },
// });

// export const removeUserImage = mutation({
//   args: {},
//   handler: async (ctx) => {
//     const userId = await getAuthUserId(ctx);
//     if (!userId) {
//       return;
//     }
//     ctx.db.patch(userId, { imageId: undefined, image: undefined });
//   },
// });

// export const deleteUserAccount = internalMutation({
//   args: {
//     userId: v.id("users"),
//   },
//   handler: async (ctx, args) => {
//     await asyncMap(
//       ["google" /* add other providers as needed */],
//       async (provider) => {
//         const authAccount = await ctx.db
//           .query("authAccounts")
//           .withIndex("userIdAndProvider", (q) =>
//             q.eq("userId", args.userId).eq("provider", provider),
//           )
//           .unique();
//         if (!authAccount) {
//           return;
//         }
//         await ctx.db.delete(authAccount._id);
//       },
//     );
//     await ctx.db.delete(args.userId);
//   },
// });

// export const deleteCurrentUserAccount = action({
//   args: {},
//   handler: async (ctx) => {
//     const userId = await getAuthUserId(ctx);
//     if (!userId) {
//       return;
//     }
//     const subscription = await polar.getCurrentSubscription(ctx, {
//       userId,
//     });
//     if (!subscription) {
//       console.error("No subscription found");
//     } else {
//       await polar.cancelSubscription(ctx, {
//         revokeImmediately: true,
//       });
//     }
//     await ctx.runMutation(internal.users.deleteUserAccount, {
//       userId,
//     });
//   },
// });

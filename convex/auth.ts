import { PLANS } from "@/lib/config";
import Google from "@auth/core/providers/google";
import { convexAuth } from "@convex-dev/auth/server";

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [Google],
  callbacks: {
    async redirect({ redirectTo }) {
      return redirectTo;
    },
    async afterUserCreatedOrUpdated(ctx, args) {
      // Skip if this is an existing user update
      if (args.existingUserId) return;

      // For new users, set their default plan to FREE
      await ctx.db.patch(args.userId, {
        plan: PLANS.FREE,
      });
    },
  },
});

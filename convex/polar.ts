// convex/example.ts
import { Polar } from "@convex-dev/polar";
import { api, components } from "./_generated/api";
import type { Doc } from "./_generated/dataModel";

export const polar = new Polar(components.polar, {
  getUserInfo: async (ctx) => {
    const user = (await ctx.runQuery(api.users.getUser)) as Doc<"users">;

    if (!user) {
      throw new Error("User not found");
    }

    if (!user.email) {
      throw new Error("User email is required");
    }

    return {
      userId: user._id,
      email: user.email,
    };
  },
  // Optional: Set Polar configuration directly in code
  // organizationToken: "polar_oat_fQj79hJIckT9gvuSAVKlyU9bTd1fbXdARvm9S14Syaj", // Defaults to POLAR_ORGANIZATION_TOKEN env var
  // webhookSecret: "4e26b7011482481c943e5044faf706a4", // Defaults to POLAR_WEBHOOK_SECRET env var
  server: "sandbox", // Optional: "sandbox" or "production", defaults to POLAR_SERVER env var
});

// Export API functions from the Polar client
export const {
  // If you configure your products by key in the Polar constructor,
  // this query provides a keyed object of the products.
  getConfiguredProducts,
  // Lists all non-archived products, useful if you don't configure products by key.
  listAllProducts,
  // Generates a checkout link for the given product IDs.
  generateCheckoutLink,
  // Generates a customer portal URL for the current user.
  generateCustomerPortalUrl,
  // Changes the current subscription to the given product ID.
  changeCurrentSubscription,
  // Cancels the current subscription.
  cancelCurrentSubscription,
} = polar.api();

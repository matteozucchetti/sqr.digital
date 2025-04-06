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
  // Optional: Configure static keys for referencing your products.
  // Alternatively you can use the `listAllProducts` function to get
  // the product data and sort it out in your UI however you like
  // (eg., by price, name, recurrence, etc.).
  // Map your product keys to Polar product IDs (you can also use env vars for this)
  // Replace these keys with whatever is useful for your app (eg., "pro", "proMonthly",
  // whatever you want), and replace the values with the actual product IDs from your
  // Polar dashboard
  products: {
    singleMonthly: "1253a987-7a44-426d-8bdd-83460ca8cc68",
    proMonthly: "68184f63-fff5-4616-9eaf-36b1cadf690b",
  },
  // Optional: Set Polar configuration directly in code
  organizationToken: process.env.POLAR_ORGANIZATION_TOKEN!, // Defaults to POLAR_ORGANIZATION_TOKEN env var
  webhookSecret: process.env.POLAR_WEBHOOK_SECRET!, // Defaults to POLAR_WEBHOOK_SECRET env var
  server: "sandbox", // Optional: "sandbox" or "production", defaults to POLAR_SERVER env var
});

// Export API functions from the Polar client
export const {
  changeCurrentSubscription,
  cancelCurrentSubscription,
  getConfiguredProducts,
  listAllProducts,
  generateCheckoutLink,
  generateCustomerPortalUrl,
} = polar.api();

import { CURRENCIES, INTERVALS, PLANS, THEMES } from "@/lib/config";
import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const Plan = v.union(v.literal("free"), v.literal("single"), v.literal("pro"));

const WiFi = v.optional(
  v.object({
    ssid: v.string(),
    password: v.string(),
  }),
);

const BreakFastLunchDinner = v.optional(
  v.object({
    start: v.string(),
    end: v.string(),
    description: v.string(),
    menuUrl: v.optional(v.string()),
  }),
);

const CheckInCheckOut = v.optional(
  v.object({
    start: v.string(),
    end: v.string(),
    description: v.string(),
  }),
);

const Place = v.object({
  name: v.string(),
  description: v.string(),
  link: v.string(),
  distance: v.number(),
});

const Places = v.optional(v.array(Place));

const Theme = v.union(
  v.literal(THEMES.GOLD),
  v.literal(THEMES.BLUE),
  v.literal(THEMES.RED),
  v.literal(THEMES.DEFAULT),
);

export const Plans = v.union(
  v.literal(PLANS.FREE),
  v.literal(PLANS.SINGLE),
  v.literal(PLANS.PRO),
);

export const Currency = v.union(
  v.literal(CURRENCIES.USD),
  v.literal(CURRENCIES.EUR),
);

export const Price = v.object({
  stripeId: v.string(),
  amount: v.number(),
});

const Prices = v.object({
  [CURRENCIES.USD]: Price,
  [CURRENCIES.EUR]: Price,
});

export const Interval = v.union(
  v.literal(INTERVALS.MONTH),
  v.literal(INTERVALS.YEAR),
);

export default defineSchema({
  ...authTables,
  users: defineTable({
    // Convex Auth fields
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    emailVerificationTime: v.optional(v.number()),
    phone: v.optional(v.string()),
    phoneVerificationTime: v.optional(v.number()),
    isAnonymous: v.optional(v.boolean()),
    customerId: v.optional(v.string()),

    plan: Plan,
  })
    .index("email", ["email"])
    .index("customerId", ["customerId"]),

  plans: defineTable({
    key: Plans,
    stripeId: v.string(),
    name: v.string(),
    description: v.string(),
    prices: v.object({
      [INTERVALS.MONTH]: Prices,
      [INTERVALS.YEAR]: Prices,
    }),
  })
    .index("key", ["key"])
    .index("stripeId", ["stripeId"]),

  subscriptions: defineTable({
    userId: v.id("users"),
    planId: v.id("plans"),
    priceStripeId: v.string(),
    stripeId: v.string(),
    currency: Currency,
    interval: Interval,
    status: v.string(),
    currentPeriodStart: v.number(),
    currentPeriodEnd: v.number(),
    cancelAtPeriodEnd: v.boolean(),
  })
    .index("userId", ["userId"])
    .index("stripeId", ["stripeId"]),

  squares: defineTable({
    name: v.string(),
    userId: v.id("users"),
    logo: v.optional(v.string()),
    description: v.optional(v.string()),
    image: v.optional(v.string()),
    phone: v.optional(v.string()),
    email: v.optional(v.string()),
    address: v.optional(v.string()),
    theme: Theme,
    wifi: WiFi,
    breakfast: BreakFastLunchDinner,
    lunch: BreakFastLunchDinner,
    dinner: BreakFastLunchDinner,
    checkIn: CheckInCheckOut,
    checkOut: CheckInCheckOut,
    commercial: Places,
    restaurants: Places,
    events: Places,
    activities: Places,
  }).index("userId", ["userId"]),
});

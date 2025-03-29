import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const Plan = v.union(
  v.literal("free"),
  v.literal("single"),
  v.literal("pro"),
  v.literal("enterprise"),
);

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
  v.literal("gold"),
  v.literal("red"),
  v.literal("blue"),
  v.literal("green"),
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

    // custom fields
    squareId: v.optional(v.id("squares")),
    plan: Plan,
  }).index("email", ["email"]),

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

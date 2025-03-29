// PLANS

export type Plan = "free" | "single" | "pro" | "enterprise";

export const PLANS = {
  FREE: "free",
  SINGLE: "single",
  PRO: "pro",
  ENTERPRISE: "enterprise",
} as const;

const plansHierarchy: Record<Plan, number> = {
  [PLANS.FREE]: 0,
  [PLANS.SINGLE]: 1,
  [PLANS.PRO]: 2,
  [PLANS.ENTERPRISE]: 3,
};

export const isPlanGreaterOrEqual = (userPlan: Plan, plan: Plan) => {
  return plansHierarchy[userPlan] >= plansHierarchy[plan];
};

// THEMES

export type Theme = "gold" | "red" | "blue" | "green";

export const THEMES = {
  GOLD: "gold",
  RED: "red",
  BLUE: "blue",
  GREEN: "green",
} as const;

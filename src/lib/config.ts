// ERRORS

export const ERRORS = {
  SQUARE_NAME_ALREADY_EXISTS:
    "Esiste già uno Square con questo nome, scegline un altro",
} as const;

// PLANS

export type Plan = "free" | "single" | "pro";

export const PLANS = {
  FREE: "free",
  SINGLE: "single",
  PRO: "pro",
} as const;

const plansHierarchy: Record<Plan, number> = {
  [PLANS.FREE]: 0,
  [PLANS.SINGLE]: 1,
  [PLANS.PRO]: 2,
};

export const isPlanGreaterOrEqual = (userPlan: Plan, plan: Plan) => {
  return plansHierarchy[userPlan] >= plansHierarchy[plan];
};

// THEMES

export type Theme = "default" | "red" | "blue" | "gold";

export const THEMES = {
  DEFAULT: "default",
  RED: "red",
  BLUE: "blue",
  GOLD: "gold",
} as const;

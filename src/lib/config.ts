// ERRORS

export const ERRORS = {
  SQUARE_NAME_ALREADY_EXISTS:
    "Esiste già uno Square con questo nome, scegline un altro",
  STRIPE_CUSTOMER_NOT_CREATED: "Errore nella creazione del cliente Stripe",
  STRIPE_SOMETHING_WENT_WRONG: "Qualcosa è andato storto",
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

export const INTERVALS = {
  MONTH: "month",
  YEAR: "year",
} as const;

export const CURRENCIES = {
  USD: "usd",
  EUR: "eur",
} as const;

// THEMES

export type Theme = "default" | "red" | "blue" | "gold";

export const THEMES = {
  DEFAULT: "default",
  RED: "red",
  BLUE: "blue",
  GOLD: "gold",
} as const;

// RESEND

export const DEFAULT_AUDIENCE_ID = "0338d67a-8523-45cc-b5ca-6cad2d7299df";

import { ConvexHttpClient } from "convex/browser";

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error("Missing NEXT_PUBLIC_CONVEX_URL");
}

export const convexHttpClient = new ConvexHttpClient(
  process.env.NEXT_PUBLIC_CONVEX_URL,
);

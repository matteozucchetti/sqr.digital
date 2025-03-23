"use client";

import type { api } from "@/convex/_generated/api";
import { type Preloaded, usePreloadedQuery } from "convex/react";

export function Heading({
  preloadedSquare,
}: {
  preloadedSquare: Preloaded<typeof api.squares.getSquare>;
}) {
  const square = usePreloadedQuery(preloadedSquare);

  return <h1 className="text-2xl font-bold">benvenuto: {square?.name}</h1>;
}

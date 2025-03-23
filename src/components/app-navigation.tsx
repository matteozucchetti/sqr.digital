"use client";

import type { api } from "@/convex/_generated/api";
import { type Preloaded, usePreloadedQuery } from "convex/react";
import Link from "next/link";

export function AppNavigation({
  preloadedUser,
  preloadedSquare,
}: {
  preloadedUser: Preloaded<typeof api.users.getUser>;
  preloadedSquare: Preloaded<typeof api.squares.getSquare>;
}) {
  const user = usePreloadedQuery(preloadedUser);
  const square = usePreloadedQuery(preloadedSquare);

  return (
    <div>
      <Link href="/">Home</Link>
      {user?.email}
      {square?.name}
    </div>
  );
}

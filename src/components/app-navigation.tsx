"use client";

import type { api } from "@/convex/_generated/api";
import { type Preloaded, usePreloadedQuery } from "convex/react";
import Link from "next/link";

export function AppNavigation({
  preloadedUser,
}: {
  preloadedUser: Preloaded<typeof api.users.getUser>;
}) {
  const user = usePreloadedQuery(preloadedUser);

  return (
    <div>
      <Link href="/">Home</Link>
      {user?.email}
    </div>
  );
}

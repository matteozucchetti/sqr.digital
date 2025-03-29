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
  // TODO: Add navigation
  console.log(user);

  return (
    <div className="bg-[#1D1D1B] text-background flex items-center justify-center py-4">
      <Link href="/">
        <img src="https://placehold.co/100x20" alt="Square" />
      </Link>
    </div>
  );
}

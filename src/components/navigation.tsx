"use client";

import { Logo } from "@/components/brand/logo";
import type { api } from "@/convex/_generated/api";
import { Authenticated, type Preloaded, Unauthenticated } from "convex/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { UserDropdown } from "./user-dropdown";

export function Navigation({
  preloadedUser,
  preloadedSquares,
}: {
  preloadedUser: Preloaded<typeof api.users.getUser>;
  preloadedSquares: Preloaded<typeof api.squares.getSquares>;
}) {
  return (
    <div className="bg-[#1D1D1B] text-background flex items-center justify-between p-4">
      <Link href="/">
        <Logo className="w-[120px]" />
      </Link>
      <div className="flex items-center gap-2">
        <Authenticated>
          <UserDropdown
            preloadedUser={preloadedUser}
            preloadedSquares={preloadedSquares}
          />
        </Authenticated>
        <Unauthenticated>
          <Button variant="small" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </Unauthenticated>
      </div>
    </div>
  );
}

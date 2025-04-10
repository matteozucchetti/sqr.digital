"use client";

import type { api } from "@/convex/_generated/api";
import { Authenticated, type Preloaded, Unauthenticated } from "convex/react";
import Link from "next/link";
import { Button } from "../ui/button";
import { UserDropdown } from "../user-dropdown";

export function AuthButtons({
  preloadedUser,
  preloadedSquares,
}: {
  preloadedUser: Preloaded<typeof api.users.getUser>;
  preloadedSquares: Preloaded<typeof api.squares.getSquares>;
}) {
  return (
    <>
      <Authenticated>
        TODO: upgrade del piano sempre visibile se non pro
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
    </>
  );
}

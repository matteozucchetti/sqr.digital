"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { api } from "@/convex/_generated/api";
import { type Preloaded, usePreloadedQuery } from "convex/react";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { SignOut } from "./auth/sign-out";

export function UserDropdown({
  preloadedUser,
  preloadedSquares,
}: {
  preloadedUser: Preloaded<typeof api.users.getUser>;
  preloadedSquares: Preloaded<typeof api.squares.getSquares>;
}) {
  const user = usePreloadedQuery(preloadedUser);
  const squares = usePreloadedQuery(preloadedSquares);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="small">
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex flex-col gap-2 py-2">
          {squares?.map((square) => (
            <Button
              key={square._id}
              variant="link"
              asChild
              className="justify-start text-foreground text-sm"
            >
              <Link href={`/admin/${square._id}`}>{square.name}</Link>
            </Button>
          ))}
        </div>
        <DropdownMenuSeparator />
        <div className="flex flex-col gap-2 py-2">
          <Button variant="link" asChild className="justify-start text-sm">
            <Link href="/onboarding">Crea un nuovo Square</Link>
          </Button>
        </div>
        <DropdownMenuSeparator />
        <div className="flex flex-col gap-2 py-2">
          <SignOut />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

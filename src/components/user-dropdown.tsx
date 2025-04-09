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
import type { Doc } from "@/convex/_generated/dataModel";
import { PLANS } from "@/lib/config";
import { type Preloaded, usePreloadedQuery } from "convex/react";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { SignOut } from "./auth/sign-out";
import { Text } from "./typography";

function squareButton(square: Doc<"squares">) {
  return (
    <Button
      key={square._id}
      variant="link"
      asChild
      className="justify-start text-foreground text-sm"
    >
      <Link href={`/admin/${square._id}`}>{square.name}</Link>
    </Button>
  );
}

export function UserDropdown({
  preloadedUser,
  preloadedSquares,
}: {
  preloadedUser: Preloaded<typeof api.users.getUser>;
  preloadedSquares: Preloaded<typeof api.squares.getSquares>;
}) {
  const user = usePreloadedQuery(preloadedUser);
  const squares = usePreloadedQuery(preloadedSquares);
  const plan = user?.subscription?.planKey;

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
          {plan === PLANS.PRO
            ? squares?.map((square) => squareButton(square))
            : squares && squares.length > 0 && squareButton(squares[0])}
          {squares?.length === 0 && (
            <Button variant="link" asChild className="justify-start text-sm">
              <Link href="/onboarding">Crea il tuo primo Square</Link>
            </Button>
          )}
        </div>
        <DropdownMenuSeparator />
        {plan === PLANS.PRO && (
          <>
            <div className="flex flex-col gap-2 py-2">
              <Button variant="link" asChild className="justify-start text-sm">
                <Link href="/onboarding">Crea un nuovo Square</Link>
              </Button>
            </div>
            <DropdownMenuSeparator />
          </>
        )}
        <div className="flex flex-col gap-2 py-2">
          <Text>Piano: {plan?.toUpperCase()}</Text>
          <SignOut />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

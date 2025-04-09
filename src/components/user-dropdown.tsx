"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import type { Doc, Id } from "@/convex/_generated/dataModel";
import { ERRORS, PLANS } from "@/lib/config";
import { type Preloaded, useAction, usePreloadedQuery } from "convex/react";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { SignOut } from "./auth/sign-out";
import { Small } from "./typography";

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
  const createCustomerPortal = useAction(api.stripe.createCustomerPortal);

  async function handleCreateCustomerPortal() {
    try {
      const customerPortalUrl = await createCustomerPortal({
        userId: user?._id as Id<"users">,
      });
      if (!customerPortalUrl) {
        toast.error(ERRORS.SOMETHING_WENT_WRONG);
        return;
      }
      window.location.href = customerPortalUrl;
    } catch (_error) {
      toast.error(ERRORS.SOMETHING_WENT_WRONG);
    }
  }
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
          <Small className="mb-0">Piano: {plan?.toUpperCase()}</Small>
          <Button
            variant="link"
            className="justify-start text-sm"
            onClick={handleCreateCustomerPortal}
          >
            Gestione del piano
          </Button>
          <DropdownMenuSeparator />
        </div>
        <SignOut />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

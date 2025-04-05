"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useAuthActions } from "@convex-dev/auth/react";

export function SignOut() {
  const { signOut } = useAuthActions();

  return (
    <Button
      variant="link"
      onClick={signOut}
      className="gap-2 flex items-center justify-start text-foreground text-sm"
    >
      <Icons.SignOut className="size-4" />
      <span>Logout</span>
    </Button>
  );
}

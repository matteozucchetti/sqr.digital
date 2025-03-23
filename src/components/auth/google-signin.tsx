"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";

export function GoogleSignin() {
  const { signIn } = useAuthActions();

  return (
    <Button
      onClick={() => signIn("google", { redirectTo: "/admin" })}
      variant="outline"
    >
      Sign in with Google
    </Button>
  );
}

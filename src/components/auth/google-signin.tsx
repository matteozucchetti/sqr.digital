"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";

export function GoogleSignin() {
  const { signIn } = useAuthActions();

  return (
    <Button
      onClick={() =>
        signIn("google", { redirectTo: `${window.location.origin}/admin` })
      }
    >
      Sign in with Google
    </Button>
  );
}

"use client";

import { SignOut } from "@/components/auth/sign-out";
import { Authenticated, Unauthenticated } from "convex/react";
import Link from "next/link";

export function LandingNavigation() {
  return (
    <div>
      <Link href="/">Logo</Link>
      <Authenticated>
        <Link href="/admin">Vai alla dashboard</Link>
        <SignOut />
      </Authenticated>
      <Unauthenticated>
        <Link href="/login">Login</Link>
      </Unauthenticated>
    </div>
  );
}

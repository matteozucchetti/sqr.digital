import { AuthButtons } from "@/components/auth/auth-buttons";
import { Logo } from "@/components/brand/logo";
import type { api } from "@/convex/_generated/api";
import type { Preloaded } from "convex/react";
import Link from "next/link";

export function Navigation({
  preloadedUser,
  preloadedSquares,
  isAuthPage,
}: {
  preloadedUser: Preloaded<typeof api.users.getUser>;
  preloadedSquares: Preloaded<typeof api.squares.getSquares>;
  isAuthPage?: boolean;
}) {
  return (
    <div className="bg-[#1D1D1B] text-background flex items-center justify-between p-4 min-h-18">
      <Link href="/">
        <Logo className="w-[120px]" />
      </Link>
      <div className="flex items-center gap-2">
        {!isAuthPage && (
          <AuthButtons
            preloadedUser={preloadedUser}
            preloadedSquares={preloadedSquares}
          />
        )}
      </div>
    </div>
  );
}

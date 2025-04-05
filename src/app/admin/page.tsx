"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
  const router = useRouter();
  const square = useQuery(api.squares.getFirstSquare);

  useEffect(() => {
    if (square === undefined) return; // loading
    if (square === null) {
      router.replace("/onboarding");
      return;
    }
    router.replace(`/admin/${square._id}`);
  }, [square, router]);

  return null;
}

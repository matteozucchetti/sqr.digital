"use client";

import { Display1 } from "@/components/typography";
import { Separator } from "@/components/ui/separator";
import type { api } from "@/convex/_generated/api";
import { type Preloaded, usePreloadedQuery } from "convex/react";

export function Heading({
  preloadedSquare,
}: {
  preloadedSquare: Preloaded<typeof api.squares.getSquareById>;
}) {
  const square = usePreloadedQuery(preloadedSquare);

  return (
    <div className="bg-foreground px-8 py-12 rounded-b-xl">
      <Display1 as="h1" className="text-background">
        {square?.name}
      </Display1>

      <Separator className="bg-[#5A5A5A]" />
    </div>
  );
}

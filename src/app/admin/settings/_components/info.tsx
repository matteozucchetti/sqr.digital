"use client";

import { Display1, Text } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import type { api } from "@/convex/_generated/api";
import { type Preloaded, usePreloadedQuery } from "convex/react";
import Link from "next/link";

export function Info({
  preloadedSquare,
}: {
  preloadedSquare: Preloaded<typeof api.squares.getSquare>;
}) {
  const square = usePreloadedQuery(preloadedSquare);
  // TODO: Add form for info
  console.log(square);

  return (
    <Container className="pt-8">
      <Display1 as="h2">Profilo Struttura</Display1>

      <Text>
        Le informazioni inserite verranno utilizzate per aiutare gli ospiti a
        conoscere la tua struttura.
      </Text>

      <Separator />
      <Separator />
      <Separator />
      <Separator />

      <Button className="w-full" asChild>
        <Link href="/admin">Ritorna nell'area privata</Link>
      </Button>
    </Container>
  );
}

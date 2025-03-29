"use client";

import { Display1, Display3, Text } from "@/components/typography";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import type { api } from "@/convex/_generated/api";
import { type Preloaded, usePreloadedQuery } from "convex/react";

export function Info({
  preloadedSquare,
}: {
  preloadedSquare: Preloaded<typeof api.squares.getSquare>;
}) {
  const square = usePreloadedQuery(preloadedSquare);

  return (
    <Container className="py-12">
      <Display1 as="h2" className="mb-8">
        Impostazioni
      </Display1>

      <Display3 as="h3">Info del luogo</Display3>
      <Text>
        Inserisci più informazioni possibili per aiutare i tuoi clienti a
        conoscere il territorio.
      </Text>

      <Separator />
      <Separator />
      <Separator />
      <Separator />
    </Container>
  );
}

"use client";

import { Display1, Display3, Text } from "@/components/typography";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

export function Info() {
  return (
    <Container className="pt-8">
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

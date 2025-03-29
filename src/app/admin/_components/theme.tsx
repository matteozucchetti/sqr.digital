"use client";

import { Display3, Text } from "@/components/typography";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

export function Theme() {
  return (
    <Container>
      <Display3 as="h3">Colore tema</Display3>
      <Text>
        Personalizza l'interfaccia utente con colori che si addicono alla tua
        attività.
      </Text>

      <Separator />
      <Separator />
      <Separator />
      <Separator />
    </Container>
  );
}

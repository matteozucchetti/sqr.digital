"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Display2, Text } from "./typography";
import { Container } from "./ui/container";

export function Pricing() {
  const products = useQuery(api.polar.listAllProducts);

  if (!products) return null;

  return (
    <Container>
      {JSON.stringify(products, null, 2)}
      <div className="max-w-5xl mx-auto py-12 flex flex-col gap-8">
        <div className="text-center">
          <Display2 as="h2">Piani</Display2>
          <Text className="text-muted-foreground mt-2">
            Scegli il piano più adatto alle tue esigenze
          </Text>
        </div>
      </div>
    </Container>
  );
}

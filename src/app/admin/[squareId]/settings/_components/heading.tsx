"use client";

import { Display1, Text } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import type { api } from "@/convex/_generated/api";
import { type Preloaded, usePreloadedQuery } from "convex/react";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Heading({
  preloadedSquare,
}: {
  preloadedSquare: Preloaded<typeof api.squares.getSquareById>;
}) {
  const square = usePreloadedQuery(preloadedSquare);

  return (
    <div className="bg-foreground px-8 py-12 rounded-b-xl">
      <Button variant="link" asChild>
        <Link href={`/admin/${square?._id}`}>Torna indietro</Link>
      </Button>

      <Separator className="bg-[#5A5A5A]" />

      <Text className="text-background">Nome struttura:</Text>
      <Display1 as="h1" className="text-background">
        {square?.name}
      </Display1>

      <div className="grid grid-cols-2 gap-4 my-8">
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src={square?.image || "/placeholders/image-placeholder.svg"}
            alt={`Foto di ${square?.name}`}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <Text className="text-background">
            Inserisci una foto della tua struttura. Sarà visibile nella parte
            iniziale della pagina pubblica del tuo Square.
          </Text>
        </div>
      </div>

      <Text className="text-background">Logo:</Text>
      <Input type="text" icon={<Pencil className="size-4 text-accent" />} />
      <Separator className="bg-[#5A5A5A]" />
    </div>
  );
}

"use client";

import { Display1, Display2, Text } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { api } from "@/convex/_generated/api";
import type { Doc } from "@/convex/_generated/dataModel";
import { type Preloaded, usePreloadedQuery } from "convex/react";
import Image from "next/image";
import Link from "next/link";
import { QrCodeDialog } from "./qr-code-dialog";

export function Heading({
  preloadedSquare,
}: {
  preloadedSquare: Preloaded<typeof api.squares.getSquareById>;
}) {
  const square = usePreloadedQuery(preloadedSquare);

  return (
    <div className="bg-foreground px-8 py-12 rounded-b-xl">
      <Display1 as="h1" className="text-background">
        Benvenuto nella tua area privata
      </Display1>

      <Text className="text-background">
        Qui puoi gestire i tuoi dati e le tue impostazioni.
      </Text>

      <div className="flex items-center gap-4 mt-8">
        <div className="relative w-32">
          <Image
            src={square?.logo || "/placeholders/logo-placeholder.svg"}
            alt={`Logo di ${square?.name}`}
            width={128}
            height={128}
          />
        </div>
        <div>
          <Display2 className="text-white text-2xl font-heading mb-0">
            {square?.name}
          </Display2>
          <Link href={`/admin/${square?._id}/settings`}>
            <Button variant="link">Modifica profilo</Button>
          </Link>
        </div>
      </div>

      <Separator className="bg-[#5A5A5A]" />

      <div className="flex flex-col items-center gap-4">
        <QrCodeDialog square={square as Doc<"squares">} />

        <Button variant="link">
          <Link href={`/square/${square?._id}`}>Vai alla pagina pubblica</Link>
        </Button>
      </div>
    </div>
  );
}

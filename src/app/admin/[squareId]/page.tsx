import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { convexAuthNextjsToken } from "@convex-dev/auth/nextjs/server";
import { preloadQuery } from "convex/nextjs";
import { Heading } from "./_components/heading";
import { Info } from "./_components/info";
import { Theme } from "./_components/theme";

export default async function Admin({
  params,
}: {
  params: Promise<{ squareId: string }>;
}) {
  const { squareId } = await params;
  const preloadedSquare = await preloadQuery(
    api.squares.getSquareById,
    { id: squareId as Id<"squares"> },
    { token: await convexAuthNextjsToken() },
  );

  if (!preloadedSquare) {
    return <div>Square non trovato</div>;
  }

  return (
    <>
      <Heading preloadedSquare={preloadedSquare} />
      <Info />
      <Theme />
    </>
  );
}

import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { convexAuthNextjsToken } from "@convex-dev/auth/nextjs/server";
import { preloadQuery } from "convex/nextjs";
import { Heading } from "./_components/heading";
import { Info } from "./_components/info";
import { Theme } from "./_components/theme";

interface Props {
  params: {
    squareId: string;
  };
}

export default async function Admin({ params }: Props) {
  const preloadedSquare = await preloadQuery(
    api.squares.getSquareById,
    { id: params.squareId as Id<"squares"> },
    { token: await convexAuthNextjsToken() },
  );

  return (
    <>
      <Heading preloadedSquare={preloadedSquare} />
      <Info />
      <Theme />
    </>
  );
}

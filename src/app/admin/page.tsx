import { api } from "@/convex/_generated/api";
import { convexAuthNextjsToken } from "@convex-dev/auth/nextjs/server";
import { preloadQuery } from "convex/nextjs";
import { Heading } from "./_components/heading";
import { Info } from "./_components/info";
import { Theme } from "./_components/theme";

export default async function Admin() {
  const preloadedSquare = await preloadQuery(
    api.squares.getSquare,
    {},
    {
      token: await convexAuthNextjsToken(),
    },
  );

  return (
    <>
      <Heading preloadedSquare={preloadedSquare} />
      <Info preloadedSquare={preloadedSquare} />
      <Theme />
    </>
  );
}

import { AppFooter } from "@/components/app-footer";
import { ComingSoon } from "@/components/coming-soon";
import { Navigation } from "@/components/navigation";
import { Pricing } from "@/components/pricing";
import { api } from "@/convex/_generated/api";
import { convexAuthNextjsToken } from "@convex-dev/auth/nextjs/server";
import { preloadQuery } from "convex/nextjs";

export default async function Home() {
  const preloadedUser = await preloadQuery(
    api.users.getUser,
    {},
    { token: await convexAuthNextjsToken() },
  );
  const preloadedSquares = await preloadQuery(
    api.squares.getSquares,
    {},
    { token: await convexAuthNextjsToken() },
  );

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <header className="row-start-1">
        <Navigation
          preloadedUser={preloadedUser}
          preloadedSquares={preloadedSquares}
        />
      </header>
      <main className="row-start-2">
        <ComingSoon />
        <Pricing />
      </main>
      <footer className="row-start-3">
        <AppFooter />
      </footer>
    </div>
  );
}

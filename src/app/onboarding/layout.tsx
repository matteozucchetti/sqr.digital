import { AppNavigation } from "@/components/app-navigation";
import { api } from "@/convex/_generated/api";
import { convexAuthNextjsToken } from "@convex-dev/auth/nextjs/server";
import { preloadQuery } from "convex/nextjs";

export default async function Layout({
  children,
}: { children: React.ReactNode }) {
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
        <AppNavigation
          preloadedUser={preloadedUser}
          preloadedSquares={preloadedSquares}
        />
      </header>
      <main className="row-start-2">{children}</main>
      <footer className="row-start-3">footer</footer>
    </div>
  );
}

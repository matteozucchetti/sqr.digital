import { AppFooter } from "@/components/app-footer";
import { AppNavigation } from "@/components/app-navigation";
import { api } from "@/convex/_generated/api";
import { convexAuthNextjsToken } from "@convex-dev/auth/nextjs/server";
import { fetchQuery, preloadQuery } from "convex/nextjs";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: { children: React.ReactNode }) {
  const user = await fetchQuery(
    api.users.getUser,
    {},
    { token: await convexAuthNextjsToken() },
  );
  if (!user?.squareId) {
    return redirect("/onboarding");
  }

  const preloadedUser = await preloadQuery(
    api.users.getUser,
    {},
    { token: await convexAuthNextjsToken() },
  );

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <header className="row-start-1">
        <AppNavigation preloadedUser={preloadedUser} />
      </header>
      <main className="row-start-2">{children}</main>
      <footer className="row-start-3">
        <AppFooter />
      </footer>
    </div>
  );
}

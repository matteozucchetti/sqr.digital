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
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 flex flex-wrap items-center justify-center">
        <AppNavigation preloadedUser={preloadedUser} />
      </header>
      <main className="flex flex-col row-start-2 items-center sm:items-start">
        {children}
      </main>
      <footer className="row-start-3 flex-wrap items-center justify-center">
        footer
      </footer>
    </div>
  );
}

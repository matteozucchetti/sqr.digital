import { LandingNavigation } from "@/components/landing-navigation";
export default async function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <header className="row-start-1">
        <LandingNavigation />
      </header>
      <main className="row-start-2">homepage</main>
      <footer className="row-start-3">footer</footer>
    </div>
  );
}

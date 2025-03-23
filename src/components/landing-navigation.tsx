import Link from "next/link";

export function LandingNavigation() {
  return (
    <div>
      <Link href="/">Logo</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/settings">Settings</Link>
    </div>
  );
}

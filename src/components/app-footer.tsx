import { Small } from "@/components/typography";
import Link from "next/link";

export function AppFooter() {
  return (
    <div className="bg-[#1D1D1B] text-background flex items-center justify-center py-4 gap-2">
      <Small className="mb-0">Powered by</Small>
      <Link href="/">
        <img src="https://placehold.co/100x20" alt="Square" />
      </Link>
    </div>
  );
}

import { Small } from "@/components/typography";
import Link from "next/link";
import { Logo } from "./brand/logo";

export function AppFooter() {
  return (
    <div className="bg-[#1D1D1B] text-background flex items-center justify-center py-4 gap-2">
      <Small className="mb-0">Powered by</Small>
      <Link href="/">
        <Logo className="w-[100px]" />
      </Link>
    </div>
  );
}

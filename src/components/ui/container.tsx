import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  variant?: "padded" | "full";
  className?: string;
}

export function Container({
  children,
  variant = "padded",
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto",
        variant === "padded" && "container px-4 md:px-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

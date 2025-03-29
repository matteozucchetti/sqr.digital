import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export const Display1 = ({
  children,
  as: Component = "div",
  className,
}: TypographyProps) => {
  return (
    <Component className={cn("text-4xl font-heading", className)}>
      {children}
    </Component>
  );
};

export const Display2 = ({
  children,
  as: Component = "div",
  className,
}: TypographyProps) => {
  return (
    <Component className={cn("text-3xl font-heading", className)}>
      {children}
    </Component>
  );
};

export const Display3 = ({
  children,
  as: Component = "div",
  className,
}: TypographyProps) => {
  return (
    <Component className={cn("text-2xl font-heading", className)}>
      {children}
    </Component>
  );
};

export const Display4 = ({
  children,
  as: Component = "div",
  className,
}: TypographyProps) => {
  return (
    <Component className={cn("text-xl font-heading", className)}>
      {children}
    </Component>
  );
};

export const Display5 = ({
  children,
  as: Component = "div",
  className,
}: TypographyProps) => {
  return (
    <Component className={cn("text-lg font-heading", className)}>
      {children}
    </Component>
  );
};

export const Display6 = ({
  children,
  as: Component = "div",
  className,
}: TypographyProps) => {
  return (
    <Component className={cn("text-base font-heading", className)}>
      {children}
    </Component>
  );
};

export const Text = ({
  children,
  as: Component = "div",
  className,
}: TypographyProps) => {
  return (
    <Component className={cn("text-base font-body", className)}>
      {children}
    </Component>
  );
};

export const Small = ({
  children,
  as: Component = "div",
  className,
}: TypographyProps) => {
  return (
    <Component className={cn("text-sm font-body", className)}>
      {children}
    </Component>
  );
};

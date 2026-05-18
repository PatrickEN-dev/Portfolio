import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "accent";

type Props = Omit<ComponentPropsWithoutRef<"a">, "children"> & {
  href: string;
  variant?: Variant;
  external?: boolean;
  children: ReactNode;
  trailing?: ReactNode;
  className?: string;
};

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-espresso text-linen hover:-translate-y-0.5",
  outline:
    "border border-espresso/20 text-ink hover:-translate-y-0.5 hover:border-caramel hover:text-caramel",
  accent: "bg-caramel text-linen hover:-translate-y-0.5",
};

export default function CTAButton({
  href,
  variant = "primary",
  external,
  children,
  trailing,
  className,
  ...rest
}: Props) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium transition-[transform,color,border-color,background-color] duration-300 ease-apple",
        VARIANT_CLASSES[variant],
        className,
      )}
      {...rest}
    >
      {children}
      {trailing}
    </a>
  );
}

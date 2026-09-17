import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
  children: ReactNode;
  external?: boolean;
  variant?: "default" | "inverted";
  className?: string;
};

const VARIANT_CLASSES = {
  default:
    "border-espresso/15 bg-espresso/[0.04] text-ink hover:border-caramel hover:bg-caramel/10 hover:text-caramel",
  inverted:
    "border-linen/25 bg-linen/[0.06] text-linen hover:border-caramel hover:bg-caramel/15 hover:text-caramel",
} as const;

export default function IconCircleButton({
  href,
  label,
  children,
  external,
  variant = "default",
  className,
}: Props) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className={cn(
        "group flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-[transform,color,border-color,background-color] duration-300 ease-apple hover:-translate-y-0.5",
        VARIANT_CLASSES[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}

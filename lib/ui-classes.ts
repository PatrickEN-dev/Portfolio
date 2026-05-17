import { cn } from "@/lib/utils";

type CardOptions = {
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
  className?: string;
};

const PADDING_MAP = {
  sm: "p-5 md:p-6",
  md: "p-6 md:p-7",
  lg: "p-7 md:p-8",
} as const;

/**
 * Unified card surface used across About (ficha técnica + stats),
 * Skills (category card) and Differentials cards.
 */
export function cardClasses({ padding = "md", hover = true, className }: CardOptions = {}): string {
  return cn(
    "rounded-2xl border border-espresso/10 bg-linen",
    PADDING_MAP[padding],
    hover && "transition-colors duration-300 ease-apple hover:border-caramel/30",
    className,
  );
}

/**
 * Standard mono uppercase label classes (eyebrows, tags, captions).
 * Variant `size`: xs ≈ 10px, sm ≈ 12px. Color uses semantic ink tokens.
 */
type MonoLabelOptions = {
  size?: "xs" | "sm";
  color?: "soft" | "muted" | "caramel" | "ink";
  className?: string;
};

const MONO_SIZE = {
  xs: "text-[0.65rem]",
  sm: "text-xs",
} as const;

const MONO_COLOR = {
  soft: "text-ink-soft",
  muted: "text-ink-muted",
  caramel: "text-caramel",
  ink: "text-ink",
} as const;

export function monoLabelClasses({ size = "xs", color = "soft", className }: MonoLabelOptions = {}): string {
  return cn(
    "font-mono uppercase tracking-widest",
    MONO_SIZE[size],
    MONO_COLOR[color],
    className,
  );
}

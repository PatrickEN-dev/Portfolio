import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  byWord?: boolean;
};

export default function RevealText({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  byWord = false,
}: Props) {
  const tokens = byWord ? text.split(" ") : text.split("");

  return (
    <Tag className={cn("inline-block", className)} aria-label={text}>
      {tokens.map((token, i) => (
        <span
          key={`${token}-${i}`}
          className="reveal-word"
          style={{ "--reveal-delay": `${(delay + i * 0.025).toFixed(3)}s` } as CSSProperties}
          aria-hidden
        >
          {byWord ? token + (i < tokens.length - 1 ? " " : "") : token}
        </span>
      ))}
    </Tag>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  byWord?: boolean;
};

export default function RevealText({ text, className, as = "span", delay = 0, byWord = false }: Props) {
  const tokens = byWord ? text.split(" ") : text.split("");
  const Tag = motion[as];

  return (
    <Tag
      className={cn("inline-block", className)}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.025, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {tokens.map((token, i) => (
        <motion.span
          key={`${token}-${i}`}
          className="inline-block whitespace-pre"
          variants={{
            hidden: { y: "100%", opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
          }}
          aria-hidden
        >
          {byWord ? token + (i < tokens.length - 1 ? " " : "") : token === " " ? " " : token}
        </motion.span>
      ))}
    </Tag>
  );
}

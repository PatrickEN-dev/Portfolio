"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cardClasses } from "@/lib/ui-classes";
import { cn } from "@/lib/utils";

type Props = {
  index: number;
  title: string;
  summary: string;
  body: string;
  icon: ReactNode;
};

export default function DifferentialCard({ index, title, summary, body, icon }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
      className={cn(
        cardClasses({ padding: "lg" }),
        "group relative flex flex-col min-h-[260px] md:min-h-[320px]",
      )}
    >
      <div className="flex items-center justify-between">
        {icon}
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-soft">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-auto pt-8">
        <h3 className="font-display text-display-sm tracking-tighter2 text-ink leading-tight">
          {title}
        </h3>
        <p className="mt-3 text-[1rem] md:text-[1.05rem] font-medium text-ink leading-snug">
          {summary}
        </p>
        <div className="mt-4 pt-4 border-t border-espresso/10">
          <p className="text-[0.8rem] leading-relaxed text-ink-muted">{body}</p>
        </div>
      </div>
    </motion.article>
  );
}

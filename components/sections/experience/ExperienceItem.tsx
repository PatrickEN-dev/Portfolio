"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getTechIcon } from "@/lib/tech-icons";
import type { ExperienceMeta } from "@/lib/types";

type Props = {
  entry: ExperienceMeta;
  index: number;
  company: string;
  role: string;
  period: string;
  bullets: string[];
  currentBadge: string;
};

export default function ExperienceItem({
  entry,
  index,
  company,
  role,
  period,
  bullets,
  currentBadge,
}: Props) {
  const reversed = index % 2 === 1;

  return (
    <motion.li
      initial={{ opacity: 0, x: reversed ? 60 : -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative mb-12 md:mb-24"
    >
      <div className="absolute z-10 left-4 md:left-1/2 top-0 -translate-x-1/2">
        <motion.span
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-widest whitespace-nowrap shadow-sm",
            entry.current
              ? "bg-caramel text-linen"
              : "bg-linen border border-espresso/25 text-espresso"
          )}
        >
          {entry.year}
          {entry.current && <span aria-hidden>→</span>}
        </motion.span>
      </div>

      <div
        className={cn(
          "pl-10 sm:pl-12 pt-12 sm:pt-14 md:pl-0 md:pt-0",
          !reversed && "md:mr-[50%] md:pr-10 md:pt-10 md:text-right",
          reversed && "md:ml-[50%] md:pl-10 md:pt-10 md:text-left"
        )}
      >
        <h3 className="font-display text-display-sm tracking-tighter2 leading-tight">
          {company}
        </h3>
        <div className="mt-2 flex flex-wrap items-center gap-2 md:gap-2.5">
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-caramel">
            {role}
          </span>
          {entry.current && (
            <span className="inline-flex items-center gap-1 font-mono text-[0.6rem] uppercase tracking-widest text-emerald-700 dark:text-emerald-400 bg-emerald-700/10 border border-emerald-700/20 rounded-full px-2 py-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              {currentBadge}
            </span>
          )}
        </div>
        <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-widest text-ink-soft">
          {period}
        </div>

        <ul className="mt-5 space-y-1.5 text-sm md:text-[0.95rem] text-ink-muted leading-relaxed">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div
          className={cn(
            "mt-5 flex flex-wrap gap-1.5",
            !reversed && "md:justify-end"
          )}
        >
          {entry.stack.map((s) => {
            const Icon = getTechIcon(s);
            return (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-ink-muted border border-espresso/15 rounded-full px-2.5 py-0.5"
              >
                <Icon className="h-3 w-3 text-caramel" strokeWidth={1.7} />
                {s}
              </span>
            );
          })}
        </div>
      </div>
    </motion.li>
  );
}

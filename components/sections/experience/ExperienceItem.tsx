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

const EASE = [0.22, 1, 0.36, 1] as const;

function UsFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 19 13" className={className} aria-hidden>
      <rect width="19" height="13" fill="#F5F0E8" />
      {[1, 3, 5, 7, 9, 11].map((y) => (
        <rect key={y} y={y} width="19" height="1" fill="#B22234" />
      ))}
      <rect width="8" height="7" fill="#1E3A8A" />
      {[1.5, 3.5, 5.5].map((cy) =>
        [1.5, 4, 6.5].map((cx) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.55" fill="#F5F0E8" />
        )),
      )}
    </svg>
  );
}

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

  const container = {
    hidden: { opacity: 0, x: reversed ? 60 : -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: EASE,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const badge = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.45, ease: EASE } },
  };

  return (
    <motion.li
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={container}
      className="relative mb-12 md:mb-24"
    >
      <div className="absolute z-10 left-4 md:left-1/2 top-0 -translate-x-1/2">
        <motion.span
          variants={badge}
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
          {entry.location === "usa" && (
            <span className="ml-3 inline-flex items-center gap-1.5 align-middle whitespace-nowrap">
              <UsFlag className="h-3.5 w-[1.25rem] rounded-[2px] shadow-sm" />
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-blue-900 dark:text-blue-400">
                USA
              </span>
            </span>
          )}
        </h3>
        <div className="mt-2 flex flex-wrap items-center gap-2 md:gap-2.5">
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-caramel">
            {role}
          </span>
          {entry.current && (
            <span className="font-mono text-[0.6rem] uppercase tracking-widest text-linen bg-caramel rounded-full px-2 py-0.5">
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

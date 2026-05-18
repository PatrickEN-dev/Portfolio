"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  number: string;
  scenario: string;
  quote: string;
  evidence: string;
  icon: ReactNode;
  isLast?: boolean;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ScenarioPanel({
  number,
  scenario,
  quote,
  evidence,
  icon,
  isLast = false,
}: Props) {
  const reduced = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: reduced ? 0 : 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
  };

  const slideX = {
    hidden: { opacity: 0, x: reduced ? 0 : 18 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } },
  };

  const grow = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.85, ease: EASE } },
  };

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={container}
      className={`grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-7 md:gap-14 py-12 md:py-16 ${
        isLast ? "" : "border-b border-espresso/10"
      }`}
    >
      <div className="relative">
        <motion.div
          aria-hidden
          variants={fadeIn}
          className="font-mono italic text-[clamp(4rem,7vw,5.5rem)] leading-none tracking-tighter2 text-caramel/25 select-none mb-3 md:mb-5"
        >
          {number}
        </motion.div>
        <h3 className="font-display italic text-display-sm md:text-display-md leading-[1.05] tracking-tighter2 text-ink max-w-md">
          {scenario}
        </h3>
      </div>

      <div className="flex flex-col gap-6 md:gap-8 md:pt-[clamp(1rem,2vw,3rem)]">
        <motion.p
          variants={fadeUp}
          className="text-[1.05rem] md:text-body-lg leading-relaxed text-ink-muted"
        >
          <span aria-hidden className="font-display text-2xl md:text-3xl leading-none text-caramel mr-1 align-[-0.15em]">
            “
          </span>
          {quote}
          <span aria-hidden className="font-display text-2xl md:text-3xl leading-none text-caramel ml-1 align-[-0.15em]">
            ”
          </span>
        </motion.p>

        <motion.div
          aria-hidden
          variants={grow}
          style={{ transformOrigin: "left center", willChange: "transform" }}
          className="h-px bg-gradient-to-r from-caramel via-caramel/35 to-transparent"
        />

        <motion.div
          variants={slideX}
          className="flex items-start gap-4"
        >
          <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-caramel/12 text-caramel ring-1 ring-inset ring-caramel/20">
            {icon}
          </span>
          <p className="text-[0.95rem] md:text-[1rem] leading-relaxed text-ink font-medium pt-1.5">
            {evidence}
          </p>
        </motion.div>
      </div>
    </motion.article>
  );
}

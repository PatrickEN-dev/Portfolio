"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  from?: "left" | "right";
  distance?: number;
  delay?: number;
  duration?: number;
  className?: string;
};

export default function SlideIn({
  children,
  from = "left",
  distance = 48,
  delay = 0,
  duration = 0.7,
  className,
}: Props) {
  const reduced = useReducedMotion();
  const offsetX = reduced ? 0 : from === "left" ? -distance : distance;

  return (
    <motion.div
      initial={{ opacity: 0, x: offsetX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

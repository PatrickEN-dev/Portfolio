"use client";

import { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type Props = {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export default function CountUp({ value, suffix = "", duration = 1.6, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const prefersReduced = useReducedMotion();
  const animatedRef = useRef(false);

  useEffect(() => {
    if (!inView || animatedRef.current) return;
    animatedRef.current = true;

    const node = numberRef.current;
    if (!node) return;

    if (prefersReduced) {
      node.textContent = String(value);
      return;
    }

    let raf = 0;
    const startTime = performance.now();
    const ms = duration * 1000;
    node.textContent = "0";

    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / ms);
      const eased = 1 - Math.pow(1 - t, 3);
      node.textContent = String(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [inView, prefersReduced, value, duration]);

  return (
    <span ref={ref} className={className}>
      <span ref={numberRef}>{value}</span>
      {suffix}
    </span>
  );
}

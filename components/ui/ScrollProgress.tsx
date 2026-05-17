"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleY, transformOrigin: "top" }}
      className="fixed right-4 top-0 z-50 h-screen w-px bg-caramel/60"
    />
  );
}

"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX: progress, transformOrigin: "left" }}
        className="fixed inset-x-0 top-0 z-50 h-[3px] bg-caramel md:hidden"
      />
      <motion.div
        aria-hidden
        style={{ scaleY: progress, transformOrigin: "top" }}
        className="hidden md:block fixed right-4 top-0 z-50 h-screen w-px bg-caramel/60"
      />
    </>
  );
}

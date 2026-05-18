"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX: scrollYProgress, transformOrigin: "left", willChange: "transform" }}
        className="fixed inset-x-0 top-0 z-50 h-[3px] bg-caramel md:hidden"
      />
      <motion.div
        aria-hidden
        style={{ scaleY: scrollYProgress, transformOrigin: "top", willChange: "transform" }}
        className="hidden md:block fixed right-4 top-0 z-50 h-screen w-px bg-caramel/60"
      />
    </>
  );
}

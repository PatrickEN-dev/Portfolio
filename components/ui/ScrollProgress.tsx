"use client";

import { useEffect, useState } from "react";
import { m, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <>
      {isDesktop !== true && (
        <m.div
          aria-hidden
          style={{ scaleX: scrollYProgress, transformOrigin: "left", willChange: "transform" }}
          className="fixed inset-x-0 top-0 z-50 h-[3px] bg-caramel md:hidden"
        />
      )}
      {isDesktop !== false && (
        <m.div
          aria-hidden
          style={{ scaleY: scrollYProgress, transformOrigin: "top", willChange: "transform" }}
          className="hidden md:block fixed right-4 top-0 z-50 h-screen w-px bg-caramel/60"
        />
      )}
    </>
  );
}

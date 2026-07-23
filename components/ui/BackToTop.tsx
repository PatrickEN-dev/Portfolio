"use client";

import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();
  const t = useTranslations("ui");

  useEffect(() => {
    const sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText =
      "position:absolute;top:90vh;left:0;width:1px;height:1px;pointer-events:none;";
    document.body.appendChild(sentinel);

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry) setVisible(!entry.isIntersecting);
      },
      { threshold: 0 },
    );
    obs.observe(sentinel);

    return () => {
      obs.disconnect();
      sentinel.remove();
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          type="button"
          onClick={handleClick}
          aria-label={t("backToTop")}
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden fixed z-40 bottom-[max(1.25rem,calc(env(safe-area-inset-bottom)+0.75rem))] right-[max(1.25rem,env(safe-area-inset-right))] touch-target flex h-12 w-12 items-center justify-center rounded-full bg-caramel text-linen shadow-lg shadow-espresso/15 active:scale-95 transition-transform"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={2} />
        </m.button>
      )}
    </AnimatePresence>
  );
}

"use client";

import { motion } from "framer-motion";
import { getTechSpec } from "@/lib/tech-icons";
import { cardClasses } from "@/lib/ui-classes";

type Item = {
  raw: string;
  display: string;
};

type Props = {
  label: string;
  index: number;
  items: Item[];
};

export default function SkillCategoryCard({ label, index, items }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
      className={cardClasses({ padding: "lg" })}
    >
      <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-espresso/10">
        <h3 className="font-mono text-sm uppercase tracking-widest text-caramel">{label}</h3>
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-soft tabular-nums">
          {String(items.length).padStart(2, "0")}
        </span>
      </div>

      <ul className="grid grid-cols-2 gap-2">
        {items.map(({ raw, display }) => {
          const { icon: Icon, color } = getTechSpec(raw);
          return (
            <motion.li
              key={raw}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group flex items-center gap-3 rounded-lg px-2 py-2 cursor-default"
            >
              <motion.span
                variants={{
                  rest: { scale: 1, color: "rgb(var(--c-espresso) / 0.78)" },
                  hover: { scale: 1.12, color },
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex h-8 w-8 items-center justify-center shrink-0"
              >
                <Icon className="h-7 w-7" />
              </motion.span>
              <motion.span
                variants={{
                  rest: { x: 0, fontWeight: 500 },
                  hover: { x: 2, fontWeight: 600 },
                }}
                transition={{ duration: 0.25 }}
                className="text-[0.95rem] text-ink leading-tight"
              >
                {display}
              </motion.span>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}

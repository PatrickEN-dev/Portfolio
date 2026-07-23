"use client";

import { motion } from "framer-motion";
import { Briefcase, Layers, Clock, MapPin, Languages, GraduationCap } from "lucide-react";
import { cardClasses } from "@/lib/ui-classes";
import { profile } from "@/lib/data";

type FichaItem = {
  label: string;
  icon: typeof Briefcase;
  body: React.ReactNode;
};

type Translations = {
  cargo: string;
  dominios: string;
  modelo: string;
  localizacao: string;
  idiomas: string;
  formacao: string;
  valueCargo: string;
  specialty1: string;
  specialty2: string;
  specialty3: string;
  valueDominios: string;
  valueModelo: string;
  valueLocalizacao: string;
  valueIdiomas: string;
  valueIdiomasCert: string;
  valueFormacao: string;
  valueFormacaoInst: string;
  valueFormacao2: string;
  valueFormacao2Inst: string;
  valueFormacao2Detail: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function AboutFichaTecnica({ t }: { t: Translations }) {
  const items: FichaItem[] = [
    {
      label: t.cargo,
      icon: Briefcase,
      body: (
        <div>
          <div className="text-lg md:text-xl font-semibold tracking-tight leading-snug">
            {t.valueCargo}
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {[t.specialty1, t.specialty2, t.specialty3].map((s) => (
              <span
                key={s}
                className="font-mono text-[0.7rem] uppercase tracking-widest text-caramel border border-caramel/30 rounded-full px-2.5 py-0.5"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      label: t.dominios,
      icon: Layers,
      body: <div className="text-lg md:text-xl font-semibold tracking-tight">{t.valueDominios}</div>,
    },
    {
      label: t.modelo,
      icon: Clock,
      body: <div className="text-lg md:text-xl font-semibold tracking-tight">{t.valueModelo}</div>,
    },
    {
      label: t.localizacao,
      icon: MapPin,
      body: <div className="text-lg md:text-xl font-semibold tracking-tight">{t.valueLocalizacao}</div>,
    },
    {
      label: t.idiomas,
      icon: Languages,
      body: (
        <div className="leading-snug">
          <div className="text-lg md:text-xl font-semibold tracking-tight">{t.valueIdiomas}</div>
          <a
            href={profile.englishCertHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1.5 inline-block text-xs text-caramel underline underline-offset-4 decoration-caramel/40 transition-[color,text-decoration-color] duration-300 ease-apple hover:decoration-caramel"
          >
            {t.valueIdiomasCert}
          </a>
        </div>
      ),
    },
    {
      label: t.formacao,
      icon: GraduationCap,
      body: (
        <div className="leading-snug">
          <div className="text-base md:text-lg font-semibold tracking-tight">{t.valueFormacao}</div>
          <div className="text-xs text-ink-muted mt-0.5">{t.valueFormacaoInst}</div>

          <div className="mt-3 pt-3 border-t border-espresso/10">
            <div className="text-base md:text-lg font-semibold tracking-tight">
              {t.valueFormacao2}
            </div>
            <div className="text-xs text-ink-muted mt-0.5">{t.valueFormacao2Inst}</div>
            <div className="text-xs text-ink-muted/85 mt-1 leading-snug">
              {t.valueFormacao2Detail}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={container}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
    >
      {items.map(({ label, icon: Icon, body }) => (
        <motion.li
          key={label}
          variants={item}
          className={cardClasses({ padding: "sm" })}
        >
          <div className="flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest text-ink-soft">
            <Icon className="h-3.5 w-3.5 text-caramel" strokeWidth={1.8} />
            {label}
          </div>
          {body}
        </motion.li>
      ))}
    </motion.ul>
  );
}

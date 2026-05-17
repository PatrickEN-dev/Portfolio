import { getTranslations } from "next-intl/server";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ExperienceItem from "@/components/sections/experience/ExperienceItem";
import { experience } from "@/lib/data";

export default async function Experience() {
  const t = await getTranslations("experience");

  return (
    <section className="relative px-6 md:px-12 py-20 md:py-40 overflow-hidden">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-12 md:mb-24 max-w-3xl mx-auto text-left md:text-center">
          <SectionEyebrow className="mb-4 md:justify-center">{t("eyebrow")}</SectionEyebrow>
          <h2 className="font-display text-display-lg tracking-tightest">{t("title")}</h2>
          <p className="mt-4 md:mt-5 text-[0.95rem] sm:text-body-lg text-ink-muted">{t("subtitle")}</p>
        </div>

        <ol className="relative">
          <div className="absolute left-4 md:left-1/2 top-3 bottom-3 w-px bg-espresso/15 md:-translate-x-1/2" />

          {experience.map((e, i) => (
            <ExperienceItem
              key={e.key}
              entry={e}
              index={i}
              company={t(`items.${e.key}.company`)}
              role={t(`items.${e.key}.role`)}
              period={t(`items.${e.key}.period`)}
              bullets={t.raw(`items.${e.key}.bullets`) as string[]}
              currentBadge={t("currentBadge")}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

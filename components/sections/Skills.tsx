import { getTranslations } from "next-intl/server";
import { skillsCategories } from "@/lib/data";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SkillCategoryCard from "@/components/sections/skills/SkillCategoryCard";

export default async function Skills() {
  const t = await getTranslations("skills");

  const categories = skillsCategories.map((cat) => ({
    key: cat.key,
    label: t(`categories.${cat.key}`),
    items: cat.items.map((raw) => ({
      raw,
      display: t.has(`items.${raw}`) ? t(`items.${raw}`) : raw,
    })),
  }));

  return (
    <section className="cv-auto relative px-6 md:px-12 py-20 md:py-40">
      <div className="mx-auto w-full max-w-7xl">
        <SectionEyebrow className="mb-4">{t("eyebrow")}</SectionEyebrow>

        <h2 className="font-display text-display-lg tracking-tightest max-w-3xl mb-12 md:mb-16">
          {t("title")}
        </h2>

        <div className="grid gap-5 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <SkillCategoryCard
              key={cat.key}
              label={cat.label}
              items={cat.items}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

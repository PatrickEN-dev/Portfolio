import { getTranslations } from "next-intl/server";
import {
  TbHierarchy3,
  TbBulb,
  TbShieldCheck,
  TbUsersGroup,
  TbBrain,
} from "react-icons/tb";
import type { ComponentType, SVGProps } from "react";
import { differentialKeys } from "@/lib/data";
import type { DifferentialKey } from "@/lib/types";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import DifferentialCard from "@/components/sections/differentials/DifferentialCard";
import DifferentialPhotoCard from "@/components/sections/differentials/DifferentialPhotoCard";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const ICONS: Record<DifferentialKey, IconComponent> = {
  architecture: TbHierarchy3,
  product: TbBulb,
  production: TbShieldCheck,
  leadership: TbUsersGroup,
  ai: TbBrain,
};

const ICON_CLASS =
  "h-9 w-9 text-caramel transition-transform duration-500 ease-apple group-hover:-translate-y-0.5 group-hover:scale-105";

export default async function Differentials() {
  const t = await getTranslations("differentials");

  return (
    <section className="relative px-6 md:px-12 py-20 md:py-32 bg-linen">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 md:mb-16">
          <SectionEyebrow className="mb-4">{t("eyebrow")}</SectionEyebrow>
          <h2 className="font-display text-display-lg tracking-tightest max-w-3xl">
            {t("title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-fr">
          <DifferentialPhotoCard />
          {differentialKeys.map((key, i) => {
            const Icon = ICONS[key];
            return (
              <DifferentialCard
                key={key}
                index={i}
                title={t(`items.${key}.title`)}
                summary={t(`items.${key}.summary`)}
                body={t(`items.${key}.body`)}
                icon={<Icon className={ICON_CLASS} strokeWidth={1.4} aria-hidden />}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

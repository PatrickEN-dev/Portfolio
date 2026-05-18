import type { ComponentType, SVGProps } from "react";
import { getTranslations } from "next-intl/server";
import { Zap, ShieldCheck, Scale, Compass } from "lucide-react";
import { forYouKeys } from "@/lib/data";
import type { ForYouKey } from "@/lib/types";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ScenarioPanel from "@/components/sections/for-you/ScenarioPanel";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const ICONS: Record<ForYouKey, IconComponent> = {
  onboarding: Zap,
  runtime: ShieldCheck,
  business: Scale,
  ownership: Compass,
};

export default async function ForYou() {
  const t = await getTranslations("forYou");

  return (
    <section className="cv-auto relative px-6 md:px-12 py-20 md:py-32 bg-sand overflow-hidden">
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="relative mx-auto w-full max-w-5xl">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <SectionEyebrow className="mb-4">{t("eyebrow")}</SectionEyebrow>
          <h2 className="font-display text-display-lg tracking-tightest text-ink">
            {t("title")}
          </h2>
          <p className="mt-4 md:mt-5 text-[0.95rem] sm:text-body-lg text-ink-muted">
            {t("subtitle")}
          </p>
        </div>

        <div className="border-t border-espresso/10">
          {forYouKeys.map((key, i) => {
            const Icon = ICONS[key];
            return (
              <ScenarioPanel
                key={key}
                number={String(i + 1).padStart(2, "0")}
                scenario={t(`items.${key}.scenario`)}
                quote={t(`items.${key}.quote`)}
                evidence={t(`items.${key}.evidence`)}
                icon={
                  <Icon
                    className="h-[1.15rem] w-[1.15rem]"
                    strokeWidth={1.6}
                    aria-hidden
                  />
                }
                isLast={i === forYouKeys.length - 1}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

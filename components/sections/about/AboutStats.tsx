import { getTranslations } from "next-intl/server";
import CountUp from "@/components/ui/CountUp";
import { stats } from "@/lib/data";
import { cardClasses } from "@/lib/ui-classes";

export default async function AboutStats() {
  const t = await getTranslations("about");

  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-8">
        {t("statsTitle")}
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
        {stats.map((s) => (
          <div key={s.key} className={cardClasses({ padding: "sm", hover: false })}>
            <div className="font-display text-display-md text-caramel tabular-nums leading-none">
              <CountUp value={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-sm font-medium text-ink leading-snug">
              {t(`stat${s.key}`)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

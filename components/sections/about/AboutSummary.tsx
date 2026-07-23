import { getTechSpec } from "@/lib/tech-icons";
import { monoLabelClasses } from "@/lib/ui-classes";

type Translations = {
  label: string;
  focus: string;
  domain1: string;
  domain2: string;
  domain3: string;
  stackLabel: string;
  workModel: string;
};

const CORE_STACK = ["TypeScript", "Node.js", "NestJS", "React", "Next.js", "Prisma", "TypeORM"];

export default function AboutSummary({ t }: { t: Translations }) {
  return (
    <aside className="relative overflow-hidden rounded-2xl bg-sand/60 p-7 md:p-9">
      <div className={monoLabelClasses({ color: "caramel" })}>{t.label}</div>

      <p className="mt-4 font-display text-display-sm tracking-tighter2 text-ink leading-tight">
        {t.focus}
      </p>

      <p className={monoLabelClasses({ color: "muted", className: "mt-4" })}>
        {t.domain1} · {t.domain2} · {t.domain3}
      </p>

      <div className="mt-7 pt-6 border-t border-espresso/10">
        <div className={monoLabelClasses({ className: "mb-3 text-[0.6rem]" })}>
          {t.stackLabel}
        </div>
        <div className="flex flex-wrap items-center gap-3 text-caramel">
          {CORE_STACK.map((name) => {
            const { icon: Icon } = getTechSpec(name);
            return <Icon key={name} className="h-6 w-6" aria-label={name} />;
          })}
        </div>
        <div className={monoLabelClasses({ className: "mt-4 text-[0.6rem]" })}>
          {t.workModel}
        </div>
      </div>
    </aside>
  );
}

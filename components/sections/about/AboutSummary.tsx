import { getTechSpec } from "@/lib/tech-icons";
import { cardClasses } from "@/lib/ui-classes";
import { cn } from "@/lib/utils";

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
    <aside
      className={cn(
        cardClasses({ padding: "lg", hover: false }),
        "border-caramel/30 bg-caramel/[0.04] relative overflow-hidden",
      )}
    >
      <div className="font-mono text-[0.65rem] uppercase tracking-widest text-caramel mb-5 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 motion-safe:animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
        </span>
        {t.label}
      </div>

      <p className="font-display text-display-sm tracking-tighter2 text-ink leading-tight">
        {t.focus}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {[t.domain1, t.domain2, t.domain3].map((d) => (
          <span
            key={d}
            className="font-mono text-[0.65rem] uppercase tracking-widest text-caramel border border-caramel/30 rounded-full px-2.5 py-0.5"
          >
            {d}
          </span>
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-caramel/20">
        <div className="font-mono text-[0.6rem] uppercase tracking-widest text-ink-soft mb-3">
          {t.stackLabel}
        </div>
        <div className="flex flex-wrap items-center gap-3 text-caramel">
          {CORE_STACK.map((name) => {
            const { icon: Icon } = getTechSpec(name);
            return <Icon key={name} className="h-6 w-6" aria-label={name} />;
          })}
        </div>
        <div className="mt-4 font-mono text-[0.6rem] uppercase tracking-widest text-ink-soft">
          {t.workModel}
        </div>
      </div>
    </aside>
  );
}

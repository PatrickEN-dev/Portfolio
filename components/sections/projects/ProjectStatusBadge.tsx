import type { ProjectStatusKey } from "@/lib/types";
import { cn } from "@/lib/utils";

const DOT_CLASS: Record<ProjectStatusKey, string> = {
  production: "bg-emerald-600",
  testing: "bg-caramel",
  showcase: "bg-warmgray",
};

type Props = {
  statusKey: ProjectStatusKey;
  label: string;
  className?: string;
};

export default function ProjectStatusBadge({ statusKey, label, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-linen/95 backdrop-blur px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-espresso shadow-sm",
        className
      )}
    >
      <span className={cn("inline-block h-1.5 w-1.5 rounded-full", DOT_CLASS[statusKey])} />
      {label}
    </span>
  );
}

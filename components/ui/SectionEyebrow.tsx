import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionEyebrow({ children, className }: Props) {
  return (
    <div
      className={cn(
        "font-mono text-label-xs uppercase tracking-widest text-caramel flex items-center gap-2",
        className
      )}
    >
      <span className="text-caramel/80">{"</>"}</span>
      {children}
    </div>
  );
}

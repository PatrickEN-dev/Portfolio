"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LABELS: Record<string, string> = {
  pt: "PT",
  en: "EN",
  es: "ES",
};

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  const change = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale as (typeof routing.locales)[number] });
    });
  };

  return (
    <div
      className={cn(
        "fixed top-5 right-20 z-50 flex items-center gap-0.5 rounded-full border border-espresso/10 dark:border-linen/15 bg-linen/80 dark:bg-espresso/30 backdrop-blur-md px-1 py-1",
        pending && "opacity-70"
      )}
      aria-label="Language switcher"
    >
      {routing.locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => change(l)}
            disabled={pending || active}
            className={cn(
              "h-7 px-2.5 rounded-full font-mono text-[0.7rem] uppercase tracking-widest transition-colors",
              active
                ? "bg-espresso text-linen dark:bg-linen dark:text-espresso"
                : "text-espresso/60 hover:text-espresso dark:text-linen/60 dark:hover:text-linen"
            )}
            aria-current={active ? "true" : undefined}
          >
            {LABELS[l] ?? l}
          </button>
        );
      })}
    </div>
  );
}

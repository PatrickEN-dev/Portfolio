"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMounted } from "@/hooks/useMounted";

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const t = useTranslations("ui");

  const current = mounted ? (theme === "system" ? resolvedTheme : theme) : "light";
  const isDark = current === "dark";
  const label = isDark ? t("themeLight") : t("themeDark");

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed top-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-linen/80 dark:bg-espresso/30 border border-espresso/10 dark:border-linen/15 backdrop-blur-md text-espresso dark:text-linen transition-colors duration-300 ease-apple hover:text-caramel"
    >
      {mounted && isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

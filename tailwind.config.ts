import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: "rgb(var(--c-linen) / <alpha-value>)",
        espresso: "rgb(var(--c-espresso) / <alpha-value>)",
        warmgray: "rgb(var(--c-warmgray) / <alpha-value>)",
        caramel: "rgb(var(--c-caramel) / <alpha-value>)",
        sand: "rgb(var(--c-sand) / <alpha-value>)",
        ink: {
          DEFAULT: "rgb(var(--c-ink) / <alpha-value>)",
          muted: "rgb(var(--c-ink-muted) / <alpha-value>)",
          soft: "rgb(var(--c-ink-soft) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        display: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        reveal: "800ms",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter2: "-0.025em",
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 9vw, 9rem)", { lineHeight: "0.92", letterSpacing: "-0.045em", fontWeight: "700" }],
        "display-lg": ["clamp(2.25rem, 6vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.035em", fontWeight: "700" }],
        "display-md": ["clamp(1.75rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "600" }],
        "display-sm": ["clamp(1.25rem, 2.5vw, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        "body-lg": ["clamp(1rem, 1.15vw, 1.15rem)", { lineHeight: "1.55" }],
        "label-xs": ["0.7rem", { lineHeight: "1.2", letterSpacing: "0.14em" }],
      },
    },
  },
  plugins: [],
};

export default config;

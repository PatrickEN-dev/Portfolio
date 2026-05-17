# CLAUDE.md

Guidance for Claude Code working on Patrick Almeida's portfolio.

## What this is

Single-page, scroll-driven personal portfolio for **Patrick de Almeida Engela** (Full Stack Dev, 4+ yrs, FinTechs + SaaS + AI, Botucatu-SP). The site exists to attract PJ/CLT recruiters in Brazil and signal senior-level work.

Tone is **CV-style professional Brazilian Portuguese** — recruiter-friendly, action verbs, quantified results. Reject dry/casual one-liners and LinkedIn clichés ("apaixonado por código", "movido a café", etc).

## Stack

- **Next.js 15** (App Router, React 19, RSC by default)
- **TypeScript strict** with `noUncheckedIndexedAccess` and `noImplicitOverride` — zero `any`
- **Tailwind CSS** with custom design tokens (CSS variables for light/dark)
- **next-intl** for i18n (pt / en / es, default `pt`, `localePrefix: "as-needed"`)
- **next-themes** for light/dark (class strategy)
- **Framer Motion** for scroll/in-view animations
- **Lenis** for smooth scroll (disabled under `prefers-reduced-motion`)
- **Geist Sans + Geist Mono** via `geist` npm package (Fraunces was explicitly rejected)
- **lucide-react** + **react-icons** (`Si*` / `Tb*`) for icons

## Design tokens

Defined as RGB triplets in [app/globals.css](app/globals.css#L5-L26), exposed to Tailwind via [tailwind.config.ts](tailwind.config.ts#L11-L23):

| Token       | Light                | Dark                 | Usage                      |
| ----------- | -------------------- | -------------------- | -------------------------- |
| `linen`     | `#F5F1EA`            | `#0F0D0A`            | base background            |
| `espresso`  | `#1F1A14`            | `#F0EBE0`            | text / inverted bg         |
| `caramel`   | `#8B5E34`            | `#D89860`            | accent                     |
| `sand`      | `#E8DCC8`            | `#2A2218`            | secondary surface          |
| `warmgray`  | `#A99E8C`            | `#8A7F6D`            | tertiary text              |
| `ink/muted/soft` | semantic aliases | semantic aliases  | body, muted, decorative    |

- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (exposed as `transition-timing: apple`)
- Display sizes (`display-xl`/`lg`/`md`/`sm`) use `clamp()` for fluid type — see [tailwind.config.ts:40-46](tailwind.config.ts#L40-L46)
- All cards use [`cardClasses()`](lib/ui-classes.ts#L19-L26) for a unified surface — `rounded-2xl border border-espresso/10 bg-linen`
- All mono labels (eyebrows, tags) use the eyebrow component or `monoLabelClasses()`

## File layout

```
app/
  [locale]/
    layout.tsx        # fonts, providers, metadata + alternates
    page.tsx          # composes all sections
  globals.css         # tokens, grain, reduced-motion, lenis hooks
  icon.svg
components/
  sections/           # Hero, About, Projects, Experience, Skills, Differentials, Contact
    about/            # AboutFichaTecnica, AboutSummary, AboutStats
    projects/         # ProjectCard, ProjectMedia, ProjectStatusBadge
    experience/       # ExperienceItem (alternating timeline)
    differentials/    # DifferentialCard, DifferentialPhotoCard
    skills/           # SkillCategoryCard
  ui/                 # CTAButton, IconCircleButton, SectionEyebrow, RevealText,
                      # SlideIn, ScrollProgress, ThemeToggle, LocaleSwitcher,
                      # SafeImage, CountUp
  providers/          # LenisProvider, ThemeProvider
lib/
  data.ts             # profile, contacts, stats, experience, projects (no copy)
  types.ts            # discriminated types for above
  tech-icons.tsx      # name → icon + brand color mapping
  ui-classes.ts       # cardClasses(), monoLabelClasses()
  utils.ts            # cn() = clsx + tailwind-merge
hooks/
  useMounted.ts
i18n/
  routing.ts          # locales + defaults
  navigation.ts       # Link/redirect/usePathname/useRouter
  request.ts          # async messages loader
messages/             # pt.json (source of truth) + en.json + es.json
middleware.ts         # next-intl middleware
public/
  me/portrait.jpg     # hero portrait
  me/headshot.jpg     # differentials photo card
  projects/<slug>.png # project screenshots
  cv/patrick-engela-<locale>.pdf
```

## Section order

`Hero → About → Projects → Experience → Differentials → Skills → Contact`

This order was finalized after user feedback — do not reorder without asking.

## i18n contract

- All visible strings live in `messages/{pt,en,es}.json`. **Never hard-code copy in components** — fetch via `getTranslations()` (RSC) or `useTranslations()` (client).
- `lib/data.ts` only holds **non-translatable identifiers**: slugs, hrefs, image paths, stack lists, years, status keys. Display strings come from i18n via `msgKey` / `statusKey` lookups.
- When adding a new translation key, update **all three** locale files at the same key path.

## Conventions

- **No `any`.** Use discriminated unions (`ProjectStatusKey`, `DifferentialKey`, etc).
- **Strict null safety**: `noUncheckedIndexedAccess` is on. Use optional chaining or `??` on indexed lookups.
- **Comments**: avoid them. Code should be self-evident. Only document WHY, never WHAT.
- **Animations** must respect `prefers-reduced-motion` — use Framer's `useReducedMotion()` or check inside effects (see [LenisProvider](components/providers/LenisProvider.tsx#L8-L9)).
- **Images** that may 404: wrap with [SafeImage](components/ui/SafeImage.tsx) and provide a fallback node. Project screenshots use a state-driven `<img onError>` in [ProjectMedia](components/sections/projects/ProjectMedia.tsx#L14).
- **Buttons / links to external sites**: use [CTAButton](components/ui/CTAButton.tsx) with `external` (adds `target="_blank" rel="noopener noreferrer"`).
- **Icons**: prefer mapping names through [tech-icons.tsx](lib/tech-icons.tsx). Add new techs to the `TECH` object with a brand color.
- **Cards**: use `cardClasses({ padding })` instead of re-inventing the surface.
- **No new providers without checking [layout.tsx](app/[locale]/layout.tsx#L134-L144)** — order matters (NextIntl → Theme → Lenis).

## Scripts

```bash
npm install
npm run dev        # http://localhost:3000  (default locale at /, en at /en, es at /es)
npm run build
npm run lint
npm run typecheck  # tsc --noEmit
```

## Responsive strategy

Mobile-first, single breakpoint cascade: base → `sm:` (640) → `md:` (768) → `lg:` (1024) → `xl:` (1280).

- Fluid display type via `clamp()` (already baked into the `display-*` font-size tokens)
- Section padding pattern: `px-6 md:px-12 py-24 md:py-32` (Projects/Experience get `md:py-40`)
- Hero swaps to a single-column stack on `<md`, portrait first (`order-1`), content second (`order-2`)
- The fixed UI chrome (ThemeToggle right-5, LocaleSwitcher right-20, ScrollProgress right edge) stays on both sizes — keep their z-index and don't overlap them
- Touch targets: keep interactive elements ≥ 40×40 px on mobile
- Respect iOS safe areas with `env(safe-area-inset-*)` when adding bottom-anchored UI

## Deploy

Vercel, zero config. The repo is already wired for Vercel via `next` defaults. Domain target: `patrickengela.com`.

## Reference docs

- [README.md](README.md) — public-facing intro
- [DECISIONS.md](DECISIONS.md) — frozen design/tech decisions (palette, type, scroll mechanic)
- [prompt-portfolio-patrick-v2.md](prompt-portfolio-patrick-v2.md) — the original brief (treat as historical; the CV-style copy override in the project memory takes precedence)

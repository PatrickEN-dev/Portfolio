# Patrick Almeida — Portfolio

Single-page, scroll-driven portfolio. Apple-style cinematic feel with a warm linen/espresso/caramel palette.

## Stack
- **Next.js 15** (App Router) · **React 19** · **TypeScript strict**
- **Tailwind CSS** with custom tokens (Linen / Espresso / Caramel / Sand)
- **Framer Motion** for scroll-driven animation
- **Lenis** for smooth scroll
- **React Three Fiber + Drei + three** for the Hero WebGL background
- **Lucide React** · **clsx** + **tailwind-merge**

## Design tokens
- Base `#F5F1EA` linen · text `#1F1A14` espresso · accent `#8B5E34` caramel
- Display: **Fraunces** (variable, opsz + SOFT axes)
- Body: **Inter** (variable)
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`

## Scripts
```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run lint
npm run typecheck
```

## Structure
```
app/
  layout.tsx          # fonts (next/font), Lenis provider, metadata
  page.tsx            # composes sections
  globals.css         # tokens, grain, reduced-motion
components/
  sections/           # Hero, AboutStats, WhyHire, Experience, Projects, Skills, Contact
  ui/                 # ScrollProgress, MagneticLink, RevealText, CountUp, TiltCard, Loader
  background/         # HeroBackground (WebGL R3F)
  providers/          # LenisProvider
lib/
  data.ts             # all site copy (pt-BR)
  utils.ts            # cn() helper
```

## Deploy
Vercel: `vercel` from project root. Project is zero-config.

## Decisions
See [DECISIONS.md](./DECISIONS.md).

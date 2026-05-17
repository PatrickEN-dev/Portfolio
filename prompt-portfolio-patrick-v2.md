# Portfolio Build Brief — Patrick de Almeida Engela

> Paste everything below the `---` into Claude Code in VSCode. Site copy stays in Portuguese (Brazilian audience). Instructions are English for token efficiency.

---

## ROLE
You are a senior frontend engineer and art director. You build cinematic single-page portfolios with the feel of Apple landing pages: aggressive minimalism, oversized typography, scroll-driven storytelling, layered motion. You also make taste calls on palette, type, rhythm — not just code.

## DELIVERABLE
A single-page, scroll-driven personal portfolio. Next.js App Router. No navigation menu. The scroll IS the navigation. Hosted-ready for Vercel.

## HARD CONSTRAINTS (do not violate)
- No top nav, no sidebar, no hamburger. Only a thin scroll-progress line is allowed.
- Single route `/`. No client-side routing.
- TypeScript strict mode. Zero `any`. Zero ESLint warnings on build.
- Lighthouse targets: Performance ≥ 90, Accessibility ≥ 95, Best Practices = 100, SEO = 100.
- `prefers-reduced-motion: reduce` must disable parallax, count-ups, magnetic hover, and any 3D scene.
- Initial JS payload ≤ 200KB gzipped. First Contentful Paint < 1.5s on Fast 3G simulated.
- All textual content lives in `lib/data.ts`. No hardcoded copy inside components.
- Site copy is in **Brazilian Portuguese**. Comments, variable names, commits in English.

## STACK
**Required core:**
- Next.js 14+ (App Router)
- TypeScript (strict)
- Tailwind CSS with custom tokens in `tailwind.config.ts`
- Framer Motion (animations + scroll-driven via `useScroll`, `useTransform`)
- Lenis (`@studio-freight/lenis`) for smooth scroll
- Lucide React for icons
- `clsx` + `tailwind-merge` via a `cn()` helper

**Optional (propose before adding):**
- React Three Fiber + Drei — only if background option A is chosen and you can keep 60fps on a 2020 mid-range phone
- GSAP + ScrollTrigger — only if a specific section needs sticky-pin or horizontal scroll that Framer Motion can't cleanly do. Justify in 2 lines before installing.

**Forbidden:**
- UI kits: shadcn, MUI, Chakra, Mantine, Ant Design
- Legacy animation libs: AOS, wow.js, ScrollMagic
- `<form>` tags inside artifact-like components (use button handlers)
- `localStorage` / `sessionStorage` (not needed for v1)

## INSPIRATION REFERENCES — CRITICAL NOTE
The three reference sites are JS-heavy SPAs. `WebFetch` will return an empty HTML shell — do not rely on fetching to "analyze" them. Use the descriptions below as ground truth. You may attempt WebFetch as supplementary if you want, but treat any fetched content as low-confidence.

**`sureshmurali.github.io`** — warm-toned hero with subtle ambient background, mixes a humanist serif headline with sans body, project cards with hover lift, generous whitespace. Take: warmth, typographic humanity, sectional rhythm.

**`gabrieldeveloper.site`** — dark theme, single accent color, smooth transitions, project cards with stack tags, clean dev-portfolio structure. Take: project hierarchy, dev-portfolio layout patterns.

**`michaelpumo.com`** — Lenis-powered buttery scroll, massive typography mixing serif and sans, multi-layer parallax, horizontal scroll module for projects, deeply "alive" feel. Take: the scroll feel, breathing room between sections, multi-layer parallax, type-as-protagonist.

**Synthesis target:** Pumo's scroll feel × Suresh's warmth × Gabriel's dev-portfolio clarity. Not a remix — an original distilled from these influences.

## CONTENT (use literally for `lib/data.ts`)

```ts
export const profile = {
  name: "Patrick de Almeida Engela",
  headline: "Full Stack Developer",
  subheadline: "TypeScript · Next.js · Node · NestJS · .NET · Python · Azure DevOps",
  location: "Botucatu - SP, Brasil",
  availability: "PJ ou CLT · Remoto ou Híbrido (1x/mês)",
  yearsExperience: 4,
  bio: "Desenvolvedor full stack com 4 anos atuando em FinTechs, CRMs e produtos com IA. Construo microserviços, integrações e pipelines de CI/CD; mantenho SaaS multi-tenant próprios em produção, com clientes pagantes, em paralelo a contratos PJ em empresas do setor financeiro.",
};

export const contacts = [
  { label: "Email", value: "patrickandreia2505@gmail.com", href: "mailto:patrickandreia2505@gmail.com" },
  { label: "WhatsApp", value: "+55 14 99133-6409", href: "https://wa.me/5514991336409" },
  { label: "LinkedIn", value: "patrick-almeida", href: "https://www.linkedin.com/in/patrick-almeida-64b897237/" },
  { label: "GitHub", value: "PatrickEN-dev", href: "https://github.com/PatrickEN-dev" },
];

export const stats = [
  { value: 4, suffix: "", label: "anos de experiência" },
  { value: 4, suffix: "+", label: "clientes pagantes ativos" },
  { value: 2, suffix: "", label: "FinTechs no currículo" },
  { value: 3, suffix: "+", label: "SaaS em produção" },
];

export const experience = [
  {
    company: "Sttart Pay — Movimentos Financeiros",
    role: "Full Stack Pleno (PJ)",
    period: "Fev/2026 — atual",
    stack: ["Python", "AWS Lambda", "Azure DevOps"],
    bullets: [
      "FinTech de movimentações: PIX, TED, maquininhas e USDT.",
      "Serviços serverless em AWS Lambda com pipelines em Azure DevOps.",
      "Foco em performance, segurança e escalabilidade.",
    ],
  },
  {
    company: "Freelancer / Autônomo",
    role: "Full Stack (PJ)",
    period: "Mai/2024 — atual",
    stack: ["Next.js", "NestJS", "N8N", "IA"],
    bullets: [
      "SaaS multi-tenant próprios e soluções sob demanda.",
      "Atuação do levantamento de requisitos ao deploy e manutenção.",
    ],
  },
  {
    company: "CRM Datacrazy",
    role: "Full Stack Júnior → Pleno (PJ)",
    period: "Fev/2023 — Fev/2026",
    stack: ["React", "Next.js", "Node.js", "NestJS", "C# .NET", "Kubernetes"],
    bullets: [
      "Promovido a Pleno em 2025 por mérito técnico.",
      "Arquitetura de microserviços com DDD e SOLID.",
      "Integrações Meta (WhatsApp/Instagram) e CI/CD com Docker, K8s, GitHub Actions, Azure DevOps.",
    ],
  },
  {
    company: "FCS — Fluxo de Caixa Simples (AR Digital Labs)",
    role: "Full Stack Júnior (PJ)",
    period: "Jun/2024 — Jan/2025",
    stack: [".NET Core", "React", "Ant Design", "AWS Lambda", "SQL"],
    bullets: [
      "FinTech de gestão financeira empresarial.",
      "Back-end serverless em .NET Core com AWS Lambda.",
      "Otimização de queries SQL para performance e estabilidade.",
    ],
  },
];

export const projects = [
  {
    name: "Coldmail",
    tagline: "SaaS de disparo e aquecimento de e-mails frios em massa.",
    metric: "3 clientes pagantes fixos",
    status: "Em produção",
    stack: ["Next.js", "NestJS", "N8N"],
    href: "https://coldmail-bg-ia-labtracker.vercel.app",
  },
  {
    name: "BT Barber",
    tagline: "SaaS multi-tenant para barbearias com 3 interfaces e módulo de loja integrado.",
    metric: "1 cliente ativo · 3 em fila",
    status: "Em testes",
    stack: ["Next.js", "AWS S3"],
    href: "https://bt-barber.vercel.app",
  },
  {
    name: "AI Banking Agents",
    tagline: "Sistema com 4 agentes de IA especializados para atendimento bancário.",
    metric: "Teste técnico aprovado",
    status: "Showcase",
    stack: ["Python", "RAG", "OpenAI"],
    href: "https://ia-agent-tech-for-humans-frontend.vercel.app",
  },
];

export const pillars = [
  { title: "Lógica de produto", body: "Não escrevo só código. Penso o problema antes da solução." },
  { title: "Versatilidade", body: "Múltiplos frameworks, stacks, domínios (FinTech, SaaS, CRM, IA), nuvens (AWS, GCP, Azure) e arquiteturas (microserviços, serverless, DDD)." },
  { title: "Produção real", body: "SaaS próprios com clientes pagantes. Não side-projects mortos no GitHub." },
  { title: "Promovido por mérito", body: "Júnior → Pleno em 2 anos no CRM Datacrazy." },
];

export const skills = {
  Linguagens: ["JavaScript", "TypeScript", "C#", "Python"],
  Front: ["React", "Next.js", "Tailwind", "Ant Design"],
  Back: ["Node.js", "NestJS", "Express", ".NET Core", "Django"],
  Dados: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "TypeORM"],
  "DevOps & Cloud": ["Docker", "Kubernetes", "GitHub Actions", "Azure DevOps", "AWS", "GCP"],
  Arquitetura: ["DDD", "SOLID", "Microserviços", "Serverless"],
  "IA & Automação": ["LLMs", "RAG", "Agentes", "N8N"],
};

export const education = [
  { title: "Análise e Desenvolvimento de Sistemas", institution: "Estácio", period: "Concluído Jul/2024" },
  { title: "Desenvolvimento Web Full Stack", institution: "Kenzie Academy", period: "" },
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Intermediário · Cambly ativo" },
];
```

## DESIGN SYSTEM
- **Palette:** dark base `#0A0A0B`, text `#F5F3EE`, **one** accent — propose two options in Phase 0 (e.g., warm amber `#E8B86D` vs cool teal `#2BBA8F`). No neon, no gradient rainbows.
- **Typography pair:** propose two options in Phase 0. One serif display + one geometric/humanist sans. Suggested starting points: Fraunces/Instrument Serif + Inter/Geist/Satoshi.
- **Scale:** `clamp()` for all type. H1 around `clamp(3rem, 8vw, 10rem)`. Body around `clamp(1rem, 1.2vw, 1.25rem)`.
- **Spacing:** sections are `min-h-screen` with vertical padding `py-24 md:py-40`.
- **Motion easing:** default cubic `[0.22, 1, 0.36, 1]` (Apple-like). Duration default 0.8s for reveals, 0.4s for hover.
- **Grain/texture:** subtle SVG noise overlay at 3-5% opacity is allowed if it adds depth.

## SECTIONS (scroll order — 7 chapters)

### 1. Hero
Full viewport. Animated background. Name in display serif with reveal-by-letter stagger. Headline in sans below. Scroll hint = thin animated vertical line at bottom-center, no text. **No CTA buttons here.**

### 2. About + Stats (combined)
Asymmetric layout: 2-sentence bio on the left in medium-large sans; on the right, four oversized numbers from `stats`, count-up on scroll-into-view. One palavra-chave in the bio rendered in italic serif (e.g., "FinTechs" or "produção").

### 3. Why hire me (positioning)
Four pillars from `pillars` as editorial blocks. Use mixed type sizes and asymmetric grid — not a uniform 2x2 card layout. The first pillar (Lógica de produto) is the largest and most prominent.

### 4. Experience (timeline)
Vertical timeline. Each role from `experience` reveals on scroll. Display role + period as the visual anchor; stack tags below in mono small caps; bullets indented.

### 5. Projects (cinematic — the showpiece)
The most ambitious section. Use **one** of these treatments (propose in Phase 0):
- (a) Sticky-pin: each project pins for one viewport of scroll before releasing to the next
- (b) Horizontal scroll: projects scroll sideways while page scrolls vertically
- (c) Stacked cards: each project is a full-screen "card" that slides under the next

Each project gets: name (display), tagline, metric in oversized accent color, stack tags, status badge, live link with magnetic hover.

### 6. Skills
Compact categorized grid from `skills`. Each category is a column; items are small caps with hover state. **No tag soup, no floating bubbles, no skill bars.**

### 7. Contact
Big closing line (propose in Phase 0 — see Microcopy section). Contact links from `contacts` in a vertical list with magnetic hover. Footer single line with `© 2026 Patrick Engela · GitHub`.

## INTERACTIONS CHECKLIST
- [ ] Lenis smooth scroll with custom easing
- [ ] Thin scroll-progress line, side-mounted
- [ ] Multi-layer parallax in Hero + Projects minimum
- [ ] Reveal-by-letter or by-word in section headings
- [ ] Count-up numbers in Stats
- [ ] Magnetic hover on contact links and project live-links
- [ ] Subtle tilt on project cards (max 8 degrees)
- [ ] Animated hero background (chosen option)
- [ ] Loader (≤ 2s, name reveals, then door opens to site)
- [ ] All of the above respects `prefers-reduced-motion: reduce`

## FILE STRUCTURE (target)
```
app/
  layout.tsx            # fonts (next/font), Lenis provider, metadata, OG
  page.tsx              # composes sections
  globals.css           # reset + CSS vars
components/
  sections/
    Hero.tsx
    AboutStats.tsx
    WhyHire.tsx
    Experience.tsx
    Projects.tsx
    Skills.tsx
    Contact.tsx
  ui/
    MagneticLink.tsx
    RevealText.tsx
    CountUp.tsx
    TiltCard.tsx
    ScrollProgress.tsx
    Loader.tsx
  background/
    HeroBackground.tsx  # encapsulates whichever option chosen
  providers/
    LenisProvider.tsx
hooks/
  useMagnetic.ts
  useReducedMotion.ts
lib/
  data.ts               # all content
  utils.ts              # cn(), helpers
tailwind.config.ts
next.config.mjs
```

## PROCESS (phased — wait for my approval between phases)

### Phase 0 — Discovery (NO CODE)
Output as a single markdown reply:
1. **Two palette options** with hex values and a one-line rationale each.
2. **Two type-pair options** (heading + body) with rationale.
3. **Three background options** (A: WebGL shader, B: video loop, C: animated CSS gradient) with trade-offs in one line each.
4. **Three Projects-section treatments** (sticky-pin / horizontal / stacked-cards) — recommend one with reasoning.
5. **One-paragraph design vision** that synthesizes the three references into a unique direction.

**Done when:** I reply with my picks. Do not start coding until then.

### Phase 1 — Scaffold
Create `package.json`, `tailwind.config.ts` with chosen tokens, `app/layout.tsx` with fonts and Lenis, `lib/data.ts` (full), `app/globals.css`, empty section components that render placeholders.

**Done when:** `npm run dev` shows a single empty page with Lenis active, tokens applied, fonts loaded, no console errors.

### Phase 2 — Hero + Background
Build the Hero section with chosen background. Implement `RevealText` and integrate.

**Done when:** Hero is full-viewport, name reveals on load, background runs at 60fps on desktop, scroll into the next (empty) section feels buttery on Lenis.

### Phase 3 — Sections (one at a time, in order)
Build AboutStats → WhyHire → Experience → Projects → Skills → Contact. After each, pause and show me.

**Done when (per section):** Renders from `data.ts`, scroll animations fire correctly, layout holds at 375px / 768px / 1440px, no console errors.

### Phase 4 — Polish
`MagneticLink`, `TiltCard`, `ScrollProgress`, `Loader`, microcopy pass, OG image, favicon.

**Done when:** All checklist items above pass manual QA.

### Phase 5 — Audit
Run Lighthouse on production build. Run `next build` and check bundle analyzer. Test with `prefers-reduced-motion` enabled. Test on a real mobile device (or DevTools throttled).

**Done when:** All performance budgets met, reduced-motion path verified.

## DECISION PROTOCOL
- **Design choices** (color, type, copy tone, animation flavor, section treatment) → ASK with 2 named options.
- **Implementation choices** (component structure, hook patterns, helper utilities, file naming) → DECIDE and proceed.
- **Adding a library beyond the required core** → ASK with one-line justification.
- **Cutting a feature for performance** → DECIDE, but flag it in your reply.

## MICROCOPY GUIDELINES

**Forbidden phrases:** "apaixonado por código", "movido a café", "transformo ideias em realidade", "vamos criar algo incrível juntos", "soluções inovadoras", any LinkedIn-recruiter-speak.

**Examples of acceptable lines (refine, don't copy literally):**
- Hero subtitle option: "Full stack. FinTechs, principalmente. Às vezes IA."
- Why-hire opener: "Promovido de Júnior a Pleno em dois anos. Por entrega, não por tempo de casa."
- Projects intro: "Três produtos. Clientes pagantes. Em produção, não no GitHub."
- Contact closer: "Me contrata. Ou só manda um oi."

Voice: direct, confident, slightly dry. First person. No exclamation marks. Short sentences.

## ANTI-PATTERNS (do NOT)
- Do not animate everything just because Framer Motion is installed.
- Do not use particle systems in the background (overdone in dev portfolios).
- Do not add a "Download CV" button to the hero (clutter — put it discreetly in Contact if at all).
- Do not use floating skill icons or skill bars.
- Do not use neon colors or gradient rainbows.
- Do not add tooltips, badges, or shields.io graphics.
- Do not write copy that sounds like a LinkedIn recruiter wrote it.
- Do not ship without testing the `prefers-reduced-motion` path.
- Do not install GSAP "just in case".
- Do not deliver before running Lighthouse.

## OUTPUT EXPECTATIONS
- README at root with: stack summary, setup, run, deploy to Vercel.
- Commits in conventional-commit style.
- All non-trivial design decisions documented in a short `DECISIONS.md`.

## START
Begin with **Phase 0**. Do not write code yet. Reply with the five Phase 0 deliverables.

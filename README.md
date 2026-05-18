# Patrick Almeida — Portfolio

Site pessoal de **Patrick de Almeida Engela** — Full Stack Developer, 4+ anos em FinTechs reguladas e SaaS próprios em produção. Baseado em Botucatu-SP, modelo PJ/CLT remoto.

O repositório é tratado como demonstração técnica: arquitetura, tipagem, performance e i18n produção-ready.

**Live:** [patrickengela.com](https://patrickengela.com) · **CV:** [PT](public/cv/patrick-engela-pt.pdf) · [EN](public/cv/patrick-engela-en.pdf) · [ES](public/cv/patrick-engela-es.pdf)

> **For international recruiters —** This is a single-page, scroll-driven portfolio built with Next.js 15 (App Router, RSC), TypeScript strict, Tailwind, Framer Motion and Lenis. Trilingual (PT/EN/ES) via next-intl, light/dark theme, performance-tuned for Chrome on commodity hardware (lerp-mode Lenis, `content-visibility: auto`, IntersectionObserver consolidation). Code is intentionally readable: zero `any`, discriminated unions, server components by default. See engineering decisions below.

---

## Stack

| Camada | Escolha | Razão |
|---|---|---|
| Framework | **Next.js 15** (App Router) | RSC por padrão, static generation por locale, `next/image` e `next/font` |
| Linguagem | **TypeScript** strict + `noUncheckedIndexedAccess` + `noImplicitOverride` | Zero `any` no código, discriminated unions em vez de strings soltas |
| UI | **React 19** | Server Components, automatic batching |
| Estilo | **Tailwind CSS** + CSS variables RGB | Theming light/dark por classe, tokens semânticos (`linen`, `espresso`, `caramel`, `sand`, `ink`/`muted`/`soft`) |
| Animação | **Framer Motion** | Entrance via `whileInView` + IntersectionObserver, consolidado com `staggerChildren` quando filhos entram juntos |
| Scroll | **Lenis** (lerp mode) | Smooth scroll no desktop; desligado em pointers coarse para deixar mobile no scroll nativo |
| i18n | **next-intl** | 3 locales (`pt`, `en`, `es`), `localePrefix: "as-needed"`, metadata e `hreflang` por locale |
| Tema | **next-themes** | Light/dark com classe, SSR-safe |
| Tipografia | **Geist Sans + Geist Mono** (`geist`) | Variável, otimizada via `next/font`, sem CLS |
| Ícones | **lucide-react** + **react-icons** (`Si*` / `Tb*`) | Mapeados em `lib/tech-icons.tsx` com cor da marca |

## Decisões de engenharia

- **RSC-first.** Toda section é Server Component por padrão. `"use client"` só onde há motion, state ou browser API (LenisProvider, ThemeToggle, LocaleSwitcher, ScrollProgress, motion components).
- **Type-safety estrito.** Discriminated unions para todo identificador semântico (`ProjectStatusKey`, `ForYouKey`, `DifferentialKey`, `ContactKey`, `AppLocale`). `noUncheckedIndexedAccess` ligado força tratamento de indexação. Zero `any`.
- **i18n com contrato.** Toda copy visível em `messages/{pt,en,es}.json`. `lib/data.ts` segura só identificadores não-traduzíveis (slugs, hrefs, anos, status keys). Cada chave existe nos três locales — qualquer um pode virar padrão sem refactor.
- **Performance medida, não estimada:**
  - **Lenis em modo `lerp`** com `autoRaf` (mais leve que o modo `duration`). Desligado em pointers coarse — mobile usa scroll nativo, sempre mais fluido em touch.
  - **`ScrollProgress` sem `useSpring`.** Lenis já entrega valores suavizados; o spring duplicava trabalho a cada frame de scroll.
  - **`CountUp` escreve via `ref.textContent`** — não dispara re-render React por frame de animação.
  - **`content-visibility: auto`** + `contain-intrinsic-size` em todas as sections abaixo da fold (Projects, Experience, Differentials, Skills, ForYou, Contact). Browser pula layout e paint enquanto estão fora da viewport.
  - **IntersectionObservers consolidados** via `staggerChildren` quando filhos entram juntos (AboutFichaTecnica: 6→1, ScenarioPanel: 4→1, ExperienceItem: 2→1 por item).
  - **`BackToTop` via IntersectionObserver** com sentinela em `top:90vh` em vez de listener de scroll — zero trabalho durante scroll.
  - **`transition-[transform,color,...]`** com propriedades específicas em vez de `transition-all` (paint cost menor).
  - **`next/image` em toda imagem**, com `quality` calibrada por uso (Hero 85 + `fetchPriority="high"`, projetos 80 lazy, headshot 80 lazy).
- **Acessibilidade.** `prefers-reduced-motion` respeitado em Lenis, RevealText, SlideIn, CountUp, ScenarioPanel, BackToTop. Touch targets ≥ 44px em mobile. Safe-areas iOS via `env(safe-area-inset-*)`. `aria-label` em todo chrome flutuante.
- **Responsividade.** Mobile-first com display type fluido via `clamp()`. Hero stacka em `<md` (portrait acima, conteúdo abaixo). Chrome flutuante (ThemeToggle, LocaleSwitcher, ScrollProgress) com z-index estável em ambos os tamanhos.

## Estrutura

```
app/[locale]/         layout (fonts, providers, metadata) + page (composição)
components/
  sections/           Hero · About · Projects · Experience · Differentials · Skills · ForYou · Contact
  ui/                 CTAButton, IconCircleButton, SectionEyebrow, RevealText, SlideIn,
                      ScrollProgress, ThemeToggle, LocaleSwitcher, BackToTop, CountUp
  providers/          LenisProvider, ThemeProvider
lib/
  data.ts             perfil, contatos, stats, experiências, projetos (sem copy)
  types.ts            discriminated unions
  tech-icons.tsx      tech → ícone + cor da marca
  ui-classes.ts       cardClasses(), monoLabelClasses()
  utils.ts            cn() = clsx + tailwind-merge
i18n/                 routing, navigation, request (next-intl)
messages/             pt.json (fonte) · en.json · es.json
public/               me/portrait · me/headshot · projects/<slug>.png · cv/<locale>.pdf
```

## Ordem das sections

`Hero → About → Projects → Experience → Differentials → Skills → ForYou → Contact`

## Como rodar

```bash
npm install
npm run dev          # http://localhost:3000 (pt em /, en em /en, es em /es)
npm run build
npm run typecheck    # tsc --noEmit
npm run lint
```

## Deploy

Vercel, zero config. Static generation por locale via `generateStaticParams`. Domínio: `patrickengela.com`.

## Contato

- **Email:** patrickandreia2505@gmail.com
- **LinkedIn:** [patrick-almeida](https://www.linkedin.com/in/patrick-almeida-64b897237/)
- **GitHub:** [@PatrickEN-dev](https://github.com/PatrickEN-dev)
- **WhatsApp:** +55 14 99133-6409

# Design & Tech Decisions

## Palette — Linen & Espresso
Linen `#F5F1EA` base + espresso `#1F1A14` text + caramel `#8B5E34` accent.
Chosen over Sand & Clay because high contrast supports oversized display type and reduces fatigue on long-scroll reading.

## Type — Fraunces + Inter
Fraunces variable (opsz + SOFT axes) for editorial headlines; Inter for body. Both via `next/font` to avoid CLS and external font requests.

## Hero background — WebGL mesh (R3F)
Animated gradient mesh, paleta linen → sand → caramel. Mobile gets a CSS-gradient fallback to protect LCP and JS budget. WebGL only initializes after `prefers-reduced-motion` check.

## Projects — Sticky-pin
Three projects, each pinned for one viewport before releasing. Horizontal scroll was rejected (only viable with 6+ items); stacked cards rejected as less cinematic.

## Lenis package
Using `lenis` (current name) instead of the deprecated `@studio-freight/lenis`. Same library, same maintainer.

## TypeScript
Strict + `noUncheckedIndexedAccess` + `noImplicitOverride`. Zero `any` enforced via ESLint.

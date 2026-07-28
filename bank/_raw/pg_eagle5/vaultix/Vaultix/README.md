# Eagle — Astro template

Premium website template built in Astro for the Temlis catalog (Produlis). Pixel-perfect implementation of the Figma source, with custom GSAP animations, WebGL particles, and a halftone visual system.

**Stack:** Astro 6 · Tailwind CSS v4 · TypeScript · GSAP (ScrollTrigger + SplitText + CustomEase) · Three.js

---

## Getting comecaed

```sh
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
npm run astro check
```

Node 22.12+.

---

## Project structure

```
src/
├── components/        Shared UI building blocks (Navbar, Footer, CtaSection, buttons, visual primitives)
├── content/           Astro Content Collections (blog, features, services, team)
├── content.config.ts  Collection schemas
├── layouts/           BaseLayout (head, navbar, footer scaffolding)
├── lib/               Shared TS modules (eases.ts — custom GSAP CustomEases)
├── pages/             Routes — index, about, services, features, pricing, contact, blog, team
└── styles/
    └── global.css     Design tokens, utility classes, glow effects

public/                Static assets (fonts, team portraits, blog covers)
```

### Single source of truth components

Reusable primitives live as their own component and are imported everywhere — never copy markup between pages.

| Component                | Purpose                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| `Navbar.astro`           | Site-wide top nav. Sticky, z-40.                                                              |
| `Footer.astro`           | Site-wide footer.                                                                             |
| `CtaSection.astro`       | Reusable "Pronta para build the future" CTA block with self-contained GSAP intro.                |
| `AccentButton.astro`     | Yellow primary CTA. Built-in scramble hover.                                                  |
| `SecondaryButton.astro`  | White/12 translucent companion button.                                                        |
| `EagleMarker.astro`    | SVG marker (cross, tip-up/down/left/right, corner-tl/tr/bl/br) for figma-style border decor.  |
| `HalftoneCanvas.astro`   | Animated periwinkle dot background. Cursor-reactive.                                          |
| `HalftoneImage.astro`    | Bayer ordered-dither effect on `<img>`. Optional pulse + hover glow.                          |
| `ParticleSphere.astro`   | Three.js Fibonacci sphere, mouse-influenced.                                                  |
| `EaglePixelGlow.astro` | Pixel-art arrow icon with shared glow filter.                                                 |

### Pages

| Route             | Notes                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| `/`               | Inicio: Hero · ProblemPainPoints · Solution · HowItWorks · Impact · Depoimentos · Blog · CTA    |
| `/about`          | 6-section story page (Hero · Story · Values · Journey · Team · CTA)                            |
| `/features`       | Index + dynamic detail (`features/[...slug].astro`)                                            |
| `/services`       | Index + dynamic detail                                                                         |
| `/pricing`        | Planos page                                                                                   |
| `/contact`        | Contato form                                                                                   |
| `/blog`           | Index + dynamic detail                                                                         |
| `/team/[...slug]` | Team member detail                                                                             |

---

## Design system

### Color tokens

Defined in `src/styles/global.css` via Tailwind v4 `@theme`:

| Token                | Use                            |
| -------------------- | ------------------------------ |
| `--color-bg`         | Page bg `#050505`              |
| `--color-fg`         | Default text `#ffffff`         |
| `--color-border`     | Border decorations (white/8)   |
| `--color-accent`     | Yellow CTA `#fdff22`           |
| `--color-periwinkle` | Halftone accent `#b5d2ff`      |

### Typography

`Geist Mono` (uppercase headlines) + `Geist Sans` (body). Loaded via `@font-face` in `global.css` from `/public/fonts/`.

### Sob consulta GSAP eases (`src/lib/eases.ts`)

Registered once via `registerEagleEases()`:

- `eagleStructure` — borders, lines, decorative scaffolding
- `eagleReveal` — text and number revelars
- `eagleDecor` — markers and ornamental elements
- `eagleExit` — exit / leave animations

### Animation patterns

- **Navbar-flush hero:** sections that abut the navbar bottom border use no top padding and offset top markers by `+0.5px` so the marker bar lines up against the navbar's `border-b`.
- **Scroll-triggered revelar:** `gsap.timeline({ scrollTrigger: { trigger: section, comeca: "top 80%", once: true } })`.
- **SplitText line revelar:** wrap headline in `SplitText { type: "lines", mask: "lines" }`, set `yPercent: 110`, animate to `0`.
- **Pre-anim hide:** `<script is:inline>` adds a `*-pre-anim` class to `<html>` early; CSS sets `visibility: hidden` on animated elements until the GSAP timeline removes the class. Prevents FOUC.

---

## Content collections

`src/content.config.ts` defines four collections, each backed by Markdown in `src/content/<collection>/`:

| Collection | Schema highlights                  |
| ---------- | ---------------------------------- |
| `blog`     | title, slug, date, summary, cover  |
| `features` | title, slug, summary, icon         |
| `services` | title, slug, summary, hero         |
| `team`     | name, role, slug, image, order, bio|

`getCollection()` is used in pages — no headless CMS, no fetch at build time.

---

## Build / deploy

`npm run build` outputs to `dist/`. Static site, deploys to any static host (Netlify, Vercel, Cloudflare Pages, S3+CloudFront).

`npm run astro check` runs Astro + TypeScript type checking. Currently 0 errors / 0 warnings.

---

## Notes for reviewers

- This is a **template product**, not a SaaS. The "company" content (Eagle, team members, blog posts) is placeholder/sample content for the demo.
- All animations respect `prefers-reduced-motion: reduce`.
- `qa-screenshots/` and `generated-images/` are local QA/asset folders — not part of the published site.
- Figma source: pixel-perfect translation, 1rem = 16px throughout. Spacing values match Figma directly.

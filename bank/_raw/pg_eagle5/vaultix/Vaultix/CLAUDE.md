# Eagle — convenciones de proyecto

Este archivo es específico del proyecto Eagle. Ver `~/Proyectos/temlis/CLAUDE.md` para contexto Temlis general y `~/CLAUDE.md` para perfil global de Edgar.

## Stack

- **Astro 6** + **Tailwind v4** (CSS-first, sin `tailwind.config`)
- **TypeScript strict**
- **GSAP** core + ScrollTrigger + SplitText + CustomEase
- **Three.js** para `ParticleSphere`
- **Node 22.12+**

## Single source of truth — NUNCA copiar markup entre pages

Estos componentes son la única fuente. Siempre importar, nunca duplicar:

| Componente | Función |
|---|---|
| `Navbar.astro` | Top nav sticky |
| `Footer.astro` | Footer |
| `CtaSection.astro` | Bloque CTA reutilizable con GSAP intro propio |
| `AccentButton.astro` | CTA amarillo + scramble hover |
| `SecondaryButton.astro` | Companion white/12 |
| `EagleMarker.astro` | SVG markers (cross, tip-*, corner-*) — paths fijos, no inventar |
| `HalftoneCanvas.astro` | Dot background periwinkle, cursor-reactive |
| `HalftoneImage.astro` | Bayer dither sobre `<img>` |
| `ParticleSphere.astro` | Three.js Fibonacci sphere |
| `EaglePixelGlow.astro` | Pixel arrow con shared glow filter |

## Sob consulta GSAP eases

Definidos en `src/lib/eases.ts`. Usar siempre estos en lugar de `power2.out` etc.:

- `eagleStructure` — entrada de bloques estructurales
- `eagleReveal` — apariciones de contenido
- `eagleDecor` — accents/decoración
- `eagleExit` — salidas

## Animation patterns

- **Navbar-flush hero** — el hero arranca con padding-top del navbar; GSAP intro corre tras `DOMContentLoaded`
- **Scroll-triggered revelar** — `ScrollTrigger.create({ trigger, comeca: "top 80%", once: true })`
- **SplitText line revelar** — split por líneas, stagger via `eagleReveal`
- **Pre-anim hide** — `opacity: 0` en CSS, GSAP lo levanta. NUNCA dejar elementos visibles antes del intro

## Workflow

1. **Antes de construir** una sección, leer su node ID en `SITE_MAP.md`
2. **Comparar contra Figma** — usar Figma MCP, no asumir
3. **NUNCA inventar markers/colores/spacings** — usar tokens y componentes existentes
4. **QA con Playwright** — screenshots en `qa-screenshots/<fecha>-<feature>/`
5. **Cerrar Playwright + browser_navigate** al terminar QA para devolver responsive

## Slash commands disponibles

- `/eagle-build-section [name]` — pipeline Figma→código con gates de fidelidad
- `/eagle-qa-section [name]` — QA loop char-por-char vs Figma
- `/eagle-status` — reporte rápido del SITE_MAP
- `/eagle-sitemap-complete` — sugerir nodeIds faltantes consultando Figma MCP

## SITE_MAP — fuente única de verdad de secciones

Cada sección tiene `fileKey + nodeId + status`. Status: `pending | in_progress | done | qa-failed`. Ver `SITE_MAP.md`.

## Reglas duras (no negociables)

- ❌ No copiar markup entre pages
- ❌ No inventar SVG paths para markers
- ❌ No usar GSAP eases default cuando hay custom
- ❌ No cerrar features como `done` sin QA visual contra Figma
- ✅ Siempre `astro check` antes de cerrar
- ✅ Siempre screenshot Playwright comparado a Figma antes de cerrar

## Repo

Privado en `EdgarYc/Eagle` (GitHub). James colaborador con Write.

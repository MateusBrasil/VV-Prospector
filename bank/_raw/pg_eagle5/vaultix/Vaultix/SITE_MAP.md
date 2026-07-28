# Eagle — Site Map

Archivo canónico de referencias Figma por sección. Antes de construir o QA-ar cualquier sección, leer este archivo para obtener `fileKey` + `nodeId` y llamar a `get_design_context(fileKey, nodeId)` + `get_screenshot(fileKey, nodeId)` directamente. No construir desde resúmenes de texto.

## Estados (columna `Estado` en cada tabla)

| Símbolo | Status | Significado |
|---|---|---|
| ⏳ | `pending` | Sección identificada con nodeId pero sin construir |
| 🔧 | `in_progress` | Construcción en curso, no cerrada |
| ✅ | `done` / `Built` | Construida y verificada contra Figma |
| ⚠️ | `qa-failed` | Construida pero falló QA — necesita fix |
| 📌 | `placeholder` | Built pero con asset gris esperando reemplazo (avatares, gráficos custom) |
| ❓ | `no-nodeId` | Falta identificar nodeId en Figma |

Convención: en la tabla, columna `Estado` puede ser `⏳ Pending`, `✅ Built`, `📌 Built (placeholder)`, `⚠️ QA-failed`, etc. El status legible textual gana al símbolo si hay duda.

## Figma

- **Figma File Key**: `NrxYxBSyiVSu0bd99rHnTL`
- **Source URL**: `https://www.figma.com/design/NrxYxBSyiVSu0bd99rHnTL/Vauiltix-Design-File`
- **File name**: "Vauiltix - Design File" (typo del filename original; el fileKey es el correcto)
- **Page canónica actual**: `UI Design` — confirmado con Edgar 2026-04-27. Es la versión limpia y ordenada del file (reemplaza al legacy `Multilayout` del file `ZQjW6YzZzdhbab3rnuY02D`).
- **Frame homepage**: `1:2` (`Inicio page`, 1440×9326)
- **Container Max-Width**: 70.5rem (1128px) — aplicable a contenedor central bordeado; las horizontales full-width cruzan por fuera.
- **Brand accent (Eagle)**: periwinkle `#B5D2FF` — **NO** usar `var(--color-accent)` global (es amarillo `#fdff22`). Hardcodear `#B5D2FF` o crear var `--color-periwinkle`.

**Notas sobre el Design File (2026-04-27)**:
- Pages: `Welcome`, `UI Design`, `Style Guide & Components`, `Assets`, `Cover`. Todas las landing pages viven en `UI Design`.
- `components: 0` y `styles: 2` — Footer/Navbar/Button son frames sueltos publicados como instances pero NO están como Components. Cualquier cambio al "componente" debe replicarse en todas las pages a mano (o rehacerse como Components publicados).
- Footer (`3:3168` en Inicio) ya incluye el bloque "Stay updated / Subscribe / Fale conosco" — NO es una sección CTA separada en Inicio (a diferencia del file Multilayout legacy).
- Pages disponibles del producto: Inicio page, Sobre (`1:3276`), Recursos (`1:4364`), Recursos detail (`1:12674`), Team profile (`1:11798`), Planos (`1:13964`), Blogs list (`1:15113`), Blog post (`1:17177`), Contato (`5:30744`).

## Iniciopage (`1:2`)

### Secciones

| # | Sección | Node ID | Componente | Background | Estado | Notas |
|---|---------|---------|------------|------------|--------|-------|
| 01 | Navbar | `3:5960` (master) / instance dentro de Hero | `Navbar.astro` | transparente | ✅ Built | Pill única + Platform dropdown abierto. Navbar es frame suelto en Style Guide, no Component publicado. |
| 02 | Hero | `1:3` | `Hero.astro` | oscuro | ✅ Built | Grid 2×1. Div 1: texto+`LiquidCanvas`. Div 2: logo loop. Incluye sección 03 integrada. |
| 03 | Logo Cloud | (dentro de Hero `1:3`) | (dentro de Hero) | oscuro | ✅ Built | Marquee infinito CSS, 7 logos, sin gradientes. |
| 04 | Problem Section | `1:164` | `ProblemPainPoints.astro` | oscuro, sin border-x | ✅ Built | Sección "suelta", sin container bordeado (contraste con Solution). 3 pain cards: Falhas em pipelines / Blind Spot Monitoraring / Escala sem sofrimento. |
| 05 | Solution Section | `1:446` | `SolutionRecursos.astro` | oscuro, con border-x + horizontales full-width | ✅ Built (copy actualizado 2026-04-27) | Tabs asimétricos 2-col. 3 cards: **Confiabilidade pensada para streaming** (chip icon + Live System bar chart) → **Visao unificada** (monitor icon + observability SVG) → **Elasticidade por padrao** (rocket icon + scaling SVG). Copy reframeado para mapear 1:1 con los 3 pain points. |
| 06 | Recursos (Solution Vertical 4 features) | `1:907` | `SolutionRecursosVertical.astro` | oscuro, sin container bordeado | ✅ Built | 4 rows verticales. Real-Time Pipeline Monitoraring / Deteccao de anomalias com IA / Seguranca de nivel empresarial (candado pixel-art) / Banco vetorial integrado. Iconos pixel-art 10×10 + Periwinkle `#B5D2FF`. |
| 07 | Impact Section | `1:2399` | `ImpactSection.astro` | oscuro, con border-x + horizontales full-width | ✅ Built | Bordered container 70.5rem con 4 T-markers. Eyebrow `[ Nossa impacts ]` periwinkle, heading Geist Mono 48px blanco, 4 métricas amarillo en grid 4-col. Stats: 2M+ Events/s · 99% Uptime · 10B+ Records · 99% Crescimento. |
| 08 | How it work | `1:2435` | `HowItWorks.astro` | oscuro, con border-x + horizontales full-width | ✅ Built (copy sincronizado con Figma 2026-04-27) | Heading centrado `[ how it works ]` / "How it works" / "From zero to production in three steps" (56px title). Stacked 3-card deck — Step 1 Conectar / Step 2 Monitorar / Step 3 Publicar con bullets propios. Right panel: grid 22×10 + V-logo SVG. |
| 09 | Testimonial Section | `1:2939` | `Depoimentos.astro` | oscuro | ✅ Built (copy sincronizado 2026-04-27) | Frame `Testimonial Section` h=1038. 4 testimonios con cargos distintos: Priya Mehta (Staff Engineer @ Arcline) / Kadin Korsgaard (VP Engenharia @ Lumen Labs) / Dulce Baptista (ML Platform Lead @ Cipher Stack) / Jaxson George (Head of Data @ Northwind AI). |
| 10 | Blogs section | `1:3020` | `BlogsSection.astro` | oscuro `#050505` | ✅ Built 2026-04-27 | Frame `Blogs section` h=732. Header flex con `[ blog ]` periwinkle + "Latest from our blog" (56px) + descripción + botón "View all posts" (yellow). 3 cards en grid-3 separadas por verticales `#343434`, top/bottom horizontales full-width con 4 T corner markers. Cada card: image 312×180 + meta `Engenharia • Mar 10, 2026` + título 20px + "Ler mais" amarillo. Imágenes exportadas de Figma a `public/blog/post-{1,2,3}.png` (los 3 posts del set canónico que aparecen en Inicio). |
| 11 | Footer | `3:3168` (INSTANCE) / `3:5921` (master en Style Guide) | `Footer.astro` | oscuro `#050505` | ✅ Built 2026-04-27 | Layout 2-row bordered: top (logo + 3 link cols 4×4 con `ic:sharp-arrow-right`) + bottom (Stay updated / Subscribe / Fale conosco button + halftone EAGLE image). Imagen exportada de Figma a `public/footer/cta-image.png` (~1.2MB). Logo reutiliza `/logo.svg`. T corner markers en outer corners (top-left/right + bottom-left/right). |

## Sobre (`1:3276`)

### Secciones

| # | Sección | Node ID | Componente | Estado | Notas |
|---|---------|---------|------------|--------|-------|
| 01 | Hero | `1:3277` | inline en `about.astro` | ✅ Built 2026-04-30 | Eyebrow `Nossa Story` white/60 + `We build what AI teams rely on` 48px + subhead + CTA `Fale conosco` yellow. Bordered container con 4 T markers. |
| 02 | Nossa story | `1:3324` | inline en `about.astro` | ✅ Built 2026-04-30 | Layout 2-col: eyebrow `[ Nossa Story ]` periwinkle (left) + body 32px white narrativa fundación (right max-w-648). |
| 03 | Nossa values | `1:3328` | inline en `about.astro` | ✅ Built 2026-04-30 | Layout 2-col bordered: izq panel `[ core values ]` + `Nossa Values` + 4 indicator pills clickeables + value card activa con icono pixel-grid + content. Der HalftoneCanvas bg con stat `99.99%` overlay. **JS swap entre 4 valores via pill click**. Datos hardcoded, Edgar puede mover a CMS si quiere. |
| 04 | Nossa jornada | `1:3457` | inline en `about.astro` | ✅ Built 2026-04-30 (asset gris) | `[ our journey ]` + `Nossa Journey` 48px + today box izq + 2x2 metrics grid der (2M+/99%/10B+/2K+). Visual geométrico centrado = placeholder gris (Polygon compleja Figma no replicada). |
| 05 | Team | `1:3489` | inline en `about.astro` + CMS collection `team` | ✅ Built 2026-04-30 (avatares grises) | Header card con `[ our team ]` yellow + `Meet the team` 48px + subhead. 4 member cards (CMS) con avatar gris placeholder, dot periwinkle glow, name 20px, role 14px. Links a `/team/[slug]`. Edgar reemplaza fotos. |
| 06 | CTA | `1:3548` | inline en `about.astro` | ✅ Built 2026-04-30 (asset gris) | `[ get comecaed ]` yellow + `Pronta para build the future of your data stack?` 48px centered + subhead + 2 CTAs. Visual decorativo = placeholder gris. |
| 07 | Footer | `3:3369` (instance) | `Footer.astro` | ✅ Built (shared) | Reusa Footer global. |

## Contato (`5:30744`)

### Secciones

| # | Sección | Node ID | Componente | Estado | Notas |
|---|---------|---------|------------|--------|-------|
| 01 | Hero (title + form + visual) | `5:30745` | inline en `contact.astro` | ✅ Built 2026-04-30 (asset gris) | `[ contact ]` yellow + `Entre em contato` 56px + subhead. Form 2-col bordered con 6 campos (First/Last Name, Email/Subject, Phone, Mensagem textarea) + Enviar button yellow. Visual derecho HalftoneCanvas + label placeholder gris (Edgar reemplaza). 3 verticales (left/mid/right) divide form/visual. Form `preventDefault` + console.log + honeypot anti-spam (Edgar decide backend). |
| 02 | FAQ | `5:30841` | inline en `contact.astro` | ✅ Built 2026-04-30 | `[ duvidas ]` yellow + `Perguntas frequentes` 40px + 4 collapsible items. Q1 abierta: "How quickly will I hear back?" con answer real. |
| 03 | Footer | `5:31425` (instance) | `Footer.astro` | ✅ Built (shared) | Reusa Footer global. |

## Recursos detail (`1:12674`)

CMS-driven via collection `features` (4 .md: pipeline-monitoring, anomaly-detection, security, vector-database) → page `src/pages/features/[...slug].astro`.

### Secciones

| # | Sección | Node ID | Componente | Estado | Notas |
|---|---------|---------|------------|--------|-------|
| 01 | Hero (visual + title + bullets) | `1:12675` | inline en `[...slug].astro` | ✅ Built 2026-04-30 (asset gris) | Visual izq HalftoneCanvas placeholder + title block der: eyebrow `Recursos` yellow + headline 32px + 4 bullets con yellow squares 12px. |
| 02 | Core Recursos | `1:13089` | inline en `[...slug].astro` | ✅ Built 2026-04-30 | Bg gris #141414 + eyebrow `[ core features ]` yellow + headline 40px + body 24px white/60. CMS-driven copy. |
| 03 | Benefits | `1:13095` | inline en `[...slug].astro` | ✅ Built 2026-04-30 | 2-col: title izq + 3 stacked cards der con 4 corner T markers c/u (PIPELINE-LEVEL VISIBILITY / SUB-MILLISECOND LATENCY / PROACTIVE ALERTING). CMS-driven. |
| 04 | CTA | `3:1866` | inline en `[...slug].astro` | ✅ Built 2026-04-30 | `[ get comecaed ]` yellow + `Start building with Eagle today` 48px + subhead + 2 CTAs. Shared template (no asset Polygon). |
| 05 | Footer | `3:4977` (instance) | `Footer.astro` | ✅ Built (shared) | Reusa Footer global. |

## Blog post detail (`1:17177`)

CMS-driven via collection `blog` (7 .md). Page `src/pages/blog/[...slug].astro`.

### Secciones

| # | Sección | Node ID | Componente | Estado | Notas |
|---|---------|---------|------------|--------|-------|
| 01 | Hero (article body) | `1:17178` | inline en `[...slug].astro` | ✅ Built 2026-04-30 | Bordered container 46.5rem max-w + cover (DitheredImage) + meta chips (category/date/reading time) + title 56px + description + prose body con `<Content />` MDX render + author footer card. |
| 02 | Related posts | `1:17941` | inline en `[...slug].astro` | ✅ Built 2026-04-30 | `[ blog ]` periwinkle + `Latest from our blog` 56px + 3 cards (most recent excluding current). |
| 03 | Footer | `3:5379` (instance) | `Footer.astro` | ✅ Built (shared) | Reusa Footer global. |

## Blog list (`1:15113`)

Page `src/pages/blog/index.astro` (rebuild a fidelidad).

### Secciones

| # | Sección | Node ID | Componente | Estado | Notas |
|---|---------|---------|------------|--------|-------|
| 01 | Hero (title + featured post) | `1:15114` | inline en `index.astro` | ✅ Built 2026-04-30 | Title block bordered top + featured post bordered split (image left 47.9rem + text+button right). |
| 02 | All posts grid + filter | `1:15493` | inline en `index.astro` | ✅ Built 2026-04-30 | 4 category filter pills (All/Engenharia/Produto/Codigo aberto) con JS filter behavior + grid 2-col horizontal cards (text left + image right) bordered. |
| 03 | Footer | `3:4173` (instance) | `Footer.astro` | ✅ Built (shared) | Reusa Footer global. |

## Team detail (`1:11798`)

CMS-driven via collection `team` (4 .md). Page `src/pages/team/[...slug].astro`.

### Secciones

| # | Sección | Node ID | Componente | Estado | Notas |
|---|---------|---------|------------|--------|-------|
| 01 | Hero (avatar + intro + bio) | `1:11799` | inline en `[...slug].astro` | ✅ Built 2026-04-30 (avatar gris) | Bordered container 70.5rem 2-col split. Izq: avatar imagen aspect-565/694 (gris si no hay). Der: eyebrow `Nossa team` yellow + name 56px tracking-6.72 + role pill (bullet yellow + role text en bg #141414 border #343434) + `Fale conosco` button yellow + bio markdown `<Content />` + socials opcionales. "← Back to team" link arriba. |
| 02 | CTA | `1:11858` | inline en `[...slug].astro` | ✅ Built 2026-04-30 | Shared template: `[ get comecaed ]` + headline + subhead + 2 CTAs. |
| 03 | Footer | `3:3570` (instance) | `Footer.astro` | ✅ Built (shared) | Reusa Footer global. |

## Planos (`1:13964`)

### Secciones

| # | Sección | Node ID | Componente | Estado | Notas |
|---|---------|---------|------------|--------|-------|
| 01 | Hero (PRICING + 3 tier cards) | `1:13965` | inline en `pricing.astro` | ✅ Built 2026-04-30 | Eyebrow `Planos` yellow + `Simples pricing` 56px + subhead + trust pill + 3 tier cards (Inicial/Pro highlighted/Empresarial) con 4 corner T markers c/u. |
| 02 | Comparison table | `1:14132` | inline en `pricing.astro` | ✅ Built 2026-04-30 | Section header `[ comparativo ]` periwinkle + `Compare plans` 40px + tabla 4-col HTML semantic. Pro column header yellow + body cells bg #141414 (vs #050505 otros). Checkmark/X SVGs custom. |
| 03 | FAQ | `1:14252` | inline en `pricing.astro` | ✅ Built 2026-04-30 | Section header `[ duvidas ]` yellow + `Perguntas frequentes` + 4 `<details>` items con + → × icon transition (group-open:rotate-45). Q1 abierta por default con answer. |
| 04 | CTA | `3:2496` | inline en `pricing.astro` | ✅ Built 2026-04-30 (asset gris) | `[ get comecaed ]` + `Start building with Eagle today` 48px + subhead + 2 CTAs (yellow + secondary). Visual derecho = placeholder gris con label `[ asset placeholder — Edgar reemplaza ]` (Figma original es composición Polygon compleja, no replicada). |
| 05 | Footer | `3:4575` (instance) | `Footer.astro` | ✅ Built (shared) | Reusa Footer global de BaseLayout. |

## Componentes transversales

| Componente | Node ID | Descripción | Estado |
|-----------|---------|-------------|--------|
| Footer | `3:5921` (Style Guide page) / `3:3168` (instance en Inicio) | Pie de página con CTA "Stay updated" + 4 columnas de links | ⚠️ Exists, verificar |
| Navbar | `3:5960` (Style Guide page) | Pill única + Platform dropdown | ✅ Built |
| Button | `3:5989` (Style Guide page) | Botón base | ✅ Built (uso indirecto) |
| LiquidCarousel | _(no Figma, custom)_ | Componente halftone carousel hero | ✅ Built |
| LiquidCanvas | _(no Figma, custom)_ | Canvas halftone usado dentro de Hero | ✅ Built |

## Set canónico de blogs (consistencia 7 ↔ 3 ↔ 3)

7 posts maestros en Blogs page (`1:15113`):
1. Building Real-Time Data Pipelines at Escale — Engenharia (featured)
2. How We Cut Pipeline Latency by 85% With Adaptive Buffering — Engenharia
3. A Practical Guide to Vector Search at Produtoion Escale — Engenharia
4. Designing Anomaly Detection That Engineers Actually Trust — Produto
5. From Cron Jobs to Streams: Migrating Off Legacy ETL — Engenharia
6. Inside Eagle: Nossa Multi-Region Failover Architecture — Engenharia
7. Why We Open-Sourced Nossa Schema Diffing Engine — Codigo aberto

- **Inicio blog preview** (sección 10) → posts #1, #3, #4
- **Blog post related** (Blog post page) → posts #2, #5, #6 (los más temáticamente relacionados al main post #1)

## Corner markers & sistema decorativo

Ver memoria [reference-eagle-corner-markers.md](../memory/reference-eagle-corner-markers.md) — sistema de marcadores T/cruz en intersecciones de líneas. Aplicable a Hero y Solution Recursos (Solution usa T markers en esquinas del container bordeado).

## Reglas de fidelidad (enlazadas desde memoria)

Antes de construir o QA una sección, releer:

- [feedback-figma-no-inventar.md](../memory/feedback-figma-no-inventar.md) — copy char-por-char, nodeIds reales, colores exactos (hovers/animaciones OK por default)
- [feedback-medidas-rem.md](../memory/feedback-medidas-rem.md) — rems, no px (regla Eagle)
- [feedback-no-batch-diseno.md](../memory/feedback-no-batch-diseno.md) — sección por sección con Edgar presente

## Workflow por sección (contrato)

1. Leer esta tabla para obtener `nodeId` de la sección. Si falta, correr `/eagle-sitemap-complete` antes.
2. `mcp__claude_ai_Figma__get_design_context(fileKey, nodeId)` → texto, colores, spacing, tipografía exactos. Si hay Code Conectar mapping, usar el componente del repo directo.
3. `mcp__claude_ai_Figma__get_screenshot(fileKey, nodeId)` → referencia visual.
4. Construir el componente con assets correctos (copy, colores, dimensiones, SVGs del MCP). Hovers y micro-animaciones por default OK — Edgar escala después.
5. QA: releer MCP calls y comparar copy + colores + layout vs screenshot. Corregir drift de datos.
6. Actualizar estado en esta tabla.

Si un `nodeId` falta o resulta incorrecto, **corregirlo en este archivo antes de seguir**. No construir con nodeId inventado.

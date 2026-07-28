# Inventário do banco — `bank/_raw/`

Levantado em 2026-07-16 correndo os comandos de verdade (`remix.mjs plan`, leitura de `package.json`,
`SITE_MAP.md`, `HOW_TO_USE.md`, `README.md`, e scanners próprios). Nada aqui foi deduzido do nome da pasta.

> **Aviso de concorrência:** no início da varredura havia **30 pastas**; a meio passaram a **45**
> (chegaram `hero1, hero3, hero4, hero6, hero8, hero9, hero11, hero12, hero14, hero15, hero16, hero18,
> hero21, hero23, hero24, hero25`). Outro agente está a descarregar para `bank/` em paralelo.
> Os números abaixo são o retrato das 45 pastas presentes no fim da varredura.

## Resumo executivo

- **Páginas completas: 3** (`pg_eagle2`, `pg_eagle5`, `pg_stride`). Só 2 são multi-página.
- **Seções: 17** — e **todas as 17 são depoimentos**. Zero preços, zero FAQ, zero footer, zero hero.
- **Heroes: 24 pastas**, das quais **5 estão vazias** (só um `.txt` com link do Google Drive) e ~19 são
  demos de *um efeito* (Codrops/Awwwards), não heroes de página.
- **Buildam: 6** — `pg_eagle2` e `pg_eagle5` (`astro build`), `pg_stride` (`next build`),
  `pg_clarix` e `hero24` e `hero25` (`vite build`). `hero12` tem build por Parcel. O resto é HTML solto.
- **Nenhum `node_modules` instalado** em lado nenhum → nenhum build foi *executado* para confirmar.
  O que está registado é o `scripts.build` declarado, não uma build verificada.

## Tabela — ordenada por utilidade

| # | Pasta | O que é | Stack | Builda | Peso | Cores `:root` | Arquétipo que serve | Veredito |
|---|---|---|---|---|---|---|---|---|
| 1 | `pg_eagle2/aeline/aeline` | **Página completa multi-página** — 11 rotas (`index, about, services, services/[slug], pricing, blog, blog/[slug], team/[slug], contact, 404, 401`) + 31 componentes + content collections type-safe + SEO (OG/JSON-LD/sitemap/robots) | Astro 6 + GSAP/ScrollTrigger + Swiper | ✅ `astro build` | 4,5 MB | 60 cores / 274 vars em `src/styles/tokens.css` | **escritorio-sobrio** e **consultorio-sereno** — claro, Plus Jakarta+Inter, acento verde-limão `#d6fd70`, CSS puro sem Tailwind e estrutura serviços/equipa/blog que é exatamente a de advogado/contador/clínica | ⭐ **usar** |
| 2 | `pg_eagle5/vaultix/Vaultix` | **Página completa multi-página** — 9 rotas (`index, about, features, features/[slug], pricing, blog, blog/[slug], team/[slug], contact`) + 27 componentes. Traz `SITE_MAP.md` mapeando cada secção ao nodeId do Figma, + `TEMPLATE_CONVENTIONS.md` e 14 docs `.claude/` | Astro 6 + Tailwind 4 + GSAP + Three.js (`ParticleSphere.astro`) | ✅ `astro build` | 5,5 MB | fundo `#050505`, acento amarelo `#fdff22`, `--color-*` (9 tokens, poucos e limpos) | **ourivesaria-noturna** e **ginasio-cinetico** — preto quase absoluto, Geist Mono, canvas halftone/liquid/partículas. É o oposto de consultorio-sereno | ⭐ **usar** |
| 3 | `pg_stride` | **Página completa de UMA página** — só `app/page.tsx` → `HomeView`. Secções em `src/views/`: hero, about, product, showcase, stats, works, logo-marquee, site-nav, site-footer, contact-form + 3 cenas Three.js (chain, plasma-burst, footer-scene) | Next 16 + React 19 + Tailwind 4 + Lenis + Three + react-spring + zustand + zod | ✅ `next build` | **18,7 MB** | 23 vars em `globals.css` (hero `#04070f`, azul `#1246e2`, lima `#b6f13a`) | **ginasio-cinetico** — hero escuro com plasma/glow ciano e lima, movimento agressivo | **ok, com ressalva** — 6,5 MB só em `public/assets/images/3rd/approach.png` + 1,8 MB em `6th.png`. E é React/Next: destoa do resto do banco (tudo Astro/HTML). Uma página só |
| 4 | `pg_clarix/clarix` | **Não é página** — `<title>3D Model`. Um viewer Three.js de um `model.glb` com `lil-gui` | Vite 8 + Three + Lenis + lil-gui | ✅ `vite build` | 4,2 MB | 20 cores / 23 vars | Peça pontual de 3D, não um arquétipo | **evitar como base** — `public/gradient.png` sozinho tem **3,4 MB**, e o `lil-gui` é painel de debug. Serve só para roubar a técnica do canvas |
| 5 | `hero26` | Hero de reveal com 6 imagens — "Outfit Landing Page Reveal Animation" | HTML + GSAP SplitText + CustomEase | — | 646 KB | 3 | **vitrine-fotografica**, **boticario-editorial** | ⭐ **usar** — leve para o que entrega, reveal editorial |
| 6 | `hero13` | "Rapid Image Layers Animation" (Codrops) — 10 imagens em camadas + cursor custom | HTML + GSAP | — | 1,3 MB | 0 | **vitrine-fotografica** (pousada/imobiliária) | **ok** — sem tokens `:root`, recolorir é à mão |
| 7 | `hero14` | "Hover Motion & Transition Image Grid" — grelha com Flip | HTML + GSAP/ScrollTrigger/Flip + Lenis | — | 1,3 MB | 4 | **vitrine-fotografica** | **ok** |
| 8 | `hero11` | "Entrance Animation for Images" (Codrops) — 2 demos | HTML + GSAP/ScrollTrigger | — | 2,2 MB | 6 | **vitrine-fotografica** | **ok** |
| 9 | `hero15` | "Intro Image Trail Animation" — rasto de imagens no cursor | HTML + GSAP SplitText/Flip | — | 300 KB | 0 | **ourivesaria-noturna**, **vitrine-fotografica** | **ok** — leve |
| 10 | `hero21` | "gallery of fame — awwwards rebuild" | HTML + GSAP | — | 2,0 MB | 0 | **vitrine-fotografica** | **ok** |
| 11 | `hero24` | "Nite Riot Landing Page Reveal Animation" | Vite + GSAP + CustomEase | ✅ `vite build` | 2,4 MB | 0 | **ourivesaria-noturna**, **ginasio-cinetico** | **ok** |
| 12 | `hero16` | "Circular Text Effect" — 2 demos, texto circular | HTML + GSAP | — | 36 KB | 0 | **boticario-editorial**, **ourivesaria-noturna** | **ok** — mais leve do banco todo, é um selo/carimbo |
| 13 | `hero20` | "Cinematic Loader Entrance" — tem `README.md`, `LICENSE.txt`, `src/` (SCSS) + `dist/` | HTML/SCSS + GSAP/ScrollTrigger | — (tem `src`+`dist` prontos) | 10 KB | 0 | qualquer — é loader de entrada | ⭐ **usar** — 10 KB, licenciado, documentado, com fonte e dist |
| 14 | `hero1` | "Aurelia Moreau" — página-cartão pessoal | HTML + GSAP | — | 450 KB | 2 | **boticario-editorial**, **consultorio-sereno** | **ok** |
| 15 | `hero4` | "AURELIA — Premium Motion Studio" | HTML + GSAP | — | 84 KB | 2 | **boticario-editorial** | **ok** — leve |
| 16 | `hero25` | "loader" — loader com Three.js | Vite + GSAP + Three | ✅ `vite build` | 106 KB | 0 | **ginasio-cinetico** | **ok** |
| 17 | `hero12` | "Repetitive Typography Animation" (Codrops) — 100 ficheiros | HTML + GSAP/ScrollTrigger, build por Parcel | ⚠️ `npm run clean && npm run build:parcel` | 3,3 MB | 0 | **ginasio-cinetico** (tipografia gritada) | **evitar** — 3,3 MB e 100 ficheiros para *um* efeito de tipografia; toolchain Parcel destoa de tudo |
| 18 | `hero3` | "Next Timeline" | HTML + GSAP | — | 6 KB | 0 | **escritorio-sobrio** (timeline/percurso) | **ok** — 6 KB |
| 19 | `hero5` | "Awesome Preloader" | HTML + GSAP | — | 5 KB | 0 | qualquer — preloader | **ok** |
| 20 | `hero6` | "AWWARDS PAGE REVEAL" — ficheiro único | HTML + GSAP | — | 5 KB | 0 | qualquer — reveal de entrada | **ok** |
| 21 | `hero9` | `<title>Component Demo` — genérico | HTML + GSAP/ScrollTrigger/SplitText/CustomEase | — | 811 KB | 3 | indefinido — precisa abrir no browser | **ok** |
| 22 | `hero23` | "Landing Page Reveal Animation" | HTML + GSAP | — | **4,3 MB** | 0 | **vitrine-fotografica** | **evitar** — 4,3 MB, sendo 1,0 MB só em `assets/img6.jpg`; comprimir antes de usar |
| 23 | `hero8` | `<title>Component Demo` — genérico | HTML + GSAP | — | **3,1 MB** | 0 | indefinido | **evitar** — 3,1 MB sem título que diga o que é |
| 24 | `hero7`, `hero17`, `hero18`, `hero19`, `hero22` | **VAZIOS.** Cada um tem só um `.txt` (`HERO 1243.txt`, `HERO 214.txt`, `HERO 232.txt`, `HERO 233222.txt`, `HERO 753.txt`) com o texto "Acesse esse link:" + um URL do Google Drive. **Zero código.** | — | — | 0 KB | 0 | nenhum | ❌ **evitar** — o Code Eagle entregou um link em vez do ZIP. Só entram no banco se alguém descarregar do Drive à mão |
| 25 | `hirely` | Seção **depoimentos** — "Industry-leading results with Hirely" | HTML + GSAP/ScrollTrigger | — | 234 KB | 65 cores / 315 vars | **balcao-de-bairro**, **ginasio-cinetico** — paleta viva (azul `#5546ff`, rosa, lima, amarelo) | ⭐ **usar** — a mais rica em tokens *vivos* do banco |
| 26 | `hirekit` | Seção **depoimentos** | HTML + GSAP/ScrollTrigger | — | 1,4 MB | 34 cores / 133 vars | **ourivesaria-noturna** — roxo forte `#520080` usado 17× + lima `#b4ff1f` | ⭐ **usar** — acento inequívoco e muito usado |
| 27 | `vetic` | Seção **depoimentos em marquee** | HTML + GSAP/ScrollTrigger | — | 255 KB | 49 cores / 75 vars | **afeto-ilustrado** (pet/vet) — rosa `#f2a4e6`, azul-claro `#beefff`, amarelo `#ffe500`. É literalmente o template do cliente-teste veterinária | ⭐ **usar** |
| 28 | `upmind` | Seção **depoimentos** com Swiper | HTML + GSAP/SplitText + Swiper | — | 87 KB | 65 cores / 280 vars | **ginasio-cinetico** — verde-néon `#b7fe02` usado 8× | ⭐ **usar** — 87 KB e slider funcional |
| 29 | `doorly` | Seção **depoimentos** | HTML + GSAP/ScrollTrigger | — | 554 KB | 14 cores / 112 vars | **balcao-de-bairro** — laranja `#ff6b41` usado 7×, Plus Jakarta | ⭐ **usar** — **única seção do banco sem uma só cor morta** |
| 30 | `vaultix` | Seção **depoimentos** — "What engineering teams say" | HTML + Tailwind(browser CDN) + GSAP/SplitText/CustomEase | — | **20 KB** | 9 cores / 13 vars | **ourivesaria-noturna** — preto `#050505` + amarelo `#fdff22` | ⭐ **usar** — 20 KB, a mais leve. É a mesma identidade do `pg_eagle5`, casam |
| 31 | `catalis` | Seção **depoimentos + about** | HTML + GSAP/ScrollTrigger/SplitText/CustomEase | — | 2,0 MB | 30 cores / 129 vars | **escritorio-sobrio** — azul `#0054f9` | **ok** — 115 ficheiros (fontes Inter em todos os subsets cirílico/grego que não usamos) |
| 32 | `aeline` (seção) | Seção **slider de depoimentos** | HTML + GSAP/ScrollTrigger + Swiper | — | 1,1 MB | 30 cores / 137 vars | **consultorio-sereno** — verde `#d6fd70` | **ok** — mesma identidade do `pg_eagle2`, casam. Peso é quase todo fontes |
| 33 | `advisora` | Seção **depoimentos** | HTML + GSAP/ScrollTrigger | — | 51 KB | 56 cores / 76 vars | **escritorio-sobrio** — verde-petróleo `#083630` + laranja `#fb4d17` | ⭐ **usar** — 51 KB, acento vivo |
| 34 | `acelia` | Seção **depoimentos** com Swiper | HTML + GSAP + Swiper | — | 43 KB | 21 cores / 66 vars | **consultorio-sereno** — lilás `#cdcbff`, fundo `#001d21`/creme `#f5f2ed` | ⭐ **usar** — 43 KB |
| 35 | `stayli` | Seção **depoimentos** | HTML + **só Swiper** (sem GSAP) | — | 244 KB | 50 cores / 76 vars | **vitrine-fotografica** (pousada) — bege `#e2deb7` + lilás `#cdcbff` | **ok** |
| 36 | `genovas` | Seção **grelha de depoimentos** | HTML + GSAP/ScrollTrigger | — | 55 KB | 63 cores / 91 vars | **boticario-editorial** — amarelo-pálido `#f3ec9e` | **ok** — leve |
| 37 | `coverly` | Seção **quote/data** | HTML + GSAP/ScrollTrigger | — | 54 KB | 62 cores / 214 vars | **balcao-de-bairro** — laranja `#ff6301` | **ok** |
| 38 | `aurae` | Seção **depoimentos** | HTML + GSAP/ScrollTrigger/SplitText | — | 204 KB | 57 cores / 263 vars | **boticario-editorial** — Libre Caslon Condensed itálico + Nacelle | **ok, com ressalva** — ver "cores mortas" abaixo |
| 39 | `firmo` | Seção **depoimentos two** | HTML + GSAP/ScrollTrigger | — | 232 KB | 48 cores / 70 vars | **escritorio-sobrio** — quase-branco `#fbfbf9` | **ok, com ressalva** — ver "cores mortas" |
| 40 | `congra` | Seção **depoimentos** com Swiper | HTML + GSAP/ScrollTrigger + Swiper | — | 370 KB | 3 cores / 6 vars | **ginasio-cinetico** — Anton + Geist, azul `#2562ff` | **ok, com ressalva** — ver "cores mortas" |
| 41 | `pipely` | Seção **success stories** | HTML + GSAP/ScrollTrigger | — | 25 KB | 25 cores / 52 vars | **balcao-de-bairro** — amarelo-lima `#ebf213`, fundos pastel | **ok, com ressalva** — ver "cores mortas" |

---

## Dois erros no `remix.mjs plan` que estragam o remix se confiares nele

Verifiquei ambos correndo o comando e comparando com o código-fonte. Não são teoria.

### 1. A linha `libs:` mente

`tools/remix.mjs:97` procura `/gsap|lenis|three|swiper|tailwind|react/gi` **sem `\b`**, e procura no
CSS **+ HTML junto** — comentários incluídos. Resultado:

- `acelia` reporta `three` porque o HTML tem o comentário `in three ways:` e `all three pieces`.
- `advisora` reporta `react` por causa do comentário `react together`.
- `catalis`, `hirekit`, `doorly`, `hirely`, `aurae`, `genovas` reportam `three` por classes CSS
  `is-three`, `.about_img-three`, `.cta_visual-three`.

**Nenhuma das 17 seções usa Three.js.** Os únicos ficheiros no banco que importam mesmo `three` são:
`hero25/Loader-main/src/main.js`, `pg_clarix/clarix/main.js`,
`pg_eagle5/vaultix/Vaultix/src/components/ParticleSphere.astro` e
`pg_stride/src/lib/three/{chain-scene,gradient-background-scene,plasma-burst-scene}.ts`.

### 2. "CORES DE MARCA" põe cores mortas no topo

O `plan` ordena por croma, e não verifica se a var é *usada*. As quatro
`--new-base---accent-{sky,cyan,violet,indigo}` (`#0ea5e9`, `#06b6d4`, `#7c3aed`, `#4f46e5`) são
boilerplate morto do Webflow: **definidas 2× e referenciadas 0× via `var()`** em advisora, aeline,
aurae, catalis, coverly, firmo, genovas, hirely, stayli, upmind, vetic. Trocá-las não muda um pixel.

**Cores vivas reais** (contadas por `var()` usado), para o brief não apontar ao vazio:

| Seção | Acento(s) que existem mesmo |
|---|---|
| `hirekit` | `--base--purple-strong` `#520080` (17×) · `--base--mint-strong` `#b4ff1f` (3×) |
| `hirely` | `--base--blue-500` `#5546ff` (10×) · `--base--pink-300` `#fe7aca` (3×) |
| `upmind` | `--base--neon-green` `#b7fe02` (8×) |
| `advisora` | `--brand--secondary` `#fb4d17` (8×) · `--brand--primary` `#083630` (4×) |
| `doorly` | `--base--orange` `#ff6b41` (7×) |
| `vetic` | `--brand--pink` `#f2a4e6` (6×) · `--brand--light-blue` `#beefff` (3×) · `--brand--yellow` `#ffe500` (3×) |
| `aeline` | `--base--green` `#d6fd70` (5×) |
| `acelia` | `--color-accent` `#cdcbff` (4×) |
| `stayli` | `--brand--neutral-dark` `#e2deb7` (4×) |
| `genovas` | `--brand--yellow` `#f3ec9e` (3×) |
| `catalis` | `--base--blue` `#0054f9` (2×) |
| `coverly` | `--base--orange` `#ff6301` (2×) |
| `vaultix` | `--color-accent` `#fdff22` (1×) |

**Quatro seções não têm NENHUMA cor de marca viva** — `aurae`, `congra`, `firmo`, `pipely`.
Em `congra` o azul `#2562ff` aparece **7× hardcoded** em `styles.css` (Webflow minificado) e
**0× via `var()`**. Nestas quatro, `remix skin` a trocar o `:root` não vai recolorir nada;
é preciso `replace` no CSS.

---

## O que falta no banco

O `catalogo.json` já avisa que a 1ª colheita saiu enviesada, e confirma-se: as **17 seções são
todas depoimentos**. Para montar uma página por arquétipo faltam **preços, FAQ, footer, serviços,
contacto** — e nenhum hero de *página* (os `hero*` são demos de efeito isolado, tipo Codrops).

Hoje só há duas formas de entregar página completa: `pg_eagle2` (claro, multi-página) e
`pg_eagle5` (escuro, multi-página). São **2 templates para 8 arquétipos** — e a regra anti-repetição
do `remix.mjs` ("dois clientes do mesmo nicho NUNCA recebem o mesmo template") não tem material
para se cumprir. O `pg_stride` é a terceira página, mas é React e de uma página só.

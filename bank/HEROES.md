# HEROES — colheita Code Eagle

Colhido em 2026-07-16 a partir de `bank/catalogo.json` → `heroes` (24 entradas).
Todos os 24 foram tentados. **19 vieram com código utilizável, 5 são redirects para Google Drive.**

Fonte: Code Eagle (assinatura do Mateus, licença comercial p/ projeto de cliente).
Verificado correndo download + `unzip` + análise de ficheiros. Nada aqui é suposição —
os arquétipos são a única coluna que é juízo meu (ver nota no fim).

---

## Tabela

| # | KB | Stack | Builda? | O que é | Arquétipo | Estado |
|---|----|-------|---------|---------|-----------|--------|
| hero1 | 450 | GSAP (CDN) | estático | Portfólio fashion "Aurelia Moreau", h1 FASHION, 5 imagens | vitrine-fotografica | ok |
| hero3 | 6 | GSAP (CDN) | estático | Hero de texto dark `#0a0a0a` + radial, h1 "BECOME". Arial (sem font externa) | ourivesaria-noturna | ok |
| hero4 | 84 | GSAP + SplitText (CDN) | estático | "AURELIA — Premium Motion Studio", fundo `#000`, poster.jpg | ourivesaria-noturna | ok |
| hero5 | 5 | GSAP (CDN) | estático | Preloader branco→`#141516`. Utilitário, não hero completo | qualquer (loader) | ok |
| hero6 | 5 | GSAP (CDN) | estático | "AWWARDS PAGE REVEAL", `#f1f0ee`, Host Grotesk via Google Fonts. **1 ficheiro só** | escritorio-sobrio / consultorio-sereno | ⭐ |
| hero7 | 0 | — | — | ZIP contém só `HERO 1243.txt` → link Google Drive | — | redirect |
| hero8 | 3139 | GSAP + SplitText (CDN) | estático | Editorial agressivo amarelo `#ebdc0b` + `#000`, h1 "Howard", 7 imagens | ginasio-cinetico | ok |
| hero9 | 811 | GSAP + ScrollTrigger + SplitText (CDN) | estático | Contador/loader numérico, DM Sans (Google Fonts) | qualquer (loader) | ok |
| hero11 | 2165 | GSAP + ScrollTrigger | estático | "Entrance Animation for Images", h1 Astral, serif Gloock (Google Fonts), 25 imagens, 3 demos | vitrine-fotografica | ⭐ |
| hero12 | 3359 | Splitting + GSAP + ScrollTrigger | **BUILD** (Parcel) | "Repetitive Typography Animation" (Codrops), 86 imagens | boticario-editorial | ok ⚠ Typekit |
| hero13 | 1343 | GSAP | estático | "Rapid Image Layers Animation", 10 imagens | vitrine-fotografica | ok ⚠ Typekit |
| hero14 | 1292 | GSAP + Lenis + ScrollTrigger | estático | "Hover Motion & Transition Image Grid" (NovaMotion), 27 imagens | vitrine-fotografica | ok ⚠ Typekit |
| hero15 | 300 | GSAP + SplitText | estático | "Intro Image Trail Animation" — trilho de imagens no cursor | boticario-editorial | ok ⚠ Typekit |
| hero16 | 36 | GSAP | estático | "Circular Text Effect", 3 demos | ourivesaria-noturna | ok ⚠ Typekit |
| hero17 | 0 | — | — | ZIP contém só `HERO 214.txt` → link Google Drive | — | redirect |
| hero18 | 0 | — | — | ZIP de **307 bytes** → só `HERO 232.txt` → link Google Drive | — | redirect |
| hero19 | 0 | — | — | ZIP contém só `HERO 233222.txt` → link Google Drive | — | redirect |
| hero20 | 10 | GSAP + ScrollTrigger (CDN) | estático | "Cinematic Loader Entrance", `#fff`/`#000`, Inter (Google Fonts). **MIT LICENSE explícita** | qualquer (loader) | ⭐ |
| hero21 | 2036 | GSAP (CDN) | estático | "gallery of fame — awwwards rebuild", `#e3e3e3`, Montserrat, 5 imagens | vitrine-fotografica | ⭐ |
| hero22 | 0 | — | — | ZIP contém só `HERO 753.txt` → link Google Drive | — | redirect |
| hero23 | 4331 | GSAP (CDN) | estático | "Landing Page Reveal", paleta sálvia/bege `rgb(196,196,176)`, 7 imagens | consultorio-sereno / boticario-editorial | ok |
| hero24 | 2430 | GSAP + split-type | **BUILD** (Vite) | "Nite Riot Landing Page Reveal", `#e3e3db`/`#000`. Deps no package.json, **zero CDN** | escritorio-sobrio | ⭐ |
| hero25 | 106 | Three.js + GSAP | **BUILD** (Vite) | "WEBGL LOADER" — loader shader WebGL, Helvetica. Sem modelo 3D (é shader) | qualquer (loader) | ok |
| hero26 | 646 | GSAP + SplitText | estático | "Outfit Landing Page Reveal", 6 imagens | boticario-editorial | ⭐ |

---

## Os 5 redirects (NÃO é bug nosso, e NÃO são ZIPs corrompidos)

hero7, hero17, hero18, hero19, hero22. A hipótese do briefing era "ZIP quebrado no servidor
(ex: 307 bytes)". **Verifiquei: não estão quebrados.** Descompactam bem — só que lá dentro
há um único `.txt` de 212 bytes com um link Google Drive, ex:

```
Acesse esse link:
https://drive.google.com/file/d/1l1m2DpbY0PreRqrYYtsp6gHY-oG8Uq3i/view?usp=drive_link
```

Ou seja: o Code Eagle serviu estes 5 por Drive em vez de meter no bucket. O código existe,
só está atrás de um link. Recuperáveis à mão se algum interessar — nenhum é bloqueante.

## ⚠ Armadilha do Typekit (hero12, 13, 14, 15, 16)

Estes 5 são demos do **Codrops** e carregam fontes via `use.typekit.net`. O kit Typekit é
**preso ao domínio da conta do Codrops** — num site de cliente as fontes não carregam e cai
para fallback. São exatamente os que têm a tipografia mais bonita (meno-banner, new-science,
kudryashev, normalidad-wide). Usar a técnica: sim. Contar com a fonte: não.

## ⚠ Nenhum pacote traz ficheiros de fonte

Verifiquei: **zero** `.woff/.woff2/.otf/.ttf` em qualquer um dos 24. Os que pedem
"PP Neue Montreal" (hero23, 24, 26), "PP Neue World" (hero8) e os Typekit (12–16) vão
renderizar em fallback do sistema. PP Neue Montreal é comercial (Pangram Pangram).

Os que sobrevivem intactos porque usam fonte livre: **hero6** (Host Grotesk), **hero9**
(DM Sans), **hero11** (Gloock), **hero20** (Inter), **hero21** (Montserrat) — todos Google Fonts.

## Os ⭐ e porquê

- **hero20** — a história de licença mais limpa do lote: MIT explícita, 10KB, Inter. Zero atrito.
- **hero24** — o único verdadeiramente nativo do Vercel: build Vite, deps no package.json, sem CDN, sem Typekit.
- **hero21** — leve de rebrand: paleta clara neutra + Montserrat livre. Funciona out-of-the-box.
- **hero6** — 5KB, ficheiro único, fonte livre, paleta clara. O reveal mais barato de aplicar.
- **hero11** — melhor motor de entrada de imagens com fonte livre (Gloock) e 3 variantes.
- **hero26** — reveal editorial forte; só trocar a fonte comercial por substituto livre.

## Notas honestas

- **Peso**: hero23 (4.3MB), hero12 (3.4MB), hero8 (3.1MB) são quase todo imagem de demo.
  O peso real depois de trocar o conteúdo é uma fração — não descartar por causa do KB.
- **Vídeo**: nenhum dos 24 traz `.mp4/.webm`. Tudo imagem.
- **GSAP**: a maioria puxa GSAP por CDN (jsdelivr/cdnjs). Em Vercel, prefere-se npm — trivial de converter.
  SplitText/ScrollTrigger aparecem à vontade; desde 2025 os plugins GSAP são gratuitos.
- **Coluna Arquétipo é juízo meu**, deduzido do que observei (paleta, tipografia, tipo de média,
  energia do movimento). O Code Eagle não classifica por nicho — não há metadado a confirmar isto.
- **Cobertura**: os 24 heroes do catálogo estão todos em `bank/_raw/`. As outras categorias do
  site (Scroll 57, Menu 31, Cursor 26, Botões 35...) continuam por colher — as URLs só saem do
  site autenticado, e o `catalogo.json` só tem `secoes` e `heroes`.
- `tools/ce-harvest.mjs pull` só lê `catalogo.secoes` — **não baixa heroes**. Usei script próprio
  no scratchpad. Se quiseres, dá para ensinar o `pull` a aceitar `heroes` (não toquei em `tools/`).

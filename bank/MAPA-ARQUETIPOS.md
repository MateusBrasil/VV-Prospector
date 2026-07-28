# Mapa arquétipo → template — `bank/`

Levantado em 2026-07-16. Cada afirmação abaixo foi verificada correndo o comando ou lendo o ficheiro.
Onde não verifiquei, está escrito "não verificado".

> Lê primeiro o quadro seguinte. Ele muda o que este mapa significa.

---

## O achado que reordena tudo: o `remix.mjs` é CEGO às duas páginas

Corri `plan` nos três templates de página. Resultado real, colado do terminal:

```
╭─ REMIX PLAN — pg_eagle2          ╭─ REMIX PLAN — pg_eagle5
│  169 ficheiros · 4551 KB         │  135 ficheiros · 5508 KB
├─ CORES DE MARCA — 0              ├─ CORES DE MARCA — 0
├─ IMAGENS a trocar — 0            ├─ IMAGENS a trocar — 0
├─ TÍTULOS a reescrever — 0        ├─ TÍTULOS a reescrever — 0
```

E `plan vetic` (seção HTML) devolve **15 cores, 34 neutros, 26 vars**. Funciona.

**A ferramenta automatiza exatamente o material que é todo igual (17 depoimentos) e falha
exatamente no material que diferencia (as 2 páginas).** Não é opinião — é o output acima.

### Porquê — duas causas diferentes, com diagnóstico fechado

| Template | Causa verificada | Fixável? |
|---|---|---|
| `pg_eagle2` | O bloco `:root` de `src/styles/tokens.css` tem **7776 chars**; o regex de `remix.mjs:52` capa em `{10,6000}` → não casa → 0 tokens. Medido: `block length: 7776 (regex cap is 6000)`. Com o cap subido para 20000 recupera **137 vars / 30 cores**. | **Sim — 1 número.** `6000` → `20000` |
| `pg_eagle5` | Tailwind 4. As cores vivem em `@theme { }` (`src/styles/global.css:4`), **não** em `:root`. O regex `:root\s*\{` nunca vai casar, com qualquer cap. | Sim, mas exige aceitar `@theme` |

### E mesmo com as cores resolvidas, o `skin` não reescreve o site

`remix.mjs:130` — `if (!['.html','.css','.js'].includes(ext)) { copyFileSync(f, dest); continue; }`.
Tudo o que não for HTML/CSS/JS é **copiado byte a byte**. Contado, não estimado:

| Template | Ficheiros que o `skin` REESCREVE | Ficheiros copiados cegos (`.astro/.tsx/.ts`) |
|---|---|---|
| `pg_eagle2` | **7** de 169 (só os `.css`) | **47** |
| `pg_eagle5` | **1** de 135 (`global.css`) | **44** |
| `pg_stride` | **4** de 174 (2 são `draco_*.js` de WASM) | **83** |

Consequências medidas:

- **`pg_eagle5` entrega o site do cliente a dizer "Vaultix".** A string aparece **11× em 10 ficheiros
  `.astro/.ts`** que o `skin` copia intactos. Verificado por `grep`.
- **`pg_eagle2` não tem esse problema: "Aeline" aparece 0× no código.** O template é neutro de marca.
  Mas o **conteúdo** dele vive em content collections `.json` (`src/content/{articles,services,workers}`,
  **12 ficheiros**) — e `.json` também não está na lista de reescrita. Um advogado receberia um site
  com serviços chamados *"AI strategy"*, *"Data insights"* e artigos *"5 ways AI can streamline
  business operations"*. É um template de consultoria de IA com conteúdo de consultoria de IA.
- O verde `#d6fd70` do `pg_eagle2` está **hardcoded em `BaseLayout.astro`, `Pricing.astro`,
  `PricingHero.astro`, `favicon.svg`** além do `tokens.css`. Trocar o `:root` não recolore esses.

**Tradução para as 13h:** o caminho `plan → skin` funciona **hoje** para as 17 seções de depoimentos.
Para as 2 páginas, o remix é **manual** — clonar a pasta e editar `.astro` + `.json` à mão.
Isso é trabalho de pessoa, não de comando.

---

## Cobertura real: **2 de 8** arquétipos têm página. E os 2 são o mesmo par de esqueletos.

Há **2 templates de página** no banco (`pg_eagle2` claro, `pg_eagle5` escuro). Esticando-os por
recoloração dá para *servir* 4 arquétipos — mas então **um dentista e um advogado recebem o mesmo
esqueleto**, que é precisamente o que a regra anti-repetição do `remix.mjs` existe para impedir
(o próprio docstring promete "17 templates × copy diferente"; os 17 são todos depoimentos).

| Arquétipo | Página base | Seção | Hero | Estado honesto |
|---|---|---|---|---|
| escritorio-sobrio | `pg_eagle2` | `advisora` | `hero24`/`hero6` | ✅ **coberto** |
| consultorio-sereno | `pg_eagle2` ⚠️ mesmo esqueleto | `acelia`/`aeline` | `hero6`/`hero23` | 🟡 **coberto, repetido** |
| ourivesaria-noturna | `pg_eagle5` | `vaultix`/`hirekit` | `hero3`/`hero16` | ✅ **coberto** |
| ginasio-cinetico | `pg_eagle5` ⚠️ mesmo esqueleto | `upmind`/`congra` | `hero25`/`hero8` | 🟡 **coberto, repetido** |
| boticario-editorial | — | `genovas`/`aurae` | `hero26`/`hero11` | ❌ **SEM COBERTURA** |
| balcao-de-bairro | — | `doorly`/`coverly` | `hero21` | ❌ **SEM COBERTURA** |
| vitrine-fotografica | — | `stayli` | `hero11`/`hero21` | ❌ **SEM COBERTURA** |
| **afeto-ilustrado** | — | `vetic` | `hero1` | ❌ **SEM COBERTURA — e é o cliente-teste** |

> **`briefs/santaluzia.json` diz `"arquetipo": "afeto-ilustrado"`, `"nicho": "veterinária"`, e o
> `brief.remix` aponta ao `vetic`. O `vetic` é uma SEÇÃO DE DEPOIMENTOS, não uma página.**
> O nicho da demo é o único dos 8 com um match perfeito de *seção* e zero páginas.

---

## Arquétipo a arquétipo

### 1. escritorio-sobrio (advogado, contador) — ✅ o mais bem servido

- **Template base:** `pg_eagle2/aeline/aeline`. **Porquê:** 11 rotas verificadas
  (`index, about, services, services/[slug], pricing, blog, blog/[slug], team/[slug], contact, 404, 401`)
  — é literalmente o mapa de um escritório: serviços, equipa, honorários, artigos. Claro, CSS puro
  (sem Tailwind), Astro 6. E **zero menções à marca original no código**.
- **Seções:** depoimentos `advisora` (51 KB, `--brand--primary #083630` verde-petróleo 4× +
  `--brand--secondary #fb4d17` 8×) — sóbrio e vivo. Alternativa: `catalis` (`#0054f9`, mas 2,0 MB
  e 115 ficheiros de fontes Inter em subsets cirílico/grego que não usamos).
- **Hero:** `hero24` (Vite, deps no package.json, zero CDN, zero Typekit — o único nativo de Vercel)
  ou `hero6` (5 KB, ficheiro único, Host Grotesk livre).
- **O que trocar:** `src/styles/tokens.css` (`--base--blue #2453ff` é a cor de maior croma viva);
  **os 12 `.json` de `src/content/`** — é aqui que mora o conteúdo de consultoria de IA;
  o `#d6fd70` hardcoded em `BaseLayout/Pricing/PricingHero/favicon.svg`.
- **Risco:** `plan` devolve 0 até o cap do regex subir. `skin` só apanha os 7 `.css`. O trabalho real
  são os `.json` + `.astro` — **à mão**.

### 2. consultorio-sereno (nutri, dentista, psi) — 🟡 coberto, mas é o mesmo esqueleto do advogado

- **Template base:** `pg_eagle2` outra vez. **Porquê:** serviços/equipa/contacto serve clínica tão
  bem como escritório; a paleta clara e Plus Jakarta+Inter já são "serenas".
- **Seções:** `acelia` (43 KB, `--color-accent #cdcbff` lilás 4×, fundo creme `#f5f2ed`) — o mais
  sereno do banco. Ou `aeline` (seção) — `#d6fd70` 5×, e **casa de origem com o `pg_eagle2`**.
- **Hero:** `hero6` (paleta `#f1f0ee`, fonte livre) ou `hero23` (sálvia/bege — mas 4,3 MB, 1,0 MB só
  em `img6.jpg`; comprimir antes).
- **O que trocar:** o mesmo do escritorio-sobrio, mais o acento para algo frio/pastel.
- **Risco:** ⚠️ **este é o ponto que fura a promessa comercial.** Um dentista e um advogado de
  Guimarães lado a lado recebem o mesmo esqueleto de 11 rotas. Recolorir não disfarça um layout
  idêntico. Mitigação hoje: variar hero + seção + ordem das secções — não resolve, atenua.

### 3. ourivesaria-noturna (barbearia, tattoo) — ✅ coberto

- **Template base:** `pg_eagle5/vaultix/Vaultix`. **Porquê:** fundo `#050505`, acento `#fdff22`,
  Geist Mono, 9 rotas, e traz `SITE_MAP.md` com o nodeId do Figma de cada secção — o único template
  do banco com rastreio ao ficheiro de design.
- **Seções:** `vaultix` (20 KB, a mais leve do banco, **mesma identidade do `pg_eagle5` — casam
  nativamente**) ou `hirekit` (`--base--purple-strong #520080` usado 17× — o acento mais inequívoco
  do banco).
- **Hero:** `hero3` (6 KB, dark `#0a0a0a`, Arial — sem dependência de fonte externa) ou `hero16`
  (36 KB, texto circular = selo de barbearia; ⚠️ Typekit).
- **O que trocar:** `@theme` em `src/styles/global.css` (`--color-bg`, `--color-accent`,
  `--color-surface`...) — **e as 11 ocorrências de "Vaultix"** em 10 `.astro/.ts`.
- **Risco:** `skin` reescreve **1 ficheiro de 135**. Sem tocar nos `.astro`, o site vai ao ar com o
  nome do template. **Este é o template que mais parece pronto e mais engana.**

### 4. ginasio-cinetico (academia) — 🟡 coberto, mesmo esqueleto da barbearia

- **Template base:** `pg_eagle5` (escuro + agressivo). **Alternativa:** `pg_stride` — Next 16 +
  Three.js (plasma-burst, chain), mas é **1 página só** (`app/page.tsx` → `HomeView`), 18,7 MB
  (6,5 MB num `approach.png`), React no meio de um banco todo Astro/HTML, e o `skin` reescreve
  4 ficheiros dos quais 2 são `draco_*.js` de WASM. **Só se alguém quiser o 3D e editar à mão.**
- **Seções:** `upmind` (87 KB, `--base--neon-green #b7fe02` 8×, slider Swiper funcional) ou
  `congra` (Anton + Geist) — ⚠️ `congra` **não tem cor viva**: o azul `#2562ff` está 7× hardcoded
  no CSS minificado do Webflow e 0× em `var()`. `skin` no `:root` não o recolore.
- **Hero:** `hero25` (loader WebGL shader, 106 KB, build Vite) ou `hero8` (editorial amarelo
  `#ebdc0b`, mas 3,1 MB e pede PP Neue World, que é comercial → cai em fallback).
- **Risco:** o mesmo par de esqueletos do #3.

### 5. boticario-editorial (estética, spa) — ❌ SEM COBERTURA (página)

- **Template base:** **nenhum.** O `pg_eagle2` empresta a estrutura (serviços/preços/equipa serve um
  spa), mas a pele dele é consultoria corporativa, não editorial-botânico. É um enxerto, não um clone.
- **Seções que existem:** `genovas` (55 KB, `--brand--yellow #f3ec9e` 3×), `aurae` (Libre Caslon
  Condensed itálico + Nacelle — a tipografia mais editorial do banco, ⚠️ **mas 0 cores vivas**).
- **Hero:** `hero26` (reveal editorial, 646 KB — ⚠️ pede PP Neue Montreal, comercial) ou `hero11`
  (Gloock via Google Fonts, sobrevive intacto). *(Os dois inventários divergem no arquétipo do
  `hero26` — `INVENTARIO.md` diz vitrine+boticario, `HEROES.md` diz boticario. Ambos são juízo
  humano; não há metadado do Code Eagle a arbitrar. Não verificado no browser.)*
- **Colher:** uma página editorial clara com serif de display e grelha assimétrica.

### 6. balcao-de-bairro (restaurante, padaria) — ❌ SEM COBERTURA (página)

- **Template base:** **nenhum, e o enxerto é pior aqui.** Restaurante precisa de **menu/carta,
  horário, morada, reserva**. `pg_eagle2` tem `services/[slug]`, `pricing`, `blog` — a estrutura
  errada. Forçar dá um site de consultoria a fingir de tasca.
- **Seções que existem:** `doorly` (554 KB, `--base--orange #ff6b41` 7×, Plus Jakarta — **a única
  seção do banco sem uma só cor morta**) e `coverly` (`#ff6301` 2×). `pipely` tem paleta certa
  (amarelo-lima, pastéis) mas **0 cores vivas**.
- **Hero:** `hero21` (paleta clara `#e3e3e3` + Montserrat livre, out-of-the-box).
- **Colher (prioridade alta):** template com **menu/carta** e **mapa/horário**.

### 7. vitrine-fotografica (pousada, imobiliária) — ❌ SEM COBERTURA (página)

- **Template base:** **nenhum.** Este arquétipo é o que mais precisa de página (galeria, quartos/
  imóveis, disponibilidade) e é onde o banco só tem *efeitos*.
- **Seções:** `stayli` (244 KB, bege `#e2deb7` 4×, só Swiper sem GSAP) — literalmente uma pousada.
- **Heroes:** aqui o banco é **rico**: `hero11` (motor de entrada de imagens, Gloock livre, 3
  variantes), `hero21`, `hero13` (10 imagens em camadas, ⚠️ Typekit), `hero14` (grelha com Flip,
  ⚠️ Typekit), `hero23` (4,3 MB).
- **Nota honesta:** dava para montar uma vitrine **só com hero + `stayli`** e nada mais. Seria uma
  one-pager bonita, não um site de pousada. Vende-se? Talvez. É o que se prometeu? Não.
- **Colher:** template com galeria/lightbox e listagem de quartos ou imóveis.

### 8. afeto-ilustrado (pet, vet) — ❌ SEM COBERTURA — **e é o nicho da demo**

- **Template base:** **nenhum.** Nenhuma página do banco é clara-e-afetuosa. `pg_eagle2` recolorido
  para rosa `#f2a4e6` é a única via — e continua a ter conteúdo de consultoria de IA nos `.json`.
- **Seção:** `vetic` (255 KB, `--brand--pink #f2a4e6` 6×, `--brand--light-blue #beefff` 3×,
  `--brand--yellow #ffe500` 3×). É *o* match do nicho — e é a isso que o `briefs/santaluzia.json`
  já aponta. **`plan vetic` funciona** (15 cores, 34 neutros, 26 vars — corri).
- **Hero:** `hero1` (450 KB) — mas é portfólio de moda; o encaixe é fraco. Não há hero afetuoso.
- **Risco/nota:** **o cliente-teste do banco tem uma seção de depoimentos e nada mais.** Se a demo
  das 13h abrir o Santa Luzia, o que está garantido de funcionar é o remix da **seção `vetic`** —
  não uma página. Convém decidir isto antes da apresentação, não durante.
- **Colher (prioridade máxima se a demo for o Santa Luzia):** uma página clara com ilustração.

---

## Buracos do arsenal

**O buraco de forma (o mais grave):** as 17 seções são **todas depoimentos** — verificado pelos
`<title>` dos 17 (`Acelia — Testimonials`, `Vetic — Testimonials Marquee`, ...). Um site não é 17
depoimentos. Faltam, por prioridade:

| # | O que falta | Porquê dói | Existe hoje? |
|---|---|---|---|
| 1 | **Hero de página** | As 24 pastas `hero*` são demos de *um efeito* (Codrops/Awwwards), não heroes de página com nav+headline+CTA | ❌ |
| 2 | **Nav / header** | Nenhuma seção o traz. Sem isto não há página | ❌ (só dentro dos 2 `pg_*`) |
| 3 | **Footer** | idem — morada/horário/contacto é o que o negócio local mais precisa | ❌ (idem) |
| 4 | **Serviços / carta / menu** | É o miolo de vet, restaurante, spa, barbearia. 5 dos 8 arquétipos | ❌ (só as rotas dos `pg_*`) |
| 5 | **Contacto / mapa / horário** | Negócio local vive disto | ❌ (idem) |
| 6 | **Preços** | `pricing` existe nos 2 `pg_*`; zero seções soltas | ❌ |
| 7 | **FAQ** | Barato de encher com conteúdo real do cliente | ❌ |
| 8 | **Galeria / lightbox** | Bloqueia vitrine-fotografica inteiro | ❌ |

**Próxima colheita, por prioridade:**

1. **Páginas completas claras e afetuosas/editoriais** — desbloqueia 4 arquétipos de uma vez
   (afeto-ilustrado, boticario-editorial, balcao-de-bairro, vitrine-fotografica) e mata a repetição
   dentista=advogado. **É a colheita de maior retorno por hora.**
2. **Nav + Footer + Contacto** avulsos — sem isto nenhuma seção compõe uma página.
3. **Serviços/menu e Galeria.**
4. Os **5 do Google Drive** (`hero7/17/18/19/22`) — ~5 min à mão, mas são heroes de *efeito*:
   baixo retorno. **Deixar para o fim.**
5. Categorias por colher no Code Eagle (Scroll 57, Botões 35, Menu 31, Cursor 26) — **Menu 31**
   é a que ataca o buraco #2. `catalogo.json` só tem `secoes` e `heroes`; as URLs exigem o site
   autenticado. Não verificado por mim.

**Nota de ferramenta (não toquei em `tools/`):** `ce-harvest.mjs pull` só lê `catalogo.secoes` —
não baixa `heroes`. E os dois bugs do `plan` que estão em `INVENTARIO.md` (o `libs:` sem `\b`, as
cores mortas no topo) continuam de pé — confirmei o das cores mortas: `plan pg_eagle2` com o cap
corrigido põe `--new-base---accent-sky #0ea5e9` no topo das "CORES DE MARCA", e essa var é
boilerplate Webflow **usada 0× via `var()`**. O verde real do template (`#d6fd70`) nem aparece no top-6.

---

## Como usar

```bash
node tools/remix.mjs plan vetic                      # 1. seções (HTML): funciona — dá cores/imagens/títulos
                                                     # 2. mapeia o output em brief.remix = {cores, textos, imagens}
node tools/remix.mjs skin vetic briefs/santaluzia.json --out sites/santaluziavet
```
- **Seções (as 17):** o fluxo acima corre hoje. `skin` sai com erro se `brief.remix.cores` faltar — de propósito, não adivinha cor.
- **Páginas (`pg_eagle2`/`pg_eagle5`/`pg_stride`):** `plan` devolve **0** e `skin` reescreve 7/1/4 ficheiros. **Copiar a pasta e editar `.astro` + `src/content/*.json` à mão.** O comando não faz isto hoje.

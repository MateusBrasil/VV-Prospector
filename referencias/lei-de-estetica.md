# Lei de Estética — Frontend VV

> **Localização estável.** Movido em 2026-07-23 de `skills/redesign-premium/references/` (skill arquivada, ver `_ARQUIVO/redesign-premium-html-manual/LEIA-ME.md`) para `referencias/` na raiz do repositório. Este ficheiro continua a ser a fonte canônica das regras que `tools/gate.mjs` implementa mecanicamente (a camada grep-able) e que `tools/verificar.mjs` complementa com o passe visual, nenhuma das duas mudou, só a morada do documento.

> **Arquivo canônico de regras visuais.** Produzido em 2026-07-15 por painel dos 6 especialistas do frontend-squad (Rauno Freiberg, Erik Spiekermann, Emil Kowalski, Olivier Larose, Josh Comeau, Bruno Simon) + consolidação do frontend-chief, a partir do gosto declarado do Mateus — com pushback técnico onde o painel discordou (ver §9).
>
> **Precedência:** esta lei prevalece sobre qualquer preset/paleta/estilo sugerido por outras skills (`landing-forge`, `vibe-patterns`, `ui-ux-pro-max`, templates). Se um preset conflitar com uma regra 🔴 daqui, o preset perde.
>
> Legenda: 🔴 bloqueante (2+ especialistas convergem, ou norma externa, ou dor nomeada do cliente) · 🟡 recomendada (especialista único). Toda regra é PASS/FAIL verificável por grep, computed style ou screenshot.

## 1. Cor e paleta

- 🔴 **C1.** Máx. 2 famílias de matiz de marca: 1 neutra + 1 accent (família distinta = ΔH > 30° em OKLCH). Cores de status só em componentes de feedback, nunca decorativas.
- 🔴 **C2.** Gradiente decorativo: todos os stops com ΔH ≤ 30° (mono/análogo), interpolado `in oklch` ou ≥4 stops; ΔH > 60° entre stops = FAIL. Máx. 1 por viewport.
- 🔴 **C3.** Zero cor hardcoded em componente: 100% via custom properties (primitiva → semântica). Um hex fora de token = FAIL (auditável por grep).
- 🔴 **C4.** Glow: máx. 1 elemento por viewport, matiz do accent, alpha ≤ 0.25, blur ≤ 80px. *(Divergência 48px Rauno vs 80px Josh: adotado 80px — glow de hero precisa de spread; o alpha baixo é o controle real.)*
- 🟡 **C5.** Croma OKLCH: nenhuma cor com C > 0.25; accent 0.12–0.22; superfícies > 20% do viewport C ≤ 0.10; neutros C ≤ 0.03 (tint na direção do accent recomendado).
- 🟡 **C6.** 60/30/10 por viewport: ≥ 60% fundo neutro, ~30% superfícies/texto, accent ≤ 10% dos pixels (verificável em screenshot).
- 🟡 **C7.** Dark mode: bg L 10–15% (nunca 0%), texto L 88–92% (nunca 100%), accent com croma −15%.
- 🟡 **C8.** Signature moment: exatamente 1 por página, nomeado em comentário no código; único lugar autorizado a exceder orçamento (gradiente, glow ou +0.04 de croma). Dois = FAIL.

## 2. Tipografia

- 🔴 **T1.** Máx. 2 famílias + 1 mono opcional (total ≤ 3) e máx. 4 pesos carregados no site inteiro (verificar `@font-face`/`next/font`).
- 🔴 **T2.** Mesma família no primeiro e no último heading da página (`getComputedStyle` do H1 do hero === heading do footer). Dor nº 1 do cliente, agora testável.
- 🔴 **T3.** `background-clip: text` com variação de matiz/croma = FAIL sempre (Erik + Josh). Exceção única (Rauno): gradiente de luminância pura (ΔH = 0, ΔC ≤ 0.02) em display ≥ 32px, máx. 1 por página.
- 🟡 **T4.** Display font só em headings ≥ 28px. FAIL em body, botão, nav ou label.
- 🟡 **T5.** Escala única ratio 1.2–1.25, 8–10 steps tokenizados (`--text-xs`…`--text-hero`); `font-size` hardcoded = FAIL; escala Tailwind crua (12/14/16/20/24/32/48) = FAIL; ≥ 2 valores não-default.
- 🟡 **T6.** Letter-spacing por faixa: ≥ 48px → −0.03 a −0.05em; 28–40px → −0.02em; body 0; caption 11–13px → +0.01em. Heading ≥ 32px com tracking 0 = FAIL.
- 🟡 **T7.** Line-height: display ≥ 48px → 1.0–1.15; body → 1.5–1.6. Fora disso = FAIL.
- 🟡 **T8.** Body com largura 60–75ch; `text-wrap: balance` em headings, `pretty` em parágrafos. Fonte proprietária exige substituto documentado.

## 3. Espaçamento e consistência

- 🔴 **E1.** Tudo tokenizado — cor, tipo, spacing, radius, shadow, duração, easing. Valor mágico fora de token = FAIL. (Rauno + Erik + Josh: é A regra anti-IA; as demais derivam dela.)
- 🟡 **E2.** Escala base 4px: `margin/padding/gap` ∈ {4, 8, 12, 16, 24, 32, 48, 64, 96, 128}; máx. 8 valores distintos renderizados por página. Exceção: bordas 1–2px e ajuste óptico ≤ 2px.
- 🟡 **E3.** Ritmo vertical: `padding-block` de todas as seções com o mesmo token (96–128px desktop, 64–80px mobile); variação máx. de 1 degrau.
- 🟡 **E4.** Exatamente 1 max-width global (1120–1200px) + 1 variante prose (65–75ch). 3+ larguras = FAIL.
- 🟡 **E5.** Border-radius: máx. 3 valores + `9999px` pill. Aninhado: radius interno = externo − padding; cantos "brigando" = FAIL.
- 🟡 **E6.** Sombras: escala única de 3 níveis, 2–3 camadas empilhadas, mesma direção de luz (mesmo sinal x/y) e mesma matiz na página toda.

## 4. Motion e micro-interação

- 🔴 **M1.** Só `transform` e `opacity` animados (Emil + Olivier). `transition`/`animate`/`gsap.to` em `width/height/top/left/margin/background/box-shadow` = FAIL. Tamanho = FLIP ou `grid-template-rows`.
- 🔴 **M2.** Máx. 2 easings no projeto: 1 cubic-bezier padrão (`cubic-bezier(0.32, 0.72, 0, 1)`) + 1 spring (stiffness 300, damping 30). 3+ curvas no grep = FAIL. `linear` só spinner/progress e scrub; `ease-in` só em saídas.
- 🔴 **M3.** `prefers-reduced-motion` obrigatório (media query global, `useReducedMotion` e/ou `gsap.matchMedia`). Ausente = FAIL.
- 🔴 **M4.** GSAP nunca dentro de componente — só quando há scroll timeline. Hover/modal/toast/tab = CSS transition ou Motion.
- 🟡 **M5.** Durações (±50ms): hover/focus 150ms; press 100ms + `scale(0.97)`; tooltip 150ms/0ms; modal 200–250ms; drawer 300–500ms; toast ~300ms spring; acordeão 200–300ms. Qualquer UI > 500ms = FAIL.
- 🟡 **M6.** `transition: all` = FAIL (grep: zero ocorrências).
- 🟡 **M7.** Hover: `scale` ≤ 1.03 + shadow, 150ms. Rotate, tilt 3D ou glow pulsante em card = FAIL.
- 🟡 **M8.** `:focus-visible` com ring 2px visível; `outline: none` sem substituto = FAIL.
- 🟡 **M9.** Loading sem layout shift: botão mantém largura; skeleton em conteúdo. CLS > 0 causado por animação = FAIL.
- 🟡 **M10.** Stagger ≤ 60ms/item, sequência total ≤ 600ms. Spring em gesto; tween em mount/unmount; `@keyframes` para estado open/close = FAIL (não interrompível).
- 🟡 **M11.** Não animar: dados de tabela, re-render de lista visível, loop infinito (exceto spinner/skeleton).

## 5. Scroll

- 🔴 **S1.** Zero biblioteca de efeito pronto no bundle: AOS, ScrollReveal, animate.css, kits estilo Aceternity/Magic UI (Olivier + Emil + Bruno: é o novo clipart). Canon: GSAP+ScrollTrigger para coreografia, Motion para componentes.
- 🔴 **S2.** Toda seção com pin/horizontal/efeito pesado exige `gsap.matchMedia` com fallback mobile (< 768px: estático ou vertical simples). Ausente = FAIL.
- 🟡 **S3.** Máx. 2 seções consecutivas com a mesma animação de entrada (propriedade+direção+duração); 3 iguais = FAIL.
- 🟡 **S4.** Exatamente 1–2 set pieces por página (pin+scrub, horizontal, sticky stacking, frame sequence). 0 = template; 3+ = ruído.
- 🟡 **S5.** Pin: máx. 2 por página; `end` entre `+=100%` e `+=300%`.
- 🟡 **S6.** Lenis: PASS só em landing/portfólio/institucional, `lerp` 0.08–0.12 + `ScrollTrigger.update`. FAIL em SaaS logado, dashboard, formulário, ou `lerp < 0.06`.
- 🟡 **S7.** Reveal de texto: hero + máx. 2 seções, stagger 0.02–0.08s, nunca em parágrafo de corpo.
- 🟡 **S8.** Parallax multicamada: delta máx. 15–20% (`yPercent`).
- 🟡 **S9.** `ease: 'none'` só com scrub; entrada sem scrub exige ease não-linear (padrão `power3.out`).
- 🟡 **S10.** `will-change`: máx. 3 elementos, removido após a animação.

## 6. Glassmorphism e efeitos de superfície

- 🔴 **G1.** Glass spec: `backdrop-filter: blur(12–24px) saturate(140–180%)`, fundo alpha 0.6–0.8, borda 1px `rgba(255,255,255,.1–.2)`, fallback sólido via `@supports`.
- 🔴 **G2.** Nunca animar `backdrop-filter`; elemento glass anima só transform/opacity e não entra em animação de scroll (Emil + Rauno).
- 🔴 **G3.** Grain: 1 overlay global via SVG `feTurbulence` em data-URI, opacity ≤ 0.06, `mix-blend-mode: overlay/soft-light`. Grain por seção ou visível como padrão no screenshot = FAIL.
- 🔴 **G4.** Contraste de texto sobre vidro ≥ 4.5:1 no pior caso do backdrop (WCAG — norma, não opinião).

## 7. Política de 3D/WebGL

*Especialista único (Bruno) → 🟡 por protocolo; em projeto que USA 3D, tratar a seção inteira como bloqueante.*

- 🟡 **W1.** Gate: WebGL só com ≥ 1 critério declarado em comentário no topo do componente — objeto manipulável / profundidade narrativa real / 3D é o produto. Sem critério = FAIL.
- 🟡 **W2.** Escada de custo: (1) CSS transforms/grain → (2) vídeo WebM/AVIF ≤ 1.5MB → (3) sprite/canvas 2D → (4) shader fullscreen único → (5) cena 3D. Pular degrau sem nota = FAIL.
- 🟡 **W3.** Bundle 3D ≤ 350KB gzip; cada glb ≤ 500KB, total ≤ 1.5MB (DRACO + KTX2 obrigatórios).
- 🟡 **W4.** DPR cap: `[1, 2]` desktop, `[1, 1.5]` mobile, verificável no código.
- 🟡 **W5.** Canvas fora do LCP (LCP = texto/imagem); carga lazy após first paint; LCP > 2.5s com 3D = FAIL.
- 🟡 **W6.** Fallback para < 768px ou `hardwareConcurrency < 4`: poster/vídeo, ou versão com sombras off, ≤ 1 pass, ≤ 50k triângulos.
- 🟡 **W7.** Shader de identidade: ≤ 2 cores da mesma matiz (±30°), velocidade ≤ 0.15 uv/s, sem bloom, `frameloop="demand"`/pause fora do viewport.
- 🟡 **W8.** Prova de frame registrada: 60fps desktop / ≥ 30fps em Android médio. Sem medição = FAIL.

## 8. Canon de bibliotecas

| Biblioteca | Quando usar | Quando NÃO |
|---|---|---|
| GSAP + ScrollTrigger | Scroll narrativo, pin+scrub, set pieces | Micro-interação, hover, dentro de componente |
| Lenis | Landing/portfólio/institucional (lerp 0.08–0.12) | SaaS logado, dashboard, formulário longo |
| Motion (Framer) | `AnimatePresence`, FLIP/`layoutId`, gestos | Hover simples (CSS resolve), scroll narrativo |
| Radix/shadcn | Dialog, dropdown, tooltip, accordion | Reconstruir primitivos à mão |
| Sonner / Vaul | Toast / drawer | Reimplementar do zero |
| lucide-react | Set único, `strokeWidth` 1.5 ou 2 global | Misturar sets ou pesos de ícone |
| next/font + Fontshare | Self-host (Satoshi, Clash, Cabinet, General Sans) | `<link>` para fonts.googleapis.com |
| Tailwind v4 `@theme` + OKLCH | Congelar tokens de cor/spacing | Valores arbitrários (`text-[22px]`) |
| Radix Colors / Open Props / Utopia | Rampas, tokens e escala fluida prontos | — |
| R3F + drei + postprocessing | Único stack 3D de produção | Cena decorativa sem gate W1 |
| gltf-transform + DRACO/KTX2 | Pipeline obrigatório de asset 3D | glb sem comprimir |
| Vídeo WebM/AVIF de render | "3D falso" em hero sem interação (6–10s, ≤ 1.5MB) | Quando há interação real |
| **BANIDOS em produção** | — | AOS, ScrollReveal, animate.css, kits Aceternity/Magic UI, Vanta.js, particles.js, Spline runtime (protótipo ok) |

## 9. Divergências do painel vs gosto do cliente

| Cliente pediu | Painel recomenda | Veredito final |
|---|---|---|
| "SEM degradê" | Rauno/Josh/Bruno: banir só multi-matiz | Gradiente mono/análogo ΔH ≤ 30° permitido — é assinatura Stripe/Linear; o que grita IA é o arco-íris (C2) |
| Texto em gradiente: nunca | Erik+Josh: nunca; Rauno: exceção luminância | Banido por padrão; exceção única de luminância pura (T3) |
| Glow: odiado | Tetar, não banir (Rauno+Josh) | 1 por viewport, alpha ≤ 0.25 (C4); glow contido é signature, banir empobrece |
| "Explorar bibliotecas de efeitos prontas" | Emil/Olivier/Bruno: primitivos sim, efeitos prontos jamais | Canon fechado (§8); efeito pronto é a origem da cara de IA |
| GSAP ScrollTrigger para tudo | Emil: nunca em componente | GSAP só em scroll timeline (M4); componente = CSS/Motion |
| Glass + grain podem ficar | Painel concorda, com tetos | Mantidos com specs G1–G4 |
| Contenção total | Rauno: contenção sem pico = template genérico | Contenção + exatamente 1 signature moment (C8) |
| Meta inclui SaaS/apps | Olivier: smooth scroll irrita em UI de trabalho | Lenis só em página narrativa (S6) |

## 9b. Calibração empírica (2026-07-15 — lei testada contra 3 projetos reais do portfólio)

A lei foi rodada contra M-A-Elo (HTML puro), Clube Infinity LP (Next.js) e Museu Triângulo (React/Vite). Nenhum passou (30-60% dos checks) — e os FAILs que ela pegou são exatamente as dores nomeadas pelo cliente (7 easings por projeto, shimmer infinito em CTA, hex solto que obrigou cascata de `!important`). Ajustes derivados da calibração:

- **C3 (isenções):** fallback defensivo `var(--token, #hex)` e atributos de SVG inline (`stroke="#..."`/`fill="#..."`) NÃO contam como hex fora de token — são prática legítima. (Sem isso: 400+ falsos positivos por projeto.)
- **M11 (exceção adicional):** scroll-indicator/scroll-hint é affordance, não decoração — permitido em loop. Shimmer em CTA continua FAIL.
- **Escopo em projetos remix/clone (`*remix`, Umbrella Mirror):** a lei audita o **código próprio**; o markup herdado do site de referência é auditado como 🟡 (relatório, não bloqueio) até a passada de tokenização. Meta: todo remix termina com o markup herdado tokenizado — o caso Clube Infinity (7 overrides `!important` pra trocar azul por laranja) é o custo documentado de pular essa etapa.
- **T1 mantido em 4 pesos** apesar do hábito atual (~8-10 por projeto): é o teto mais distante do costume e um dos que mais paga — cada peso é um request de fonte e um degrau de ruído tipográfico.
- **Convergências que validam a lei:** o easing favorito do portfólio (`cubic-bezier(0.32, 0.72, 0, 1)`, 3× no Museu) é literalmente a curva canônica do M2; o Museu já tokenizou cores quase perfeitamente (1 hex solto em projeto inteiro); e o `TextAnimation.tsx` do Museu implementa exatamente a exceção de luminância pura do T3.

## 10. Gate final (checklist PASS/FAIL — rodar antes de qualquer entrega)

> Versão executável dos checks mecânicos: `node ~/.claude/commands/frontend-squad/tools/gate.mjs <dir>` (segundos, zero tokens). O que o script não cobre (axe, screenshot, 60/30/10) roda no passe visual.

1. ≤ 2 famílias de matiz nos tokens; nenhuma cor com C > 0.25 (OKLCH)
2. Zero hex/rgb hardcoded fora de tokens (grep)
3. Todos os gradientes com stops ΔH ≤ 30°; máx. 1 decorativo por viewport
4. Zero `background-clip: text` com variação de matiz (grep + inspeção)
5. Glow ≤ 1 por viewport, alpha ≤ 0.25 (screenshot)
6. ≤ 2 famílias tipográficas + 1 mono; ≤ 4 pesos (`@font-face`)
7. Display font só em headings ≥ 28px (grep CSS)
8. H1 do hero e heading do footer: mesma família (computed style)
9. `font-size` 100% via tokens; headings ≥ 32px com tracking negativo
10. Spacing na escala base-4; ≤ 8 valores distintos por página
11. `padding-block` de seções uniforme (variação ≤ 1 degrau); ≤ 3 border-radius + pill
12. Zero `transition: all` (grep)
13. Só transform/opacity animados (grep em transition/animate/gsap)
14. ≤ 2 easings distintos no projeto (grep)
15. Durações UI ≤ 500ms; hover 150ms ±50
16. `prefers-reduced-motion` presente (grep)
17. Zero AOS/ScrollReveal/animate.css/Vanta/particles/Spline no package.json
18. Máx. 2 seções consecutivas com a mesma entrada; 1–2 set pieces; pins ≤ 2 com fallback mobile
19. Glass com saturate + borda + fallback; contraste ≥ 4.5:1 no pior caso; grain global único ≤ 0.06
20. 3D só com gate de justificativa em comentário + canvas fora do LCP + fallback mobile; exatamente 1 signature moment nomeado no código

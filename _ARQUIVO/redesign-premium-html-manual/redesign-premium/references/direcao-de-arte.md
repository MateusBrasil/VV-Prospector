# Direção de arte — regras do framework VV, não do plugin

> **Portátil e autocontido.** Vendorizável em `skills/redesign-premium/references/direcao-de-arte.md`.
>
> **Esta seção substitui e revoga integralmente** o "Padrão estético" do plugin (Playfair/Fraunces/Lora + Inter/Sora/DM Sans · h1 ≥ 40px · respiro 80-120px · bordas 12-16px · sombras suaves · botão WhatsApp flutuante verde · "sem animações, sem JS além do essencial"). Aquela prescrição **é** a receita da cara de IA: manda todo cliente convergir pro mesmo lugar, e contradiz a própria regra do plugin que proíbe repetir estrutura entre clientes.
>
> **A régua aqui é o `frontend-squad`** (`checklists/output-quality.md`, `checklists/motion-quality.md`, `_references/vv-portfolio.md`), o `dev-squad` (`data/quality-criteria.md`) e o `design-system-squad` (`data/anti-patterns.md`, `data/cliche-blacklist.md`).

---

## 0. Quem manda em quê

**Regras de DESIGN → 100% framework VV.** As regras estéticas do plugin estão revogadas.

**Regras de NEGÓCIO do plugin → permanecem** (não são design, são a oferta):
- Zero fato inventado — tudo vem do site original / Google Maps.
- Fotos e logo **reais** do cliente, obrigatórios.
- **Família de cor da marca do cliente preservada** (refinar tom, nunca trocar a família).
- HTML único autocontido, responsivo em 360/375/768/1024/1280/1440.

> Por que a cor do cliente fica: a oferta é *"é o SEU site, elevado ao padrão que seu faturamento merece"*. Se o dentista não se reconhece, ele não compra. Isso não conflita com craft premium — conflita com preguiça.

### O que do `vv-portfolio.md` transfere — e o que não

| Gap | Transfere? | Como |
|---|---|---|
| **1. Scroll-driven narrative** | ✅ Sim | Scroll-driven nativo (`animation-timeline: scroll()`) com fallback IntersectionObserver. GSAP via CDN só quando o arquétipo pedir scrub/pin real |
| **2. Tipografia display de caráter** | ✅ **Prioridade máxima** | Fontshare (Satoshi, Clash Display, Cabinet Grotesk, Sentient, Melodrama...) — grátis p/ uso comercial, CDN, variable. Fim do Playfair+Inter |
| **3. Interatividade de estado real** | ✅ Sim | Vanilla JS: FLIP em filtros, tilt 3D em card, form multi-step, accordion com altura animada. Mínimo **2 por site** |
| **4. WebGL / 3D** | ⚠️ **Só upsell** | O próprio squad qualifica: *"para sites onde faz sentido narrativo"*. Hero Three.js num dentista estoura LCP<2,5s e converte pior no 4G. Tier premium, nunca padrão |
| **5. Performance / render** | ✅ Sim (já ganho) | HTML estático pré-renderizado **já vence** o gap (que era sobre SPA sem SSR). Falta `srcset`/AVIF + `fetchpriority="high"` no hero |
| **6. Identidade inconfundível** | ⚠️ **Invertido** | O checklist pergunta *"seria reconhecível como VV?"* — aqui a resposta correta é **não**. O site é do cliente. Assinaturas VV (grain, glass, dark+neon) são a marca **da VV**; carimbá-las em todo cliente recria o "todo site igual" |

**Não se aplica** (é HTML único, não app): TypeScript strict, Server/Client components, skip links multi-página, sitemap.

---

## 1. Princípio: transferir RIGOR, não estilo

Os 71 design systems (Stripe, Linear, Apple, Ferrari...) são marcas com fotógrafo dirigido, zero concorrente local e nenhum CTA de WhatsApp. **Copiar o estilo delas importa um contexto que a nutricionista não tem** — sem foto de estúdio, o dark-SaaS da Linear só expõe a foto ruim. E "parecer Linear" já virou, em si, um carimbo de IA.

O que se transfere é o **rigor**, agnóstico de setor:

- **Apple** — body 17px (não 16) + tracking negativo medido (`-0.374px` em 17px, `-0.28px` em 56px). Quebrar o default é assinatura barata.
- **Starbucks** — h1 e h2 no mesmo tamanho; hierarquia por **peso + cor**, não por tamanho. Canvas creme, nunca branco puro.
- **Airbnb** — display de 22–28px porque a **foto** carrega o peso. Um único tier de sombra em todo o sistema.
- **Wise** — ring-shadow `0 0 0 1px rgba(14,15,12,.12)` no lugar de drop-shadow.
- **The Verge** — cor-como-elevação; hairline de 1px faz o que a sombra faria.

Exceções onde o estilo transfere: **Starbucks** (varejo local em escala) e **Airbnb** (foto-first, gente comum).

---

## 2. Tokens obrigatórios (regra `output-quality`: zero hex inline)

Todo site abre com o bloco de tokens. **Nenhum hex solto no corpo do CSS** — tudo referencia token. Esta regra sozinha mata metade da cara de IA, porque força sistema em vez de improviso.

```css
:root{
  /* derivados da paleta REAL do cliente, via OKLCH */
  --brand:        /* hue do cliente, preservado */;
  --brand-ink:    /* brand com L −18% — títulos */;
  --brand-cta:    /* brand com C +0.04, L 55% */;
  --canvas:       /* por arquétipo */;
  --ink:          /* por arquétipo */;
  --ink-muted:    /* ink a 62% */;
  --hairline:     /* ink a 12% */;

  --step--1: clamp(.875rem,.83rem + .2vw,.95rem);
  --step-0:  clamp(1rem,.96rem + .22vw,1.0625rem);   /* 17px no topo — Apple */
  --step-1:  clamp(1.25rem,1.15rem + .5vw,1.5rem);
  --step-2:  clamp(1.75rem,1.5rem + 1.2vw,2.5rem);
  --step-3:  clamp(2.25rem,1.7rem + 2.6vw,4rem);

  --space-1:.5rem; --space-2:1rem; --space-3:1.5rem;
  --space-4:2.5rem; --space-5:4rem; --space-6:6rem;

  --radius: /* por seed: 8 | 12 | 16px */;
  --ring: 0 0 0 1px color-mix(in oklab, var(--ink) 12%, transparent);
}
```

---

## 3. Os 8 arquétipos

Tipografia via **Fontshare** (`https://api.fontshare.com/v2/css?f[]=...&display=swap`) — grátis p/ uso comercial, variable, e é o que fecha o Gap 2. Google Fonts só onde é genuinamente a melhor escolha.

**1. CONSULTÓRIO SERENO** — nutri, dentista, psicólogo, fisio, pediatra
- **Tipo:** `Sentient 500 + Switzer 400/600` · `Zodiak 500 + General Sans 400/500` · `Source Serif 4 600 + Supreme 400/500`. Serifa de baixo contraste de traço = "cuidado", não "luxo".
- **Cor:** `--canvas:#fbfaf8` · `--ink:#1a1c1a` · brand preservada, `--brand-ink` nos títulos.
- **Ritmo:** hero split 55/45 com retrato real · serviços em **lista com hairline** (não cards) · credibilidade = faixa de 3 números · CTA precedido de "como funciona a primeira consulta".
- **Motion:** reveal por scroll-timeline, 1 eixo, 240ms. **Estado real:** accordion de FAQ com altura animada + form de agendamento com micro-validação.

**2. BOTICÁRIO EDITORIAL** — estética, dermato, spa, salão premium
- **Tipo:** `Melodrama 400/500 + Chillax 400/500` · `Gambetta 500 + Satoshi 400/500` · `Bespoke Serif 300 + Supreme 400`. Display de alto contraste em **peso leve** — o oposto do bold.
- **Cor:** `--canvas:#f4f0ea` · brand só em detalhe (filete, ícone) · CTA terroso derivado (L 42%, C 0.06). Nunca duas saturações fortes.
- **Ritmo:** hero **full-bleed com scrim**, h1 `--step-3` weight 300 · grid zigue-zague · credibilidade = uma citação grande única.
- **Motion:** parallax de profundidade sutil no hero (scrub). **Estado real:** galeria antes/depois com drag-slider + lightbox.

**3. BALCÃO DE BAIRRO** — restaurante, padaria, cafeteria, hamburgueria
- **Tipo:** `Clash Display 600 + Satoshi 400/700` · `Panchang 600 + General Sans 400` · `Bricolage Grotesque 600 + Nunito Sans 400`.
- **Cor:** canvas creme `#f2f0eb` · **banda escura** derivada da marca a L 18% · CTA = marca a L 40%.
- **Ritmo:** hero foto de prato 40/60 · cardápio 3-up foto 4:3 · reviews em cards brancos sobre creme. Ref: **Starbucks** (estilo direto: bandas, pill 50px, `scale(.95)` no active).
- **Motion:** marquee de pratos/horários. **Estado real:** cardápio com filtro por categoria (FLIP).

**4. ESCRITÓRIO SÓBRIO** — advogado, contador, arquiteto, corretor
- **Tipo:** `Zodiak 600 + Switzer 400/500` · `Bespoke Serif 500 + Supreme 400/500` · `Spectral 500 + Inter Tight 400`.
- **Cor:** dessatura a marca (C máx 0.05) e usa como `--ink` · `--canvas:#ffffff` puro · CTA na marca cheia — **único** ponto de cor.
- **Ritmo:** hero **sem foto**, tipo grande + faixa de prova (OAB/CRC) · áreas em lista com hairline · credibilidade = registros. Ref: **Wise** (ring-shadow, zero drop-shadow).
- **Motion:** mínimo — reveal de opacidade, 200ms. Sobriedade é a feature. **Estado real:** form de contato multi-step.

**5. GINÁSIO CINÉTICO** — academia, crossfit, luta, personal
- **Tipo:** `Clash Display 700 + Satoshi 400/500` · `Khand 600 + General Sans 400` · `Archivo 800 + Barlow 400`.
- **Cor:** `--canvas:#131313` · marca vira **voltagem** (C+0.08) · CTA na marca com preto por cima se L>60%.
- **Ritmo:** hero full-bleed do box com scrim 60% · modalidades em blocos saturados · números grandes. Ref: **The Verge** (cor-como-elevação).
- **Motion:** **único arquétipo com scrub real** — contadores animados + pin de seção. **Estado real:** grade de horários filtrável.

**6. VITRINE FOTOGRÁFICA** — pousada, buffet, fotógrafo, imobiliária, salão com portfólio
- **Tipo:** `Satoshi 400/700` (família única) · `General Sans 500/400` · `Switzer 600/400`. Peso modesto — a foto carrega.
- **Cor:** branco puro · `--ink:#222` · **uma** voltagem da marca no CTA e no badge. Nada mais.
- **Ritmo:** hero foto 16:9 + h1 **28px/700** · cards foto-first · nota gigante 64px/700. Ref: **Airbnb** (estilo direto).
- **Motion:** reveal em stagger de 80ms na galeria. **Estado real:** lightbox com shared-element + filtro de categoria.

**7. AFETO ILUSTRADO** — pet shop, veterinário, pediatria, escolinha
- **Tipo:** `Quilon 600 + Switzer 400` · `Pally 600 + General Sans 400` · `Nunito 700 + Nunito Sans 400`.
- **Cor:** `--canvas:#fdfaf6` · marca clareada a L 92% como wash de seção · `--radius` no topo da escala (16px).
- **Ritmo:** hero com pet/criança real 50/50 · cards 2-up · depoimentos com avatar real.
- **Motion:** hover lift com `scale(1.02)`, 200ms. **Estado real:** seletor de serviço + accordion.

**8. OURIVESARIA NOTURNA** — barbearia, tattoo, estética masculina, wine bar, restaurante noturno
- **Tipo:** `Boska 400/600 + Cabinet Grotesk 400/500` · `Melodrama 500 + Satoshi 400` · `Syne 700 + Manrope 400`.
- **Cor:** `--canvas:#101010` · marca a L 65% como filete/CTA · dourado **só** se já existir na marca real.
- **Ritmo:** hero preto, h1 leve centralizado · serviços em tabela-preço com hairline `#2a2a2a` · reviews em branco 70%. Ref: **The Verge** (rigor) + **Ferrari** (contenção no escuro).
- **Motion:** cortina/reveal vertical no hero. **Estado real:** tabela de preços com seleção + CTA magnético.

---

## 4. CTA — o botão flutuante verde está morto

**Revogado:** círculo verde `#25D366` com glifo oficial no canto inferior direito. É o carimbo de template que denuncia o site na hora.

**No lugar:**
- CTA **na cor do arquétipo** (`--brand-cta`), nunca no verde do WhatsApp.
- Ícone em **SVG de linha 1.5px**, ou sem ícone.
- **Rótulo com verbo e objeto:** "Agendar avaliação", "Ver horários de hoje" — nunca "Fale conosco".
- **Mobile:** barra fixa inferior full-width, aparecendo só depois que o hero sai da viewport.
- **Desktop:** CTA inline nas dobras. Nada flutuando.
- Estados completos: default / hover (<100ms) / focus visível ≠ hover / active com feedback / disabled ≥ 3:1.
- O link continua `wa.me/55DDD...` com mensagem pré-preenchida — **isso é a oferta, não o estilo.**

---

## 5. Roteamento (determinístico — zero julgamento do LLM)

1. **Nicho → par candidato:** nutri/dentista/psi → {1,7} · estética/spa → {2,8} · restaurante/padaria → {3,6} · advogado/contador/arquiteto → {4,1} · academia/luta → {5,3} · pousada/buffet/imobiliária → {6,2} · pet/vet/escola → {7,1} · barbearia/tattoo/bar → {8,5}
2. **Desempate por croma da marca** (OKLCH da cor dominante do site atual, ignorando neutros): `C ≥ 0.12` → o **primeiro** (mais expressivo) · `C < 0.12` → o **segundo** (mais sóbrio).
3. **Override por léxico do conteúdo real** (≥ 3 ocorrências): clínico ("protocolo/exame/evidência") → 1 ou 4 · afetivo ("carinho/família/acolher") → 7 · performance ("resultado/meta/treino") → 5.
4. **Guarda por tração:** nota ≥ 4.9 **e** ≥ 200 avaliações libera 2 ou 8. Nota 4.7–4.8 com < 80 avaliações **trava** em 1/4/6 — falta prova social pra sustentar sofisticação.

---

## 6. Anti-repetição por seed

`seed = crc32(place_id)` — determinístico, reproduzível, auditável. Eixos ortogonais em bits distintos:

| Eixo | Fórmula | Variantes |
|---|---|---|
| **A.** Par tipográfico | `seed % 3` | 3 por arquétipo |
| **B.** Composição do hero | `(seed>>3) % 4` | split 55/45 · full-bleed+scrim · foto offset com faixa · sem foto (tipo + faixa de prova) |
| **C.** Grid de serviços | `(seed>>6) % 3` | cards 3-up · lista com hairline · zigue-zague |
| **D.** Bloco de credibilidade | `(seed>>9) % 3` | faixa de números · cards de review · citação única grande |
| **E.** `--radius` | `(seed>>11) % 3` | 8 / 12 / 16px |

**108 combos por arquétipo · 864 no total.**
**Dedupe de lote:** ordene por `place_id`; colisão em (arquétipo, A) → incrementa A do segundo em `+1 mod 3`.

---

## 7. Gate (thresholds do `frontend-squad/checklists/output-quality.md`)

**Críticos — FAIL aqui = não entrega:**
- LCP < 2,5s mobile · INP < 200ms · CLS < 0,1
- axe-core zero violations críticas (WCAG AA)
- Contraste ≥ 4,5:1 (texto) / ≥ 3:1 (grande) em **todos** os estados
- Keyboard nav completa · focus visible ≠ hover
- `prefers-reduced-motion` respeitado
- **Zero hex inline** — toda cor via token
- Sem `console.log` / TODO

**Motion** (`checklists/motion-quality.md`): toda animação declara propósito em 1 frase, senão é removida · micro 100-200ms · componente 200-300ms · easing não-linear · anima só `transform`/`opacity` · interruptível.

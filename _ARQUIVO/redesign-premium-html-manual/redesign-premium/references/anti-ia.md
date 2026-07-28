# Ruleset anti-"cara de IA" — sites de negócio local brasileiro

> **Portátil e autocontido.** Não depende de nenhum outro arquivo do sistema — pode ser copiado direto pra dentro do fork do plugin (`skills/redesign-premium/references/anti-ia.md`) e funciona no Cowork, onde `~/.claude/commands/` não existe.
>
> Contexto: página única para nutricionista, dentista, clínica, advogado, restaurante, salão, estética, veterinário, academia. Visitante = paciente/cliente comum, no celular, em PT-BR. CTA = WhatsApp.
>
> **Régua de design: framework VV** (`frontend-squad`, `dev-squad`, `design-system-squad`) — ver [`DIRECAO-DE-ARTE.md`](DIRECAO-DE-ARTE.md). As regras estéticas do plugin estão **revogadas**.
>
> Regras de **negócio** do produto (não são design — são a oferta, e permanecem): zero fato inventado · fotos e logo reais do cliente · família de cor da marca preservada · HTML único autocontido · responsivo em 360/375/768/1024/1280/1440.

---

## 1. Blacklist de copy (PT-BR)

Regra-mãe: **nenhuma frase entra no site se não for verificável no site original ou no Google Maps.** Sem fato → corta a seção. Não inventa adjetivo pra preencher.

### 1.1 Banimento estrito (0 ocorrências — bloqueia entrega)

| Proibido | Escreva no lugar |
|---|---|
| "Excelência em atendimento" | "Atende em até 15 min de espera" (só se o fato existir) — senão corte |
| "Sua saúde é nossa prioridade" | "Consulta de 50 min, sem pressa" / nome do procedimento real |
| "Soluções personalizadas para você" | "Plano alimentar ajustado à sua rotina de trabalho" |
| "Cuidamos de você e da sua família" | "Atende adulto e criança a partir de 3 anos" |
| "Transformando sorrisos" / "Transformando vidas" | "Clareamento, implante e ortodontia" (liste o que faz) |
| "Profissionais altamente qualificados" | "Dra. Ana Souza — CRO-SP 12345, 12 anos em endodontia" |
| "Tecnologia de ponta" / "equipamentos de última geração" | nome do equipamento real ("scanner intraoral 3Shape") ou corte |
| "Compromisso com a qualidade" | nota real: "4,9 no Google — 138 avaliações" |
| "Anos de experiência no mercado" | "Desde 2011 na Vila Mariana" |
| "Atendimento humanizado / acolhedor" | "Você fala direto com a Dra., não com atendente" |
| "Bem-vindo ao nosso site!" | corte — o hero começa com o que o negócio faz e onde |
| "Aqui você encontra tudo o que precisa" | corte |
| "Venha nos conhecer" / "Entre em contato conosco" (CTA) | "Agendar pelo WhatsApp" / "Ver horários de hoje" |
| "Saiba mais" (botão) | "Ver preços do clareamento" / "Como funciona a 1ª consulta" |
| "Nossos diferenciais" (título) | "Por que a consulta aqui dura 50 min" — ou o fato em si |
| "Missão, Visão e Valores" | corte inteiro — ninguém no celular lê isso |
| "Somos referência em..." | "4,8 no Google em 92 avaliações" |
| "Cuidado que você merece" | corte |
| "Agende já e transforme sua vida" | "Agendar consulta no WhatsApp" |
| "Soluções inovadoras" / "transformação digital" | não existe em site de dentista — corte |
| "Nossa equipe está pronta para te atender" | horário real: "Seg a sex, 8h–19h. Sábado até 13h" |
| "Qualidade e confiança" | corte |
| "O melhor da região" | proibido — fato inventado + risco CONAR/CFM. Use a nota do Google |
| "Resultados garantidos" | proibido — em saúde é infração ética |
| Emoji em `<h1>`, `<h2>`, `<h3>` ou botão | proibido — ícone SVG de linha, ou nada |
| "Lorem ipsum", "TODO", "[inserir]", "Seu texto aqui" | bloqueia entrega |

### 1.2 Regras de escrita

- **Verbo na frente:** "Agende", "Veja", "Marque" — nunca "Agendamento", "Visualização".
- **Número > adjetivo:** todo bloco de destaque precisa de um número real (anos, nota, avaliações, minutos, preço, endereço).
- **2ª pessoa direta ("você")**, sem "nós" institucional: "Nós oferecemos" → "Você sai com o plano na mão".
- **Português do Brasil:** nada de "telemóvel", "marcação", "sítio", "casa de banho", "ao domingo".
- Máximo **1 exclamação** no site inteiro.
- Máximo **2 ocorrências** somadas de: "cuidado", "confiança", "qualidade", "experiência".

---

## 2. Blacklist visual

| Proibido | Por quê | No lugar |
|---|---|---|
| Gradiente roxo/azul (`#6366f1`, `#8b5cf6`, `linear-gradient(135deg,#667eea,#764ba2)`) sem relação com a marca | Assinatura nº 1 de site gerado por IA — e viola a regra de preservar a paleta do cliente | Cor real da marca (logo/fachada) + neutros quentes. Fundo chapado |
| Headline com `background-clip: text` / texto em gradiente | Estética SaaS 2021; ilegível no sol, no celular | Cor sólida da marca ou quase-preto quente (`#1A1614`) |
| 3+ seções com a mesma estrutura card → ícone-em-círculo → título → parágrafo | Ritmo de template; a página vira lista infinita | No máximo **1** grid de cards. As outras: lista com filete, tabela de preços, foto+texto lado a lado, FAQ em `<details>`, faixa de números |
| Ícone genérico (coração, estetoscópio, escudo, foguete, check) em círculo colorido, repetido 3-6× | Banco de ícones = zero identidade | Foto real do procedimento/ambiente, número grande, ou nada. Se ícone: SVG de linha 1.5px monocromático na cor da marca |
| Bento grid / mosaico assimétrico | Padrão de landing SaaS; não comunica nada pra paciente | Seções empilhadas, largura única, respiro |
| Blur/glow colorido de fundo (`filter: blur(80px)` em blob) | Decoração sem função; pesa o LCP no 4G | Nada. Fundo limpo ou foto real do local |
| Dark mode "SaaS" (`#0A0A0A`) em clínica/consultório | Contexto errado — paciente lê no sol; transmite "tech", não "confiança de saúde" | Fundo claro quente (`#FAF8F5`–`#FFFFFF`). Escuro só se a marca real for escura (restaurante, barbearia, tattoo) |
| Hero com stock photo (aperto de mão, dentista sorrindo, médico de braços cruzados, salada em fundo branco) | Mentira visual — e o paciente reconhece stock na hora | Ver seção 3 |
| Contador animado "+1000 clientes satisfeitos" | Fato inventado — bloqueia | Nota e nº de avaliações do Google, reais |
| Carrossel de depoimentos com avatar ilustrado/inicial colorida | Depoimento sem rosto real cheira a falso | Texto literal da avaliação do Google + nome como aparece lá + "via Google" |
| **Botão WhatsApp flutuante verde `#25D366` com o glifo oficial** | Carimbo de template — denuncia o site na hora. **Revogado.** | CTA na cor do arquétipo (`--brand-cta`), ícone SVG de linha 1.5px ou nenhum, rótulo com verbo ("Agendar avaliação"). Mobile: barra fixa inferior após o hero sair. Desktop: inline. Nada flutuando |
| `animation: pulse` infinita em CTA | Ansioso, amador, viola `prefers-reduced-motion` | Estados completos: hover <100ms · focus visível ≠ hover · active com feedback |
| Fade-up escalonado idêntico em **toda** seção | Motion sem propósito — grita "site de IA" | Regra do `motion-quality`: toda animação declara propósito em 1 frase, senão sai. Micro 100-200ms · componente 200-300ms · easing não-linear · só `transform`/`opacity` · interruptível · `prefers-reduced-motion` |
| `border-radius` 12–16px + sombra suave em **tudo**, indistintamente | Homogeneidade = cara de template | Escolha **uma** assinatura e repita: ou filete 1px sem sombra, ou sombra sem borda, ou cantos retos. Nunca os três |
| 5+ pesos/tamanhos de fonte fora de escala | Ruído | Escala de 5 degraus. H1 40–52px desktop / 28–32px mobile, `letter-spacing:-0.02em` acima de 32px |
| Rodapé com links falsos (`#`, "Política de Privacidade" inexistente, redes que o cliente não tem) | Link morto = fato inventado | Só o que existe: endereço, telefone, Instagram real, mapa |

---

## 3. Regras de foto

**Fotos e logo são obrigatoriamente do cliente** (site original, Google Maps, Instagram). **Stock genérica é proibida e bloqueia a entrega.**

### 3.1 Tratamento coerente
- `filter: contrast(1.03) saturate(0.96) brightness(1.01)` — uniforme no site inteiro. Nunca uma foto tratada e outra não.
- Sem overlay colorido de marca sobre foto. Precisa de texto sobre foto? Overlay preto `rgba(0,0,0,.35)` ou faixa sólida.
- Proporções padronizadas: hero 16:9 ou 3:2; galeria toda em 4:5 **ou** toda em 1:1 (`object-fit: cover`). Nunca misturar.
- `width`/`height` explícitos (evita CLS), `loading="lazy"` exceto o hero, `alt` descritivo real ("Fachada da clínica na Rua Augusta, 400").

### 3.2 Quando a foto do cliente é ruim (escala de decisão, nessa ordem)
1. **Corta e reenquadra** — pega o pedaço nítido, usa em formato menor (thumb 4:5) em vez de hero largo.
2. **Rebaixa de posição** — foto ruim vira miniatura de galeria, nunca hero.
3. **Usa como fundo desfocado** — `filter: blur(18px) brightness(.5)` atrás de texto, contraste ≥ 4.5:1.
4. **Substitui por tipografia** — hero só com nome + o que faz + endereço + CTA, fundo na cor da marca. Um hero tipográfico honesto vence qualquer stock.
5. **Nunca:** upscale falso, IA generativa, foto de outro negócio, banco de imagem.

### 3.3 Logo
Logo real, tamanho original. Sem redesenhar, sem recolorir, sem gradiente. Se vier em JPG com fundo branco, usa em faixa branca — não tenta recortar mal feito.

---

## 4. Checklist bloqueante final

Cada item é verificável lendo o HTML. 🔴 bloqueia entrega · 🟡 corrige se der tempo.

**Copy**
- 🔴 Zero ocorrências (case-insensitive) das frases da lista 1.1.
- 🔴 Zero `lorem`, `TODO`, `[`, `Seu texto aqui`, `example.com`, `#` como href de CTA.
- 🔴 Zero emoji em `h1`–`h3` e em `<a>`/`<button>`.
- 🔴 Todo número exibido (anos, nota, avaliações, preço) existe no material de origem.
- 🟡 Máx. 1 `!` no documento; ≤ 2 ocorrências somadas de cuidado/confiança/qualidade/experiência.

**Visual**
- 🔴 Nenhum `#6366f1`, `#8b5cf6`, `#667eea`, `#764ba2` ou gradiente roxo/azul fora da paleta do cliente.
- 🔴 Nenhum `background-clip: text` / `-webkit-text-fill-color: transparent`.
- 🔴 No máximo 1 grid de cards ícone+título+texto no documento inteiro.
- 🔴 `<a href="https://wa.me/...">` com número real, visível sem scroll no mobile.
- 🔴 H1 presente, único, com o que faz + cidade/bairro.
- 🔴 **Zero hex inline** — toda cor referencia token (`var(--…)`). Regra `output-quality` do frontend-squad.
- 🔴 **Zero botão flutuante verde** de WhatsApp.
- 🔴 **Estados completos** em todo elemento interativo: default · hover · focus visível ≠ hover · active. (`disabled`/`loading`/`error` onde houver form.)
- 🟡 Nenhum `filter: blur(` acima de 40px em elemento decorativo.
- 🟡 `letter-spacing` negativo em fontes ≥ 32px.
- 🟡 Máximo 2 famílias de fonte, com `display=swap`. **Fontshare ou Google Fonts** — display de caráter obrigatório (Gap 2), Playfair+Inter genérico é 🔴.
- 🟡 Mínimo **2 micro-interações de estado real** (não só hover) — Gap 3.

**Foto**
- 🔴 Todo `<img>` aponta pra asset do cliente (nada de unsplash/pexels/istock/shutterstock/placeholder/picsum no `src`).
- 🔴 Todo `<img>` tem `alt` não-vazio e específico (ou `alt=""` se decorativa).
- 🟡 Todo `<img>` tem `width`+`height`; todos exceto o hero têm `loading="lazy"`.
- 🟡 Mesmo `filter` em todas as fotos de conteúdo.

**Técnico** — thresholds do `frontend-squad/checklists/output-quality.md`
- 🔴 **LCP < 2,5s** mobile · **INP < 200ms** · **CLS < 0,1**.
- 🔴 **axe-core zero violations críticas** (WCAG AA).
- 🔴 **Contraste ≥ 4,5:1** (texto) / **≥ 3:1** (grande) em **todos** os estados.
- 🔴 **Keyboard nav** completa · focus visible não removido sem substituto.
- 🔴 `@media (prefers-reduced-motion: reduce)` presente se há `animation`/`transition` > 200ms.
- 🔴 Arquivo único, CSS inline. JS **vanilla inline permitido** (o "zero JS" do plugin está revogado); lib externa só GSAP via CDN quando o arquétipo pede scrub/pin real.
- 🔴 Sem `console.log` / TODO.
- 🔴 `<title>` + `<meta name="description">` (120–160 char) + `<meta name="viewport">`.
- 🔴 Sem scroll horizontal em nenhuma viewport.
- 🔴 Touch targets ≥ 44×44px no mobile.
- 🟡 Imagens com `srcset` + AVIF/WebP · `fetchpriority="high"` no hero · `loading="lazy"` no resto (Gap 5).
- 🟡 Open Graph (og:title/description/image) — o link vai por e-mail e WhatsApp, o preview é parte da venda.
- 🟡 Schema.org `LocalBusiness` com endereço e telefone reais.
- ⛔ **Não se aplica** (é HTML único, não app): TypeScript strict · Server/Client components · skip links · sitemap.
- ⚠️ **WebGL/3D (Gap 4): fora do padrão.** Estoura LCP no 4G e converte pior. Só em tier de upsell.

---

## 5. Detector — heurísticas objetivas (< 60s, só lendo o HTML)

Zero screenshot, zero Playwright, zero tokens de visão. Ordem de execução. Qualquer 🔴 → devolve pro gerador com a linha e o fix.

**D1 — Repetição estrutural** *(o detector mais valioso)*
Conte blocos com assinatura `<svg`/`<i` → `<h3>` → `<p>` repetidos no mesmo container.
`≥ 3 grupos distintos → 🔴`. Fix: manter 1, converter os outros para lista com filete / tabela / foto+texto.

**D2 — Uniformidade de seção**
Extraia a estrutura de 1º nível de cada `<section>`. Se ≥ 60% compartilham a mesma assinatura (wrapper + grid) → 🔴.

**D3 — Grep de clichê de copy** (case-insensitive, texto visível)
`excelência em atendimento|sua saúde é nossa prioridade|soluções personalizadas|altamente qualificad|tecnologia de ponta|última geração|atendimento humanizado|compromisso com a qualidade|transformando (sorrisos|vidas)|saiba mais|entre em contato conosco|venha nos conhecer|nossos diferenciais|missão, visão|somos referência|anos de experiência no mercado|resultados garantidos|o melhor da região|cuidado que você merece|bem-vindo ao nosso site`
`≥ 1 hit → 🔴`. Fix: substituto da tabela 1.1.

**D4 — Grep de paleta proibida**
`#6366f1|#8b5cf6|#667eea|#764ba2|#a855f7|#7c3aed|linear-gradient\([^)]*(#6|#7|#8)[0-9a-f]{5}` → 🔴 se o hex não está no brief de paleta do cliente.
`background-clip:\s*text|text-fill-color:\s*transparent` → 🔴 sempre.

**D5 — Stock/placeholder no src**
`unsplash|pexels|pixabay|istock|shutterstock|freepik|placeholder|placehold\.co|picsum|via\.placeholder|dummyimage` → 🔴.

**D6 — Emoji**
`[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]` dentro de `<h1|h2|h3|button|a class=".*btn` → 🔴.

**D7 — Densidade de ícone genérico**
Conte `<svg` no documento. `> 8 → 🟡`. `> 12 → 🔴` (é banco de ícones, não identidade).

**D8 — Monotonia de arredondamento/sombra**
Valores distintos de `border-radius` e `box-shadow`. Se **um único** radius entre 12–16px aparece ≥ 8× **e** um único `box-shadow` aparece ≥ 8× → 🟡 (assinatura de template). Fix: escolher 1 das duas linguagens, zerar a outra.

**D9 — Motion**
`animation:`/`transition:` com duração ≥ 200ms e sem `prefers-reduced-motion` no CSS → 🔴.
`animation` com `infinite` em botão/CTA → 🔴.

**D10 — Fatos sem lastro**
`\+?\s?\d{2,}\s*(mil|k|\+)?\s*(clientes|pacientes|atendimentos|sorrisos|casos|anos)` → cada hit precisa de match no material de origem. Sem match → 🔴 (fato inventado).

**D11 — CTA**
`wa\.me/\d{10,}|api\.whatsapp\.com/send\?phone=\d{10,}` ≥ 1 → senão 🔴.
`href="#"` ou `href=""` em qualquer `<a>` → 🔴 (link morto).

**D12 — Fonte**
`font-family` distintas `> 2 → 🟡`. Fonte só de `fonts.googleapis.com`/`fonts.gstatic.com`/`api.fontshare.com`; outra origem → 🔴.
**Display genérico → 🔴:** se a fonte de título ∈ {Playfair Display, Inter, Poppins, Montserrat, Roboto, Open Sans} → reprova (Gap 2: display precisa de caráter).

**D13 — Hex inline** *(regra `output-quality`: zero hex inline)*
Conte hex (`#[0-9a-f]{3,8}`) fora do bloco `:root{…}`. `> 0 → 🔴`. Fix: promover a token.

**D14 — Flutuante verde**
`#25D366|#128C7E` **ou** (`position:fixed` + `border-radius:50%` num anchor `wa.me`) → 🔴. O botão flutuante verde está revogado.

**D15 — Estados incompletos**
Para cada `<a class*=btn|<button>`: exige `:hover` **e** `:focus-visible` no CSS. Faltando `:focus-visible` → 🔴 (bate com axe/keyboard nav).

**D16 — Interatividade de estado real** *(Gap 3)*
Conte padrões de estado real: `<details>`/accordion com altura animada · filtro com reflow · form multi-step · drag/slider · tilt. `< 2 → 🟡`.

**Veredito:** qualquer 🔴 = não entrega; volta ao gerador com item + linha + fix. Só 🟡 = entrega e corrige o que couber no orçamento.

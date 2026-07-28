# Regra de base — qual template clonar para cada cliente

> Decisão do Mateus, 2026-07-16: *"esse negócio de seguir o site do museu do triangulo pode ser útil **mas depende do cliente**, por isso é bom usar os componentes e páginas do code eagle também."*

## O princípio

**Cliente diferente → base diferente.** Não existe "a" base. Existe uma **biblioteca de bases**, e o roteador escolhe por **arquétipo (nicho) + seed (`crc32(place_id)`)**.

Se todo cliente sair do mesmo esqueleto, recriamos o problema de origem — todo site igual, só que com uniforme melhor. A variedade não é enfeite: é o produto. Dois dentistas de Guimarães que ponham os sites lado a lado e vejam a mesma página = venda morta nos dois.

## A biblioteca

| Base | Stack | Esqueleto | Serve |
|---|---|---|---|
| **Museu Triângulo** (`Documents\Projetos\Museu Triangulo\centro-comercial-triangulo`) | React+Vite, GSAP, Lenis, motion, lucide-react, Tailwind v4 | hero · about · features · trust · location · contact · footer | **Institucional / negócio local / multi-morada.** Tem 12 variantes de botão + Aurora/CornerGlow/FloatingGradient backgrounds. Já aprovado pelo Mateus, tokenizado. |
| **vaultix** (`bank/_raw/pg_eagle5`) | Astro + GSAP + Three.js (de Figma real) | Hero · HeroLoader · Comparison · FeaturesCoreChart · HowItWorks · Impact · Blogs · Faq · Cta | **SaaS / fintech / dark premium.** Tem FluidHalftoneCanvas, LiquidCanvas, ParticleSphere. |
| **stride** (`bank/_raw/pg_stride`) | Next.js + three + lenis + react-spring | — | Produto/tech. |
| **clarix** (`bank/_raw/pg_clarix`) | Vite + Three.js + modelo .glb | — | Produto físico / 3D. |
| **Seções avulsas** (`bank/_raw/vetic`, `hero26`, +16) | HTML/CSS/JS + GSAP | — | Enxerto: SplitText (hero26), marquee de prova social (vetic). |

## Como decidir (ordem)

1. **Arquétipo pelo nicho** (ver `_ARQUIVO/redesign-premium-html-manual/redesign-premium/references/direcao-de-arte.md`, skill arquivada em 2026-07-23, ficheiro preservado só como referência): vet/pet → afeto-ilustrado; advogado → escritorio-sobrio; restaurante → balcao-de-bairro; etc.
2. **Base pelo arquétipo** (ver `bank/MAPA-ARQUETIPOS.md`).
3. **Variante pelo seed** — se 2 clientes do mesmo nicho caírem na mesma base, o seed troca a variante (hero, grid, ordem das seções). Nunca a mesma página duas vezes.
4. **Identidade sempre do cliente**: cor real da marca (`:root` → `remix.mjs`), fotos reais, logo real, copy própria.

## O que NUNCA muda, seja qual for a base

- Zero facto inventado (tudo do site original / Google Maps verificado).
- Fotos e logo REAIS do cliente.
- Família de cor da marca preservada (refinar tom, nunca trocar a família).
- Zero texto de avaliação copiado (GDPR — dado de terceiro). Só nota + contagem + link.
- Gate da Lei de Estética antes de entregar.

## ⚠️ Lição paga (2026-07-16) — o ADN do template não se troca

Clonámos o **vaultix** (Astro+Three.js, lindo) para a Clínica Veterinária Santa Luzia. O Mateus abriu e reprovou em 5 segundos: *"que porra é essa... tem nada a ver com um site institucional pra uma clínica veterinária, a identidade visual e tipografia tá nada a ver"*.

O que estava no ar: **fundo preto + tipografia monoespaçada em maiúsculas + canvas que parece gráfico de trading**. Um terminal de cripto com o nome de uma clínica.

**A lição:** trocar `:root` e imagens NÃO chega. A **tipografia** e a **linguagem visual** são o ADN do template, não a pele. Um template de fintech continua a ser fintech depois de trocar o amarelo.

**Regra que fica:**
1. **Escolher a base pelo GÉNERO do negócio, não pela beleza do template.** Clínica ≠ SaaS, por mais bonito que o SaaS seja.
2. Antes de clonar, perguntar: *"a tipografia deste template serve este cliente?"* Mono/terminal → tech. Serifada → institucional/saúde/jurídico. Geométrica leve → varejo/hospitalidade.
3. **Teste dos 5 segundos:** mostrar o hero a alguém e perguntar "que negócio é este?". Se a resposta não for o nicho do cliente, a base está errada.
4. Sinal de alarme: se estás a *lutar* contra o template (a desligar efeitos, a trocar fontes, a esconder secções), a base está errada. Muda de base — sai mais barato que remendar.

**Mapa de género (a preencher com o resto do banco):**
- `vaultix` → SaaS · fintech · cripto · dark tech. **NUNCA** saúde/local/institucional.
- `Museu Triângulo` → institucional · negócio local · multi-morada · cultural.
- `stride` (Next.js) → produto/tech — a validar.
- `clarix` (Vite+3D) → produto físico/3D — a validar.

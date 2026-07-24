---
description: Constrói o site do zero para um lead sem site próprio (mesmo motor do /redesenhar, capa/email em modo apresentação)
argument-hint: "[slug ou nome do lead] — opcional, usa os leads 'sem_site'/'plataforma_alheia' do CRM"
---

Constrói a primeira versão do site de um lead que **não tem site próprio** (só perfil no Google Maps, página em plataforma de terceiros tipo piat.am/umai.io/Wix grátis, ou só Instagram/Facebook). É a mesma máquina do `/redesenhar` — **incluindo a escolha de motor do passo 3 de lá** (referência de nicho portada > `compor.mjs`+`blocks-ce` curado > `assemble.mjs` só como último recurso) — com uma diferença: não existe "site atual" para extrair fotos nem para comparar. A dor deste lead costuma ser maior que a de quem só tem site fraco — não descartes.

> Porquê existe separado do `/redesenhar`: sem site antigo, não há de onde extrair fotos/copy, e a capa/email não podem prometer "compare com o seu site atual". A escolha de MOTOR é idêntica ao `/redesenhar` — só a fonte dos factos e o texto da proposta mudam.

## Seleção dos leads

1. Lê o CRM: `node tools/crm.mjs list --status novo`. Filtra os que vieram da prospecção como `sem_site`/`plataforma_alheia`. Se `$ARGUMENTS` trouxer slug/nome, usa-o. Confirma a lista com o utilizador.

## Para cada lead

1. **Coleta dos factos** (o único passo que precisa do browser, via Claude in Chrome). Como não há site, as fontes são:
   - **Google Maps**: nome exato, morada, telefone, horário, nota, nº de avaliações, categoria, e a galeria de fotos pública (são fotos reais do próprio estabelecimento, publicadas por ele ou por clientes — preferir as do próprio dono quando identificável).
   - **Página em plataforma de terceiros**, se existir (piat.am, umai.io, Linktree, etc.): frequentemente tem fotos, morada, redes sociais e às vezes menu/cardápio.
   - **Instagram/Facebook do negócio**, se público: fotos reais, bio, posts recentes (pratos, ambiente, produtos), e-mail se estiver na bio.
   - **Agregadores de menu/avaliação** (TheFork, Zomato e similares), se existirem: pratos com nome e descrição real.
   - **Zero inventado** — o que não está confirmado em nenhuma dessas fontes não entra no brief. Baixa as fotos reais para `sites/<slug>/img/` (não faças hotlink a Instagram/Maps, que pode expirar ou bloquear o hotlink).
   - Documenta a fonte de cada dado, seguindo a convenção já usada em `briefs/santaluzia.json` (campos `_fonte`/`_fotos_porque` ao lado do dado, explicando de onde veio e por que essa foto/fato específico foi escolhido).

2. **Não roda `qualificar.mjs`** (não há site para auditar) — não há `defeitos` do site atual. O ângulo da proposta muda de "consertar o que está errado" para "dar a presença que ainda falta".

2b. **Colhe a identidade visual REAL da marca** (nunca inventar paleta). Sem site, as fontes de prova são o **logótipo** (na placa da montra, no cartaz, na foto de perfil do Instagram ou do Google Maps) e a página em plataforma de terceiros, se existir:
   ```bash
   node tools/tema/identidade.mjs --logo <ficheiro-ou-url>
   ```
   Devolve o bloco `design.cores` pronto para o `cliente.json`, com o contraste já validado. Se a marca for acromática (logótipo a preto), a ferramenta diz isso e a paleta sai neutra: é decisão da marca, não lacuna. Ler o relatório: ele diz o que ajustou e porquê, porque **a marca manda no matiz e a legibilidade manda na luminância**.
   Quando não existe logótipo nenhum, a paleta pode vir da própria montra ou do interior nas fotos reais (a madeira, o azulejo, o toldo). Nunca de gosto pessoal nem de default.

3. **Escolhe o MOTOR — mesmo critério do `/redesenhar` passo 3** (referência de nicho portada > `compor.mjs`+`blocks-ce` curado via skill `curador-componentes` > `assemble.mjs` só com justificação escrita). Nunca cair no motor manual por omissão.

4. **Escreve o `briefs/<slug>.json`** seguindo o contrato em `brief.exemplo.json`, com as diferenças deste caminho:
   - `cliente` (factos reais coletados acima), `tokens` (cor de marca real, se houver logo/identidade visível nas fotos; senão, uma paleta neutra sóbria, nunca "cara de IA" genérica).
   - **`semSite: true`** — flag que avisa o resto do motor (`capa.mjs`, `email.mjs`) que este brief não tem "antes" para comparar.
   - **Sem `siteAntigo`** (omitir o campo, não inventar URL nenhuma).
   - **Sem `defeitos`** (omitir; o `email.mjs` aceita quando `semSite: true`).
   - Caminho (b) do passo 3: `"plano": "planos/<slug>.json"`. Caminho (c): `blocos`.
   - A copy escrita via `/copy-elite`, nunca improvisada.

5. **Corre o motor** (monta + gate + editor + comparador + capa em modo apresentação, sem publicar):
   ```bash
   node tools/run.mjs briefs/<slug>.json
   ```
   Sem `siteAntigo`, o ciclo pula "Semear defeitos" (de propósito) e a "Capa da proposta" sai no modo apresentação única (sem grade antes/depois). **Se o gate reprovar, o ciclo para** — corrige o brief/plano e volta a correr. Caminho (b): atenção aos avisos do próprio `compor.mjs` (slot vazio, marca alheia sobrando) — não ignorar.

## Verificação (regra do Mateus: "pronto" = verificado no navegador)

Abre `sites/<slug>/index.html` no browser com hard refresh. Confere a 375px e 1440px: zero rolagem horizontal, fotos reais do lead presentes (nunca stock), nenhuma secção órfã, **nenhum texto/logo de outra marca**. Abre também `sites/<slug>/proposta.html` e confirma que ela **não** menciona "compare com o site atual" nem mostra nenhum iframe vazio.

## Saída

Por lead: 1 linha do que foi criado + o link da `proposta.html`. Próximo passo: `/publicar` (Vercel) ou o ciclo completo com `run.mjs --deploy`.

## Regras

- **Nunca HTML à mão.** O LLM escreve o brief/plano; o motor monta.
- **A escolha do motor (mesmo critério do `/redesenhar`) é sempre explícita.**
- **Fotos REAIS do lead são inviolável**, mesmo sem site: vêm de Maps/Instagram/Facebook/plataforma de terceiros, nunca de banco de imagens.
- **Nunca prometer "antes" que não existe.** Capa e email deste caminho não comparam com nada, apresentam a proposta.
- **Blocos de `blocks-ce/` são partilhados** — customização por cliente vai em `slots`/`vars`/`estilo`/`assetsExtra` do plano, nunca no bloco fonte.
- **Estado só no `prospector.db`** (via `crm.mjs`/`run.mjs`). Sem `leads.md` paralelo.

# Prospector Premium

Fork privado do plugin Prospector (Helio Arreche), reconstruído à volta de um motor próprio. Em vez de pedir a um LLM que cuspa a página inteira (~20k tokens, 6-12 min por cliente, e um resultado que converge para a média, "cara de IA"), o LLM aqui só decide e escreve **texto**: um `brief.json` de ~3k tokens com os factos verificados do negócio, ou um `cliente.json` quando o site nasce no motor de temas (ver abaixo). O HTML é montado por script, a partir de blocos escritos à mão, de blocos normalizados do **banco Code Eagle**, ou clonado de um template do banco e re-skinado com a cor real da marca. Entre o motor e o cliente há uma **Lei de Estética** mecânica: um gate que reprova o que não passa, antes de qualquer publicação.

## O ciclo em 1 comando

```bash
node tools/run.mjs briefs/kasablanca.json            # tema: ensaio, não publica
node tools/run.mjs briefs/kasablanca.json --deploy   # tema: publica na Vercel (preview)
node tools/run.mjs --lote briefs/*.json --deploy     # vários leads em sequência
```

| # | Passo | O que faz |
|---|-------|-----------|
| 1 | **CRM add** | O lead entra no funil (status `novo`) antes de existir ficheiro nenhum. |
| 2 | **Montar** | **Tema** por defeito quando existe `clientes/<slug>/cliente.json` ou o brief declara `"tema"`; `compor`, `assemble` e `remix` ficam como fallback legado. |
| 3 | **Gate da Lei** | Reprova FAIL 🔴 e **para o ciclo**. Não se publica lixo. |
| 4 | **Editor** | Injeta a camada de edição visual (`index-editor.html`) por script. |
| 5 | **Comparador** | `comparar.html` na raiz — antes/depois de todos os clientes, com merge. |
| 6 | **Deploy do site** | Vercel. Confirma 200 OK antes de escrever no CRM. Sem `--deploy` corre em `--seco`. |
| 7 | **Capa** | `proposta.html` — a peça que vende. O cliente nunca recebe link cru. |
| 8 | **Deploy da proposta** | Republica a pasta, agora com a capa. (A capa só nasce depois de existir URL.) |
| 9 | **Email** | Rascunho, com checklist anti-spam bloqueante. **Nunca envia.** |
| 10 | **CRM estado** | `publicado` + `url_nova` + `url_capa`. Só grava URL que respondeu 200. |

Cada passo é cronometrado e reporta ✓/✗. Passo que falha **para** o ciclo, diz porquê e sai com código ≠ 0 — nunca finge sucesso. Em lote, um lead que falha não trava os outros; o resumo final dá N ok / N falhou.

**Ensaio (sem `--deploy`)**: não há URL real. Em vez de inventar uma, o ciclo usa um placeholder evidente (`ensaio-nao-publicado.invalid`), escreve o rascunho do email para `ensaio/<slug>/`, nunca por cima do rascunho bom, e o CRM fica em `redesenhado`. O CRM só recebe URL quando a URL existe.

## Caminhos legados de montagem (fallback)

O motor de temas tem precedência. Quando não existe tema para o lead, `run.mjs` usa os caminhos abaixo, pela ordem indicada:

1. **`compor` (`tools/compor.mjs`)**, ganha sempre que o brief tem `"plano": "planos/<slug>.json"`. É o motor dos componentes normalizados: lê um `plano.json` (blocos + slots + tokens) e monta a partir de `blocks-ce/`, o banco de 613 componentes do Code Eagle depois de passarem pela Camada 0 (`classificar.mjs`, etiqueta fluxo/contexto) e pela Camada 1 (`blockify.mjs`, isola CSS/JS/assets num scope próprio para não colidirem). **Hoje só 26 componentes estão normalizados e utilizáveis em `blocks-ce/`** dos 613 catalogados em `bank/_componentes/_catalogo.json`, o resto ainda precisa de passar por `blockify.mjs` antes de poder entrar num plano.
2. **`assemble` (`tools/assemble.mjs`)**, quando o brief tem `"blocos"` (e `compor` não se aplica). Monta a partir de `blocks/`, os blocos escritos à mão para este projeto.
3. **`remix` (`tools/remix.mjs`)**, último recurso, quando o brief só tem `"remix": { "template": ... }`. Clona um template inteiro do banco Code Eagle e re-skina com a paleta/copy do cliente.

`commands/redesenhar.md` documenta o critério de escolha (referência de nicho aprovada > `compor`+`blocks-ce` curado > `assemble` como último recurso, com justificação escrita no brief).

## O motor de temas (via principal para site novo)

Um **TEMA** é sistema invariante (tipografia, ritmo, movimento, cor) mais um kit de dobras (secções) e regras de nicho, escrito uma vez como projeto Next.js em `themes/<tema>/` (ex. `themes/restaurante-noir/`). O sistema estrutural que não pode conter nenhum valor concreto de marca vive em `themes/base/sistema/estrutura.css`, cor/tipografia por cliente entram só via `var()`.

Todo o conteúdo de um cliente vive num único ficheiro, `clientes/<slug>/cliente.json` (ver `clientes/kasablanca/cliente.json`). O fluxo:

```bash
node tools/tema/hydrate.mjs <slug> [--tema restaurante-noir]   # materializa themes/<tema>/.obras/<slug>/
cd themes/<tema>/.obras/<slug> && npx next build                # produz out/
```

`hydrate.mjs` valida o `cliente.json` contra o contrato de `schema.mjs` (campo em falta é FATAL, DERIVADO ou OMITIDO, nunca vira placeholder inventado), gera `tokens.generated.css` (`tokens.mjs`) e os imports de fonte (`fonts.mjs`), e copia o `src`/`public` do tema para dentro da obra. `tools/tema/esteira.mjs` traz um componente novo do banco para dentro do sistema de um tema, despindo-o da identidade de origem; `tools/tema/compor-tema.mjs` decide quais dobras entram no site de um cliente por registo/pré-condição/anti-repetição. `tools/verificar.mjs` é o passe visual (abre num browser real, tira screenshot a 375/1440px, apanha nomes de marca alheia que sobreviveram no DOM) que complementa o `gate.mjs` (que só lê código-fonte). O `run.mjs` já encadeia este motor com gate, QA visual, capa, deploy e CRM; o tema vence os fallbacks quando ambos existem.

Cada `variant.json` tem um estado operacional: `experimental`, `revisar`, `aprovada` ou `em-producao`. A esteira cria `experimental` quando não há pendências e `revisar` quando gera `_rever`; só `aprovada` e `em-producao` podem entrar na composição em produção. `node tools/tema/compor-tema.mjs <slug> --modo inspecao` mantém dobras legadas visíveis para curadoria, sem lhes dar aprovação implícita.

Os kits de nicho versionáveis vivem em `themes/base/kits.json`. Inspecione-os sem tocar no catálogo com:

```bash
node tools/tema/kits.mjs
node tools/tema/kits.mjs --nicho restaurante --json
```

O registro em `themes/base/kits.json` é a fonte de verdade sobre quais kits estão liberados. Antes de criar um cliente, consulte `node tools/tema/kits.mjs`; um kit só é utilizável em produção quando estiver `mvp-pronto` e todas as suas dobras estiverem promovidas no respetivo `variant.json`. Os temas iniciais são `restaurante-noir`, `odontologia` e `clinica-estetica`; a existência de uma pasta de tema não substitui a consulta ao registro. O `hydrate.mjs` também aplica essa regra: ele recusa tema fora de um kit MVP e o `run.mjs` usa a mesma escolha para hidratar e para construir a obra.

**Facto verificado**: o site do Kasablanca inteiro (`clientes/kasablanca/cliente.json` + `themes/restaurante-noir/`) foi regenerado a partir deste único ficheiro, e `tools/tema/regress.mjs --comparar` contra o baseline em `baseline/kasablanca/` só acusa as divergências intencionais da migração.

Para operação normal, use `node tools/run.mjs briefs/<slug>.json`: basta o brief declarar `"tema"` ou existir `clientes/<slug>/cliente.json`. Os comandos `hydrate`/`next build` continuam úteis para desenvolvimento e diagnóstico isolado.

## As ferramentas

| Ferramenta | O que faz |
|---|---|
| `tools/run.mjs` | **O ciclo inteiro.** Prioriza tema e encadeia montagem, gate, QA, capa, deploy e CRM. |
| `tools/compor.mjs` | Monta o site a partir de `plano.json` + `blocks-ce/` (componentes normalizados). Camada 2 do motor de composição. |
| `tools/assemble.mjs` | Monta o site a partir de `brief.json` + `blocks/`. Cor/tipo/espaço só por token. |
| `tools/remix.mjs` | `plan` mostra o que dá para trocar num template do banco; `skin` gera o site re-skinado. |
| `tools/classificar.mjs` | Camada 0 do motor de composição: etiqueta cada componente do banco como fluxo (empilha) ou contexto (overlay/fullscreen), grava no catálogo. |
| `tools/blockify.mjs` | Camada 1: normaliza UM componente do banco para `blocks-ce/<categoria>/<id>/` (CSS escopado, JS numa IIFE, assets recolhidos). Pré-requisito para `compor.mjs` conseguir usá-lo. |
| `tools/ce-dna.mjs` | Mede o "ADN" tipográfico de uma página do banco (ratio display:corpo, peso, line-height) num browser real, contra a régua do Kasablanca. |
| `tools/bank-galeria.mjs` | Gera `bank/_componentes/_galeria.html`, galeria navegável dos 613 componentes por categoria, com os thumbnails/vídeos oficiais do Code Eagle, para curadoria visual. |
| `tools/vendor-anime.mjs` | Vendoriza um subconjunto tree-shaken do anime.js v4 (evita inlinar o bundle completo, que traz hex hardcoded e falharia o gate). |
| `tools/gate.mjs` | Gate mecânico da Lei de Estética (camada grep-able, lê código-fonte). Exit 1 se houver FAIL. |
| `tools/verificar.mjs` | Passe visual: abre a pasta servida num browser real, tira screenshot a 375/1440px, apanha o que só existe depois do DOM montar (o `gate.mjs` não vê). |
| `tools/editor.mjs` | Injeta a camada de edição visual na página (texto e imagens editáveis no browser). |
| `tools/comparador.mjs` | Gera `comparar.html` (antes/depois, multi-cliente, merge preserva os antigos). |
| `tools/capa.mjs` | Página-capa da proposta. Verifica se o site antigo aceita iframe e adapta-se. |
| `tools/email.mjs` | Rascunho anti-spam com checklist **bloqueante** em código. Escreve, não envia. |
| `tools/crm.mjs` | CRM SQLite (`init\|add\|status\|set\|list\|followup`) sobre `prospector.db`. |
| `tools/deploy.mjs` | Deploy Vercel. `--seco` valida sem publicar. Confirma 200 antes do CRM. |
| `tools/ce-harvest.mjs` | Colheita de templates do Code Eagle para o `bank/`. |
| `tools/bank.mjs` | Índice pesquisável do banco: `cats`, `list <cat>`, `find <termo>`, `show <nome>`. Filtros `--lib gsap` / `--sem-lib`. **613 componentes catalogados, mas só 26 normalizados e utilizáveis** por `compor.mjs` (ver `blocks-ce/`); os outros ainda precisam de `blockify.mjs`. Curadoria pela skill `curador-componentes` (casa nicho × estética). |
| `tools/pagespeed.mjs` | Número oficial do Google (PageSpeed) como defeito citável. Grátis, sem cartão. |
| `tools/qualificar.mjs` | Audita o site do lead com evidência citável. Corre no passo 0 do `run.mjs` e semeia os `defeitos` do brief. |
| `tools/tema/hydrate.mjs` | Materializa um `clientes/<slug>/cliente.json` dentro de `themes/<tema>/.obras/<slug>/`, pronto a `next build`. Motor de temas, ver secção própria acima. |
| `tools/tema/esteira.mjs` | Traz um componente do banco para dentro de um tema como dobra, despido da identidade de origem. |
| `tools/tema/compor-tema.mjs` | Decide quais dobras entram no site de um cliente (registo, pré-condição de material real, anti-repetição por nicho/cidade). |
| `tools/tema/regress.mjs` | Regressão de tema: compara DOM/estilos computados contra um baseline (`baseline/<slug>/`), tolerante a pixel, estrito em texto e estilo. |

## Automático vs. humano — honestamente

**Automático** (um comando, sem LLM no meio): montagem, gate, editor, comparador, capa, rascunho do email, deploy, CRM. É o que o `run.mjs` corre em segundos.

**Precisa do humano — por limite técnico:**
- **Prospecção no Google Maps** e **extração do site do lead** correm via Claude in Chrome. O agente conduz o browser, mas é **1 browser**: não paraleliza. É o gargalo real do ciclo, e é onde vai a maior parte dos 15-30 min por site.
- **Os factos do brief** (nota, avaliações, defeitos do site atual, fotos) são verificados à mão/por curl. O `email.mjs` recusa-se a correr sem `defeitos` no brief, de propósito: sem eles o email seria inventado — e o lead percebe.

**Precisa do humano — por decisão:**
- **O envio do email fica em rascunho.** Revisão humana antes de qualquer envio, 1 a 1, da conta pessoal. Nunca em massa.
- **O deploy exige `--deploy`.** Por omissão não se publica nada.
- **O passe visual.** O gate cobre só o que é grep-able; screenshot a 375px e 1440px continua a ser trabalho de olho.

## Instalação reproduzível e fábrica

Uma cópia do projeto pode reproduzir o motor, os temas, os gates e a curadoria sem depender da configuração pessoal desta máquina. Comece por [INSTALL.md](INSTALL.md), siga o [WORKFLOW.md](WORKFLOW.md) e trate [AGENTS.md](AGENTS.md) como o contrato operacional de qualquer agente.

```bash
npm ci
npm run fabrica -- --install
npm run fabrica
node tools/catalogo-lock.mjs
npm run check
```

`FACTORY.manifest.json` lista o que acompanha o repositório e o que é externo/opcional. As skills em `skills/` são portáveis; squads disponíveis no Codex/Claude não são pré-requisitos silenciosos. O catálogo comercial é conferido por `catalogo.lock.json`: sem ele ainda se usam temas e dobras já promovidos; se ele divergir, não se curam nem se importam novas peças.

O runtime do motor é reproduzível pelo `package-lock.json` da raiz. Cada tema Next ainda deve ganhar o seu próprio lockfile antes de uma instalação ser tratada como bit-a-bit reproduzível; veja o procedimento e a limitação explícita em [INSTALL.md](INSTALL.md).

## Operação local e proteção de dados

Antes de mexer em ferramentas ou temas, execute o gate local completo:

```bash
npm.cmd run check
```

Ele executa testes, sintaxe, acessibilidade estática e o orçamento local de performance. O último mede apenas `themes/<tema>/src` e `public`: ignora `node_modules`, `.next` e `.obras`, não usa rede e falha se código, payload público, asset individual ou quantidade de ficheiros ultrapassarem os limites. Para inspecionar apenas um tema: `node tools/orcamento-performance.mjs restaurante-noir`.

Para testar o motor de temas sem tocar num cliente, use a obra fictícia:

```bash
node tools/tema/hydrate.mjs _smoke-test-restaurante
cd themes/restaurante-noir/.obras/_smoke-test-restaurante && npm.cmd run build
```

O brief sintético correspondente em `briefs/_smoke-test-restaurante.json` existe para provar o
encadeamento do ciclo de temas. O teste automatizado valida a relação entre brief e
`cliente.json` sem criar CRM, obra, deploy ou qualquer artefacto operacional. Para ensaiar o
ciclo completo localmente (ele cria estado de ensaio no CRM), use
`node tools/run.mjs briefs/_smoke-test-restaurante.json` e nunca acrescente `--deploy`.
Esse é um smoke estrito: o email é explicitamente saltado e o ciclo falha se o QA não produzir
`out/_qa/relatorio.json` com veredicto OK nos breakpoints 375 e 1440.

`clientes/<slug>/cliente.json`, `prospector.db`, briefs, rascunhos de email, screenshots e obras geradas podem conter contactos, moradas, fotos e outros dados pessoais. Todos os diretórios de clientes ficam ignorados por padrão; a única exceção versionável é `clientes/_smoke-test-restaurante/`, uma fixture explicitamente sintética para validação. Mantenha backup cifrado separado do CRM/dados operacionais, aplique retenção mínima e use apenas o repositório de código para ferramentas, temas-fonte, schemas, testes e documentação.

## Diferenças vs. o upstream (plugin do Helio Arreche)

| | Upstream | Aqui |
|---|---|---|
| **Hospedagem** | HostGator via FTP/cPanel (senha em texto no config, `.bat` de 2 cliques) | Vercel CLI, com verificação de 200 OK antes de dar por feito |
| **Editor** | O LLM reescrevia a página inteira para gerar o `-editor.html` → **pagava a página 2x** (~7 min/cliente) | `editor.mjs` injeta a camada por script — trabalho de `cat`, zero tokens |
| **Estética** | Confiada ao prompt | **Gate mecânico** que reprova e trava o ciclo |
| **Fonte do frontend** | O que o LLM inventasse | **Banco Code Eagle** — templates caros e bem feitos, re-skinados com a marca real |
| **Checklist anti-spam** | Lista em Markdown (uma sugestão que o LLM podia ignorar) | Código **bloqueante**, reprovou, exit 1 |
| **Dashboard** | Servidor HTTP Python em `localhost:8765` | CLI (`tools/crm.mjs`) sobre o mesmo `prospector.db`, sem porta aberta nem processo para morrer |

## Pendências conhecidas

- **`/contrato` e a skill `contrato-servico` estão em formato Brasil** (CPF/CNPJ, gov.br/Autentique, valores em reais). O mercado deste fork é Portugal. Falta portar para NIF, RGPD e assinatura qualificada PT, trabalho a fazer com o `legal-squad` (Patrícia Peck + Manuel Lopes Rocha). Até lá, não usar este comando para clientes PT sem revisão jurídica manual completa (aviso também nos dois ficheiros).
- **Só 26 dos 613 componentes do banco Code Eagle estão normalizados** em `blocks-ce/` (ver `tools/blockify.mjs`). O resto exige normalização manual antes de poder entrar num `plano.json`.

## Requisitos

Node ≥ 22 (usa `node:sqlite` nativo; cai para JSON se faltar) · Vercel CLI autenticada (só para `--deploy`) · Claude in Chrome (prospecção) · `prospector-config.json` com a assinatura preenchida.

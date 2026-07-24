---
description: Constrói o site novo do lead com o motor certo por nicho (compor.mjs+blocks-ce, ou referência portada, ou assemble.mjs como último recurso)
argument-hint: "[slug ou URL do lead] — opcional, usa os leads 'novo' do CRM"
---

Constrói a nova versão do site do lead. **O LLM nunca escreve HTML.** O que muda de cliente para cliente é a escolha do MOTOR de montagem — decidida no passo 3, nunca "à mão" — e a copy/tokens/fotos reais do lead.

> Porquê a escolha de motor importa (auditoria dev-squad, 2026-07-22): a plataforma tem 3 motores coexistindo e só um deles hoje é montado por script sem intervenção manual pesada. Escolher o errado é a causa raiz confirmada de sites "quebrados"/genéricos/remendados. Este comando existe para que a escolha seja SEMPRE o passo 3, nunca um hábito ou um default acidental.

## Seleção dos leads

1. Lê o CRM: `node tools/crm.mjs list --status novo`. Se `$ARGUMENTS` trouxer slug/URL, usa-o. Confirma a lista com o utilizador.

## Para cada lead

1. **Extração dos factos** (o único passo que precisa do browser). Abre o site atual do lead no Claude in Chrome e extrai **factos verificados**: nome, morada, telefone, e-mail, serviços, credenciais, horários, nota e avaliações do Google, e as URLs reais das fotos/logo (`img.currentSrc`, rolando a página para vencer lazy-load). **Zero inventado** — o que não está lá, não entra. Baixa as fotos reais para `sites/<slug>/img/` (não faças hotlink ao site do cliente, que morre quando ele desliga o site antigo).

2. **Qualifica e semeia os defeitos**: corre `node tools/qualificar.mjs <url-do-site-atual> --json`. Os defeitos com evidência que ele devolve vão para o campo `defeitos` do brief.

2b. **Colhe a identidade visual REAL da marca** (nunca inventar paleta):
   ```bash
   node tools/tema/identidade.mjs --site <url-do-site-atual> --logo <ficheiro-ou-url-do-logotipo>
   ```
   Colhe as cores que a marca de facto usa, pesadas pela área que pintam, e devolve o bloco `design.cores` pronto para o `cliente.json`, já com o contraste validado. Fontes de prova, por ordem de força: **logótipo** (pesa 3×, é a marca), **site atual**, e a foto de perfil das redes sociais quando não há mais nada (costuma ser o logótipo).
   - A cor de marca é a mais forte **com matiz**, não a mais frequente: num site, a mais frequente é quase sempre o branco do fundo. Verificado num lead real: o site do hotel tinha 54% branco e 38% quase-branco, e a cor certa era um azul que ocupava 1% do ecrã.
   - Ler o relatório antes de aceitar: ele diz o que ajustou e porquê. **A marca manda no matiz, a legibilidade manda na luminância**; quando colidem ganha a legibilidade, e fica escrito.
   - Sem logótipo nem site, procurar no Instagram/Facebook/Google Maps. Se a marca for mesmo acromática (logótipo a preto), a ferramenta diz isso e a paleta sai neutra, o que é uma decisão da marca e não uma lacuna.

3. **Escolhe o MOTOR — passo obrigatório, nunca saltar.** Nesta ordem:
   - **(a) Existe referência aprovada pelo Mateus para este nicho?** (ex. restaurante → `kasablanca-site`, `Documents\Projetos\kasablanca-site`). Se sim: **portar essa referência** (mesma stack/arquitetura de componentes, trocando paleta+tipografia+copy+imagens pelos reais do lead). É o caminho que produziu o resultado aprovado no Restaurante Virtudes (2026-07-21/22) depois de 2 tentativas reprovadas com blocks-ce genérico. Consultar a lista de referências aprovadas antes de assumir que não existe uma.
   - **(b) Sem referência de nicho: montar com `compor.mjs` + `blocks-ce`** (os componentes normalizados do banco Code Eagle). Chamar a skill `curador-componentes` para escolher os blocos certos por nicho×estética (não escolher "por estrutura parecida" — isso é o erro já reprovado 2x: forçar um grid de equipe de SaaS a virar cardápio). Escrever `planos/<slug>.json` (ver `planos/virtudes-guimaraes.json` como referência de formato) e apontar o brief para ele via `"plano": "planos/<slug>.json"`. **Este é o motor padrão quando (a) não se aplica** — nunca cair em (c) por omissão.
   - **(c) Último recurso, e só com justificação escrita no brief:** `assemble.mjs` + `blocks/` manuais. Só quando nem (a) nem (b) servem (nicho sem referência E sem bloco `blocks-ce` que sirva de verdade, nem depois de ajuste de slots). Registar no brief (`_nota`) por que (a)/(b) foram descartados — se isso acontecer com frequência, é sinal de normalizar mais componentes do catálogo (ver auditoria dev-squad), não de aceitar o motor manual como padrão.

4. **Escreve o `briefs/<slug>.json`** seguindo o contrato em `brief.exemplo.json`:
   - `cliente` (factos reais), `tokens` (a cor REAL da marca do cliente), `seo`, `schema`.
   - Caminho (b): `"plano": "planos/<slug>.json"` (o `run.mjs` roteia sozinho para `compor.mjs` quando este campo existe).
   - Caminho (c) apenas: `blocos` (a estrutura da página).
   - `defeitos` (do passo 2), `siteAntigo` (a URL atual, para a capa).
   - A **copy** dos slots entra aqui, escrita com técnica (é o que sustenta o valor de €1000+). Regra do Mateus: a copy das páginas nasce no `/copy-elite` e entra no brief, nunca improvisada no build.

5. **Corre o motor** (monta + gate + editor + comparador, sem publicar):
   ```bash
   node tools/run.mjs briefs/<slug>.json
   ```
   Isto gera `sites/<slug>/index.html`, atualiza `comparar.html` e põe o lead em `redesenhado` no CRM. **Se o gate reprovar (FAIL), o ciclo para** e diz porquê: corrige o brief/plano (ou o bloco, se for defeito de um `blocks-ce` compartilhado — nesse caso corrigir o bloco na FONTE, para todo cliente futuro herdar a correção) e volta a correr. Não se publica lixo.
   - Caminho (b): o `compor.mjs` já avisa sozinho se algum slot não foi preenchido (0 ocorrências) ou se sobrou nome de marca alheia do template de origem no HTML final — não ignorar esses avisos, é o defeito mais embaraçoso que existe (cliente A vendo logo do cliente/template B).

## Verificação (regra do Mateus: "pronto" = verificado no navegador)

Abre `sites/<slug>/index.html` no browser com hard refresh. Confere a 375px e 1440px: zero rolagem horizontal, fotos reais do cliente presentes, logo presente (ou monograma tipográfico se não houver logo real), nenhuma secção órfã, **nenhum texto/logo de outra marca**. O gate cobre o grep-able; o olho cobre o resto.

## Saída

Por cliente: 1 linha do que melhorou + o card do `comparar.html` (antes/depois). Próximo passo: `/publicar` (Vercel) ou o ciclo completo com `run.mjs --deploy`.

## Regras

- **Nunca HTML à mão.** O LLM escreve o brief/plano; o motor monta.
- **A escolha do motor (passo 3) é sempre explícita e registada**, nunca um default silencioso.
- **Blocos de `blocks-ce/` são partilhados entre clientes.** Nunca editar `block.html`/`block.css` para um cliente específico — customização vai em `slots`/`vars`/`estilo` do `plano.json`. Fotos do cliente vão em `assetsExtra` (pasta própria, nunca dentro de `blocks-ce/`).
- **Estado só no `prospector.db`** (via `crm.mjs`/`run.mjs`). Sem `leads.md` paralelo.
- **Fotos e logo REAIS do cliente** são inviolável. Site sem elas não vai para cliente.

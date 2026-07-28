# AGENTS.md — operação reproduzível da fábrica

Este repositório é a fonte de verdade para o motor, temas, gates, kits e skills portáveis. Um agente não deve substituir o fluxo abaixo por geração livre de uma página inteira: isso elimina a curadoria, a direção de nicho e os controles de qualidade.

## Regra de entrada

Antes de criar, alterar ou publicar um site, execute:

```bash
npm ci
npm run fabrica -- --install
npm run fabrica
npm run check
node tools/catalogo-lock.mjs
```

`fabrica` bloqueia quando runtime ou browser de QA não estão disponíveis. `catalogo-lock` permite trabalhar sem banco comercial apenas com dobras já promovidas; catálogo divergente impede curar ou importar peças novas.

## Roteamento por etapa

| Etapa | Fonte obrigatória | Skill/agente preferencial | Saída que desbloqueia a próxima etapa |
| --- | --- | --- | --- |
| Prospeção | Google Maps, site e contactos públicos | `skills/prospeccao-maps` | lead qualificado e factos verificáveis |
| Diagnóstico | `tools/qualificar.mjs` + revisão | motor nativo | defeitos objetivos, nunca inventados |
| Escolha do kit | `kits.json`, `receitas.json`, `direcoes.json` | `skills/curador-componentes` | tema/kit e justificativa das dobras |
| Composição | `cliente.json` + tema existente | `run.mjs`, `hydrate.mjs`, `compor-tema.mjs` | obra isolada por cliente |
| Nova dobra/tema | catálogo conferido + direção de nicho | `frontend-squad`, `landing-forge` ou `dev-squad` se instalados | código portado e estado `revisar` |
| QA e promoção | build, gate, browser e revisão humana | motor nativo; agentes só auxiliam | `aprovada`/`em-producao` após todos os gates |
| Publicação | config e credenciais locais | `tools/deploy.mjs` | URL HTTP 200, com `--deploy` explícito |
| Proposta | URL válida e defeitos verificados | `skills/proposta-email` | rascunho individual |
| Contrato | dados confirmados pelo operador | `skills/contrato-servico` | minuta com revisão jurídica quando aplicável |

## Skills que acompanham o repositório

As únicas skills garantidas por este clone são as de `skills/`: `curador-componentes`, `prospeccao-maps`, `proposta-email` e `contrato-servico`. Leia a respetiva `SKILL.md` inteira antes de executar a etapa.

Uma instalação de Codex ou Claude Code pode expor skills e squads adicionais, mas eles não são dependência silenciosa do motor: estão listados como opcionais no `FACTORY.manifest.json`.

## Regras não negociáveis

1. Para os três nichos iniciais, priorize o tema do kit; não faça colagem aleatória quando houver tema compatível.
2. Só use dobras `aprovada` ou `em-producao` em produção. `experimental` e `revisar` são para curadoria.
3. Não copie peça crua do banco: use a esteira, remova marca/assets/links de origem e respeite a exclusividade dos manifestos.
4. Não publique nem envie proposta sem conteúdo e contactos reais revisados por humano.
5. A aprovação exige `npm run check`, build da obra, gate, browser real em 375/1440 px e revisão humana.
6. Nunca registre credenciais, CRM, briefs reais, imagens de clientes ou obras geradas em Git.

## Limite de reprodutibilidade

Com o mesmo commit, lockfiles, catálogo, inputs e runtime, o motor reproduz o mesmo fluxo e bloqueia quando uma pré-condição faltar. A criação assistida por LLM não é determinística: qualquer alteração que ele proponha só entra no fluxo depois de versionada, testada e promovida.

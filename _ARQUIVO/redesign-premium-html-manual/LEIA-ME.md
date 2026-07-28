# Skill redesign-premium (arquivada)

## O que era

A skill `redesign-premium` orientava o LLM a redesenhar o site de um cliente escrevendo o **HTML inteiro à mão** num "arquivo único autocontido" (`sites/[slug]/[slug].html`, CSS inline, sem build).

## Porque saiu

Encontrada numa auditoria de documentação (2026-07-23): a doutrina descrita é incompatível com o motor que este repositório de facto usa. O motor (`tools/run.mjs` + `tools/assemble.mjs`/`tools/remix.mjs`/`tools/compor.mjs`) monta o site a partir de blocos escritos uma vez e reutilizados, ou clona/re-skina templates do banco Code Eagle, ou hidrata um TEMA (`tools/tema/hydrate.mjs`) a partir de `clientes/<slug>/cliente.json`. A razão de ser do motor inteiro (ver `README.md`, secção "Automático vs. humano") é justamente **não** pedir a um LLM que cuspa HTML: isso custa ~20k tokens e 6-12 min por cliente, e converge para "cara de IA", o problema que o projeto existe para resolver. Uma skill que instrui o oposto disso é uma contradição ativa, não uma alternativa válida.

Também estava desatualizada em pormenores concretos: usava o padrão de nome `sites/[slug]/[slug].html`, enquanto todo o motor usa `sites/<slug>/index.html`; e mandava gerar `[slug]-editor.html` copiando o HTML à mão, quando `tools/editor.mjs` já faz isso por script.

## O que a substitui

- **Montagem do site**: `tools/run.mjs` → `tools/assemble.mjs` (blocos manuais em `blocks/`), `tools/remix.mjs` (templates do banco re-skinados) ou `tools/compor.mjs` (motor de blocos normalizados em `blocks-ce/`, quando o brief tem `plano`). Ver a tabela de ferramentas no `README.md`.
- **Motor de temas** (via principal para sites novos): `tools/tema/hydrate.mjs` materializa `clientes/<slug>/cliente.json` dentro de `themes/<tema>/`. Ver `README.md`.
- **Editor visual**: `tools/editor.mjs`, chamado por `commands/editor.md` (`/editor`).
- **Regras de estética**: preservadas em `referencias/lei-de-estetica.md` (fonte que `tools/gate.mjs` implementa mecanicamente).

## O que foi preservado fora deste arquivo

Dois ficheiros da pasta `references/` desta skill continuam vivos, movidos para `referencias/` na raiz do repositório porque ainda são referenciados por ferramentas ativas:

- `referencias/lei-de-estetica.md`, fonte canônica das regras que `tools/gate.mjs` e `tools/verificar.mjs` verificam.
- `referencias/editor-visual-legado.md`, a camada de edição manual antiga, preservada como referência histórica (marcada como superseded por `tools/editor.mjs` no próprio ficheiro).

Os restantes (`anti-ia.md`, `direcao-de-arte.md`, `comparador-template.html`) ficam só aqui dentro, no arquivo.

## Pendência encontrada durante o arquivamento

`bank/REGRA-DE-BASE.md` referenciava `skills/redesign-premium/references/direcao-de-arte.md` para decidir o arquétipo pelo nicho. Esse ficheiro não foi promovido a `referencias/` (não estava no âmbito desta limpeza), o link em `bank/REGRA-DE-BASE.md` foi atualizado para apontar para o caminho arquivado aqui. Se `direcao-de-arte.md` ainda for usado ativamente na escolha de arquétipo/base, vale a pena promovê-lo também num próximo passo.

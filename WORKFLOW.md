# Workflow operacional — da prospecção à proposta

Leia `AGENTS.md` antes de operar. Este é o fluxo que deve se repetir em qualquer máquina.

## 1. Preparar e validar ambiente

```bash
npm run fabrica
npm run check
node tools/catalogo-lock.mjs
```

Não prossiga se a fábrica estiver bloqueada. Sem banco comercial, use somente kits e dobras promovidos; não complete o site com componentes desconhecidos.

## 2. Prospectar e registrar fatos

Use `skills/prospeccao-maps` para encontrar lead com contacto público e fatos verificáveis. Para site existente:

```bash
node tools/qualificar.mjs <url> --json
```

Crie brief/cliente local. Nunca invente avaliação, serviço, foto, contacto ou defeito para deixar a proposta mais convincente.

## 3. Escolher entre kit existente e kit completo

### Kit existente — caminho padrão

Consulte o registro:

```bash
node tools/tema/kits.mjs
node tools/tema/kits.mjs --nicho <nicho> --json
```

Use quando o nicho já tiver tema e dobras aprovadas. Preencha `clientes/<slug>/cliente.json` com dados reais. O tema fornece a estrutura; o cliente fornece conteúdo, marca e imagens.

### Kit completo — expansão controlada

Use quando o kit não cobrir a necessidade real. Primeiro confira o catálogo; então use `curador-componentes` por slot e com justificativa. A peça entra como `experimental` ou `revisar`, passa pela esteira e só é promovida após QA. Um agente/squad acelera implementação, mas não promove sozinho.

## 4. Materializar e construir

```bash
node tools/tema/hydrate.mjs <slug> [--tema <tema>]
cd themes/<tema>/.obras/<slug>
npx next build
```

Uma obra é descartável e isolada. Corrija sempre tema-fonte ou ficha do cliente, nunca a obra gerada.

## 5. Portões de qualidade

Para cada site, nesta ordem:

1. `npm run check`.
2. Build da obra materializada.
3. Gate mecânico (`tools/gate.mjs`, normalmente encadeado pelo ciclo).
4. Passe em Chromium por `tools/verificar.mjs`, obrigatoriamente em 375 e 1440 px.
5. Revisão humana de contraste, conteúdo/fotos reais, CTA, links, telefone, endereço, mapa e rotas.

Falha ou aviso relevante interrompe publicação. Teste passando não substitui revisão humana.

## 6. Ensaio, publicação e proposta

```bash
node tools/run.mjs briefs/<slug>.json
node tools/run.mjs briefs/<slug>.json --deploy
```

Sem `--deploy`, o ciclo é ensaio e não cria URL real. Com `--deploy`, URL só entra no CRM depois de HTTP 200. A proposta é criada em rascunho por `proposta-email`; uma pessoa revisa e envia individualmente.

## 7. Escalar sem perder o padrão

Versione somente motor, temas-fonte, testes, fixtures sintéticas, documentação e lockfiles. Dados operacionais ficam locais, com backup separado. Quando um padrão for aprovado, promova-o no registro para que todas as máquinas o usem explicitamente.

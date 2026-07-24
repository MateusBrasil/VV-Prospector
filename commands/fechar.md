---
description: Regista o fecho de um lead (valor combinado) e encaminha para o contrato
argument-hint: "[slug do cliente] [valor] — ex: /fechar clinica-x 1200"
---

Regista o momento em que o negócio é fechado: o lead respondeu, negociaram, e o valor foi combinado. **A negociação em si é humana** (preço é conversa, não script) — este comando só regista o desfecho no CRM, que é o que faltava entre "respondeu" e "contrato".

> Buraco que isto tapa: o funil ia de `respondeu` direto para `/contrato`, sem ninguém dono do momento em que o dinheiro é combinado. Agora há.

## Passos

1. **Identifica o lead**: `$ARGUMENTS` (slug + valor), ou lista os leads em `respondeu` (`node tools/crm.mjs list --status respondeu`) e pergunta qual fechou.
2. **Confirma o valor** com o utilizador (o preço vem dele, nunca inventado). Se houver mensalidade de manutenção, anota também.
3. **Regista no CRM**:
   ```bash
   node tools/crm.mjs set <slug> valor <valor>
   node tools/crm.mjs status <slug> fechado
   ```
   Opcional, se combinaram data ou notas da negociação:
   ```bash
   node tools/crm.mjs set <slug> notas "Fechado DD/MM por €<valor>. <detalhe>"
   ```
4. **Encaminha para o contrato**: sugere `/contrato <slug>` como próximo passo.
   > ⚠️ Lembrete: o `/contrato` ainda está em formato Brasil (CPF/gov.br) — pendente de portar para PT (NIF/RGPD) na Fase 5 com o legal-squad. Para cliente PT, rever à mão até lá.

## Saída

Confirma: `<slug>` fechado por €<valor>, estado atualizado no CRM. Próximo: `/contrato <slug>`.

## Regras

- **Só o utilizador confirma o fecho** — nunca marcar `fechado` a partir de uma resposta automática (essa é a regra do `/respostas`).
- **Estado só no `prospector.db`** (via `crm.mjs`). Sem `leads.md`.
- **O valor vem do utilizador**, nunca inventado.

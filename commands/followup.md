---
description: Gera follow-up para propostas sem resposta há 3+ dias (1 por lead, nunca repete)
argument-hint: "[slug do cliente] — opcional, padrão: todos os elegíveis"
---

Gera follow-ups educados para propostas paradas, seguindo a skill `proposta-email`.

## Passos

1. **Verifica respostas ANTES**: corre a lógica do `/respostas` (Gmail via conector) para não fazer follow-up de quem já respondeu — quem respondeu vira `respondeu` e sai da lista.
2. **Seleciona os elegíveis**: `node tools/crm.mjs followup [dias] --json` já devolve a lista pronta, leads com status `proposta_enviada`, `data_proposta` há 3+ dias (padrão; passa `dias` para outro valor) e sem "follow-up" no campo `notas` (a regra de nunca repetir já vem filtrada pelo próprio comando). Se `$ARGUMENTS` indicar um cliente, restringe a ele dentro dessa lista.
3. **Escreve o follow-up** — máximo 4 linhas, tom de quem lembra com gentileza, nunca cobra:
   - Referência leve ao primeiro e-mail ("escrevi-lhe a semana passada sobre o site").
   - Pergunta única: "conseguiu ver a página que preparei?" + o mesmo link da capa (único link).
   - Sem preço, sem urgência, sem "última oportunidade". Passa pelo checklist anti-spam da skill.
4. **Cria o rascunho no Gmail** (mesmo modo do config). **1 follow-up por lead, para sempre** — se não responder ao follow-up, o lead é marcado como frio pelo utilizador.
5. **Regista**: `node tools/crm.mjs set <slug> notas "Follow-up enviado em DD/MM"`.

## Saída

Lista: follow-ups criados, leads que responderam entretanto (celebra), e leads sem resposta que já receberam follow-up (sugerir marcar como frio). Oferece agendar `/respostas` + `/followup` como verificação diária.

## Regras

- **Estado só no `prospector.db`** (via `crm.mjs`). Sem `leads.md`.
- **PT-PT**: e-mail + telefone, +351. Sem WhatsApp.

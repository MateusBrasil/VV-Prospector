---
description: Verifica no Gmail se os leads responderam e atualiza o CRM
argument-hint: "[slug do cliente] — opcional, padrão verifica todos com proposta na rua"
---

Verifica respostas às propostas enviadas e atualiza o funil no CRM.

## Passos

1. **Lê o CRM**: `node tools/crm.mjs list --status proposta_enviada --json` (ou o cliente de `$ARGUMENTS`).
2. Para cada lead, busca no Gmail via conector (`search_threads`) por respostas a partir da `data_proposta` — query típica: `from:<email do lead> after:<data_proposta>`, e a thread original (`to:<email> <primeiras palavras do assunto>`).
3. **Classifica**:
   - **Respondeu**: existe mensagem DO lead na thread → `node tools/crm.mjs status <slug> respondeu` e regista a essência em notas: `node tools/crm.mjs set <slug> notas "Respondeu DD/MM: <resumo>"`.
   - **Sem resposta**: mantém `proposta_enviada` (o follow-up cuida do alerta).
4. **Resume** para o utilizador: quem respondeu (com a essência de cada resposta), quem segue sem resposta e há quantos dias, e as ações sugeridas. Encaminha: quem respondeu com interesse → negociar e depois `/fechar <slug> <valor>`; os parados há 3+ dias → `/followup` (ou `node tools/crm.mjs followup` para ver a lista).

## Automação (sugerir na primeira execução)

Oferece deixar isto automático: "queres que eu verifique as respostas todas as manhãs e deixe o CRM atualizado?" — se aceitar, agenda a verificação diária (ver `/loop` ou uma tarefa agendada).

## Regras

- **Estado só no `prospector.db`** (via `crm.mjs`). Não há `leads.md` nem escrita direta no `.db`.
- **NUNCA marques `fechado` sozinho** — fechamento envolve preço/acordo; só o utilizador confirma (aí regista `valor`).
- **Não respondas e-mails automaticamente**: leitura e classificação apenas. Se o utilizador quiser, oferece rascunho de resposta.

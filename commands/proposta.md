---
description: Gera a capa e o rascunho do e-mail de proposta (via capa.mjs + email.mjs)
argument-hint: "[slug do cliente ou todos]"
---

Prepara a proposta de um lead **publicado** através do motor: a capa por `tools/capa.mjs`, o rascunho do e-mail por `tools/email.mjs`. O e-mail fica sempre em **rascunho** — revisão humana antes de qualquer envio, 1 a 1, da conta pessoal.

> O cliente NUNCA recebe um link cru (link cru de desconhecido = golpe). A **capa** é o invólucro de confiança: ele abre e vê o negócio DELE — o nome, a nota real do Google, o site antigo ao lado do novo. É a peça que mais vende.

## Passos

1. **Determina os destinatários**: `$ARGUMENTS`, ou os leads `publicado` sem proposta ainda (`node tools/crm.mjs list --status publicado`). Só leads com e-mail confirmado no brief.

2. **Gera a capa** (se ainda não foi gerada pelo `run.mjs`):
   ```bash
   node tools/capa.mjs briefs/<slug>.json --antes <url-do-site-atual> --depois <url-nova-publicada> --out sites/<slug>/proposta.html
   ```
   O `capa.mjs` já verifica se o site antigo aceita iframe e adapta o painel "antes" (iframe ao vivo, screenshot `antigo.png`, ou cartão) — nunca uma moldura morta. Depois republica a pasta para a capa ficar no ar (o `run.mjs --deploy` já faz isto no passo 8).

3. **Gera o rascunho do e-mail**:
   ```bash
   node tools/email.mjs briefs/<slug>.json --capa <url-da-capa> --out sites/<slug>
   ```
   O `email.mjs` monta o e-mail PT-PT (elogio pela nota do Google + os `defeitos` verificados do brief + o único link: a capa) e **corre o checklist anti-spam bloqueante em código** — se falhar, sai com erro e diz o quê (assunto >60 chars, palavra-gatilho, emoji, etc.). Reescreve o brief até passar. O e-mail nunca é inventado: sem `defeitos` no brief, o `email.mjs` recusa-se a correr, de propósito.

4. **Cria o rascunho no Gmail**: usa o conteúdo de `sites/<slug>/email.txt` / `email.json` (PARA, ASSUNTO, corpo HTML) e cria o rascunho pelo conector do Gmail (`create_draft`). **Não envia** — avisa o utilizador que está pronto na caixa de rascunhos para rever e enviar à mão.

5. **Atualiza o estado**: `node tools/crm.mjs status <slug> proposta_enviada` (o `crm.mjs` preenche a `data_proposta` sozinho).

## Saída

Por cliente: link da capa (testado em https) e confirmação de que o rascunho está no Gmail. Lembra: `/respostas` verifica quem respondeu, `/followup` cuida dos parados há 3+ dias.

## Regras

- **A capa e o e-mail saem do motor** (`capa.mjs`/`email.mjs`), não de template preenchido à mão.
- **Estado só no `prospector.db`** (via `crm.mjs`). Sem `leads.md`.
- **Zero preço no e-mail.** Preço só na conversa que a resposta abre.
- **PT-PT**: e-mail + telefone, +351. Sem WhatsApp/wa.me.

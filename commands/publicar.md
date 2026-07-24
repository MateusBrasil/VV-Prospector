---
description: Publica o site do lead na Vercel e devolve a URL pública (verifica 200 OK)
argument-hint: "[slug do cliente ou todos]"
---

Publica o site na **Vercel** através do motor `tools/deploy.mjs` — nunca à mão, nunca por FTP.

> Deploy é código, não coreografia. O `deploy.mjs` já trata do difícil: escreve o `.vercelignore` (o rascunho do email NUNCA vai para a web), publica, **confirma que a URL responde 200** (deploy que devolve URL mas serve 404 é o modo de falha clássico da Vercel) e só então grava no CRM. Se falhar, para e diz porquê — não finge sucesso.

## Passos

1. **Determina o que publicar**: `$ARGUMENTS` (um slug ou "todos"), ou lista os leads com status `redesenhado` no CRM (`node tools/crm.mjs list --status redesenhado`) e pergunta.
2. **Confirma que o site existe**: cada `sites/<slug>/index.html` tem de estar montado (saído do `assemble`/`remix` + gate). Se não estiver, corre o ciclo primeiro (`node tools/run.mjs briefs/<slug>.json`).
3. **Publica** (preview por omissão; `--prod` quando fores mesmo publicar para o cliente):
   ```bash
   node tools/deploy.mjs sites/<slug> --prod
   ```
   Sem `--prod` é preview (seguro). O `deploy.mjs` já grava `url_nova` e `status=publicado` no CRM depois do 200 OK — não precisas de atualizar estado à mão.
4. **A capa e o email vêm a seguir**, e o ciclo inteiro (`run.mjs --deploy`) já encadeia deploy → capa → deploy da capa → email. Para publicar tudo de uma vez, prefere o `run.mjs`:
   ```bash
   node tools/run.mjs briefs/<slug>.json --deploy --prod
   ```

## Saída

Por cliente: a URL pública nova (testada em https, 200 OK confirmado pelo próprio `deploy.mjs`). Próximo passo: `/proposta` para o email, ou o ciclo completo já tê-lo-á gerado.

## Regras

- **Só Vercel.** O caminho HostGator/FTP foi aposentado (ver `_ARQUIVO/funil-hostgator-brasil/`). Não montes fila de publicação nem publicador local.
- **O estado do lead vive só no `prospector.db`** (via `crm.mjs`). Não há `leads.md` paralelo.
- **Nada vai para produção sem intenção**: `--prod` é explícito. Por omissão é preview.

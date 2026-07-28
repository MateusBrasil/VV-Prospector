# Skill dashboard-leads (arquivada)

## O que era

A skill `dashboard-leads` descrevia um painel web local: servidor Python (`dashboard-server.py` + `iniciar-dashboard.bat`) servindo `dashboard.html` em `http://localhost:8765`, com vistas de kanban, contratos e financeiro sobre o `prospector.db`.

## Porque saiu

Encontrada numa auditoria de documentação (2026-07-23): a própria skill já se descrevia como aposentada em intenção (o `README.md` deste fork nunca listou o dashboard Python entre as ferramentas ativas, só o CLI `tools/crm.mjs`), mas `commands/setup.md` ainda mandava instalá-la no passo 6 (copiar `dashboard-server.py`/`iniciar-dashboard.bat` para a raiz), uma contradição direta.

O schema que a skill descrevia também tinha divergido do real:

| Campo na skill (camelCase) | Campo real em `prospector.db` (via `tools/crm.mjs`, snake_case) |
|---|---|
| `urlNova` | `url_nova` |
| `dataProposta` | `data_proposta` |
| `whatsapp` (coluna própria) | não existe, o funil PT-PT é e-mail + telefone, sem WhatsApp |
| `docCliente` / `endCliente` | não existem no `crm.mjs` (aparecem só na skill `contrato-servico`, que é a pendência BR→PT documentada à parte) |

Ou seja: mesmo que alguém tentasse reativar o dashboard Python seguindo esta skill à letra, o código escrito não bateria com as colunas reais da tabela `leads` (ver `tools/crm.mjs`, constante `CAMPOS`).

## O que a substitui

`tools/crm.mjs` — CLI sobre `prospector.db` (`init`, `add`, `status`, `set`, `list`, `followup`). É a fonte única de verdade e o que o `README.md` e o `.claude-plugin/plugin.json` descrevem hoje. Não há painel web nem servidor HTTP neste fork.

## Ação relacionada

`commands/setup.md`, secção "6. CRM e dashboard", foi corrigida para remover a instrução de instalar o dashboard Python e passou a apontar só para `tools/crm.mjs init`.

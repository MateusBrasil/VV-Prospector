# Manual — upstream v2.1.0 (arquivado)

## O que era

`manual.html` era o manual de utilizador do plugin **upstream** (Prospector de Sites, de Helio Arreche), versão 2.1.0. Descrevia o produto original, não este fork.

## Porque saiu

Encontrado numa auditoria de documentação (2026-07-23) como uma das 8 contradições ativas do repositório: qualquer sessão nova que o lesse ficava com o mapa errado do projeto. Especificamente, o manual descrevia como reais coisas que este fork nunca teve:

- **Hospedagem HostGator via cPanel/FTP**, com passo a passo de "usuário, domínio e servidor" e `.bat` de publicação automática. Este fork publica **só na Vercel**, via `tools/deploy.mjs`.
- **Conector do Google Drive com planilha de leads no Google Sheets.** Este fork guarda tudo em `prospector.db` (SQLite via `tools/crm.mjs`), não existe planilha nenhuma.
- **WhatsApp no setup e no funil** ("dados da assinatura... WhatsApp", "descartados com WhatsApp"). O funil deste fork é **PT-PT, e-mail + telefone**; a regra explícita do projeto é nunca usar WhatsApp no canal comercial.
- **"Claude Cowork"** como o app-alvo. Este fork roda em Claude Code / linha de comandos, sobre o repositório.
- **Dashboard Python em `localhost:8765`** como CRM oficial, essa skill (`dashboard-leads`) foi ela própria arquivada por descrever um schema divergente do banco real (ver `_ARQUIVO/dashboard-leads-schema-divergente/LEIA-ME.md`).
- Emoji no `<h1>` ("📘 Manual"), contra a regra anti-emoji do próprio gate de estética deste fork.

## O que o substitui

O `README.md` na raiz do repositório é o documento vivo: descreve o ciclo real (`tools/run.mjs`), as ferramentas reais, o motor de temas (`tools/tema/`) e as diferenças verificadas contra o upstream.

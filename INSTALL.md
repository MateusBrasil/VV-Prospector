# Instalação da fábrica

Este procedimento instala o motor e verifica se outra máquina consegue produzir o mesmo fluxo. Não preenche credenciais, não publica sites e não cria dados de cliente.

## 1. Pré-requisitos

- Node.js 22 ou superior, Git e npm.
- Internet para instalar dependências e Chromium do Playwright.
- Para publicar: conta/autenticação Vercel local.
- Para importar novas peças: cópia local autorizada do banco comercial.

## 2. Instalação limpa

Na raiz do repositório:

```bash
npm ci
npm run fabrica -- --install
npm run fabrica
npm run check
```

O diagnóstico deve ficar `PRONTA`. Avisos sobre config local, Vercel ou agentes são normais numa instalação nova, mas não autorizam deploy.

## 3. Banco comercial e `catalogo.lock.json`

Quem tiver a licença deve colocar a própria cópia autorizada em `bank/_componentes/` e executar:

```bash
node tools/catalogo-lock.mjs
```

O resultado deve ser `catálogo confere`. O lock confere nomes/categorias das 615 peças de referência e impede que outra máquina escolha silenciosamente um conjunto diferente.

- **Sem banco:** pode usar temas e dobras já promovidos; não pode importar ou curar peças novas como se o catálogo estivesse completo.
- **Banco divergente:** pare e alinhe a cópia licenciada antes de curar/importar. Não regenere o lock numa máquina secundária.
- **Mudança autorizada do acervo:** só o mantenedor da máquina de referência executa `node tools/catalogo-lock.mjs --gravar`, revisa o diff e versiona o novo lock.

## 4. Configuração local

```powershell
Copy-Item prospector-config.exemplo.json prospector-config.json
node tools/crm.mjs init
```

Preencha `prospector-config.json` com assinatura e preferências locais. Config, CRM, briefs e dados de cliente não devem ser commitados.

## 5. Dependências dos temas

Cada tema Next possui o seu próprio `package.json`. Instale antes de desenvolver ou compilar o tema:

```powershell
Push-Location themes/restaurante-noir; npm install; Pop-Location
Push-Location themes/odontologia; npm install; Pop-Location
Push-Location themes/clinica-estetica; npm install; Pop-Location
```

Os pacotes dos temas ainda não têm lockfile próprio. Portanto, uma instalação de tema não é bit-a-bit reproduzível até cada tema ter lock revisado e versionado. O lock do motor e o do catálogo evitam os outros desvios silenciosos; registre versões/locks antes de tratar uma nova máquina como produção.

## 6. Agentes e skills

`FACTORY.manifest.json` é a lista versionada de capacidades. As skills em `skills/` acompanham o repositório. Squads como `frontend-squad`, `landing-forge`, `dev-squad` e `vibe-squad` dependem do host (Codex/Claude) e são auxiliares opcionais: a fábrica não deve falhar em silêncio nem gerar versão inferior apenas porque não estão instalados.

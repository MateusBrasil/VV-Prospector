---
description: Configura o plugin — assinatura, preferências e Vercel (roda uma vez)
---

Configure o ambiente do Prospector Premium. Siga esta ordem:

## 1. Pasta de trabalho

Este repositório JÁ é a pasta de trabalho (`prospector-premium/`). Config, briefs, sites e o CRM (`prospector.db`) vivem aqui. Confirme que está na raiz do repo antes de continuar.

## 2. Verificar config existente

Procure `prospector-config.json` na raiz. Se existir, mostre um resumo e pergunte o que atualizar. Se não existir, copie de `prospector-config.exemplo.json` e preencha com os dados abaixo.

## 3. Dados do utilizador (perguntar via AskUserQuestion / formulário)

Portugal: o canal é **e-mail + telefone** — não há campo de WhatsApp. Colete:

- **Assinatura da proposta**: nome completo, como se apresenta (ex.: "faço sites para negócios locais"), e-mail e telefone (`+351...`, e `telefoneRaw` no formato `+351XXXXXXXXX`).
- **Nichos padrão de prospecção**: sugira restaurantes, clínicas dentárias, cabeleireiros, advogados como ponto de partida — o utilizador edita livremente.
- **Cidade/região padrão** (ex.: Guimarães, Braga).
- **Leads qualificados por busca**: padrão 10.
- **Modo de envio da proposta**: padrão "criar rascunho no Gmail para revisão" (recomendado). O envio é sempre à mão, 1 a 1.

## 4. Vercel (para publicar)

O deploy é na **Vercel** (plano grátis para o piloto), via `tools/deploy.mjs`. Não há credenciais no config — a Vercel CLI trata da autenticação na máquina.

- Confirme que a CLI existe e está autenticada:
  ```bash
  npx vercel --version   # existe?
  npx vercel whoami      # autenticado?
  ```
- Se não estiver autenticada, oriente o utilizador a correr `npx vercel login` no terminal dele (login interativo — sugira o prefixo `!` na prompt do Claude Code para o output vir para a sessão).
- **Não é preciso publicar nada no setup.** O primeiro deploy real acontece no `/publicar` ou no `run.mjs --deploy`.

## 5. Salvar

Salve em `prospector-config.json` na raiz, neste formato:

```json
{
  "assinatura": {
    "nome": "",
    "apresentacao": "faço sites para negócios locais",
    "email": "tu@odominio.pt",
    "telefone": "+351 900 000 000",
    "telefoneRaw": "+351900000000"
  },
  "prospeccao": { "nichos": ["restaurantes", "clinicas-dentarias", "cabeleireiros", "advogados"], "cidade": "", "leadsPorBusca": 10 },
  "envio": { "modo": "rascunho" },
  "dominio": "odominio.pt"
}
```

## 6. CRM

O CRM é o `prospector.db` (SQLite nativo do Node), fonte única de verdade. Inicie:

```bash
node tools/crm.mjs init
```

Não há painel web nem servidor separado, o funil inteiro (`list`, `status`, `set`, `followup`) é comandos do próprio `tools/crm.mjs` (ver `README.md`). A skill `dashboard-leads` foi arquivada em 2026-07-23 (`_ARQUIVO/dashboard-leads-schema-divergente/LEIA-ME.md`), descrevia um dashboard Python com schema divergente do banco real.

## 7. Encerrar

Confirme o que foi salvo e explique o ciclo — **um comando faz tudo**:

```bash
node tools/run.mjs briefs/<slug>.json            # ensaio (não publica)
node tools/run.mjs briefs/<slug>.json --deploy   # publica na Vercel
```

O ciclo encadeia: CRM → montar → gate → editor → comparador → deploy → capa → deploy da capa → email → CRM. Prospecção (`/prospectar`) alimenta o funil; o resto corre no motor. O e-mail fica sempre em rascunho — revisão humana antes de qualquer envio.

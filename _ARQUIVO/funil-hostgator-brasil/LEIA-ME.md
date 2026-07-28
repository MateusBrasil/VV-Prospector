# Funil HostGator / Brasil — APOSENTADO em 2026-07-17

Este material é o **funil antigo** herdado do plugin do Helio Arreche. Foi aposentado (não apagado — convenção `_ARQUIVO`) quando o Prospector Premium unificou a arquitetura à volta do motor `.mjs`.

## Porquê saiu

O motor novo (`tools/*.mjs`) e este funil antigo **contradiziam-se** em três eixos, e ter os dois vivos fazia o operador publicar no sítio errado sem querer:

| Eixo | Funil antigo (isto) | Motor `.mjs` (o que ficou) |
|---|---|---|
| **Deploy** | HostGator via FTP + publicador local (`.bat`/`.vbs`/agendador do Windows) | **Vercel** via `tools/deploy.mjs` (verifica 200 OK antes de gravar no CRM) |
| **País** | Brasil: `wa.me/55`, CPF/CNPJ, gov.br, registro.br | **Portugal**: +351, NIF, RGPD, email+telefone |
| **Trabalho** | LLM refaz a página à mão (~7 min, tokens caros) | `assemble`/`remix` + `editor.mjs` + `gate.mjs` (segundos, zero token) |

## O que está aqui dentro

- `skills/deploy-hostgator/` — a skill de deploy por FTP + os scripts do publicador local.
- `commands/publicar-hostgator.md` — a versão antiga do `/publicar` (a nova publica na Vercel).

## Se algum dia precisares de FTP outra vez

O material está intacto. Mas o caminho canónico agora é: `node tools/deploy.mjs sites/<slug> --prod`. A hospedagem do piloto é a Vercel (plano grátis). Ver o plano em `.claude/plans/`.

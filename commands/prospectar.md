---
description: Busca no Google Maps negócios bem avaliados com sites fracos e regista no CRM
argument-hint: "[nicho] [cidade] — opcional, usa os padrões do config"
---

Prospecta leads qualificados seguindo a skill `prospeccao-maps`. Portugal: o canal é **e-mail + telefone** (+351), não WhatsApp.

## Preparação

1. Lê `prospector-config.json`. Se não existir, orienta a correr `/setup` primeiro.
2. Determina nicho e cidade: usa `$ARGUMENTS` se informados; senão, pergunta qual dos nichos do config usar (e confirma a cidade). O utilizador pode sempre trocar na hora.
3. Vê quem já está no funil para excluir da busca: `node tools/crm.mjs list --json`.

## Execução

Usa o Claude in Chrome (só token, zero API paga) para abrir o Google Maps e correr o fluxo da skill `prospeccao-maps`:

- Busca "[nicho] em [cidade]".
- Avalia até 25 estabelecimentos ou até atingir os leads qualificados do config (padrão 10), o que vier primeiro.
- **Critério ouro**: nota alta (≥ 4.7) + muitas avaliações (≥ 40) + e-mail público, e então dois caminhos: site ATIVO porém fraco → redesenho; sem site (ou fora do ar/só página em plataforma de terceiros) → **criar do zero** (não descarta, é o lead com a dor maior). Só descarta: nota/avaliações abaixo do corte, site já bom, ou sem e-mail público. Regista descartados com o motivo e continua até bater a meta.
- Para cada candidato, abre o site em nova aba e avalia com os critérios da skill. **Melhor ainda**: corre `node tools/qualificar.mjs <url> --json` — devolve os defeitos com evidência citável, prontos para o brief.
- Coleta: nome, nota, nº de avaliações, telefone (`+351...`), e-mail, URL do site, e o motivo objetivo pelo qual o site é fraco.

## Saída — direto no CRM (`prospector.db`)

Cada lead qualificado entra no funil **imediatamente** (lead fora do CRM é lead perdido). Não há planilha do Google nem `leads.md` — o `prospector.db` é a fonte única.

- Para quem tem site (redesenho): cria um brief mínimo `briefs/<slug>.json` com o `cliente` (nome, telefone, email, nota, avaliacoes), `siteAntigo` (URL atual) e `defeitos` (do qualificar), e regista:
  ```bash
  node tools/crm.mjs add briefs/<slug>.json
  ```
- Para quem não tem site (criar do zero): regista só o `cliente` e o `tipo` (`sem_site`/`plataforma_alheia`) — o brief completo (com fotos/fatos coletados) é montado pelo `/criar-do-zero`, não aqui.
- Os descartados: nota curta ao utilizador (não sujam o CRM), com o motivo.

Mostra a tabela final ao utilizador (qualificados e descartados, ranqueados por potencial: melhor nota + pior site primeiro) e sugere o próximo passo: `/redesenhar` para quem tem site, `/criar-do-zero` para quem não tem.

## Boas práticas

- Trabalhar por região dá vantagem: menos concorrência e conhecimento local.
- Enquanto o browser trabalha, não interromper o fluxo — só reportar a tabela final.
- Se o Google Maps pedir login/captcha, **pausa e avisa** o utilizador (prospecção é semi-assistida de propósito — é o que a mantém a custo-zero).

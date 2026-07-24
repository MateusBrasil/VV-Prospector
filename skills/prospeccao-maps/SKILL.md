---
name: prospeccao-maps
description: Esta skill deve ser usada ao prospectar clientes no Google Maps — buscar negócios bem avaliados com sites fracos, qualificar leads, avaliar a qualidade de sites de terceiros e registar no CRM. Acione quando o utilizador disser "prospectar", "buscar clientes", "achar leads", "clientes com site ruim" ou correr /prospectar.
---

# Prospecção no Google Maps

Encontrar o cliente ouro: negócio que JÁ fatura bem (nota alta, muitas avaliações) mas perde clientes por causa de um site fraco. Não se cria procura — conserta-se onde o dinheiro está a escapar.

**Portugal:** o canal de contacto é **e-mail + telefone** (`+351`). Não se coleta WhatsApp.
**Custo:** a prospecção corre pelo **Claude in Chrome** (só token, zero API paga, zero cartão). É semi-assistida — se o Google pedir captcha/login, pausa e avisa.

## Fluxo (via Claude in Chrome)

1. Abrir `https://www.google.com/maps` e buscar `[nicho] em [cidade]`.
2. Percorrer os resultados um a um, em ordem. Para cada estabelecimento:
   - Abrir o perfil e ler nota, nº de avaliações e link do site.
   - **Filtro 1 — potencial financeiro**: nota ≥ 4.7 E avaliações ≥ 40. Reprovou → próximo.
   - **Filtro 2 — site próprio ou não**: se tem site ativo e acessível, segue para o Filtro 3 (redesenho). Se não tem site, o site está fora do ar, ou é só página em plataforma de terceiros/rede social (Wix grátis, Instagram/Facebook, linktr.ee, business.site, piat.am, umai.io e similares) → **não descartar**: é candidato ao caminho "criar do zero" (`/criar-do-zero`), que costuma ser o lead com a dor maior (não há o que comparar). Regista o tipo (`sem_site` ou `plataforma_alheia`) para rotear certo depois.
   - **Filtro 3 — site fraco** (só para quem tem site próprio): abrir o site em nova aba e avaliar pelos critérios abaixo. Site bom → descartar. Site ativo porém fraco → candidato ao redesenho (falta só o e-mail).
3. Parar ao atingir a meta de leads qualificados (config, padrão 10) ou após avaliar 25 estabelecimentos.
4. Saltar estabelecimentos que já estão no CRM (`node tools/crm.mjs list --json`).

## Critérios de site fraco (guardar o motivo específico)

Qualifica como lead se o site (ativo) tiver 2 ou mais destes problemas. **Melhor: corre `node tools/qualificar.mjs <url> --json`** — ele audita por HTTP e devolve cada defeito com evidência citável (verificável por Ctrl+U pelo dono do negócio), pronto para o campo `defeitos` do brief.

- Layout datado (aparência de template de 10+ anos, fontes de sistema, imagens esticadas/pixeladas)
- Sem CTA claro de contacto/marcação na primeira dobra
- Domínio gratuito ou alojado em plataforma alheia (Wix grátis, subdomínio de terceiros com marca da plataforma)
- Não responsivo (quebra no telemóvel)
- Conteúdo desorganizado: serviços escondidos, sem hierarquia, texto corrido sem secções
- Sem prova social (nenhuma avaliação/depoimento, apesar da nota alta no Google)

O motivo anotado deve ser objetivo e verificável — vai ser citado na proposta. Regra: opinião refuta-se e mata a venda; facto (versão de biblioteca, ano do rodapé, ausência de HTTPS) não se refuta.

## Coleta por lead

Nome, nota, nº de avaliações, telefone (`+351...`), e-mail, URL do site, motivo.

**E-MAIL É OBRIGATÓRIO.** A proposta vai por e-mail — lead sem e-mail público não fecha o ciclo. Procura nesta ordem: site (rodapé e página de contacto), links `mailto:`, o site onde o negócio está listado (inclusive a página em plataforma de terceiros, se for esse o caso), busca no Google por "[nome] + email/contacto", Instagram/Facebook do negócio. Se NÃO encontrares e-mail: descarta o lead (regista o motivo) e continua até bater a meta.

## Saída — direto no CRM (`prospector.db`, fonte única)

Cada qualificado entra no funil imediatamente. **Não há planilha do Google nem `leads.md`** — o estado vive só no `prospector.db`.

- **Lead com site próprio (redesenho)**: monta um `briefs/<slug>.json` mínimo (`cliente` com nome/telefone/email/nota/avaliacoes, `siteAntigo`, `defeitos` do qualificar).
- **Lead sem site próprio (`sem_site`/`plataforma_alheia`, criar do zero)**: não escreve o brief ainda aqui — isso é trabalho do `/criar-do-zero`, que coleta fotos/fatos reais (Google Maps, Instagram/Facebook, página em plataforma de terceiros) antes de montar o brief. Registar só o suficiente para rotear (`cliente`, `tipo: 'sem_site'` ou `'plataforma_alheia'`).

```bash
node tools/crm.mjs add briefs/<slug>.json
```

O lead entra com status `novo`. Descartados: reporta ao utilizador com o motivo, sem os gravar no CRM.

## Boas práticas

- Trabalhar por região dá vantagem: menos concorrência e conhecimento local.
- Enquanto o browser trabalha, não interromper o fluxo — só reportar a tabela final.
- Se o Google Maps pedir login/captcha, pausar e avisar o utilizador.

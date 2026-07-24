---
name: curador-componentes
description: Esta skill deve ser usada ao escolher QUAIS dos 613 componentes do banco (Code Eagle) entram num site que se vai compor — o hero, o menu, o rodapé, as transições, os efeitos de scroll certos para o NICHO do cliente. Acione ao compor um site novo, antes de costurar as peças, ou quando o utilizador disser "que componente uso para", "escolhe o hero", "monta o site com os componentes".
---

# Curador de componentes

O banco tem 613 componentes de nível (bank/_componentes/, colhidos do Code Eagle). São a matéria-prima. **Esta skill decide QUAIS entram em cada site** — a ponte entre "temos 613 peças" e "este site usa estas 8, e porquê". Sem curadoria, cair-se-ia no erro clássico: um hero WebGL tech-SaaS numa clínica dentária. A peça tem de casar com o NEGÓCIO, não só ser bonita.

## A ferramenta que já existe (usar sempre)

O banco é pesquisável por `tools/bank.mjs`. NÃO adivinhar o que há, PERGUNTAR:

```bash
node tools/bank.mjs cats                     # as 24 categorias e contagens + libs dominantes
node tools/bank.mjs list <categoria>         # ex: list hero, list menu, list transicoes
node tools/bank.mjs find <termo>             # busca por nome/tag/lib
node tools/bank.mjs show "<nome>"            # ficheiros + caminho de um componente
node tools/bank.mjs find menu --lib gsap     # filtrar por lib
node tools/bank.mjs list botoes --sem-lib    # só vanilla (zero dependências)
```

Categorias: Seções(200), Scroll(57), Botões(35), Menu(31), Cursor(26), Hero(25), Textos(24), Transições de Página(23), Efeitos 3D(22), Animações de Rolagem(22), WebGL/ThreeJS(21), Animações(21), UI Effects(19), Carrossel(17), Parallax(15), Animações SVG(14), Animações de Grid(12), Physics(10), Cards(7), Loaders(6), Backgrounds(4), Checkbox(2).

## O casamento NICHO × ESTÉTICA (a regra que impede o erro)

A estética do banco é sobretudo **studio criativo / marca premium / imersivo** (muito 3D, WebGL, scroll cinematográfico). Isso brilha onde "impressionar É o produto" e desencaixa onde o cliente quer "informação e confiança". Antes de escolher, classificar o nicho:

| Perfil do nicho | Exemplos | O que USAR | O que EVITAR |
|---|---|---|---|
| **Imersivo / experiência** (impressionar vende) | restaurante fino, hotel/boutique, moda, fotógrafo, arquiteto, estúdio, evento, imobiliária de luxo, ginásio premium | heros WebGL/3D, scroll parallax, transições de página cinematográficas, cursor custom, física | nada, é o terreno nativo |
| **Confiança / serviço** (clareza vende) | clínica, dentista, veterinário, advogado, contabilista, seguros, saúde | hero editorial sóbrio, scroll reveal suave, micro-interações discretas, tipografia forte | WebGL gratuito, cursor exótico, física, 3D decorativo, loaders longos (urgência não espera) |
| **Comércio / conversão** (ação vende) | e-commerce, serviços locais com marcação, SaaS | hero com CTA claro, carrossel de produto, botões animados com feedback, sticky nav | 3D que atrasa o LCP, transições que escondem o CTA |

**Regra de ouro:** o efeito serve a mensagem do negócio, nunca o contrário. Se o componente é lindo mas distrai do que o cliente precisa, corta-se ou adapta-se. Um loader de 5 segundos numa clínica de urgências é um defeito, não um charme (lição do Kasablanca: eles cortaram o preloader por causa disto).

## O processo de curadoria (por site)

1. **Classificar o nicho** num dos 3 perfis acima. Se ambíguo, decidir pelo que o CLIENTE precisa que o visitante faça (impressionar-se? confiar? agir?).
2. **Definir a estrutura** do site (as secções que o negócio pede): tipicamente nav/menu, hero, prova social, serviços/oferta, sobre, galeria/portfólio (se visual), contacto/mapa, rodapé.
3. **Para cada slot, escolher a peça** via `bank.mjs`, filtrando pela estética do perfil. Preferir:
   - Peças **vanilla ou GSAP** (o motor Prospector é HTML estático + GSAP/anime; React não pluga direto).
   - Peças cuja libs já usamos (GSAP 382, ScrollTrigger, Lenis, Three) para não somar stacks.
4. **Justificar cada escolha** em 1 linha (porque esta peça, para este negócio). Se nenhuma encaixa, dizê-lo e propor adaptar a mais próxima.
5. **Entregar a lista curada**: `{slot, componente, pasta, libs, porquê}` para quem compõe (o frontend-squad / vibecoder-squad, ou a composição direta).

## Contrato com os squads de build

Esta skill NÃO constrói o site, CURA as peças. Depois entrega a quem executa:
- **vibecoder-squad / frontend-squad** — para compor com direção de arte (eles são sector-aware e têm editorial-review anti-"cara de AI"). ⚠️ Eles assumem React/Next; as peças do banco são vanilla/GSAP. A curadoria deve marcar a stack de cada peça para o build saber o que adaptar.
- **composição direta** — quando o site é HTML estático simples, costurar as peças curadas adaptando aos tokens da marca (a regra inviolável: adaptar à cor/fotos/copy REAIS do cliente, nunca template cru = "todo cliente igual").

## Não-negociáveis (herdados das regras do Mateus)

- **Adaptar aos tokens da marca real** do cliente. Componente cru copiado = reprovado.
- **PT-PT** no site do cliente. **Anti-emoji** (SVG de linha). **Sem travessão** na copy.
- **Verificado no navegador** (hard refresh, 375 e 1440px), nunca "código entregue".
- **O gate (`tools/gate.mjs`) valida no fim** — presença tipográfica, ratio, motion. Peça que reprova o gate, adapta-se ou troca-se.
- **Régua: padrão Kasablanca** (ver memória project_padrao_kasablanca) — nível, não clonagem. Buscar variedade entre clientes (o seed do brief).

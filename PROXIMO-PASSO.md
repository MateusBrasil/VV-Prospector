# Arranque da próxima sessão — construir os temas dos 3 nichos

> Escrito em 2026-07-27 no fim de uma sessão que ficou sem contexto. Tudo aqui está medido e
> verificado, não é plano no ar. O objetivo deste ficheiro é a próxima sessão não gastar uma
> hora a redescobrir o que já se sabe.

## O que ficou pronto e verificado

- **Direção de arte dos 3 nichos** em `themes/base/direcoes.json`. Paletas, tipografia,
  escala e ritmo, com contraste WCAG AA verificado por código. `node tools/tema/verificar-direcoes.mjs`
  corre 3 testes que puxam em direções opostas (contraste, cara de IA, código do nicho) e passa.
- **Receitas de nicho** em `themes/base/receitas.json`. 8 nichos, 3 com `prioridade: 1`.
- **Lote mínimo selecionado**: `node tools/tema/selecionar-24.mjs` devolve 21 dobras,
  custo somado 94, com exclusividade entre nichos garantida por reserva.
- **Acervo**: 552 dobras, todas com `registo` e `slot` reclassificados, 13 com `_rever` vazio.
- `npm test` 49/49 · `node tools/check-syntax.mjs` 48/48.

## O bloqueio que a próxima sessão tem de resolver

**Não existe tema de `odontologia` nem de `clinica-estetica`.** Só há `moda-editorial` e
`restaurante-noir`. Isto só foi descoberto no fim da sessão, e muda o tamanho do trabalho:
não é escrever um componente, é construir dois temas Next completos.

O que um tema precisa (ver `themes/moda-editorial/` como molde funcional, está em produção):

```
themes/<nicho>/
  next.config.mjs          output:'export' + trailingSlash:true  (sem isto /sobre da 404)
  package.json
  dobras.manifest.json     lista as dobras promovidas que a obra materializa
  src/app/                 layout.js, page.js, e uma pasta por rota
  src/components/          Nav, Footer, Hero, e os do nicho
  src/theme/               consome tokens.generated.css
```

### Ordem sugerida, do mais barato ao mais caro

1. **`themes/odontologia/`** a partir do molde do `moda-editorial`. É o nicho mais simples:
   sóbrio, poucas secções, sem vitrine obrigatória.
2. **`Servicos` VEM DO BANCO, não é escrito à mão.** Houve uma decisão em contrário nesta
   sessão e foi REVERTIDA no mesmo dia: assentava em dados velhos (as dobras já não eram
   todas cinematográficas depois de eu corrigir o classificador) e num argumento falso (o
   valor de uma secção é a estrutura, não só a animação). O Mateus apontou o furo. A regra
   correta: **usar os componentes do banco e editá-los é o caminho por omissão**; só se
   escreve à mão o que o banco genuinamente não tem, como o rodapé, que tem ZERO candidatos
   verificados. `servicos` tem 4 dobras reais.
3. **`themes/clinica-estetica/`**, que precisa de vitrine antes/depois.
4. **Adaptar `restaurante-noir`** à direção nova. ATENÇÃO: o Kasablanca está no ar e não se
   mexe; a direção nova de restauração é deliberadamente o OPOSTO dele (fotografia manda,
   h1 pequeno, tela clara, sem caixa alta).
5. **Portar as 21 dobras** do lote mínimo, pela ordem de custo que o seletor já dá.

## Regras duras que não se negoceiam (medidas, custaram bugs reais)

- `trailingSlash: true` no `next.config.mjs`, senão as rotas dão 404 em estático.
- Nunca preloader nem ecrã de "clicar para entrar".
- Zero emoji na UI, ícones em SVG de linha.
- Zero hex fora de token; zero CDN de fonte; `transition: all` proibido; máx 2 curvas
  cubic-bezier no projeto inteiro.
- **Nunca pôr texto em `--base-300` nem `--base-200`**: são cor de linha e borda. Os papéis
  são `texto=base600, textoSuave=base500, textoTenue=base400`. Com os papéis antigos os 3
  nichos falhavam WCAG AA.
- Deploy: `--nome <slug>` obrigatório; `vercel link -p <nome> --yes` antes; `--target` explícito.
- Antes de reprocessar qualquer dobra em lote, confirmar que não está `aprovada`: já se
  atropelou curadoria manual assim uma vez.

## A lição que mais vale desta sessão

Quatro vezes escrevi uma regra automática, otimizei contra a métrica que ela media, e perdi
o objetivo. Todas foram apanhadas por MEDIÇÃO, nenhuma por inspeção:

1. Fugir do teal do Tailwind levou o acento da odontologia para fora do código do nicho.
2. O alerta de fonte disparava em 50% do acervo e não informava nada.
3. Inferir `registo` de sinais técnicos esvaziou o nicho sóbrio inteiro.
4. Ao corrigir o 3, sinais frouxos mandaram 100% de um slot para o balde errado.

**Quando uma classificação automática der resultado extremo (quase tudo num balde, um grupo
inteiro a zero), desconfiar da REGRA antes de aceitar o resultado.** Medir a distribuição
custa segundos; inspecionar dez exemplos à mão não apanha, porque cada um parece plausível
isoladamente. E exigir prova, não indício: `blur(40px)` é decoração banal, `WebGLRenderer`
é prova.

## Squads a chamar (pedido explícito do Mateus)

- **dev-squad 2.0** para a arquitetura dos temas e o porte das dobras.
- **frontend-squad** para os componentes e o movimento.
- Ambos já foram autorizados pelo Mateus em 2026-07-27. Não é preciso pedir de novo.

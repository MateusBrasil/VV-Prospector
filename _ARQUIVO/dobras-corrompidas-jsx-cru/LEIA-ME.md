# Dobras corrompidas — arquivadas em 2026-07-24

Estas 8 dobras foram geradas pela esteira ANTES da guarda de deteção ser acrescentada em
`tools/tema/esteira.mjs` (`extrairPartes`). O bug: alguns componentes do banco Code Eagle
têm um arquivo chamado `index.html` que na verdade é código-fonte JSX/JS cru (`import
React`, `export default function App() {...}`) salvo com a extensão errada — nunca foi
HTML de verdade, não tem `<html>`/`<body>` nenhum.

Sem a guarda, `extrairPartes` seguia em frente achando que era HTML, `mBody` não
encontrava `<body>` e devolvia o DOCUMENTO INTEIRO como se fosse o corpo. O resultado:
código JavaScript inteiro (imports, hooks, funções, JSX de um componente Next/Vite
completo) virava TEXTO LITERAL dentro do `Dobra.jsx` gerado — sintaticamente válido (o
build não quebrava), mas visualmente uma pilha de código aparecendo na tela.

Origem de cada uma:
- `botao-gooey-search-interaction` ← `bank/_componentes/botoes/gooey-search-interaction`
- `destaque-3d-4` ← `bank/_componentes/efeitos-3d/animacao-3d-4/delphi-main`
- `destaque-animated-tabs` ← `bank/_componentes/ui-effects/animated-tabs`
- `destaque-image-collage-toggle` ← `bank/_componentes/cards/image-collage-toggle`
- `menu-3d-hover-menu` ← `bank/_componentes/menu/3d-hover-menu`
- `menu-menu-marquee` ← `bank/_componentes/ui-effects/menu-marquee`
- `vitrine-carousel-3d-1` ← `bank/_componentes/carrossel/carousel-3d-1`
- `vitrine-carrosel-3d-2` ← `bank/_componentes/carrossel/carrosel-3d-2`

**Não são recuperáveis pela esteira** (que trabalha com HTML/CSS/JS vanilla, não com
componentes React/Next completos). Se algum destes componentes valer a pena no futuro,
precisa de adaptação manual: ler o componente React de origem, extrair a mecânica (JSX +
lógica de estado) e reescrever como dobra à mão, tratando as próprias libs (`framer-motion`
nalguns casos) como dependência nova do tema — não é o mesmo processo dos outros 557.

A guarda que previne repetição está em `tools/tema/esteira.mjs`, função `extrairPartes`:
falha alto com uma mensagem clara em vez de gerar dobra quebrada em silêncio.

# Preloader — arquivado por regra dura do Mateus (2026-07-23)

Regra: **nenhum site que a plataforma criar pode ter tela de carregamento com botão pra
"entrar" no site.** A pessoa acessa o domínio e já vê o site completo, sem clique nenhum
no meio do caminho.

Este componente (`Preloader.jsx`/`.css`, copiado do `restaurante-noir` pro `moda-editorial`)
nunca chegou a ser importado em nenhum `layout`/`page` dos dois temas — ficou morto desde
que foi trazido. Mas é EXATAMENTE o padrão banido: barra de progresso + botão "Enter
Website" que só aparece depois de "carregar", travando scroll até clicar. Foi arquivado
aqui (nunca deletado, convenção do projeto) pra não ser religado por engano numa sessão
futura sem saber da regra.

Se um dia precisar de uma transição de entrada (fade-in suave, sem travar nada e sem
exigir clique), isso é outra coisa — não é este componente, e tem que aparecer e sumir
sozinho, nunca esperar ação da pessoa.

Ver também: o Hero da dobra `hero/grade` (`themes/base/dobras/hero/grade/`) tinha um
`.enter` com aparência de botão (pílula, cursor de mão, hover) que também não fazia nada
ao clicar — mesma família de bug, mas esse ficou (é só um selo com o nome da marca sobre
a grelha) porque não bloqueia nada: a correção lá foi tirar a aparência de clicável, não
arquivar o Hero inteiro.

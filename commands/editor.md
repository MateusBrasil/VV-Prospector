---
description: Gera o editor visual de uma página redesenhada (editar textos e imagens no navegador e exportar)
argument-hint: "[nome do cliente]"
---

Gere a versão editável de uma página redesenhada.

## Passos

1. Identifique o cliente por `$ARGUMENTS` ou, se vazio, liste as pastas em `sites/` e pergunte qual página editar.
2. Corra `node tools/editor.mjs sites/<slug>/index.html`. O script injeta a camada de edição por código (zero tokens de LLM) e escreve `sites/<slug>/index-editor.html` ao lado do original. Nunca copie o HTML à mão nem peça ao LLM para reescrever a página, isso paga a montagem uma segunda vez à toa.
3. Apresente o ficheiro `index-editor.html` ao utilizador e explique em 3 linhas como usar:
   - Abra o ficheiro no navegador; clique em qualquer texto para editar direto na página.
   - Clique em qualquer imagem para trocar por um URL.
   - Botão "Guardar HTML" descarrega o HTML final limpo (sem a camada de edição) como `index.html`.
4. Se o utilizador disser que terminou a edição e enviar/guardar o ficheiro exportado, substitua `sites/<slug>/index.html` pelo conteúdo exportado antes de publicar.

## Nota

`tools/run.mjs` já corre este passo sozinho (a seguir ao gate) em todo ciclo `node tools/run.mjs briefs/<slug>.json`. Este comando serve para regenerar o editor isoladamente, sem repetir o ciclo inteiro.

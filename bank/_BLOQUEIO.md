# Bloqueio da colheita por categoria — 2026-07-17

**Estado: a colheita de páginas por categoria NÃO foi feita. Zero páginas novas.**
Este ficheiro diz exactamente porquê e o que destrava.

## O bloqueio, verificado (não assumido)

| Teste | Resultado |
|---|---|
| `GET /pages` anónimo | **302 → `/?login=1`**. A listagem inteira está atrás de login, não só o botão de download. |
| `POST /storage/v1/object/list/wrepo-zips` | `400 — headers must have required property 'authorization'`. O bucket **não é enumerável**. |
| `GET /storage/v1/bucket/wrepo-zips` | idem, exige `authorization`. |
| `GET .../wrepo-zips/<nome-conhecido>.zip` | **200 OK, 250 KB**. Objecto público — mas só se já se souber o nome exacto. |
| `/_next/data/<buildId>/pages.json`, `/api/pages`, `/api/templates` | 404. Sem rota pública de dados. |
| `/pages?_rsc=1` | 200, mas devolve a mesma página de login. |

**A conclusão mecânica:** os ZIPs são públicos **para quem sabe o nome**; os nomes só existem na listagem; a listagem exige sessão. Não há caminho anónimo. Nenhum nome de ZIP de página ficou registado em `catalogo.json` nem nos `.md` do banco — a descoberta da sessão anterior viveu só no browser e perdeu-se.

**O que eu não fiz, de propósito:** não fui à caça da anon key nos bundles JS para enumerar o bucket por trás do gate. O Mateus é assinante pago com licença comercial — o direito não está em causa — mas contornar o controlo de acesso do fornecedor é outra coisa, e a ordem era parar.

## O que destrava — 2 minutos de mão do Mateus

A sessão autenticada dele **é** o caminho legítimo (assinatura dele, licença dele). Falhou por um detalhe de ferramenta, não de direito: há **6 browsers ligados** ao Claude in Chrome e a ferramenta exige que **o Mateus escolha qual** — um subagente não tem como fazer essa pergunta.

**Opção A — dizer qual é o browser.** Numa sessão com o Claude principal (não subagente): "colhe as páginas do Code Eagle, usa o Browser 1". Com o browser escolhido e a sessão dele já logada, a colheita corre: abrir `/pages`, ler `.ef-title` + `.ef-tag` de cada card, agrupar **por tag**, e tirar 3-4 páginas **de tags diferentes** — nunca 4 seguidas da mesma lista.

**Opção B — colar os nomes dos ZIPs.** Logado em `nextcodeeagle.com/pages`, correr isto na consola (F12) e colar o resultado:

```js
copy(JSON.stringify([...document.querySelectorAll('.ef-title')].map((t,i)=>({
  titulo: t.textContent.trim(),
  tag: (document.querySelectorAll('.ef-tag')[i]||{}).textContent?.trim(),
  zip: (t.closest('a,[href]')||{}).href
    || [...t.closest('*').querySelectorAll('[href*=zip],[data-zip]')].map(e=>e.href||e.dataset.zip)[0]
}))))
```

Com os nomes em mão, `ce-harvest.mjs` baixa sem login — os objectos são públicos.

## Duas coisas que se aprenderam à mesma, e que mudam o plano

**1. O banco não tem 4 páginas utilizáveis. Tem 1.** Aberto ficheiro a ficheiro:
- `pg_clarix` — **é** uma página real (Vite, HTML puro). Medida: ratio **7,64×**, abaixo do mínimo 8×. Gate: **REPROVADO, 25 FAIL**.
- `pg_eagle2`, `pg_eagle5` — **não são "0 html"**, são projectos **Astro**: compilam para HTML, não o trazem em disco. Precisam de build (bloqueado, ver abaixo).
- `pg_stride` — **não é uma página**. É o `next16-claude-starter` da Textura: um scaffold com `AGENTS.md`, `.claude/` e um vault `obsidian/`. Não há o que medir nem re-skinar.

**2. A lacuna é de nicho, não de quantidade.** As 4 páginas são **todas** tech/SaaS/IA. **Zero** negócio local — restaurante, cabeleireiro, ginásio, clínica, advogado. É precisamente o que a prospecção de Guimarães precisa. Desbloquear o login resolve o *acesso*; **não garante** que a categoria "Awwwards" do Code Eagle tenha bases de nicho local. Vale confirmar isso na listagem **antes** de investir a colheita toda.

## Bloqueio nº 2 — build dos Astro precisa de OK explícito

`npm install` + `astro build` no `pg_eagle2` foi **recusado por política**: executa lifecycle scripts de código de terceiros não auditado. A recusa está certa e não foi contornada. Para medir o ADN dessas duas páginas o Mateus tem de autorizar o build explicitamente — de preferência depois de olhar o `package.json` delas.

"use client";

/* /sobre/ — a rota só existe se `paginas.sobre` foi preenchido. Se não foi, o schema
 * marca-a como omitida, `content.js` tira o link do menu e esta página devolve `null`
 * em vez de publicar uma casca vazia.
 *
 * A barra de navegação nesta rota é `data-tom="escuro"` (ver Nav.css): aqui não há
 * fotografia por baixo dela, e texto claro sobre a tela quase branca do nicho seria
 * invisível. Por isso a página começa com um espaço para a barra, que é o
 * `padding-top` em `.sobre-topo`.
 */

import { paginas, identidade, imagens } from "@/theme/content";

import "./sobre.css";

export default function Sobre() {
  const p = paginas.sobre;
  if (!p) return null;

  const paragrafos = Array.isArray(p.paragrafos) ? p.paragrafos : [];

  return (
    <article className="sobre">
      <header className="sobre-topo">
        <div className="sobre-inner">
          {p.kicker && <p className="sobre-kicker sm">{p.kicker}</p>}
          <h1>{p.titulo || identidade.nome}</h1>
        </div>
      </header>

      {imagens.aboutHero && (
        <div className="sobre-foto">
          <img src={imagens.aboutHero} alt={identidade.logoAlt} />
        </div>
      )}

      <div className="sobre-inner sobre-corpo">
        {paragrafos.map((texto, i) => (
          <p key={i}>{texto}</p>
        ))}
      </div>
    </article>
  );
}

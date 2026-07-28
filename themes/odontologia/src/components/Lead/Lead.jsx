"use client";

/* Lead — o parágrafo editorial da home (`paginas.home.sobre.titulo`, FATAL no schema).
 *
 * NÃO É UM ECRÃ DE ENTRADA. É uma secção de texto que vive ABAIXO do hero, já dentro da
 * página: a pessoa abre o domínio e vê o site completo, sem nada pelo meio. O motor
 * proíbe preloader e "clicar para entrar", e este tema não tem nem um nem outro em
 * lado nenhum (ver o comentário em `src/client-layout.js`).
 *
 * Escrito à mão de propósito: é uma linha de texto e um par de etiquetas, não há aqui
 * estrutura nenhuma que justifique ir buscar um componente ao banco.
 */

import { paginas, blocos } from "@/theme/content";

import "./Lead.css";

export default function Lead() {
  const sobre = paginas.home?.sobre;
  if (!sobre?.titulo) return null;

  const etiquetas = Array.isArray(sobre.etiquetas) ? sobre.etiquetas : [];

  return (
    <section className="lead">
      <div className="lead-inner">
        {blocos.lead?.rotulo && <p className="lead-kicker sm">{blocos.lead.rotulo}</p>}
        <p className="lead-texto md">{sobre.titulo}</p>

        {etiquetas.length > 0 && (
          <ul className="lead-etiquetas">
            {etiquetas.map((e, i) => (
              <li className="lead-etiqueta" key={i}>{e}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

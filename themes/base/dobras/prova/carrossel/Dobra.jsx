"use client";

/* Porte da secao-183 do Code Eagle. A origem e um marquee de testemunhos, mas trazia
 * cinco pessoas, cargos e imagens de demonstração fixos. A mecânica foi preservada como
 * uma ficha deslizante navegável: conteúdo, identidades e ritmo entram todos por slots. */
import { useState } from "react";
import "./Dobra.css";

const iniciais = nome => String(nome || "").split(/\s+/).filter(Boolean).slice(0, 2).map(p => p[0]).join("").toUpperCase();

export default function Dobra({ slots: s = {}, id }) {
  const itens = Array.isArray(s.itens) ? s.itens.filter(item => item?.texto && item?.nome) : [];
  const [ativo, setAtivo] = useState(0);
  if (!itens.length) return null;

  const atual = itens[ativo];
  const anterior = () => setAtivo(i => (i - 1 + itens.length) % itens.length);
  const proximo = () => setAtivo(i => (i + 1) % itens.length);

  return (
    <section className="dobra" data-dobra="prova-carrossel" id={id}>
      <div className="prova-carrossel">
        <header className="prova-carrossel__cabecalho">
          {s.rotulo && <p className="prova-carrossel__rotulo sm">{s.rotulo}</p>}
          {s.titulo && <h2>{s.titulo}</h2>}
        </header>

        <div className="prova-carrossel__palco" aria-roledescription="carrossel" aria-label={s.titulo || "Testemunhos"}>
          <article className="prova-carrossel__ficha" key={`${atual.nome}-${ativo}`}>
            <span className="prova-carrossel__aspas" aria-hidden="true">“</span>
            <blockquote>{atual.texto}</blockquote>
            <footer>
              <span className="prova-carrossel__avatar" aria-hidden="true">{iniciais(atual.nome)}</span>
              <span>
                <strong>{atual.nome}</strong>
                {atual.funcao && <small>{atual.funcao}</small>}
              </span>
              {atual.sintese && <em>{atual.sintese}</em>}
            </footer>
          </article>

          <div className="prova-carrossel__controlos">
            <button type="button" onClick={anterior} aria-label="Ver testemunho anterior">←</button>
            <p aria-live="polite">{String(ativo + 1).padStart(2, "0")} <span>/ {String(itens.length).padStart(2, "0")}</span></p>
            <button type="button" onClick={proximo} aria-label="Ver próximo testemunho">→</button>
          </div>
        </div>

        <div className="prova-carrossel__pontos" role="tablist" aria-label="Escolher testemunho">
          {itens.map((item, indice) => (
            <button key={`${item.nome}-${indice}`} type="button" role="tab" aria-selected={indice === ativo} aria-label={`Ver testemunho de ${item.nome}`} onClick={() => setAtivo(indice)} />
          ))}
        </div>
        {s.nota && <p className="prova-carrossel__nota sm">{s.nota}</p>}
      </div>
    </section>
  );
}

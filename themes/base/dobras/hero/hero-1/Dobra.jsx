"use client";
/* DOBRA da esteira a partir de bank/_componentes/hero-section/hero-1, PORTADA À MÃO
 * em 2026-07-28 para o tema `clinica-estetica` (registo editorial).
 *
 * O QUE FICOU DA ORIGEM (é o material que vale)
 *   a composição: uma tira de retratos ao centro do ecrã, com uma peça em destaque no
 *   meio, e o título tipográfico por cima de tudo. É um gesto de revista, que é
 *   exatamente o que o `direcoes.json` pede para este nicho.
 *
 * O QUE FOI ARRANCADO, E PORQUÊ
 *   1. `<header class="topbar">` com dois links `href="#"`. O tema tem Nav próprio; dois
 *      cabeçalhos na mesma página é erro de acessibilidade, e link sem destino real já
 *      foi reprovado ao vivo por um cliente.
 *   2. O bloco `useGSAP` inteiro, que na origem vinha comentado (categoria `global-duro`:
 *      registava `DOMContentLoaded` e reescrevia o `textContent` do h1 para o partir em
 *      palavras). Reescrevê-lo custava mais do que vale, e sem ele nada se perde: a
 *      composição é estática e a entrada passou a ser uma transição CSS curta que o
 *      `prefers-reduced-motion` do sistema já trava. Com ele caiu a dependência de gsap.
 *   3. Os cinco `<figure>` fixos deram lugar a `s.imagens`, uma lista. Uma clínica que só
 *      tenha três fotografias reais mostra três; nunca se repete a mesma foto para
 *      encher a tira, que era o que a estrutura fixa obrigava a fazer.
 *
 * Nada aqui pode ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import './Dobra.css';

export default function Dobra({ slots: s = {}, id }) {
  const imagens = (Array.isArray(s.imagens) ? s.imagens : []).filter(im => im && im.src);
  /* A peça em destaque é a do meio. Com número par de fotografias o meio cai à esquerda,
     que é o que a origem fazia e continua a ler bem. */
  const destaque = imagens.length ? Math.floor((imagens.length - 1) / 2) : -1;

  return (
    <section className="dobra" data-dobra="hero-hero-1" id={id}>
      <div className="stage">
        <div className="veil" />

        {imagens.length > 0 && (
          <div className="strip" aria-hidden="true">
            {imagens.map((im, i) => (
              <figure className={i === destaque ? "tile tile--feature" : "tile"} key={i}>
                <img src={im.src} alt="" />
              </figure>
            ))}
          </div>
        )}

        <div className="title">
          {s.rotulo && <p className="title__kicker sm">{s.rotulo}</p>}
          <h1>{s.titulo}</h1>
          {s.acao && s.destino && (
            <a className="title__cta" href={s.destino}>
              <span>{s.acao}</span>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}
        </div>

        {s.texto && (
          <div className="stage__footer">
            <p className="sm">{s.texto}</p>
          </div>
        )}
      </div>
    </section>
  );
}

"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/webgl-threejs/efeitos-webgl-9/interactive-particles-master/src
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* a origem não trazia JS */
  return (
    <section className="dobra" data-dobra="destaque-webgl-9" ref={raiz}>
      <main>
      			<div className="frame">
      				<div className="frame__title-wrap">
      					<h1 className="frame__title">{s.titulo}</h1>
      				</div>
      				<a className="frame__github" href={s.destino || '#'}>{s.acao}</a>
      				<div className="frame__links">
      					<a href={s.destino2 || '#'}>{s.acao2}</a>
      					<a href={s.destino3 || '#'}>{s.acao3}</a>
      				</div>
      			</div>
      		</main>
      		<div className="container"></div>
    </section>
  );
}
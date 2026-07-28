"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/physics/efeitos-de-fisica-9/works-main/bubbles/bin
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
    <section className="dobra" data-dobra="destaque-fisica-9" ref={raiz}>
      <a href={s.destino || '#'} style={{display: 'block', position: 'fixed', top: '8px', right: '8px', width: '24px', height: '24px', mixBlendMode: 'exclusion', zIndex: '256'}}>
      		<svg className="logo" viewBox="0 0 48 48">
      			<path strokeWidth="4" stroke="var(--base-100)" fill="var(--base-100)" d="M 44 4 c 0 10 0 14 -2 20 s -7 9 -10 10 c -12 4 -22 -6 -18 -18 c 1 -3 4 -8 10 -10 s 10 -2 20 -2 Z M 22 6 C 14 8 8 14 6 22 S 4 35 4 44 c 10 0 15 0 22 -2 s 14 -9 16 -16 s 2 -13 2 -22 C 34 4 30 4 22 6 Z"></path>
      			<path fill="var(--base-100)" d="M 20 23 A 8 8 0 1 0 36 23 A 8 8 0 1 0 20 23 Z M 32 11 A 3 3 0 1 0 38 11 A 3 3 0 1 0 32 11 Z"></path>
      		</svg>
      	</a>
      	<div id="wrapper"><canvas id="canvas"></canvas></div>
    </section>
  );
}
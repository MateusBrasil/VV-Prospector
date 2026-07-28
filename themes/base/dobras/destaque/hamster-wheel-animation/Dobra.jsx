"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/ui-effects/hamster-wheel-animation
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
    <section className="dobra" data-dobra="destaque-hamster-wheel-animation" ref={raiz}>
      <div className="wheel-and-hamster" role="img" aria-label="Orange and tan hamster running in a metal wheel">
      		<div className="wheel"></div>
      		<div className="hamster">
      			<div className="hamster__body">
      				<div className="hamster__head">
      					<div className="hamster__ear"></div>
      					<div className="hamster__eye"></div>
      					<div className="hamster__nose"></div>
      				</div>
      				<div className="hamster__limb hamster__limb--fr"></div>
      				<div className="hamster__limb hamster__limb--fl"></div>
      				<div className="hamster__limb hamster__limb--br"></div>
      				<div className="hamster__limb hamster__limb--bl"></div>
      				<div className="hamster__tail"></div>
      			</div>
      		</div>
      		<div className="spoke"></div>
      	</div>
    </section>
  );
}
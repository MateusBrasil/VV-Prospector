"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes-svg/svg-12
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
    <section className="dobra" data-dobra="destaque-svg-12" ref={raiz}>
      <main> <div className="frame"> <div className="frame__title-wrap"> <h1 className="frame__title">{s.titulo}</h1> </div> <nav className="frame__links"> <a href={s.destino || '#'}>{s.acao}</a> <a href={s.destino2 || '#'}>{s.acao2}</a> <a href={s.destino3 || '#'}>{s.acao3}</a> </nav> <nav className="frame__demos"> <a href={s.destino4 || '#'} className="frame__demo">{s.acao4}</a> </nav> </div> <nav className="menu"> <a href="#content-1" className="menu__item"> <span data-splitting="" className="menu__item-title">{s.rotulo}</span> <span data-splitting="" className="menu__item-sub">{s.rotulo2}</span> </a> <a href="#content-1" className="menu__item"> <span data-splitting="" className="menu__item-title">{s.rotulo3}</span> <span data-splitting="" className="menu__item-sub">{s.rotulo4}</span> </a> <a href="#content-1" className="menu__item"> <span data-splitting="" className="menu__item-title">{s.rotulo5}</span> <span data-splitting="" className="menu__item-sub">{s.rotulo6}</span> </a> </nav> </main> <div className="cursor"> <svg className="cursor__line cursor__line--horizontal"><line className="cursor__line-element" y1="10" x2="200" y2="10" shapeRendering="crispEdges" vectorEffect="non-scaling-stroke"/></svg> <svg className="cursor__line cursor__line--vertical"><line className="cursor__line-element" x1="10" x2="10" y2="200" shapeRendering="crispEdges" vectorEffect="non-scaling-stroke"/></svg> </div>
    </section>
  );
}
"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes/hover-11
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: modulo-es).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   import Cursor from './cursor';
  //   import {preloader} from './preloader';
  //   import LocomotiveScroll from 'locomotive-scroll';
  //   import Menu from './menu';
  //   
  //   // menu (<nav> element)
  //   const menuEl = document.querySelector('.menu');
  //   
  //   // preload the images set as data attrs in the menu items
  //   preloader('.menu__item').then(() => {
  //       // initialize the smooth scroll
  //       const scroll = new LocomotiveScroll({el: menuEl, smooth: true});
  //   
  //       // initialize custom cursor
  //       const cursor = new Cursor(document.querySelector('.cursor'));
  //   
  //       // initialize menu
  //       new Menu(menuEl);
  //   });
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-anim-hover-11" ref={raiz}>
      <main>
      		<div className="frame">
      			<div className="frame__title-wrap">
      				<h1 className="frame__title">{s.titulo}</h1>
      	
      			</div>
      			<span className="frame__button" aria-hidden="true">{s.rotulo}</span>
      		</div>
      		<nav className="menu" >
      			<a className="menu__item" data-img="img/1.jpg">
      				<span className="menu__item-text"><span className="menu__item-textinner">{s.rotulo2}</span></span>
      				<span className="menu__item-sub">{s.rotulo3}</span>
      			</a>
      			<a className="menu__item" data-img="img/2.jpg">
      				<span className="menu__item-text"><span className="menu__item-textinner">{s.rotulo4}</span></span>
      				<span className="menu__item-sub">{s.rotulo5}</span>
      			</a>
      			<a className="menu__item" data-img="img/3.jpg">
      				<span className="menu__item-text"><span className="menu__item-textinner">{s.rotulo6}</span></span>
      				<span className="menu__item-sub">{s.rotulo7}</span>
      			</a>
      			<a className="menu__item" data-img="img/4.jpg">
      				<span className="menu__item-text"><span className="menu__item-textinner">{s.rotulo8}</span></span>
      				<span className="menu__item-sub">{s.rotulo9}</span>
      			</a>
      			<a className="menu__item" data-img="img/5.jpg">
      				<span className="menu__item-text"><span className="menu__item-textinner">{s.rotulo10}</span></span>
      				<span className="menu__item-sub">{s.rotulo11}</span>
      			</a>
      			<a className="menu__item" data-img="img/6.jpg">
      				<span className="menu__item-text"><span className="menu__item-textinner">{s.rotulo12}</span></span>
      				<span className="menu__item-sub">{s.rotulo13}</span>
      			</a>
      			<a className="menu__item" data-img="img/7.jpg">
      				<span className="menu__item-text"><span className="menu__item-textinner">{s.rotulo14}</span></span>
      				<span className="menu__item-sub">{s.rotulo15}</span>
      			</a>
      			<a className="menu__item" data-img="img/8.jpg">
      				<span className="menu__item-text"><span className="menu__item-textinner">{s.rotulo16}</span></span>
      				<span className="menu__item-sub">{s.rotulo17}</span>
      			</a>
      			<a className="menu__item" data-img="img/9.jpg">
      				<span className="menu__item-text"><span className="menu__item-textinner">{s.rotulo18}</span></span>
      				<span className="menu__item-sub">{s.rotulo19}</span>
      			</a>
      			<a className="menu__item" data-img="img/10.jpg">
      				<span className="menu__item-text"><span className="menu__item-textinner">{s.rotulo20}</span></span>
      				<span className="menu__item-sub">{s.rotulo21}</span>
      			</a>
      			<a className="menu__item" data-img="img/11.jpg">
      				<span className="menu__item-text"><span className="menu__item-textinner">{s.rotulo22}</span></span>
      				<span className="menu__item-sub">{s.rotulo23}</span>
      			</a>
      			<a className="menu__item" data-img="img/12.jpg">
      				<span className="menu__item-text"><span className="menu__item-textinner">{s.rotulo24}</span></span>
      				<span className="menu__item-sub">{s.rotulo25}</span>
      			</a>
      			<a className="menu__item" data-img="img/13.jpg">
      				<span className="menu__item-text"><span className="menu__item-textinner">{s.rotulo26}</span></span>
      				<span className="menu__item-sub">{s.rotulo27}</span>
      			</a>
      			<a className="menu__item" data-img="img/14.jpg">
      				<span className="menu__item-text"><span className="menu__item-textinner">{s.rotulo28}</span></span>
      				<span className="menu__item-sub">{s.rotulo29}</span>
      			</a>
      			<a className="menu__item" data-img="img/15.jpg">
      				<span className="menu__item-text"><span className="menu__item-textinner">{s.rotulo30}</span></span>
      				<span className="menu__item-sub">{s.rotulo31}</span>
      			</a>
      			<a className="menu__item" data-img="img/16.jpg">
      				<span className="menu__item-text"><span className="menu__item-textinner">{s.rotulo32}</span></span>
      				<span className="menu__item-sub">{s.rotulo33}</span>
      			</a>
      			<a className="menu__item" data-img="img/17.jpg">
      				<span className="menu__item-text"><span className="menu__item-textinner">{s.rotulo34}</span></span>
      				<span className="menu__item-sub">{s.rotulo35}</span>
      			</a>
      			<a className="menu__item" data-img="img/18.jpg">
      				<span className="menu__item-text"><span className="menu__item-textinner">{s.rotulo36}</span></span>
      				<span className="menu__item-sub">{s.rotulo37}</span>
      			</a>
      	
      		</nav>
      	</main>
      	<svg className="cursor" width="80" height="80" viewBox="0 0 80 80">
      		<circle className="cursor__inner" cx="40" cy="40" r="20"/>
      	</svg>
    </section>
  );
}
"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes/hover-5
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
  //   import { preloader } from './preloader';
  //   import { Menu } from './menu.js';
  //   import { Cursor } from './cursor';
  //   
  //   // menu (<nav> element)
  //   const menuEl = document.querySelector('.menu');
  //   
  //   // preload the images set as data attrs in the menu items
  //   preloader('.menu__item').then(() => {
  //       // initialize menu
  //       new Menu(menuEl);
  //   });
  //   
  //   // initialize custom cursor
  //   const cursor = new Cursor(document.querySelector('.cursor'));
  //   
  //   // mouse effects on all links and others
  //   [...document.querySelectorAll('a')].forEach(link => {
  //       link.addEventListener('mouseenter', () => cursor.enter());
  //       link.addEventListener('mouseleave', () => cursor.leave());
  //   });
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-anim-hover-5" ref={raiz}>
      <main>
      		<nav className="menu">
      			<a className="menu__item" data-img="img/1.jpg">
      				<span className="menu__item-text" data-splitting>{s.rotulo}</span>
      			</a>
      			<a className="menu__item" data-img="img/2.jpg">
      				<span className="menu__item-text" data-splitting>{s.rotulo2}</span>
      			</a>
      			<a className="menu__item" data-img="img/3.jpg">
      				<span className="menu__item-text" data-splitting>{s.rotulo3}</span>
      			</a>
      			<a className="menu__item" data-img="img/4.jpg">
      				<span className="menu__item-text" data-splitting>{s.rotulo4}</span>
      			</a>
      			<a className="menu__item" data-img="img/5.jpg">
      				<span className="menu__item-text" data-splitting>{s.rotulo5}</span>
      			</a>
      			<a className="menu__item" data-img="img/6.jpg">
      				<span className="menu__item-text" data-splitting>{s.rotulo6}</span>
      			</a>
      		</nav>
      		<p className="content">
      			Sinoć kad se vraćah iz topla hamama,<br />
      			prođoh pokraj bašče staroga imama.<br />
      			Kad tamo u bašči, u hladu jasmina<br />
      			s ibrikom u ruci stajaše Emina.<br />
      			Ja kakva je pusta! Tako mi imana,<br />
      			stid je ne bi bilo da je kod sultana.<br />
      			Pa još kada šeće i plećima kreće,<br />
      			ni hodžin mi zapis više pomoć' neće!<br />
      			Ja joj nazvah selam. Al' moga mi dina,<br />
      			ne šće ni da čuje lijepa Emina,<br />
      			već u srebrn ibrik zahvatila vode,<br />
      			pa niz bašču đule zaljevati ode.
      		</p>
      	</main>
      	<svg className="cursor" width="20" height="20" viewBox="0 0 20 20">
      		<circle className="cursor__inner" cx="10" cy="10" r="5"/>
      	</svg>
    </section>
  );
}
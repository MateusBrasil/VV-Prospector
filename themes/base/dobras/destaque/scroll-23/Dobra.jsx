"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/scroll/scroll-23
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
  //   import { preloadFonts } from '../utils';
  //   import { RepeatTextScrollFx } from './repeatTextScrollFx';
  //   
  //   // Preload images and fonts and remove loader
  //   preloadFonts('fxx5dng').then(() => {
  //   	
  //   	// Apply the effect on these elements
  //   	document.querySelectorAll('[data-text-rep]').forEach(textEl => {
  //   		new RepeatTextScrollFx(textEl);
  //   	});
  //   
  //   	document.body.classList.remove('loading');
  //   
  //   });
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-scroll-23" ref={raiz}>
      <main data-scroll-container>
      			<div className="frame">
      				<h1 className="frame__title">Text Repetition Scroll Effect from <a className="hover-line" href={s.destino || '#'}>{s.acao}</a></h1>
      				
      				
      				<nav className="frame__links frame__links--demos">
      					<a href="index.html" className="current">{s.acao2}</a>
      					<a className="hover-line" href="index2.html">{s.acao3}</a>
      					<a className="hover-line" href="index3.html">{s.acao4}</a>
      					<a className="hover-line" href="index4.html">{s.acao5}</a>
      					<a className="hover-line" href="index5.html">{s.acao6}</a>
      				</nav>
      			</div>
      			<div className="content">
      				<p>These selected={true} cases of various forms of changes of consciousness all throw a certain light upon our case. Naef's case presents two hysteriform eclipses of memory, one of which is marked by the appearance of delusions, and the other by its long duration, contraction of the field of consciousness, and desire to wander. The peculiar associated impulses are specially clear in the cases of Proust and Mesnet. In our case the impulsive tearing up of the flowers, the digging up of the graves, form a parallel.</p>
      				<h2 className="content__title content__title--size-l" data-text-rep>{s.titulo}</h2>
      				<p>{s.texto}</p>
      				<h2 className="content__title content__title--size-s" data-text-rep>{s.titulo2}</h2>
      				<p>{s.texto2}</p>
      				<h2 className="content__title content__title--size-m content__title--left" data-text-rep>{s.titulo3}</h2>
      				<h2 className="content__title content__title--size-m content__title--right" data-text-rep>{s.titulo4}</h2>
      				<p>{s.texto3}</p>
      				<h2 className="content__title content__title--size-xl" data-text-rep>{s.titulo5}</h2>
      				<p>{s.texto4}</p>
      				<p className="footer">From <a className="hover-line" href={s.destino2 || '#'}>{s.acao7}</a> by C. G. Jung</p>
      				<p>
      					<a className="hover-line" href="index2.html" className="current">{s.acao8}</a>
      				</p>
      			</div>
      		</main>
    </section>
  );
}
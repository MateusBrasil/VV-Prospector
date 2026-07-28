"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes/hover-7
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
  //   import { preloadImages } from './utils';
  //   import { ImageHover } from './imageHover';
  //   
  //   preloadImages('[data-repetition]').then(() => {
  //       document.body.classList.remove('loading');
  //       // Initialize the hover effect on the images
  //       [...document.querySelectorAll('.image')].forEach(el => new ImageHover(el));
  //   });
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-anim-hover-7" ref={raiz}>
      <main>
      
      			<section className="content">
      				<div className="image image--style-1" data-repetition data-repetition-elems="3" data-repetition-stagger="-0.12" data-repetition-initial-scale="1.5" style={{backgroundImage: `url(${s.imagem})`}}></div>
      				<div className="image image--style-1" data-repetition data-repetition-elems="4" style={{backgroundImage: `url(${s.imagem2})`}}></div>
      				<div className="image image--style-1" data-repetition data-repetition-elems="5" data-repetition-stagger="-0.15" data-repetition-initial-scale="1.05" data-repetition-duration="0.5" data-repetition-ease="power1.inOut" style={{backgroundImage: `url(${s.imagem3})`}}></div>
      				<h2 className="content__title">
      					<span className="content__title-first">{s.rotulo}</span>
      					<span className="content__title-second">{s.rotulo2}</span>
      				</h2>
      			</section>
      			<section className="content">
      				<div className="image image--style-2" data-repetition data-repetition-elems="3" data-repetition-origin="50% 100%" data-repetition-stagger="-0.12" data-repetition-initial-scale="1.5" style={{backgroundImage: `url(${s.imagem4})`}}></div>
      				<div className="image image--style-2" data-repetition data-repetition-elems="4" data-repetition-origin="50% 100%" style={{backgroundImage: `url(${s.imagem5})`}}></div>
      				<div className="image image--style-2" data-repetition data-repetition-elems="5" data-repetition-origin="50% 100%" style={{backgroundImage: `url(${s.imagem6})`}}></div>
      				<h2 className="content__title">
      					<span className="content__title-first">{s.rotulo3}</span>
      					<span className="content__title-second">{s.rotulo4}</span>
      				</h2>
      			</section>
      			<section className="content">
      				<div className="image image--style-3" data-repetition data-repetition-elems="5" data-repetition-origin="0% 50%" data-repetition-animate="scaleX" style={{backgroundImage: `url(${s.imagem7})`}}></div>
      				<div className="image image--style-3" data-repetition data-repetition-elems="2" data-repetition-origin="100% 50%" data-repetition-animate="scaleX" style={{backgroundImage: `url(${s.imagem8})`}}></div>
      				<div className="image image--style-3" data-repetition data-repetition-elems="4" data-repetition-origin="50% 50%" data-repetition-animate="scaleX" style={{backgroundImage: `url(${s.imagem9})`}}></div>
      				<h2 className="content__title">
      					<span className="content__title-first">{s.rotulo5}</span>
      					<span className="content__title-second">{s.rotulo6}</span>
      				</h2>
      			</section>
      			<section className="content">
      				<div className="image image--style-3" data-repetition data-repetition-elems="4" data-repetition-origin="50% 0%" data-repetition-animate="scaleY" data-repetition-stagger="-0.12" data-repetition-initial-scale="1.8" style={{backgroundImage: `url(${s.imagem10})`}}></div>
      				<div className="image image--style-3" data-repetition data-repetition-elems="6" data-repetition-origin="150% 100%" data-repetition-animate="scaleY" data-repetition-stagger="-0.12" data-repetition-initial-scale="1.3" data-repetition-duration="0.5" data-repetition-ease="power1.inOut" style={{backgroundImage: `url(${s.imagem11})`}}></div>
      				<div className="image image--style-3" data-repetition data-repetition-elems="4" data-repetition-origin="50% 50%" data-repetition-animate="scaleY" data-repetition-stagger="-0.13" data-repetition-initial-scale="1.5" data-repetition-duration="0.5" data-repetition-ease="sine.inOut" style={{backgroundImage: `url(${s.imagem12})`}}></div>
      				<h2 className="content__title">
      					<span className="content__title-first">{s.rotulo7}</span>
      					<span className="content__title-second">{s.rotulo8}</span>
      				</h2>
      			</section>
      			<section className="content">
      				<div className="image image--style-4" data-repetition data-repetition-elems="6" data-repetition-origin="50% 100%" data-repetition-animate="scaleY" style={{backgroundImage: `url(${s.imagem13})`}}></div>
      				<div className="image image--style-4" data-repetition data-repetition-elems="6" data-repetition-origin="50% 100%" data-repetition-initial-scale="1.2" style={{backgroundImage: `url(${s.imagem14})`}}></div>
      				<div className="image image--style-4" data-repetition data-repetition-elems="6" data-repetition-origin="50% 100%" data-repetition-initial-scale="2.5" style={{backgroundImage: `url(${s.imagem15})`}}></div>
      				<h2 className="content__title">
      					<span className="content__title-first">{s.rotulo9}</span>
      					<span className="content__title-second">{s.rotulo10}</span>
      				</h2>
      			</section>
      		</main>
    </section>
  );
}
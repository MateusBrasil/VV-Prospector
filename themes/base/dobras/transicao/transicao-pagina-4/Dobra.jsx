"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/transicoes-de-pagina/transicao-pagina-4
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: modulo-es).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   import { preloadImages, preloadFonts } from '../utils.js';
  //   import { Overlay } from './overlay.js';
  //   
  //   // Select the overlay element from the DOM
  //   const overlayEl = document.querySelector('.overlay');
  //   
  //   // Intro
  //   const intro = document.querySelector('.intro');
  //   
  //   // Intro images
  //   const images = [...intro.querySelectorAll('.intro__image')];
  //   
  //   // Content elements
  //   const contentElements = [...document.querySelectorAll('.content-wrap > .content')];
  //   
  //   // Instantiate an Overlay object using the selected overlay element
  //   const overlay = new Overlay(overlayEl, {
  //       rows: 8,
  //       columns: 14
  //   });
  //   
  //   let isAnimating = false;
  //   
  //   // Attach click event listeners to each intro image
  //   images.forEach((image, position) => {
  //       // Show the overlay when an intro image is clicked
  //       image.addEventListener('click', () => {
  //           if ( isAnimating ) return;
  //           isAnimating = true;
  //           
  //           // Animate intro section
  //           gsap.to(intro, {
  //               duration: 0.8,
  //               ease: 'power3.inOut',
  //               yPercent: 15,
  //               opacity: 0
  //           });
  //   
  //           overlay.show({
  //               // Specify the cell's transform origin
  //               transformOrigin: '50% 0%',
  //               // Duration for each cell animation
  //               duration: 0.4,
  //               // Ease for each cell animation
  //               ease: 'power3.inOut',
  //               // Stagger function
  //               stagger: index => 0.03 * (overlay.cells.flat()[index].row + gsap.utils.random(0,5))
  //           })
  //           .then(() => {
  //               // show content
  //               intro.classList.add('intro--closed');
  //               contentElements[position].classList.add('content--open');
  //               
  //               // Now hide the overlay
  //               overlay.hide({
  //                   // Specify the cell's transform origin
  //                   transformOrigin: '50% 100%',
  //                   // Duration for each cell animation
  //                   duration: 0.4,
  //                   // Ease for each cell animation 
  //                   ease: 'power2',
  //                   // Stagger function
  //                   stagger: index => 0.03 * (overlay.cells.flat()[index].row + gsap.utils.random(0,5))
  //               }).then(() => isAnimating = false);
  //   
  //               // Animate content image
  //               gsap.fromTo(contentElements[position].querySelector('.content__img'), {
  //                   yPercent: -25,
  //                   opacity: 0
  //               }, {
  //                   duration: 0.8,
  //                   ease: 'power3',
  //                   yPercent: 0,
  //                   opacity: 1
  //               });
  //           })
  //           
  //       });
  //   });
  //   
  //   // Attach click event listeners to each content back button
  //   contentElements.forEach((content, position) => {
  //       content.querySelector('.content__back').addEventListener('click', () => {
  //           if ( isAnimating ) return;
  //           isAnimating = true;
  //   
  //           // Animate content image
  //           gsap.to(content.querySelector('.content__img'), {
  //               duration: 0.8,
  //               ease: 'power3.inOut',
  //               yPercent: -15,
  //               opacity: 0
  //           });
  //   
  //           overlay.show({
  //               // Specify the cell's transform origin
  //               transformOrigin: '50% 100%',
  //               // Duration for each cell animation
  //               duration: 0.4,
  //               // Ease for each cell animation
  //               ease: 'power3.inOut',
  //               // Stagger function
  //               stagger: (index, _, array) => 0.03 * (overlay.cells.flat()[array.length-index-1].row + gsap.utils.random(0,5))
  //           })
  //           .then(() => {
  //               // hide content
  //               intro.classList.remove('intro--closed');
  //               content.classList.remove('content--open');
  //               // Now hide the overlay
  //               overlay.hide({
  //                   // Specify the cell's transform origin
  //                   transformOrigin: '50% 0%',
  //                   // Duration for each cell animation
  //                   duration: 0.4,
  //                   // Ease for each cell animation 
  //                   ease: 'power2',
  //                   // Stagger function
  //                   stagger: (index, _, array) => 0.03 * (overlay.cells.flat()[array.length-index-1].row + gsap.utils.random(0,5))
  //               }).then(() => isAnimating = false);
  //   
  //               // Animate intro section
  //               gsap.to(intro, {
  //                   duration: 0.8,
  //                   ease: 'power3',
  //                   yPercent: 0,
  //                   opacity: 1
  //               });
  //           })
  //   
  //       });
  //   });
  //   
  //   // Preload images and fonts and remove loader
  //   Promise.all([
  //       preloadImages('.intro__image, .content__img-inner'), 
  //       preloadFonts('ctp6pec')
  //   ]).then(() => document.body.classList.remove('loading'));
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="transicao-transicao-pagina-4" ref={raiz}>
      <svg className="hidden" xmlns="http://www.w3.org/2000/svg">
      			<symbol id="icon-arrow" viewBox="0 0 562 980">
      				<g><path d="M561.4 0H421.2v138.7h140.2zM421.2 138.7H281v140.2h140.2zM281 278.9H140.8v140.2H281zM281 559.4H140.8v140.2H281zM421.2 699.6H281v140.2h140.2zM561.4 839.8H421.2V980h140.2zM140.8 419.1H.6v140.2h140.2z"/></g>
      			</symbol>
      		</svg>
      		<main>
      			<div className="frame">
      				<h1 className="frame__title">{s.titulo}</h1>
      		
      				<nav className="frame__demos">
      					<span>{s.rotulo}</span>
      					<span className="frame__demo">1</span>
      					<a href="index2.html" className="frame__demo">2</a>
      					<a href="index3.html" className="frame__demo">3</a>
      					<a href="index4.html" className="frame__demo">4</a>
      					<a href="index5.html" className="frame__demo">5</a>
      					<a href="index6.html" className="frame__demo">6</a>
      				</nav>
      			</div>
      			<div className="intro">
      				<div className="intro__text font-3">Rather</div>
      				<div className="intro__image" style={{backgroundImage: `url(${s.imagem})`}}></div>
      				<div className="intro__text">than</div>
      				<div className="intro__image" style={{backgroundImage: `url(${s.imagem2})`}}></div>
      				<div className="intro__text font-2">love</div>
      				<div className="intro__image" style={{backgroundImage: `url(${s.imagem3})`}}></div>
      				<div className="intro__text font-1">than</div>
      				<div className="intro__image" style={{backgroundImage: `url(${s.imagem4})`}}></div>
      				<div className="intro__text font-2">money</div>
      				<div className="intro__image" style={{backgroundImage: `url(${s.imagem5})`}}></div>
      				<div className="intro__text">than</div>
      				<div className="intro__image" style={{backgroundImage: `url(${s.imagem6})`}}></div>
      				<div className="intro__text font-2">fame</div>
      				<div className="intro__image" style={{backgroundImage: `url(${s.imagem7})`}}></div>
      				<div className="intro__text">give</div>
      				<div className="intro__text">me</div>
      				<div className="intro__image" style={{backgroundImage: `url(${s.imagem8})`}}></div>
      				<div className="intro__text font-2">truth</div>
      				<div className="intro__image" style={{backgroundImage: `url(${s.imagem9})`}}></div>
      			</div>
      			<section className="content-wrap">
      				<div className="content">
      					<div className="content__img">
      						<div className="content__img-inner" style={{backgroundImage: `url(${s.imagem10})`}}></div>
      					</div>
      					<div className="content__text">
      						<h2 className="content__title">{s.titulo2}</h2>
      						<span className="content__number">{s.rotulo2}</span>
      						<button className="content__back unbutton" onClick={s.onClick}>
      							<svg aria-hidden="true" focusable="false">
      								<use href="#icon-arrow"></use>
      							</svg>
      						</button>
      						<div className="content__meta">
      							<span className="content__meta-text">{s.rotulo3}</span>
      							<span className="content__meta-text">1982</span>
      							<span className="content__meta-text">{s.rotulo4}</span>
      						</div>
      					</div>
      				</div>
      				<div className="content">
      					<div className="content__img">
      						<div className="content__img-inner" style={{backgroundImage: `url(${s.imagem11})`}}></div>
      					</div>
      					<div className="content__text">
      						<h2 className="content__title">{s.titulo3}</h2>
      						<span className="content__number">{s.rotulo5}</span>
      						<button className="content__back unbutton" onClick={s.onClick}>
      							<svg aria-hidden="true" focusable="false">
      								<use href="#icon-arrow"></use>
      							</svg>
      						</button>
      						<div className="content__meta">
      							<span className="content__meta-text">{s.rotulo6}</span>
      							<span className="content__meta-text">1985</span>
      							<span className="content__meta-text">{s.rotulo7}</span>
      						</div>
      					</div>
      				</div>
      				<div className="content">
      					<div className="content__img">
      						<div className="content__img-inner" style={{backgroundImage: `url(${s.imagem12})`}}></div>
      					</div>
      					<div className="content__text">
      						<h2 className="content__title">{s.titulo4}</h2>
      						<span className="content__number">{s.rotulo8}</span>
      						<button className="content__back unbutton" onClick={s.onClick}>
      							<svg aria-hidden="true" focusable="false">
      								<use href="#icon-arrow"></use>
      							</svg>
      						</button>
      						<div className="content__meta">
      							<span className="content__meta-text">{s.rotulo9}</span>
      							<span className="content__meta-text">1989</span>
      							<span className="content__meta-text">{s.rotulo10}</span>
      						</div>
      					</div>
      				</div>
      				<div className="content">
      					<div className="content__img">
      						<div className="content__img-inner" style={{backgroundImage: `url(${s.imagem13})`}}></div>
      					</div>
      					<div className="content__text">
      						<h2 className="content__title">{s.titulo5}</h2>
      						<span className="content__number">{s.rotulo11}</span>
      						<button className="content__back unbutton" onClick={s.onClick}>
      							<svg aria-hidden="true" focusable="false">
      								<use href="#icon-arrow"></use>
      							</svg>
      						</button>
      						<div className="content__meta">
      							<span className="content__meta-text">{s.rotulo12}</span>
      							<span className="content__meta-text">2023</span>
      							<span className="content__meta-text">{s.rotulo13}</span>
      						</div>
      					</div>
      				</div>
      				<div className="content">
      					<div className="content__img">
      						<div className="content__img-inner" style={{backgroundImage: `url(${s.imagem14})`}}></div>
      					</div>
      					<div className="content__text">
      						<h2 className="content__title">{s.titulo6}</h2>
      						<span className="content__number">{s.rotulo14}</span>
      						<button className="content__back unbutton" onClick={s.onClick}>
      							<svg aria-hidden="true" focusable="false">
      								<use href="#icon-arrow"></use>
      							</svg>
      						</button>
      						<div className="content__meta">
      							<span className="content__meta-text">{s.rotulo15}</span>
      							<span className="content__meta-text">1992</span>
      							<span className="content__meta-text">{s.rotulo16}</span>
      						</div>
      					</div>
      				</div>
      				<div className="content">
      					<div className="content__img">
      						<div className="content__img-inner" style={{backgroundImage: `url(${s.imagem15})`}}></div>
      					</div>
      					<div className="content__text">
      						<h2 className="content__title">{s.titulo7}</h2>
      						<span className="content__number">{s.rotulo17}</span>
      						<button className="content__back unbutton" onClick={s.onClick}>
      							<svg aria-hidden="true" focusable="false">
      								<use href="#icon-arrow"></use>
      							</svg>
      						</button>
      						<div className="content__meta">
      							<span className="content__meta-text">{s.rotulo18}</span>
      							<span className="content__meta-text">1996</span>
      							<span className="content__meta-text">{s.rotulo19}</span>
      						</div>
      					</div>
      				</div>
      				<div className="content">
      					<div className="content__img">
      						<div className="content__img-inner" style={{backgroundImage: `url(${s.imagem16})`}}></div>
      					</div>
      					<div className="content__text">
      						<h2 className="content__title">{s.titulo8}</h2>
      						<span className="content__number">{s.rotulo20}</span>
      						<button className="content__back unbutton" onClick={s.onClick}>
      							<svg aria-hidden="true" focusable="false">
      								<use href="#icon-arrow"></use>
      							</svg>
      						</button>
      						<div className="content__meta">
      							<span className="content__meta-text">{s.rotulo21}</span>
      							<span className="content__meta-text">2000</span>
      							<span className="content__meta-text">{s.rotulo22}</span>
      						</div>
      					</div>
      				</div>
      				<div className="content">
      					<div className="content__img">
      						<div className="content__img-inner" style={{backgroundImage: `url(${s.imagem17})`}}></div>
      					</div>
      					<div className="content__text">
      						<h2 className="content__title">{s.titulo9}</h2>
      						<span className="content__number">{s.rotulo23}</span>
      						<button className="content__back unbutton" onClick={s.onClick}>
      							<svg aria-hidden="true" focusable="false">
      								<use href="#icon-arrow"></use>
      							</svg>
      						</button>
      						<div className="content__meta">
      							<span className="content__meta-text">{s.rotulo24}</span>
      							<span className="content__meta-text">2001</span>
      							<span className="content__meta-text">{s.rotulo25}</span>
      						</div>
      					</div>
      				</div>
      				<div className="content">
      					<div className="content__img">
      						<div className="content__img-inner" style={{backgroundImage: `url(${s.imagem18})`}}></div>
      					</div>
      					<div className="content__text">
      						<h2 className="content__title">{s.titulo10}</h2>
      						<span className="content__number">{s.rotulo26}</span>
      						<button className="content__back unbutton" onClick={s.onClick}>
      							<svg aria-hidden="true" focusable="false">
      								<use href="#icon-arrow"></use>
      							</svg>
      						</button>
      						<div className="content__meta">
      							<span className="content__meta-text">{s.rotulo27}</span>
      							<span className="content__meta-text">2002</span>
      							<span className="content__meta-text">{s.rotulo28}</span>
      						</div>
      					</div>
      				</div>
      				<div className="content">
      					<div className="content__img">
      						<div className="content__img-inner" style={{backgroundImage: `url(${s.imagem19})`}}></div>
      					</div>
      					<div className="content__text">
      						<h2 className="content__title">{s.titulo11}</h2>
      						<span className="content__number">{s.rotulo29}</span>
      						<button className="content__back unbutton" onClick={s.onClick}>
      							<svg aria-hidden="true" focusable="false">
      								<use href="#icon-arrow"></use>
      							</svg>
      						</button>
      						<div className="content__meta">
      							<span className="content__meta-text">{s.rotulo30}</span>
      							<span className="content__meta-text">2006</span>
      							<span className="content__meta-text">{s.rotulo31}</span>
      						</div>
      					</div>
      				</div>
      			</section>
      			<div className="overlay"></div>
      		</main>
    </section>
  );
}
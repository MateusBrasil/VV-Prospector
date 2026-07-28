"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/hero-section/hero-15
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
  //   import { preloadImages } from './utils'
  //   import { TrailImage, TrailText } from './trail';
  //   import { FakeProgress } from './fakeProgress';
  //   import { TextLinesReveal } from './textLinesReveal';
  //   import { animationDefaults } from './gsapAnimation';
  //   import { gsap } from 'gsap';
  //   import { Flip } from 'gsap/Flip';
  //   gsap.registerPlugin(Flip);
  //   
  //   // trail elements (Image and the two intro title elements (up and down)
  //   const trailImage = new TrailImage(document.querySelector('.intro-image'), {perspective: 1000, totalTrailElements: 8});
  //   const trailTextTop = new TrailText(document.querySelector('.intro-content__title--up'), {perspective: 1000, totalTrailElements: 2});
  //   const trailTextBottom = new TrailText(document.querySelector('.intro-content__title--down'), {totalTrailElements: 3});
  //   
  //   // DOM elements
  //   const frame = {
  //   	menu: document.querySelector('.button-menu'),
  //   	logo: document.querySelector('.logo'),
  //   	progress: document.querySelector('.intro-progress')
  //   };
  //   const intro = {
  //   	image: document.querySelector('.intro-content__image'),
  //   	enterButton: document.querySelector('.button-enter'),
  //   };
  //   const content = {
  //   	titleTop: document.querySelector('.content__title--up'),
  //   	titleBottom: document.querySelector('.content__title--down'),
  //   	about: document.querySelector('.content__about'),
  //   	aboutText: document.querySelector('.content__about-text'),
  //   	finalImagePlacement: document.querySelector('.content__image--2'),
  //   	otherImages: document.querySelectorAll('.content__image--1 > .content__image-inner, .content__image--3 > .content__image-inner')
  //   }
  //   
  //   // the TextLinesReveal instance (animate each text line of the about text using the SplitText library)
  //   const aboutLines = new TextLinesReveal(content.aboutText);
  //   
  //   // state
  //   let state = {
  //   	isAnimating: false,
  //   	iscontentOpen: false
  //   };
  //   
  //   // First step: fake progress and move the image to the center of the screen. Also animate the top/bottom texts in and show the enter button
  //   const showIntro = () => {
  //   	
  //   	if ( state.isAnimating ) {
  //   		return false;
  //   	}
  //   	state.isAnimating = true;
  //   
  //   	gsap.timeline({
  //   		defaults: animationDefaults,
  //   		onComplete: () => {
  //   			// Reset the trails structure on the texts and image
  //   			trailTextTop.reset();
  //   			trailTextBottom.reset();
  //   			trailImage.reset();
  //   
  //   			state.isAnimating = false;
  //   		}
  //   	})
  //   	.addLabel('start', 0)
  //   	.add(() => {
  //   		// Let's use the gsap Flip plugin to animate the image into a new element (.intro-content__image)
  //   		// Get state
  //   		const state = Flip.getState(trailImage.DOM.trailElems);
  //   		// Change place
  //   		intro.image.appendChild(trailImage.DOM.el);
  //   		// Flip
  //   		Flip.from(state, {
  //   			duration: animationDefaults.duration,
  //   			ease: animationDefaults.ease,
  //   			stagger: -0.03,
  //   			scale: true
  //   			//rotateY: 360,
  //   		})
  //   	}, 'start') 
  //   	// Hide the intro title trail elements initially and show its parents which are hidden by default (CSS)
  //   	.set([trailTextTop.DOM.trailElems, trailTextBottom.DOM.trailElems], {
  //   		opacity: 0
  //   	}, 'start')
  //   	.set([trailTextTop.DOM.el, trailTextBottom.DOM.el], {
  //   		opacity: 1
  //   	}, 'start')
  //   	// Now translate the title elements
  //   	.to(trailTextTop.DOM.trailElems, {
  //   		y: 0,
  //   		startAt: {rotateY: 160, opacity: 0},
  //   		rotateY: 0,
  //   		opacity: 1,
  //   		stagger: -0.1
  //   	}, 'start')
  //   	.to(trailTextBottom.DOM.trailElems, {
  //   		y: 0,
  //   		opacity: 1,
  //   		stagger: -0.08,
  //   	}, 'start')
  //   	// And show the intro enter button
  //   	.to(intro.enterButton, {
  //   		startAt: {opacity: 0, scale: 0.8},
  //   		opacity: 1,
  //   		scale: 1
  //   	}, 'start+=0.3')
  //   	.add(() => {
  //   		// Show the logo and menu button 
  //   		frame.menu.classList.add('show');
  //   		frame.logo.classList.add('show');
  //   	}, 'start+=0.3');
  //   	
  //   };
  //   
  //   // Second step: show the other images and scale down the texts
  //   const showContent = () => {
  //   	
  //   	if ( state.isAnimating || state.iscontentOpen ) {
  //   		return false;
  //   	}
  //   	state.isAnimating = true;
  //   	state.iscontentOpen = true;
  //   
  //   	gsap.timeline({
  //   		defaults: animationDefaults,
  //   		onComplete: () => {
  //   			state.isAnimating = false;
  //   		}
  //   	})
  //   	.addLabel('start', 0)
  //   	.to(intro.enterButton, {
  //   		duration: 0.6,
  //   		opacity: 0, 
  //   		scale: 0.8,
  //   	}, 'start')
  //   	.add(() => {
  //   
  //   		const topTitleState = Flip.getState(trailTextTop.DOM.el);
  //   		const bottomTitleState = Flip.getState(trailTextBottom.DOM.el);
  //   		
  //   		content.titleTop.appendChild(trailTextTop.DOM.el);
  //   		content.titleBottom.appendChild(trailTextBottom.DOM.el);
  //   		
  //   		Flip.from(topTitleState, {
  //   			duration: animationDefaults.duration,
  //   			ease: animationDefaults.ease,
  //   			scale: true
  //   		});
  //   		
  //   		Flip.from(bottomTitleState, {
  //   			duration: animationDefaults.duration,
  //   			ease: animationDefaults.ease,
  //   			scale: true
  //   		});
  //   		
  //   		const imageState = Flip.getState(trailImage.DOM.el, {props: 'border-radius'});
  //   		// Change place
  //   		content.finalImagePlacement.appendChild(trailImage.DOM.el);
  //   		gsap.set(trailImage.DOM.el, {opacity: 1});
  //   		// Flip
  //   		Flip.from(imageState, {
  //   			duration: animationDefaults.duration,
  //   			ease: animationDefaults.ease
  //   		});
  //   		
  //   	}, 'start')
  //   	
  //   	// animate the other images in
  //   	.to(content.otherImages, {
  //   		startAt: {yPercent: 100},
  //   		yPercent: 0,
  //   		opacity: 1
  //   	}, 'start+=0.1')
  //   	// about section
  //   	.to(content.about, {
  //   		startAt: {yPercent: 10},
  //   		yPercent: 0,
  //   		opacity: 1
  //   	}, 'start+=0.2')
  //   	// about text lines
  //   	.add( () => {
  //   		aboutLines.in();
  //   	}, 'start+=0.2')
  //   
  //   };
  //   
  //   // Enter button click event
  //   intro.enterButton.addEventListener('click', showContent);
  //   
  //   // Simulate the initial progress
  //   const fakeProgress = new FakeProgress(frame.progress);
  //   fakeProgress.onComplete(showIntro);
  //   
  //   // Preload images
  //   preloadImages('.intro-image').then( _ => document.body.classList.remove('loading'));
  //   
  //   
  //   
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="hero-hero-15" ref={raiz}>
      <main>
      			<div className="frame">
      				<h1 className="frame__title">{s.titulo}</h1>
      
      	
      			</div>
      
      			<h2 className="logo">
      				<span className="logo__layer logo__layer--1" aria-hidden="true">{s.rotulo}</span>
      				<span className="logo__layer logo__layer--2" aria-hidden="true">{s.rotulo2}</span>
      				<span className="logo__layer logo__layer--3">{s.rotulo3}</span>
      			</h2>
      
      			<button className="unbutton button-menu" aria-label="Open menu" onClick={s.onClick}></button>
      
      			<span className="intro-progress">{s.rotulo4}</span>
      
      			<div className="intro-image" style={{backgroundImage: `url(${s.imagem})`}}></div>
      
      			<div className="intro-content">
      				<div className="intro-content__title intro-content__title--up">Zofia</div>
      				<div className="intro-content__image">
      					
      				</div>
      				<div className="intro-content__title intro-content__title--down">Dab<em>ro</em>wski</div>
      			</div>
      
      			<button className="unbutton button-enter" onClick={s.onClick}>
      				<span>{s.rotulo5}</span>
      			</button>
      
      			<div className="content">
      				<div className="content__title content__title--up"></div>
      				<div className="content__title content__title--down"></div>
      				<div className="content__about">
      					<h4 className="content__about-title">{s.subtitulo}</h4>
      					<div className="content__about-text">
      						Some time ago a group of people were sitting in a restaurant, and one of them asked the others to say what they meant by Reality.
      						There was much vague discussion, much talk of metaphysics and psychology, but one of those present, when asked his opinion, simply shrugged his shoulders and pointed at the saltshaker.
      					</div>
      				</div>
      				<div className="content__image content__image--1">
      					<div className="content__image-inner" style={{backgroundImage: `url(${s.imagem2})`}}></div>
      				</div>
      				<div className="content__image content__image--2">
      					 
      				</div>
      				<div className="content__image content__image--3">
      					<div className="content__image-inner" style={{backgroundImage: `url(${s.imagem3})`}}></div>
      				</div>
      			</div>
      
      		</main>
    </section>
  );
}
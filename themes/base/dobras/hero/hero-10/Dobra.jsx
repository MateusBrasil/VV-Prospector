"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/parallax/hero-10
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Dobra.css';
gsap.registerPlugin(ScrollTrigger);
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   document.addEventListener('DOMContentLoaded', () => {
  //   	gsap.registerPlugin(CustomEase, SplitText)
  //   
  //   	CustomEase.create('hop', '.8, 0, .3, 1')
  //   
  //   	const splitTextElements = (
  //   		selector,
  //   		type = 'words,chars',
  //   		addFirstChar = false,
  //   	) => {
  //   		const elements = document.querySelectorAll(selector)
  //   		elements.forEach(element => {
  //   			const splitText = new SplitText(element, {
  //   				type,
  //   				wordsClass: 'word',
  //   				charsClass: 'char',
  //   			})
  //   
  //   			if (type.includes('chars')) {
  //   				splitText.chars.forEach((char, index) => {
  //   					const originalText = char.textContent
  //   					char.innerHTML = `<span>${originalText}</span>`
  //   
  //   					if (addFirstChar && index === 0) {
  //   						char.classList.add('first-char')
  //   					}
  //   				})
  //   			}
  //   		})
  //   	}
  //   
  //   	splitTextElements('.intro-title h1', 'words, chars', true)
  //   	splitTextElements('.outro-title h1')
  //   	splitTextElements('.tag p', 'words')
  //   	splitTextElements('.card h1', 'words, chars', true)
  //   
  //   	const isMobile = window.innerWidth <= 1000
  //   
  //   	gsap.set(
  //   		[
  //   			'.split-overlay .intro-title .first-char span',
  //   			'.split-overlay .outro-title .char span',
  //   		],
  //   		{ y: '0%' },
  //   	)
  //   
  //   	gsap.set('.split-overlay .intro-title .first-char', {
  //   		x: isMobile ? '7.5rem' : '18rem',
  //   		y: isMobile ? '-1rem' : '-2.75rem',
  //   		fontWeight: '900',
  //   		scale: 0.75,
  //   	})
  //   
  //   	gsap.set('.split-overlay .outro-title .char', {
  //   		x: isMobile ? '-3rem' : '-8rem',
  //   		fontSize: isMobile ? '6rem' : '14rem',
  //   		fontWeight: '500',
  //   	})
  //   
  //   	const tl = gsap.timeline({ defaults: { ease: 'hop' } })
  //   	const tags = gsap.utils.toArray('.tag')
  //   
  //   	tags.forEach((tag, index) => {
  //   		tl.to(
  //   			tag.querySelectorAll('p .word'),
  //   			{
  //   				y: '0%',
  //   				duration: 0.75,
  //   			},
  //   			0.5 + index * 0.1,
  //   		)
  //   	})
  //   
  //   	tl.to(
  //   		'.preloader .intro-title .char span',
  //   		{
  //   			y: '0%',
  //   			duration: 0.75,
  //   			stagger: 0.05,
  //   		},
  //   		0.5,
  //   	)
  //   		.to(
  //   			'.preloader .intro-title .char:not(.first-char) span',
  //   			{
  //   				y: '100%',
  //   				duration: 0.75,
  //   				stagger: 0.05,
  //   			},
  //   			2,
  //   		)
  //   		.to(
  //   			'.preloader .outro-title .char span',
  //   			{
  //   				y: '0%',
  //   				duration: 0.75,
  //   				stagger: 0.075,
  //   			},
  //   			2.5,
  //   		)
  //   		.to(
  //   			'.preloader .intro-title .first-char',
  //   			{
  //   				x: isMobile ? '9rem' : '21.25rem',
  //   				duration: 1,
  //   			},
  //   			3.5,
  //   		)
  //   		.to(
  //   			'.preloader .outro-title .char',
  //   			{
  //   				x: isMobile ? '-3rem' : '-8rem',
  //   				duration: 1,
  //   			},
  //   			3.5,
  //   		)
  //   		.to(
  //   			'.preloader .intro-title .first-char',
  //   			{
  //   				x: isMobile ? '7.5rem' : '18rem',
  //   				y: isMobile ? '-1rem' : '-2.75rem',
  //   				fontWeight: '900',
  //   				scale: 0.75,
  //   				duration: 0.75,
  //   			},
  //   			4.5,
  //   		)
  //   		.to(
  //   			'.preloader .outro-title .char',
  //   			{
  //   				x: isMobile ? '-3rem' : '-8rem',
  //   				fontSize: isMobile ? '6rem' : '14rem',
  //   				fontWeight: '500',
  //   				duration: 0.75,
  //   				onComplete: () => {
  //   					gsap.set('.preloader', {
  //   						clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
  //   					})
  //   					gsap.set('.split-overlay', {
  //   						clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
  //   					})
  //   				},
  //   			},
  //   			4.5,
  //   		)
  //   		.to(
  //   			'.container',
  //   			{
  //   				clipPath: 'polygon(0% 48%, 100% 48%, 100% 52%, 0% 52%)',
  //   				duration: 1,
  //   			},
  //   			5,
  //   		)
  //   
  //   	tags.forEach((tag, index) => {
  //   		tl.to(
  //   			tag.querySelectorAll('p .word'),
  //   			{
  //   				y: '100%',
  //   				duration: 0.75,
  //   			},
  //   			5.5 + index * 0.1,
  //   		)
  //   	})
  //   
  //   	tl.to(
  //   		['.preloader', '.split-overlay'],
  //   		{
  //   			y: i => (i === 0 ? '-50%' : '50%'),
  //   			duration: 1,
  //   		},
  //   		6,
  //   	)
  //   		.to(
  //   			'.container',
  //   			{
  //   				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  //   				duration: 1,
  //   			},
  //   			6,
  //   		)
  //   		.to(
  //   			'.container .card',
  //   			{
  //   				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  //   				duration: 0.75,
  //   			},
  //   			6.25,
  //   		)
  //   		.to(
  //   			'.container .card h1 .char span',
  //   			{
  //   				y: '0%',
  //   				duration: 0.75,
  //   				stagger: 0.05,
  //   			},
  //   			6.5,
  //   		)
  //   })
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="hero-hero-10" ref={raiz}>
      <div className="preloader">
            <div className="intro-title">
               <h1>{s.titulo}</h1>
            </div>
            <div className="outro-title">
               <h1>10</h1>
            </div>
         </div>
      
         <div className="split-overlay">
            <div className="intro-title">
               <h1>{s.titulo2}</h1>
            </div>
            <div className="outro-title">
               <h1>10</h1>
            </div>
         </div>
      
         <div className="tags-overlay">
            <div className="tag tag-1">
               <p>{s.texto}</p>
            </div>
            <div className="tag tag-2">
               <p>{s.texto2}</p>
            </div>
            <div className="tag tag-3">
               <p>{s.texto3}</p>
            </div>
         </div>
      
         <div className="container">
            <nav>
               <p id="logo">{s.texto4}</p>
               <p>{s.texto5}</p>
            </nav>
      
            <div className="hero-img"><img src={s.imagem} alt="" /></div>
      
            <div className="card">
               <h1>{s.titulo3}</h1>
            </div>
      
            <footer>
               <p>{s.texto6}</p>
               <p>{s.texto7}</p>
            </footer>
         </div>
    </section>
  );
}
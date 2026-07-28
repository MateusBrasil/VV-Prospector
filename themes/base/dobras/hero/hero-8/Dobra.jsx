"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/hero-section/hero-8
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
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: global-duro).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   document.addEventListener('DOMContentLoaded', function () {
  //   	gsap.set('nav', { y: -150 })
  //   	const digit1 = document.querySelector('.digit-1')
  //   	const digit2 = document.querySelector('.digit-2')
  //   	const digit3 = document.querySelector('.digit-3')
  //   
  //   	function splitTextIntoSpans(selector) {
  //   		var element = document.querySelector(selector)
  //   		if (element) {
  //   			var text = element.innerText
  //   			var splitText = text
  //   				.split('')
  //   				.map(char => `<span>${char}</span>`)
  //   				.join('')
  //   			element.innerHTML = splitText
  //   		}
  //   	}
  //   
  //   	splitTextIntoSpans('.header h1')
  //   
  //   	for (let i = 0; i < 2; i++) {
  //   		for (let j = 0; j < 10; j++) {
  //   			const div = document.createElement('div')
  //   			div.className = 'num'
  //   			div.textContent = j
  //   			digit3.appendChild(div)
  //   		}
  //   	}
  //   
  //   	const finalDigit = document.createElement('div')
  //   	finalDigit.className = 'num'
  //   	finalDigit.textContent = '0'
  //   	digit3.appendChild(finalDigit)
  //   
  //   	function animate(digit, duration, delay = 1) {
  //   		const numHeight = digit.querySelector('.num').clientHeight
  //   		const totalDistance =
  //   			(digit.querySelectorAll('.num').length - 1) * numHeight
  //   		gsap.to(digit, {
  //   			y: -totalDistance,
  //   			duration: duration,
  //   			delay: delay,
  //   			ease: 'power2.inOut',
  //   		})
  //   	}
  //   
  //   	animate(digit3, 5)
  //   	animate(digit2, 6)
  //   	animate(digit1, 2, 5)
  //   
  //   	gsap.to('.progress-bar', {
  //   		width: '30%',
  //   		duration: 2,
  //   		ease: 'power4.inOut',
  //   		delay: 7,
  //   	})
  //   
  //   	gsap.to('.progress-bar', {
  //   		width: '100%',
  //   		opacity: 0,
  //   		duration: 2,
  //   		delay: 8.5,
  //   		ease: 'power3.out',
  //   		onComplete: () => {
  //   			gsap.set('.pre-loader', {
  //   				display: 'none',
  //   			})
  //   		},
  //   	})
  //   
  //   	gsap.to('.hero-imgs > img', {
  //   		clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
  //   		duration: 1,
  //   		ease: 'power4.inOut',
  //   		stagger: 0.25,
  //   		delay: 9,
  //   	})
  //   
  //   	gsap.to('.hero', {
  //   		scale: 1.3,
  //   		duration: 3,
  //   		ease: 'power3.inOut',
  //   		delay: 9,
  //   	})
  //   
  //   	gsap.to('nav', {
  //   		y: 0,
  //   		duration: 1,
  //   		ease: 'power3.out',
  //   		delay: 11,
  //   	})
  //   
  //   	gsap.to('h1 span', {
  //   		top: '0px',
  //   		stagger: 0.1,
  //   		duration: 1,
  //   		ease: 'power3.out',
  //   		delay: 11,
  //   	})
  //   })
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="hero-hero-8" ref={raiz}>
      <section className="hero">
            <div className="pre-loader">
               <p>{s.texto}</p>
      
               <div className="counter">
                  <div className="digit-1">
                     <div className="num">0</div>
                     <div className="num offset">1</div>
                  </div>
                  <div className="digit-2">
                     <div className="num">0</div>
                     <div className="num offset">1</div>
                     <div className="num">2</div>
                     <div className="num">3</div>
                     <div className="num">4</div>
                     <div className="num">5</div>
                     <div className="num">6</div>
                     <div className="num">7</div>
                     <div className="num">8</div>
                     <div className="num">9</div>
                     <div className="num">0</div>
                  </div>
                  <div className="digit-3">
                     <div className="num">0</div>
                     <div className="num">1</div>
                     <div className="num">2</div>
                     <div className="num">3</div>
                     <div className="num">4</div>
                     <div className="num">5</div>
                     <div className="num">6</div>
                     <div className="num">7</div>
                     <div className="num">8</div>
                     <div className="num">9</div>
                  </div>
                  <div className="digit-4">%</div>
               </div>
      
               <div className="progress-bar"></div>
            </div>
      
            <div className="hero-imgs">
               <img src={s.imagem} alt="" />
               <img src={s.imagem2} alt="" />
               <img src={s.imagem3} alt="" />
               <img src={s.imagem4} alt="" />
               <img src={s.imagem5} alt="" />
               <img src={s.imagem6} alt="" />
               <img src={s.imagem7} alt="" />
            </div>
         </section>
      
         <div className="website-content">
            <nav>
               <div className="logo">
                  <p>{s.texto2}</p>
               </div>
               <div className="site-info">
                  <p>{s.texto3}</p>
               </div>
               <div className="menu">
                  <p>{s.texto4}</p>
               </div>
            </nav>
      
            <div className="header">
               <h1>{s.titulo}</h1>
            </div>
         </div>
    </section>
  );
}
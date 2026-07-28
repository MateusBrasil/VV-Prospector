"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/menu/navegacao-menu-17
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
  //   	const menuImgContainer = document.querySelector('.menu-img')
  //   	const images = document.querySelectorAll('.menu-img img')
  //   	let mouse = { x: 0, y: 0 }
  //   	let cx = window.innerWidth / 2
  //   	let cy = window.innerHeight / 2
  //   
  //   	const scales = [0.81, 0.84, 0.87, 0.9]
  //   
  //   	function update() {
  //   		let dx = mouse.x - cx
  //   		let dy = mouse.y - cy
  //   
  //   		let tiltx = (dy / cy) * 20
  //   		let tilty = (dx / cx) * 20
  //   
  //   		gsap.to(menuImgContainer, {
  //   			duration: 2,
  //   			transform: `rotate3d(${tiltx}, ${tilty}, 0, 15deg)`,
  //   			ease: 'power3.out',
  //   		})
  //   
  //   		images.forEach((img, index) => {
  //   			let parallaxX = -(dx * (index + 1)) / 100
  //   			let parallaxY = -(dy * (index + 1)) / 100
  //   
  //   			let transformStyles = `translate(calc(-50% + ${parallaxX}px), calc(-50% + ${parallaxY}px)) scale(${scales[index]})`
  //   			gsap.to(img, {
  //   				duration: 2,
  //   				transform: transformStyles,
  //   				ease: 'power3.out',
  //   			})
  //   		})
  //   	}
  //   
  //   	document.body.addEventListener('mousemove', function (event) {
  //   		mouse.x = event.clientX
  //   		mouse.y = event.clientY
  //   		update()
  //   	})
  //   
  //   	window.addEventListener('resize', function () {
  //   		cx = window.innerWidth / 2
  //   		cy = window.innerHeight / 2
  //   	})
  //   })
  //   
  //   document.addEventListener('DOMContentLoaded', function () {
  //   	const menuOpen = document.querySelector('.menu-open')
  //   	const menuClose = document.querySelector('.menu-close')
  //   
  //   	let isOpen = false
  //   	const defaultEase = 'power4.inOut'
  //   
  //   	gsap.set('.menu-logo img', { y: 50 })
  //   	gsap.set('.menu-link p', { y: 40 })
  //   	gsap.set('.menu-sub-item p', { y: 12 })
  //   	gsap.set(['#img-2, #img-3, #img-4'], { top: '150%' })
  //   
  //   	const openMenu = () => {
  //   		gsap.to('.menu', {
  //   			clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
  //   			pointerEvents: 'all',
  //   			duration: 1.25,
  //   			ease: defaultEase,
  //   		})
  //   
  //   		gsap.to('.hero', {
  //   			top: '-50%',
  //   			opacity: 0,
  //   			duration: 1.25,
  //   			ease: defaultEase,
  //   		})
  //   
  //   		gsap.to('.menu-logo img', {
  //   			y: 0,
  //   			duration: 1,
  //   			delay: 0.75,
  //   			ease: 'power3.out',
  //   		})
  //   
  //   		gsap.to('.menu-link p', {
  //   			y: 0,
  //   			duration: 1,
  //   			stagger: 0.075,
  //   			delay: 1,
  //   			ease: 'power3.out',
  //   		})
  //   
  //   		gsap.to('.menu-sub-item p', {
  //   			y: 0,
  //   			duration: 0.75,
  //   			stagger: 0.05,
  //   			delay: 1,
  //   			ease: 'power3.out',
  //   		})
  //   
  //   		gsap.to(['#img-2, #img-3, #img-4'], {
  //   			top: '50%',
  //   			duration: 1.25,
  //   			ease: defaultEase,
  //   			stagger: 0.1,
  //   			delay: 0.25,
  //   			onComplete: () => {
  //   				gsap.set('.hero', { top: '50%' })
  //   				isOpen = !isOpen
  //   			},
  //   		})
  //   	}
  //   
  //   	const closeMenu = () => {
  //   		gsap.to('.menu', {
  //   			clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
  //   			pointerEvents: 'none',
  //   			duration: 1.25,
  //   			ease: defaultEase,
  //   		})
  //   
  //   		gsap.to('.menu-items', {
  //   			top: '-300px',
  //   			opacity: 0,
  //   			duration: 1.25,
  //   			ease: defaultEase,
  //   		})
  //   
  //   		gsap.to('.hero', {
  //   			top: '0%',
  //   			opacity: 1,
  //   			duration: 1.25,
  //   			ease: defaultEase,
  //   			onComplete: () => {
  //   				gsap.set('.menu', {
  //   					clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
  //   				})
  //   				gsap.set('.menu-logo img', { y: 50 })
  //   				gsap.set('.menu-link p', { y: 40 })
  //   				gsap.set('.menu-sub-item p', { y: 12 })
  //   				gsap.set('.menu-items', { opacity: 1, top: '0px' })
  //   				gsap.set(['#img-2, #img-3, #img-4'], { top: '150%' })
  //   
  //   				isOpen = !isOpen
  //   			},
  //   		})
  //   	}
  //   
  //   	menuOpen.addEventListener('click', function () {
  //   		if (isOpen) return
  //   		openMenu()
  //   	})
  //   
  //   	menuClose.addEventListener('click', function () {
  //   		if (!isOpen) return
  //   		closeMenu()
  //   	})
  //   })
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="menu-navegacao-menu-17" ref={raiz}>
      <div className="container">
            <nav>
               <div className="logo"><img src={s.imagem} alt="" /></div>
               <p className="menu-open">{s.texto}</p>
            </nav>
      
            <section className="hero">
               <div className="header">
                  <h1>{s.titulo}</h1>
                  <sup>&copy;</sup>
               </div>
            </section>
      
            <div className="menu">
               <div className="menu-nav">
                  <p className="menu-close">{s.texto2}</p>
               </div>
      
               <div className="menu-col menu-img">
                  <img id="img-1" src={s.imagem2} alt="" />
                  <img id="img-2" src={s.imagem3} alt="" />
                  <img id="img-3" src={s.imagem4} alt="" />
                  <img id="img-4" src={s.imagem5} alt="" />
               </div>
      
               <div className="menu-col menu-items">
                  <div className="menu-logo"><img src={s.imagem6} alt="" /></div>
      
                  <div className="menu-links">
                     <div className="menu-link">
                        <p><a href="#">{s.acao}</a></p>
                     </div>
                     <div className="menu-link">
                        <p><a href="#">{s.acao2}</a></p>
                     </div>
                     <div className="menu-link">
                        <p><a href="#">{s.acao3}</a></p>
                     </div>
                     <div className="menu-link">
                        <p><a href="#">{s.acao4}</a></p>
                     </div>
                  </div>
      
                  <div className="menu-footer">
                     <div className="menu-sub-col">
                        <div className="menu-sub-item">
                           <p>{s.texto3}</p>
                        </div>
                        <div className="menu-sub-item">
                           <p>{s.texto4}</p>
                        </div>
                        <br />
                        <div className="menu-sub-item">
                           <p>{s.texto5}</p>
                        </div>
                        <div className="menu-sub-item">
                           <p>{s.texto6}</p>
                        </div>
                        <br />
                        <div className="menu-sub-item">
                           <p>{s.texto7}</p>
                        </div>
                        <br />
                        <div className="menu-sub-item">
                           <p>{s.texto8}</p>
                        </div>
                        <div className="menu-sub-item">
                           <p>{s.texto9}</p>
                        </div>
                        <div className="menu-sub-item">
                           <p>{s.texto10}</p>
                        </div>
                        <div className="menu-sub-item">
                           <p>{s.texto11}</p>
                        </div>
                        <br />
                     </div>
                     <div className="menu-sub-col">
                        <div className="menu-sub-item">
                           <p>{s.texto12}</p>
                        </div>
                        <div className="menu-sub-item">
                           <p>{s.texto13}</p>
                        </div>
                        <br />
                        <div className="menu-sub-item">
                           <p>{s.texto14}</p>
                        </div>
                        <div className="menu-sub-item">
                           <p>{s.texto15}</p>
                        </div>
                        <br />
                        <div className="menu-sub-item">
                           <p>{s.texto16}</p>
                        </div>
                        <br />
                        <div className="menu-sub-item">
                           <p>{s.texto17}</p>
                        </div>
                        <div className="menu-sub-item">
                           <p>{s.texto18}</p>
                        </div>
                        <div className="menu-sub-item">
                           <p>{s.texto19}</p>
                        </div>
                        <div className="menu-sub-item">
                           <p>{s.texto20}</p>
                        </div>
                        <br />
                     </div>
                  </div>
               </div>
            </div>
         </div>
    </section>
  );
}
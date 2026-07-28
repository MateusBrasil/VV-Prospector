"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/menu/navegacao-menu-13
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
  //   	const toggleButton = document.querySelector('.toggle')
  //   	let isOpen = false
  //   
  //   	const timeline = gsap.timeline({ paused: true })
  //   
  //   	timeline.to('.website-content', {
  //   		duration: 2,
  //   		ease: 'power4.inOut',
  //   		clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
  //   		scale: 0.5,
  //   	})
  //   
  //   	timeline.to(
  //   		'.row',
  //   		{
  //   			duration: 3,
  //   			left: '0%',
  //   			ease: 'power4.inOut',
  //   			stagger: 0.1,
  //   		},
  //   		'-=2.5',
  //   	)
  //   
  //   	toggleButton.addEventListener('click', function () {
  //   		if (isOpen) {
  //   			timeline.reverse()
  //   		} else {
  //   			timeline.play()
  //   		}
  //   		isOpen = !isOpen
  //   	})
  //   })
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="menu-navegacao-menu-13" ref={raiz}>
      <div className="container">
            <div className="menu">
               <div className="row r-1">
                  <div className="link"><a href="#">{s.acao}</a></div>
               </div>
               <div className="row r-2">
                  <div className="link"><a href="#">{s.acao2}</a></div>
               </div>
               <div className="row r-3">
                  <div className="link"><a href="#">{s.acao3}</a></div>
               </div>
               <div className="row r-4">
                  <div className="link"><a href="#">{s.acao4}</a></div>
                  <div className="link"><a href="#">{s.acao5}</a></div>
               </div>
               <div className="row r-5">
                  <div className="link"><a href="#">{s.acao6}</a></div>
                  <div className="link"><a href="#">{s.acao7}</a></div>
               </div>
            </div>
      
            <div className="website-content">
               <h1>{s.titulo}</h1>
            </div>
      
            <nav>
               <div className="logo">OffCanvas</div>
               <button className="toggle" onClick={s.onClick}>{s.acao8}</button>
            </nav>
         </div>
    </section>
  );
}
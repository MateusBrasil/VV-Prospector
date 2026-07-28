"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/botoes/add-to-cart-1
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
  //   
  //           // Ensure scripts are loaded before running
  //           window.addEventListener('DOMContentLoaded', () => {
  //               gsap.registerPlugin(MorphSVGPlugin);
  //   
  //               document.querySelectorAll('.add-to-cart').forEach(button => {
  //                   let morph = button.querySelector('.morph path');
  //                   
  //                   button.addEventListener('pointerdown', e => {
  //                       if (button.classList.contains('active')) {
  //                           return;
  //                       }
  //                       gsap.to(button, {
  //                           '--background-scale': .97,
  //                           duration: .15
  //                       });
  //                   });
  //   
  //                   button.addEventListener('click', e => {
  //                       e.preventDefault();
  //                       if (button.classList.contains('active')) {
  //                           return;
  //                       }
  //                       button.classList.add('active');
  //                       
  //                       gsap.to(button, {
  //                           keyframes: [{
  //                               '--background-scale': .97,
  //                               duration: .15
  //                           }, {
  //                               '--background-scale': 1,
  //                               delay: .125,
  //                               duration: 1.2,
  //                               ease: 'elastic.out(1, .6)'
  //                           }]
  //                       });
  //   
  //                       gsap.to(button, {
  //                           keyframes: [{
  //                               '--shirt-scale': 1,
  //                               '--shirt-y': '-42px',
  //                               '--cart-x': '0px',
  //                               '--cart-scale': 1,
  //                               duration: .4,
  //                               ease: 'power1.in'
  //                           }, {
  //                               '--shirt-y': '-40px',
  //                               duration: .3
  //                           }, {
  //                               '--shirt-y': '16px',
  //                               '--shirt-scale': .9,
  //                               duration: .25,
  //                               ease: 'none'
  //                           }, {
  //                               '--shirt-scale': 0,
  //                               duration: .3,
  //                               ease: 'none'
  //                           }]
  //                       });
  //   
  //                       gsap.to(button, {
  //                           '--shirt-second-y': '0px',
  //                           delay: .835,
  //                           duration: .12
  //                       });
  //   
  //                       gsap.to(button, {
  //                           keyframes: [{
  //                               '--cart-clip': '12px',
  //                               '--cart-clip-x': '3px',
  //                               delay: .9,
  //                               duration: .06
  //                           }, {
  //                               '--cart-y': '2px',
  //                               duration: .1
  //                           }, {
  //                               '--cart-tick-offset': '0px',
  //                               '--cart-y': '0px',
  //                               duration: .2,
  //                               onComplete() {
  //                                   button.style.overflow = 'hidden';
  //                               }
  //                           }, {
  //                               '--cart-x': '52px',
  //                               '--cart-rotate': '-15deg',
  //                               duration: .2
  //                           }, {
  //                               '--cart-x': '104px',
  //                               '--cart-rotate': '0deg',
  //                               duration: .2,
  //                               clearProps: true,
  //                               onComplete() {
  //                                   button.style.overflow = 'hidden';
  //                                   button.style.setProperty('--text-o', 0);
  //                                   button.style.setProperty('--text-x', '0px');
  //                                   button.style.setProperty('--cart-x', '-104px');
  //                               }
  //                           }, {
  //                               '--text-o': 1,
  //                               '--text-x': '16px',
  //                               '--cart-x': '-56px',
  //                               '--cart-scale': .75,
  //                               duration: .25,
  //                               clearProps: true,
  //                               onComplete() {
  //                                   button.classList.remove('active');
  //                               }
  //                           }]
  //                       });
  //   
  //                       gsap.to(button, {
  //                           keyframes: [{
  //                               '--text-o': 0,
  //                               duration: .3
  //                           }]
  //                       });
  //   
  //                       gsap.to(morph, {
  //                           keyframes: [{
  //                               morphSVG: 'M0 12C6 12 20 10 32 0C43.9024 9.99999 58 12 64 12V13H0V12Z',
  //                               duration: .25,
  //                               ease: 'power1.out'
  //                           }, {
  //                               morphSVG: 'M0 12C6 12 17 12 32 12C47.9024 12 58 12 64 12V13H0V12Z',
  //                               duration: .15,
  //                               ease: 'none'
  //                           }]
  //                       });
  //                   });
  //               });
  //           });
  //       
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="botao-add-to-cart-1" ref={raiz}>
      <button className="add-to-cart" onClick={s.onClick}>
              <span>{s.rotulo}</span>
              <svg className="morph" viewBox="0 0 64 13">
                  <path d="M0 12C6 12 17 12 32 12C47.9024 12 58 12 64 12V13H0V12Z" />
              </svg>
              <div className="shirt">
                  <svg className="first" viewBox="0 0 24 24">
                      <path d="M11 2C11 7.52285 15.4772 12 21 12C15.4772 12 11 16.4772 11 22C11 16.4772 6.52285 12 1 12C6.52285 12 11 7.52285 11 2Z"/>
                      <g>
                          <path d="M19 3C19 4.65685 20.3431 6 22 6C20.3431 6 19 7.34315 19 9C19 7.34315 17.6569 6 16 6C17.6569 6 19 4.65685 19 3Z"/>
                      </g>
                  </svg>
                  <svg className="second" viewBox="0 0 24 24">
                      <path d="M11 2C11 7.52285 15.4772 12 21 12C15.4772 12 11 16.4772 11 22C11 16.4772 6.52285 12 1 12C6.52285 12 11 7.52285 11 2Z"/>
                      <g>
                          <path d="M19 3C19 4.65685 20.3431 6 22 6C20.3431 6 19 7.34315 19 9C19 7.34315 17.6569 6 16 6C17.6569 6 19 4.65685 19 3Z"/>
                      </g>
                  </svg>
              </div>
              <div className="cart">
                  <svg viewBox="0 0 36 26">
                      <path d="M1 2.5H6L10 18.5H25.5L28.5 7.5L7.5 7.5" className="shape" />
                      <path d="M11.5 25C12.6046 25 13.5 24.1046 13.5 23C13.5 21.8954 12.6046 21 11.5 21C10.3954 21 9.5 21.8954 9.5 23C9.5 24.1046 10.3954 25 11.5 25Z" className="wheel" />
                      <path d="M24 25C25.1046 25 26 24.1046 26 23C26 21.8954 25.1046 21 24 21C22.8954 21 22 21.8954 22 23C22 24.1046 22.8954 25 24 25Z" className="wheel" />
                      <path d="M14.5 13.5L16.5 15.5L21.5 10.5" className="tick" />
                  </svg>
              </div>
          </button>
    </section>
  );
}
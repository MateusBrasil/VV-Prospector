"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/hero-section/hero-25
 *
 * O que foi arrancado da origem: fonte, peso, cor e todo o texto e foto do template.
 * O que ficou: a estrutura e a mecânica de animação, que é o material que vale.
 * Nada aqui pode voltar a ter literal de negócio: o conteúdo entra por `s` (os slots).
 */
import { useRef } from 'react';
import './Dobra.css';
export default function Dobra({ slots: s = {} }) {
  const raiz = useRef(null);
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: webgl).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  // useEffect(() => {
  //   import * as THREE from "three";
  //   import { gsap } from "gsap";
  //   import { vertexShader, fragmentShader } from "./shaders";
  //   
  //   const canvas = document.getElementById("loader-canvas");
  //   const clickPrompt = document.querySelector(".click-prompt");
  //   const loader = document.getElementById("loader");
  //   
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  //   
  //   const renderer = new THREE.WebGLRenderer({
  //     canvas: canvas,
  //     antialias: true,
  //     alpha: true,
  //   });
  //   
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  //   renderer.setClearColor(0x000000, 0);
  //   
  //   
  //   const uniforms = {
  //       uTransition: { value: 0.0 },
  //       uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
  //       uTime: { value: 0.0 },
  //       uBorderColor: { value: new THREE.Color('blue') }
  //   }
  //   
  //   const geometry = new THREE.PlaneGeometry(2, 2);
  //   
  //   const material = new THREE.ShaderMaterial({
  //       vertexShader,
  //       fragmentShader,
  //       uniforms,
  //       transparent: true,
  //       depthWrite: false,
  //       depthTest: false,
  //   })
  //   
  //   const mesh = new THREE.Mesh(geometry, material);
  //   scene.add(mesh);
  //   
  //   const handleResize = ()=>{
  //       const width = window.innerWidth;
  //       const height = window.innerHeight;
  //   
  //       renderer.setSize(width, height);
  //       renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  //   
  //       uniforms.uResolution.value.set(width, height);
  //   }
  //   
  //   window.addEventListener('resize', handleResize);
  //   
  //   let isRevealed = false;
  //   
  //   window.addEventListener('click', ()=>{
  //       if (isRevealed) return;
  //       isRevealed = true;
  //   
  //       if(clickPrompt){
  //           gsap.to(clickPrompt,{
  //               opacity: 0,
  //               y: -25,
  //               duration: .5,
  //               ease: 'power2.inOut',
  //           })
  //       }
  //   
  //       gsap.to(uniforms.uTransition, {
  //           value: 1.0,
  //           duration: 3.0,
  //           ease: 'power2.inOut',
  //           onComplete: ()=>{
  //               if (loader){
  //                   loader.style.pointerEvents = 'none';
  //               }
  //           }
  //       })
  //   })
  //   
  //   
  //   const clock = new THREE.Clock();
  //   
  //   const tick = ()=>{
  //       const elapsedTime = clock.getElapsedTime();
  //       uniforms.uTime.value = elapsedTime;
  //   
  //       renderer.render(scene, camera);
  //       requestAnimationFrame(tick);
  //   }
  //   
  //   tick();
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="hero-hero-25" ref={raiz}>
      <div id="loader">
          <canvas id="loader-canvas"></canvas>
          <p className="click-prompt">{s.texto}</p>
        </div>
      
        <div className="hero">
          <h1>{s.titulo}</h1>
        </div>
    </section>
  );
}
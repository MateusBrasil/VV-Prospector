"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/transicoes-de-pagina/transicao-pagina-21
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
  //   import { Curtains, Plane } from "curtainsjs";
  //   import fragment from "../shaders_circle/fragment.glsl";
  //   import vertex from "../shaders_circle/vertex.glsl";
  //   import gsap from "gsap";
  //   
  //   let activeTexture = 0;
  //   let currentTexture = 0;
  //   let transitionTimer = 0;
  //   let timer = 0;
  //   let isRunning = 0;
  //   
  //   window.addEventListener("load", () => {
  //     // set up our WebGL context and append the canvas to our wrapper
  //     const curtains = new Curtains({
  //       container: "canvas",
  //       alpha: true,
  //       pixelRatio: Math.min(1.5, window.devicePixelRatio), // limit pixel ratio for performance
  //     });
  //   
  //     // get our plane element
  //     const planeElements = [...document.getElementsByClassName("plane")];
  //     const navElements = [...document.getElementsByClassName("js-nav")];
  //     const duration = planeElements[0].getAttribute("data-duration") || 2;
  //     // set our initial parameters (basic uniforms)
  //     const params = {
  //       vertexShaderID: "vert",
  //       fragmentShaderID: "frag",
  //       uniforms: {
  //         transitionTimer: {
  //           name: "uTransitionTimer",
  //           type: "1f",
  //           value: 0,
  //         },
  //         fadeIn: {
  //           name: "uFadeIn",
  //           type: "1f",
  //           value: 0,
  //         },
  //         timer: {
  //           name: "uTimer",
  //           type: "1f",
  //           value: 0,
  //         },
  //         to: {
  //           name: "uTo",
  //           type: "1f",
  //           value: 0,
  //         },
  //         from: {
  //           name: "uFrom",
  //           type: "1f",
  //           value: 0,
  //         },
  //       },
  //     };
  //   
  //     const multiTexturesPlane = new Plane(curtains, planeElements[0], params);
  //   
  //     // set up our basic methods
  //     multiTexturesPlane
  //       .onReady(() => {
  //         // display the button
  //   
  //         document.body.classList.add("curtains-ready");
  //         let length = multiTexturesPlane.videos.length;
  //   
  //         // planeElements[0].addEventListener("click", () => {
  //         //   gsap.to(multiTexturesPlane.uniforms.transitionTimer, {
  //         //     duration: duration,
  //         //     value: currentTexture + 1,
  //         //     easing: 'power2.in',
  //         //     onStart: () => {
  //         //       multiTexturesPlane.videos[(currentTexture + 1) % length].play();
  //         //       currentTexture = currentTexture + 1;
  //         //     },
  //         //     onComplete: () => {
  //         //       multiTexturesPlane.videos[
  //         //         (currentTexture + length - 1) % length
  //         //       ].pause();
  //         //       multiTexturesPlane.videos[
  //         //         (currentTexture + length + 1) % length
  //         //       ].pause();
  //         //     },
  //         //   });
  //         // });
  //   
  //         navElements.forEach(nav=>{
  //           nav.addEventListener('click',(event)=>{
  //             let to = event.target.getAttribute('data-nav');
  //             if(isRunning || to==currentTexture) return;
  //             var elems = document.querySelectorAll(".frame__switch-item");
  //             [].forEach.call(elems, function(el) {
  //                 el.classList.remove("frame__switch-item--current");
  //             });
  //             event.target.classList.add('frame__switch-item--current')
  //             isRunning = true
  //             
  //             multiTexturesPlane.uniforms.to.value = to;
  //   
  //             let fake = {progress:0}
  //             gsap.to(fake, {
  //               duration: duration,
  //               progress:  1,
  //               easing: 'power2.in',
  //               onStart: () => {
  //                 multiTexturesPlane.videos[to].play();
  //                 currentTexture = to;
  //               },
  //               onUpdate:()=>{
  //                 if(fake.progress===1){
  //                   multiTexturesPlane.uniforms.from.value = to;
  //                 }
  //                 multiTexturesPlane.uniforms.transitionTimer.value = fake.progress
  //               },
  //               onComplete: () => {
  //                 multiTexturesPlane.uniforms.from.value = to;
  //                 multiTexturesPlane.videos[
  //                   (currentTexture + length - 1) % length
  //                 ].pause();
  //                 multiTexturesPlane.videos[
  //                   (currentTexture + length + 1) % length
  //                 ].pause();
  //                 isRunning = false;
  //               },
  //             });
  //   
  //           })
  //         })
  //   
  //         // click to play the videos
  //         document.getElementById("intro").addEventListener(
  //           "click",
  //           () => {
  //             // fade out animation
  //             gsap.to('#intro',{duration:0.1,autoAlpha:0.})
  //               document.body.classList.add("video-started");
  //   
  //             gsap.to(multiTexturesPlane.uniforms.fadeIn,{
  //               duration: 1,
  //               value: 1
  //             })
  //   
  //             // play all videos to force uploading the first frame of each texture
  //             multiTexturesPlane.playVideos();
  //   
  //             // wait a tick and pause the rest of videos (the ones that are hidden)
  //             curtains.nextRender(() => {
  //               multiTexturesPlane.videos[1].pause();
  //               multiTexturesPlane.videos[2].pause();
  //             });
  //           },
  //           false
  //         );
  //       })
  //       .onRender(() => {
  //         timer += 0.001;
  //         multiTexturesPlane.uniforms.timer.value = timer;
  //       });
  //   });
  //   
  //   precision mediump float;
  //   
  //               // default mandatory variables
  //               attribute vec3 aVertexPosition;
  //               attribute vec2 aTextureCoord;
  //   
  //               uniform mat4 uMVMatrix;
  //               uniform mat4 uPMatrix;
  //   
  //               // our texture matrices
  //               // displacement texture does not need to use them
  //               uniform mat4 firstTextureMatrix;
  //               uniform mat4 secondTextureMatrix;
  //   
  //               // custom variables
  //               varying vec3 vVertexPosition;
  //               varying vec2 vTextureCoord;
  //               varying vec2 vFirstTextureCoord;
  //               varying vec2 vSecondTextureCoord;
  //   
  //               // custom uniforms
  //               uniform float uTransitionTimer;
  //   
  //               void main() {
  //                   gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
  //   
  //                   // varyings
  //                   // use original texture coords for our displacement
  //                   vTextureCoord = aTextureCoord;
  //                   // use texture matrices for our videos
  //                   vFirstTextureCoord = (firstTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
  //                   vSecondTextureCoord = (secondTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
  //                   vVertexPosition = aVertexPosition;
  //               }
  //           
  //   precision mediump float;
  //   
  //               varying vec3 vVertexPosition;
  //               varying vec2 vTextureCoord;
  //               varying vec2 vFirstTextureCoord;
  //               varying vec2 vSecondTextureCoord;
  //   
  //               // custom uniforms
  //               uniform float uTransitionTimer;
  //               uniform float uTimer;
  //               uniform float uTo;
  //               uniform float uFrom;
  //               uniform float uFadeIn;
  //   
  //               // our textures samplers
  //               uniform sampler2D firstTexture;
  //               uniform sampler2D secondTexture;
  //               uniform sampler2D thirdTexture;
  //               uniform sampler2D displacement;
  //   
  //                vec4 getTextureByIndex(float index, vec2 vUv){
  //                    vec4 result;
  //                    if(index==0.){
  //                        result = texture2D(firstTexture,vUv);
  //                    }
  //                    if(index==1.){
  //                        result = texture2D(secondTexture,vUv);
  //                    }
  //                    if(index==2.){
  //                        result = texture2D(thirdTexture,vUv);
  //                    }
  //                    return result;
  //                }
  //                float circle (in vec2 uv, in float radius, in float sharpness) {
  //                    float dist = length(uv - vec2(0.5));
  //                    return 1. - smoothstep(radius-sharpness,radius,dist);
  //                }
  //               void main() {
  //                   float progress = fract(uTransitionTimer);
  //   
  //                   vec2 center = vec2(0.5);
  //                   vec2 centerVector = vFirstTextureCoord - center;
  //                   vec2 vUv = (vFirstTextureCoord - vec2(0.5))*(0.2 + 0.8*uFadeIn) + vec2(0.5) + 0.6*vec2(0.,1. - uFadeIn);
  //                   float mask = step(vTextureCoord.y,uFadeIn);
  //   
  //   
  //                    float circleProgress = circle(vTextureCoord, progress*0.9, 0.2);
  //                    float ease = progress*(2. - progress);
  //                    vec2 nextUV = vUv + centerVector * (circleProgress - 1.0) + centerVector * ( 1. - ease) * 0.;
  //                    vec2 currentUV = vUv - centerVector * circleProgress*0.5 - centerVector * progress * 0.2;
  //   
  //                    float currentTexture = mod(uFrom,3.);
  //                    float nextTexture =  mod(uTo, 3.);
  //   
  //                    vec4 current = getTextureByIndex(currentTexture, currentUV);
  //                    vec4 next = getTextureByIndex(nextTexture, nextUV);
  //   
  //                    gl_FragColor = mix(vec4(0.,0.,0.,0),mix(current,next,circleProgress), mask);
  //               }
  //           
  // }, []);
  return (
    <section className="dobra" data-dobra="transicao-transicao-pagina-21" ref={raiz}>
      <main>
                  <div className="frame">
                      <h1 className="frame__title">WebGL Video Transitions with <a href={s.destino || '#'}>curtains.js</h1>
                      <nav className="frame__links">
                          <a href={s.destino2 || '#'}>{s.acao}</a>
                          <a href={s.destino3 || '#'}>{s.acao2}</a>
                          <a href={s.destino4 || '#'}>{s.acao3}</a>
                      </nav>
                      <nav className="frame__demos">
                          <span className="frame__demos-text">{s.rotulo}</span>
                          <a href="index.html" className="frame__demo frame__demo--current">1</a>
                          <a href="index2.html" className="frame__demo">2</a>
                          <a href="index3.html" className="frame__demo">3</a>
                          <a href="index4.html" className="frame__demo">4</a>
                          <a href="index5.html" className="frame__demo">5</a>
                      </nav>
                      <button className="frame__button" id="intro" onClick={s.onClick}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" width="60" height="60"><path d="M45.563 29.174l-22-15A1 1 0 0022 15v30a.999.999 0 001.563.826l22-15a1 1 0 000-1.652zM24 43.107V16.893L43.225 30 24 43.107z"/><path d="M30 0C13.458 0 0 13.458 0 30s13.458 30 30 30 30-13.458 30-30S46.542 0 30 0zm0 58C14.561 58 2 45.439 2 30S14.561 2 30 2s28 12.561 28 28-12.561 28-28 28z"/></svg></button>
                      <div className="frame__content">
                          <h2 className="frame__content-title">{s.titulo}</h2>
                          <p className="frame__content-text">{s.texto}</p>
                          <nav className="frame__switch" id="nav">
                              <a className="frame__switch-item js-nav" data-nav="0">{s.acao4}</a>
                              <a className="frame__switch-item js-nav" data-nav="1">{s.acao5}</a>
                              <a className="frame__switch-item js-nav" data-nav="2">{s.acao6}</a>
                          </nav>
                      </div>
                  </div>
                  <div className="video">
                      <div id="canvas"></div>
                      <div className="wrapper">
                          <div className="plane" data-duration="2.5">
                              <video playsinline={true} muted={true} src={s.video} data-sampler="firstTexture" preload="auto"></video>
                              <video playsinline={true} muted={true} src={s.video2} data-sampler="secondTexture"></video>
                              <video playsinline={true} muted={true} src={s.video3} data-sampler="thirdTexture"></video>
                          </div>
                      </div>
                  </div>
              </main>
    </section>
  );
}
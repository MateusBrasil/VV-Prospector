"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/webgl-threejs/efeitos-webgl-17
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
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: webgl).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   import './index.scss'
  //   
  //   import * as THREE from 'three'
  //   import gsap from 'gsap'
  //   import { ScrollTrigger } from 'gsap/ScrollTrigger'
  //   import { SplitText } from 'gsap/SplitText'
  //   import Lenis from 'lenis'
  //   
  //   gsap.registerPlugin(ScrollTrigger, SplitText)
  //   
  //   const vertexShader = `
  //     varying vec2 vUv;
  //     void main() {
  //       vUv = uv;
  //       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  //     }
  //   `
  //   
  //   const fragmentShader = `
  //     uniform float uProgress;
  //     uniform vec2 uResolution;
  //     uniform vec3 uColor;
  //     uniform float uSpread;
  //     varying vec2 vUv;
  //   
  //     float Hash(vec2 p) {
  //       vec3 p2 = vec3(p.xy, 1.0);
  //       return fract(sin(dot(p2, vec3(37.1, 61.7, 12.4))) * 3758.5453123);
  //     }
  //   
  //     float noise(in vec2 p) {
  //       vec2 i = floor(p);
  //       vec2 f = fract(p);
  //       f *= f * (3.0 - 2.0 * f);
  //       return mix(
  //         mix(Hash(i + vec2(0.0, 0.0)), Hash(i + vec2(1.0, 0.0)), f.x),
  //         mix(Hash(i + vec2(0.0, 1.0)), Hash(i + vec2(1.0, 1.0)), f.x),
  //         f.y
  //       );
  //     }
  //   
  //     float fbm(vec2 p) {
  //       float v = 0.0;
  //       v += noise(p * 1.0) * 0.5;
  //       v += noise(p * 2.0) * 0.25;
  //       v += noise(p * 4.0) * 0.125;
  //       return v;
  //     }
  //   
  //     void main() {
  //       vec2 uv = vUv;
  //       float aspect = uResolution.x / uResolution.y;
  //       vec2 centeredUv = (uv - 0.5) * vec2(aspect, 1.0);
  //       
  //       float dissolveEdge = uv.y - uProgress * 1.2;
  //       float noiseValue = fbm(centeredUv * 15.0);
  //       float d = dissolveEdge + noiseValue * uSpread;
  //       
  //       float pixelSize = 1.0 / uResolution.y;
  //       float alpha = 1.0 - smoothstep(-pixelSize, pixelSize, d);
  //       
  //       gl_FragColor = vec4(uColor, alpha);
  //     }
  //   `
  //   
  //   const lenis = new Lenis()
  //   function raf(time) {
  //   	lenis.raf(time)
  //   	ScrollTrigger.update()
  //   	requestAnimationFrame(raf)
  //   }
  //   requestAnimationFrame(raf)
  //   lenis.on('scroll', ScrollTrigger.update)
  //   
  //   const CONFIG = {
  //   	color: '#ebf5df',
  //   	spread: 0.5,
  //   	speed: 1,
  //   }
  //   
  //   const canvas = document.querySelector('.hero-canvas')
  //   const hero = document.querySelector('.hero')
  //   
  //   const scene = new THREE.Scene()
  //   const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  //   const renderer = new THREE.WebGLRenderer({
  //   	canvas,
  //   	alpha: true,
  //   	antialias: false,
  //   })
  //   
  //   function hexToRgb(hex) {
  //   	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  //   	return result
  //   		? {
  //   				r: parseInt(result[1], 16) / 255,
  //   				g: parseInt(result[2], 16) / 255,
  //   				b: parseInt(result[3], 16) / 255,
  //   			}
  //   		: { r: 0.89, g: 0.89, b: 0.89 }
  //   }
  //   
  //   function resize() {
  //   	const width = hero.offsetWidth
  //   	const height = hero.offsetHeight
  //   	renderer.setSize(width, height)
  //   	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  //   }
  //   
  //   resize()
  //   window.addEventListener('resize', resize)
  //   
  //   const rgb = hexToRgb(CONFIG.color)
  //   const geometry = new THREE.PlaneGeometry(2, 2)
  //   const material = new THREE.ShaderMaterial({
  //   	vertexShader,
  //   	fragmentShader,
  //   	uniforms: {
  //   		uProgress: { value: 0 },
  //   		uResolution: {
  //   			value: new THREE.Vector2(hero.offsetWidth, hero.offsetHeight),
  //   		},
  //   		uColor: { value: new THREE.Vector3(rgb.r, rgb.g, rgb.b) },
  //   		uSpread: { value: CONFIG.spread },
  //   	},
  //   	transparent: true,
  //   })
  //   
  //   const mesh = new THREE.Mesh(geometry, material)
  //   scene.add(mesh)
  //   
  //   let scrollProgress = 0
  //   
  //   function animate() {
  //   	material.uniforms.uProgress.value = scrollProgress
  //   	renderer.render(scene, camera)
  //   	requestAnimationFrame(animate)
  //   }
  //   
  //   animate()
  //   
  //   lenis.on('scroll', ({ scroll }) => {
  //   	const heroHeight = hero.offsetHeight
  //   	const windowHeight = window.innerHeight
  //   	const maxScroll = heroHeight - windowHeight
  //   	scrollProgress = Math.min((scroll / maxScroll) * CONFIG.speed, 1.1)
  //   })
  //   
  //   window.addEventListener('resize', () => {
  //   	material.uniforms.uResolution.value.set(hero.offsetWidth, hero.offsetHeight)
  //   })
  //   
  //   const heroH2 = document.querySelector('.hero__content h2')
  //   const split = new SplitText(heroH2, { type: 'words' })
  //   const words = split.words
  //   
  //   gsap.set(words, { opacity: 0 })
  //   
  //   ScrollTrigger.create({
  //   	trigger: '.hero__content',
  //   	start: 'top 25%',
  //   	end: 'bottom 100%',
  //   	onUpdate: self => {
  //   		const progress = self.progress
  //   		const totalWords = words.length
  //   
  //   		words.forEach((word, index) => {
  //   			const wordProgress = index / totalWords
  //   			const nextWordProgress = (index + 1) / totalWords
  //   
  //   			let opacity = 0.1
  //   
  //   			if (progress >= nextWordProgress) {
  //   				opacity = 1
  //   			} else if (progress >= wordProgress) {
  //   				const fadeProgress =
  //   					(progress - wordProgress) / (nextWordProgress - wordProgress)
  //   				opacity = fadeProgress
  //   			}
  //   
  //   			gsap.to(word, {
  //   				opacity: opacity,
  //   				duration: 0.1,
  //   				overwrite: true,
  //   			})
  //   		})
  //   	},
  //   })
  //   
  //   gsap.to('.hero__twig--left', {
  //   	y: -2000,
  //   	ease: 'none',
  //   	scrollTrigger: {
  //   		trigger: '.hero',
  //   		start: 'top top',
  //   		end: 'bottom top',
  //   		scrub: true,
  //   	},
  //   })
  //   
  //   gsap.to('.hero__twig--right', {
  //   	y: -3500,
  //   	ease: 'none',
  //   	scrollTrigger: {
  //   		trigger: '.hero',
  //   		start: 'top top',
  //   		end: 'bottom top',
  //   		scrub: true,
  //   	},
  //   })
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-efeitos-webgl-17" ref={raiz}>
      <div data-anim-index className="index">
         <section className="hero">
            <div className="hero__twigs">
               <img className="hero__twig hero__twig--left" src={s.imagem} alt="" />
               <img className="hero__twig hero__twig--right" src={s.imagem2} alt="" />
            </div>
            <div className="hero__row">
               <img className="hero__bg" src={s.imagem3} alt="" />
               <canvas className="hero-canvas"></canvas>
               <div className="hero__conteiner">
                  <div className="hero__top">
                     <h1>{s.titulo}</h1>
                     <p>{s.texto}</p>
                  </div>
                  <div className="hero__content">
                     <h2>{s.titulo2}</h2>
                  </div>
               </div>
            </div>
         </section>
      </div>
    </section>
  );
}
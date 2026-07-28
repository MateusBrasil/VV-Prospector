"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/cursor/efeitos-mouse-1
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
  /* ⚠ REVER: o JS de origem está abaixo em bruto (categoria: webgl).
   * A esteira NÃO o converte sozinha, e nesta categoria escopar ao `raiz.current` NÃO
   * chega: o código assume que é dono da página (window/document.body/listeners de
   * load|resize|scroll), ou traz import/export, ou monta um canvas WebGL. Converter às
   * cegas produz animação que corre no elemento errado, que é pior que animação
   * nenhuma. Precisa de reescrita, não de troca de prefixo. */
  useGSAP(() => {
  //   /* =====================================================
  //      MOUSE IMAGE DISTORTION — vanilla port (ES module)
  //      script.js
  //   
  //      • Three.js is loaded via the importmap declared in
  //        index.html (the deprecated UMD build is gone in
  //        r160+).
  //      • GSAP + Lenis remain on globals (window.gsap,
  //        window.Lenis).
  //      ===================================================== */
  //   
  //   import * as THREE from 'three'
  //   
  //   document.addEventListener('DOMContentLoaded', () => {
  //   
  //      /* ── DOM ── */
  //      const sceneEl  = document.getElementById('js-scene')
  //      const projects = document.getElementById('js-projects')
  //      const items    = projects.querySelectorAll('.project')
  //   
  //      /* ──────────────────────────────────────────────
  //         SMOOTH SCROLL — Lenis (same as original)
  //         ────────────────────────────────────────────── */
  //      const lenis = new Lenis()
  //      function raf(time) { lenis.raf(time); requestAnimationFrame(raf) }
  //      requestAnimationFrame(raf)
  //   
  //      /* ──────────────────────────────────────────────
  //         DATA
  //         ────────────────────────────────────────────── */
  //      const projectsData = [
  //         { title: 'Richard Gaston',     src: './img/5.jpg' },
  //         { title: 'KangHee Kim',        src: './img/6.jpg' },
  //         { title: 'Inka and Niclas',    src: './img/7.jpg' },
  //         { title: 'Arch McLeish',       src: './img/2.jpg' },
  //         { title: 'Nadir Bucan',        src: './img/1.jpg' },
  //         { title: 'Chandler Bondurant', src: './img/3.jpg' },
  //         { title: 'Arianna Lago',       src: './img/4.jpg' },
  //      ]
  //   
  //      /* ──────────────────────────────────────────────
  //         SCENE
  //         ────────────────────────────────────────────── */
  //      const scene  = new THREE.Scene()
  //      const camera = new THREE.PerspectiveCamera(
  //         75, window.innerWidth / window.innerHeight, 0.1, 1000
  //      )
  //      camera.position.z = 5
  //   
  //      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  //      renderer.setSize(window.innerWidth, window.innerHeight)
  //      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  //      sceneEl.appendChild(renderer.domElement)
  //   
  //      /* ──────────────────────────────────────────────
  //         SHADERS — copied verbatim
  //         ────────────────────────────────────────────── */
  //      const vertexShader = /* glsl */`
  //         varying vec2 vUv;
  //         uniform vec2 uDelta;
  //         uniform float uAmplitude;
  //         float PI = 3.141592653589793238;
  //   
  //         void main() {
  //            vUv = uv;
  //            vec3 newPosition = position;
  //            newPosition.x += sin(uv.y * PI) * uDelta.x * uAmplitude;
  //            newPosition.y += sin(uv.x * PI) * uDelta.y * uAmplitude;
  //            gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  //         }
  //      `
  //   
  //      const fragmentShader = /* glsl */`
  //         varying vec2 vUv;
  //         uniform sampler2D uTexture;
  //         uniform float uAlpha;
  //   
  //         void main() {
  //            vec3 t = texture2D(uTexture, vUv).rgb;
  //            gl_FragColor = vec4(t, uAlpha);
  //         }
  //      `
  //   
  //      /* ──────────────────────────────────────────────
  //         LOAD ALL TEXTURES, then build the mesh
  //         ────────────────────────────────────────────── */
  //      const loader = new THREE.TextureLoader()
  //      const textures = []
  //      let loaded = 0
  //   
  //      projectsData.forEach((p, i) => {
  //         loader.load(
  //            p.src,
  //            (tex) => {
  //               tex.minFilter = THREE.LinearFilter
  //               tex.magFilter = THREE.LinearFilter
  //               tex.colorSpace = THREE.SRGBColorSpace
  //               textures[i] = tex
  //               loaded++
  //               if (loaded === projectsData.length) init()
  //            },
  //            undefined,
  //            (err) => {
  //               console.error(`Failed to load ${p.src}`, err)
  //               console.warn(
  //                  'If you see CORS errors, you must serve this folder ' +
  //                  'over HTTP (e.g. `npx serve` or `python3 -m http.server`) ' +
  //                  'instead of opening index.html directly via file://'
  //               )
  //            }
  //         )
  //      })
  //   
  //      /* ──────────────────────────────────────────────
  //         MAIN init — runs once textures are ready
  //         ────────────────────────────────────────────── */
  //      function init() {
  //   
  //         function computeViewport() {
  //            const fovRad = (camera.fov * Math.PI) / 180
  //            const height = 2 * Math.tan(fovRad / 2) * camera.position.z
  //            const width  = height * camera.aspect
  //            return { width, height }
  //         }
  //         let viewport = computeViewport()
  //   
  //         function useAspect(imgW, imgH, factor) {
  //            const adaptedH = factor * viewport.height
  //            const adaptedW = adaptedH * (imgW / imgH)
  //            return [adaptedW, adaptedH, 1]
  //         }
  //   
  //         const geometry = new THREE.PlaneGeometry(1, 1, 15, 15)
  //         const uniforms = {
  //            uDelta:     { value: new THREE.Vector2(0, 0) },
  //            uAmplitude: { value: 0.0005 },
  //            uTexture:   { value: textures[0] },
  //            uAlpha:     { value: 0 },
  //         }
  //         const material = new THREE.ShaderMaterial({
  //            vertexShader,
  //            fragmentShader,
  //            uniforms,
  //            transparent: true,
  //         })
  //         const plane = new THREE.Mesh(geometry, material)
  //   
  //         const firstImg = textures[0].image
  //         plane.scale.set(...useAspect(firstImg.width, firstImg.height, 0.225))
  //   
  //         scene.add(plane)
  //   
  //         /* ──────────────────────────────────────────────
  //            MOUSE — raw + smoothed (lerp 0.1)
  //            ────────────────────────────────────────────── */
  //         const mouse       = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
  //         const smoothMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
  //         const lerp = (a, b, t) => a * (1 - t) + b * t
  //   
  //         window.addEventListener('mousemove', (e) => {
  //            mouse.x = e.clientX
  //            mouse.y = e.clientY
  //         })
  //   
  //         /* ──────────────────────────────────────────────
  //            HOVER — set active project; tween uAlpha + swap texture
  //            ────────────────────────────────────────────── */
  //         let activeIndex = null
  //   
  //         items.forEach((item) => {
  //            item.addEventListener('mouseenter', () => {
  //               const i = parseInt(item.dataset.i, 10)
  //               activeIndex = i
  //   
  //               uniforms.uTexture.value = textures[i]
  //               const { image } = textures[i]
  //               plane.scale.set(...useAspect(image.width, image.height, 0.225))
  //   
  //               gsap.to(uniforms.uAlpha, {
  //                  value: 1,
  //                  duration: 0.2,
  //                  ease: 'power2.out',
  //                  overwrite: 'auto',
  //               })
  //            })
  //         })
  //   
  //         projects.addEventListener('mouseleave', () => {
  //            activeIndex = null
  //            gsap.to(uniforms.uAlpha, {
  //               value: 0,
  //               duration: 0.2,
  //               ease: 'power2.out',
  //               overwrite: 'auto',
  //            })
  //         })
  //   
  //         /* ──────────────────────────────────────────────
  //            RENDER LOOP
  //            ────────────────────────────────────────────── */
  //         function render() {
  //            requestAnimationFrame(render)
  //   
  //            if (Math.abs(mouse.x - smoothMouse.x) > 1) {
  //               smoothMouse.x = lerp(smoothMouse.x, mouse.x, 0.1)
  //               smoothMouse.y = lerp(smoothMouse.y, mouse.y, 0.1)
  //   
  //               uniforms.uDelta.value.x =       mouse.x - smoothMouse.x
  //               uniforms.uDelta.value.y = -1 * (mouse.y - smoothMouse.y)
  //            }
  //   
  //            const px = smoothMouse.x / window.innerWidth
  //            const py = smoothMouse.y / window.innerHeight
  //            plane.position.x = (px - 0.5) * viewport.width
  //            plane.position.y = -(py - 0.5) * viewport.height
  //   
  //            renderer.render(scene, camera)
  //         }
  //         render()
  //   
  //         /* ──────────────────────────────────────────────
  //            RESIZE
  //            ────────────────────────────────────────────── */
  //         window.addEventListener('resize', () => {
  //            camera.aspect = window.innerWidth / window.innerHeight
  //            camera.updateProjectionMatrix()
  //            renderer.setSize(window.innerWidth, window.innerHeight)
  //            viewport = computeViewport()
  //   
  //            const idx = activeIndex == null ? 0 : activeIndex
  //            const img = textures[idx].image
  //            plane.scale.set(...useAspect(img.width, img.height, 0.225))
  //         })
  //      }
  //   })
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="cursor-efeitos-mouse-1" ref={raiz}>
      <div className="spacer"></div>
      
         
         <div className="projects" id="js-projects">
            <ul className="projects__list">
               <li className="project" data-i="0"><p>{s.texto}</p></li>
               <li className="project" data-i="1"><p>{s.texto2}</p></li>
               <li className="project" data-i="2"><p>{s.texto3}</p></li>
               <li className="project" data-i="3"><p>{s.texto4}</p></li>
               <li className="project" data-i="4"><p>{s.texto5}</p></li>
               <li className="project" data-i="5"><p>{s.texto6}</p></li>
               <li className="project" data-i="6"><p>{s.texto7}</p></li>
            </ul>
         </div>
      
         
         <div className="scene" id="js-scene"></div>
      
         <div className="spacer"></div>
    </section>
  );
}
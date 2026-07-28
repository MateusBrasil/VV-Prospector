"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/webgl-threejs/efeitos-webgl-10
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
  //   import './css/base.css';
  //   import * as THREE from 'three';
  //   import fragmentShader from './shaders/fragment.glsl';
  //   
  //   // extract "variation" parameter from the url
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const variation = urlParams.get('var') || 0;
  //   
  //   // add selected class to link based on variation parameter
  //   document.querySelector(`[data-var="${variation}"]`).classList.add('selected');
  //   
  //   // Scene setup
  //   const scene = new THREE.Scene();
  //   const vMouse = new THREE.Vector2();
  //   const vMouseDamp = new THREE.Vector2();
  //   const vResolution = new THREE.Vector2();
  //   
  //   // Viewport setup (updated on resize)
  //   let w, h = 1;
  //   
  //   // Orthographic camera setup
  //   const aspect = w / h;
  //   const camera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 1000);
  //   
  //   const renderer = new THREE.WebGLRenderer();
  //   document.body.appendChild(renderer.domElement);
  //   
  //   const onPointerMove = (e) => { vMouse.set(e.pageX, e.pageY) }
  //   document.addEventListener('mousemove', onPointerMove);
  //   document.addEventListener('pointermove', onPointerMove);
  //   document.body.addEventListener('touchmove', function (e) { e.preventDefault(); }, { passive: false });
  //   
  //   // Plane geometry covering the full viewport
  //   const geo = new THREE.PlaneGeometry(1, 1);  // Scaled to cover full viewport
  //   
  //   // Shader material creation
  //   const mat = new THREE.ShaderMaterial({
  //     vertexShader: /* glsl */`
  //       varying vec2 v_texcoord;
  //       void main() {
  //           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  //           v_texcoord = uv;
  //       }`,
  //     fragmentShader, // most of the action happening in the fragment
  //     uniforms: {
  //       u_mouse: { value: vMouseDamp },
  //       u_resolution: { value: vResolution },
  //       u_pixelRatio: { value: 2 }
  //     },
  //     defines: {
  //       VAR: variation
  //     }
  //   });
  //   
  //   
  //   // Mesh creation
  //   const quad = new THREE.Mesh(geo, mat);
  //   scene.add(quad);
  //   
  //   // Camera position and orientation
  //   camera.position.z = 1;  // Set appropriately for orthographic
  //   
  //   // Animation loop to render
  //   let time, lastTime = 0;
  //   const update = () => {
  //     // calculate delta time
  //     time = performance.now() * 0.001;
  //     const dt = time - lastTime;
  //     lastTime = time;
  //   
  //     // ease mouse motion with damping
  //     for (const k in vMouse) {
  //       if (k == 'x' || k == 'y') vMouseDamp[k] = THREE.MathUtils.damp(vMouseDamp[k], vMouse[k], 8, dt);
  //     }
  //   
  //     // render scene
  //     requestAnimationFrame(update);
  //     renderer.render(scene, camera);
  //   };
  //   update();
  //   
  //   const resize = () => {
  //     w = window.innerWidth;
  //     h = window.innerHeight;
  //   
  //     const dpr = Math.min(window.devicePixelRatio, 2);
  //   
  //     renderer.setSize(w, h);
  //     renderer.setPixelRatio(dpr);
  //   
  //     camera.left = -w / 2;
  //     camera.right = w / 2;
  //     camera.top = h / 2;
  //     camera.bottom = -h / 2;
  //     camera.updateProjectionMatrix();
  //   
  //     quad.scale.set(w, h, 1);
  //     vResolution.set(w, h).multiplyScalar(dpr);
  //     mat.uniforms.u_pixelRatio.value = dpr;
  //   };
  //   resize();
  //   
  //   window.addEventListener('resize', resize)
  //   
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-efeitos-webgl-10" ref={raiz}>
      <main id="app">
      		<header className="frame">
      			<h1 className="frame__title">{s.titulo}</h1>
      			<a className="frame__back" href={s.destino || '#'}>{s.acao}</a>
      			<a className="frame__archive" href={s.destino2 || '#'}>{s.acao2}</a>
      			<a className="frame__github" href={s.destino3 || '#'}>{s.acao3}</a>
      			<nav className="frame__tags">
      				<a href={s.destino4 || '#'}>{s.acao4}</a>
      				<a href={s.destino5 || '#'}>{s.acao5}</a>
      				<a href={s.destino6 || '#'}>{s.acao6}</a>
      			</nav>
      			<nav className="frame__demos">
      				<span>{s.rotulo}</span>
      				<a data-var="0" href="index.html?var=0">1</a>
      				<a data-var="1" href="index.html?var=1">2</a>
      				<a data-var="2" href="index.html?var=2">3</a>
      				<a data-var="3" href="index.html?var=3">4</a>
      			</nav>
      		</header>
      	</main>
    </section>
  );
}
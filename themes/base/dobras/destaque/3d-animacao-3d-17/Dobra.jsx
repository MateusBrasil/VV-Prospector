"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/efeitos-3d/animacao-3d-17
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
  //   const lenis = new Lenis();
  //   lenis.on("scroll", ScrollTrigger.update);
  //   gsap.ticker.add((time) => {
  //     lenis.raf(time * 1000);
  //   });
  //   gsap.ticker.lagSmoothing(0);
  //   
  //   const scene = new THREE.Scene();
  //   
  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //   
  //   const renderer = new THREE.WebGLRenderer({
  //     antialias: true,
  //     alpha: true,
  //   });
  //   renderer.setClearColor(0x000000, 0);
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   renderer.setPixelRatio(window.devicePixelRatio);
  //   renderer.shadowMap.enabled = true;
  //   renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  //   renderer.physicallyCorrectLights = true;
  //   renderer.toneMapping = THREE.ACESFilmicToneMapping;
  //   renderer.toneMappingExposure = 2.5;
  //   document.querySelector(".model").appendChild(renderer.domElement);
  //   
  //   const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
  //   scene.add(ambientLight);
  //   
  //   const mainLight = new THREE.DirectionalLight(0xffffff, 7.5);
  //   mainLight.position.set(0.5, 7.5, 2.5);
  //   scene.add(mainLight);
  //   
  //   const fillLight = new THREE.DirectionalLight(0xffffff, 2.5);
  //   fillLight.position.set(-15, 0, -5);
  //   scene.add(fillLight);
  //   
  //   const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1.5);
  //   hemiLight.position.set(0, 0, 0);
  //   scene.add(hemiLight);
  //   
  //   function basicAnimate() {
  //     renderer.render(scene, camera);
  //     requestAnimationFrame(basicAnimate);
  //   }
  //   basicAnimate();
  //   
  //   let model;
  //   const loader = new THREE.GLTFLoader();
  //   loader.load("./assets/chair.glb", function (gltf) {
  //     model = gltf.scene;
  //     model.traverse((node) => {
  //       if (node.isMesh) {
  //         if (node.material) {
  //           node.material.metalness = 2;
  //           node.material.roughness = 3;
  //           node.material.envMapIntensity = 5;
  //         }
  //         node.castShadow = true;
  //         node.receiveShadow = true;
  //       }
  //     });
  //   
  //     const box = new THREE.Box3().setFromObject(model);
  //     const center = box.getCenter(new THREE.Vector3());
  //     model.position.sub(center);
  //     scene.add(model);
  //   
  //     const size = box.getSize(new THREE.Vector3());
  //     const maxDim = Math.max(size.x, size.y, size.z);
  //     camera.position.z = maxDim * 1.75;
  //   
  //     model.scale.set(0, 0, 0);
  //     model.rotation.set(0, 0.5, 0);
  //     playInitialAnimation();
  //   
  //     cancelAnimationFrame(basicAnimate);
  //     animate();
  //   });
  //   
  //   const floatAmplitude = 0.2;
  //   const floatSpeed = 1.5;
  //   const rotationSpeed = 0.3;
  //   let isFloating = true;
  //   let currentScroll = 0;
  //   
  //   const totalScrollHeight =
  //     document.documentElement.scrollHeight - window.innerHeight;
  //   
  //   function playInitialAnimation() {
  //     if (model) {
  //       gsap.to(model.scale, {
  //         x: 1,
  //         y: 1,
  //         z: 1,
  //         duration: 1,
  //         ease: "power2.out",
  //       });
  //     }
  //   }
  //   
  //   lenis.on("scroll", (e) => {
  //     currentScroll = e.scroll;
  //   });
  //   
  //   function animate() {
  //     if (model) {
  //       if (isFloating) {
  //         const floatOffset =
  //           Math.sin(Date.now() * 0.001 * floatSpeed) * floatAmplitude;
  //         model.position.y = floatOffset;
  //       }
  //   
  //       const scrollProgress = Math.min(currentScroll / totalScrollHeight, 1);
  //   
  //       const baseTilt = 0.5;
  //       model.rotation.x = scrollProgress * Math.PI * 4 + baseTilt;
  //     }
  //   
  //     renderer.render(scene, camera);
  //     requestAnimationFrame(animate);
  //   }
  //   
  //   const introSection = document.querySelector(".intro");
  //   const archiveSection = document.querySelector(".archive");
  //   const outroSection = document.querySelector(".outro");
  //   
  //   const splitText = new SplitType(".outro-copy h2", {
  //     types: "lines",
  //     lineClass: "line",
  //   });
  //   
  //   splitText.lines.forEach((line) => {
  //     const text = line.innerHTML;
  //     line.innerHTML = `<span style="display: block; transform: translateY(70px);">${text}</span>`;
  //   });
  //   
  //   ScrollTrigger.create({
  //     trigger: ".outro",
  //     start: "top center",
  //     onEnter: () => {
  //       gsap.to(".outro-copy h2 .line span", {
  //         translateY: 0,
  //         duration: 1,
  //         stagger: 0.1,
  //         ease: "power3.out",
  //         force3D: true,
  //       });
  //     },
  //     onLeaveBack: () => {
  //       gsap.to(".outro-copy h2 .line span", {
  //         translateY: 70,
  //         duration: 1,
  //         stagger: 0.1,
  //         ease: "power3.out",
  //         force3D: true,
  //       });
  //     },
  //     toggleActions: "play reverse play reverse",
  //   });
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-3d-animacao-3d-17" ref={raiz}>
      <div className="model"></div>
      
          <nav>
            <p>oak <span>{s.rotulo}</span></p>
            <a href="#">{s.acao}</a>
          </nav>
      
          <section className="intro">
            <div className="header-row">
              <h1>{s.titulo}</h1>
            </div>
            <div className="header-row">
              <h1>{s.titulo2}</h1>
              <p>{s.texto}</p>
            </div>
            <div className="header-row">
              <h1>{s.titulo3}</h1>
            </div>
          </section>
      
          <section className="archive">
            <div className="archive-header">
              <p>{s.texto2}</p>
            </div>
      
            <div className="archive-item">
              <h2>{s.titulo4}</h2>
              <div className="archive-info">
                <p>{s.texto3}</p>
                <p>{s.texto4}</p>
                <p>{s.texto5}</p>
                <p>{s.texto6}</p>
              </div>
            </div>
            <div className="archive-item">
              <h2>{s.titulo5}</h2>
              <div className="archive-info">
                <p>{s.texto7}</p>
                <p>{s.texto8}</p>
                <p>{s.texto9}</p>
                <p>{s.texto10}</p>
              </div>
            </div>
            <div className="archive-item">
              <h2>{s.titulo6}</h2>
              <div className="archive-info">
                <p>{s.texto11}</p>
                <p>{s.texto12}</p>
                <p>{s.texto13}</p>
                <p>{s.texto14}</p>
              </div>
            </div>
            <div className="archive-item">
              <h2>{s.titulo7}</h2>
              <div className="archive-info">
                <p>{s.texto15}</p>
                <p>{s.texto16}</p>
                <p>{s.texto17}</p>
                <p>{s.texto18}</p>
              </div>
            </div>
            <div className="archive-item">
              <h2>{s.titulo8}</h2>
              <div className="archive-info">
                <p>{s.texto19}</p>
                <p>{s.texto20}</p>
                <p>{s.texto21}</p>
                <p>{s.texto22}</p>
              </div>
            </div>
            <div className="archive-item">
              <h2>{s.titulo9}</h2>
              <div className="archive-info">
                <p>{s.texto23}</p>
                <p>{s.texto24}</p>
                <p>{s.texto25}</p>
                <p>{s.texto26}</p>
              </div>
            </div>
          </section>
      
          <section className="outro">
            <div className="outro-copy">
              <h2>{s.titulo10}</h2>
              <p>Promos <span>{s.rotulo2}</span></p>
              <p>Contact <span>{s.rotulo3}</span></p>
            </div>
      
            <div className="footer">
              <p>{s.texto27}</p>
            </div>
          </section>
    </section>
  );
}
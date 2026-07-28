"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/webgl-threejs/efeitos-webgl-8
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
  //   import fragment from "./shader/fragment.glsl";
  //   import vertex from "./shader/vertex.glsl";
  //   import GUI from "lil-gui";
  //   
  //   function clamp(number, min, max) {
  //     return Math.max(min, Math.min(number, max));
  //   }
  //   
  //   export default class Sketch {
  //     constructor(options) {
  //       this.scene = new THREE.Scene();
  //   
  //       this.container = options.dom;
  //       this.img = this.container.querySelector('img')
  //       this.width = this.container.offsetWidth;
  //       this.height = this.container.offsetHeight;
  //       this.renderer = new THREE.WebGLRenderer();
  //       this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  //       this.renderer.setSize(this.width, this.height);
  //       this.renderer.setClearColor(0xeeeeee, 1);
  //       this.renderer.physicallyCorrectLights = true;
  //       this.renderer.outputEncoding = THREE.sRGBEncoding;
  //   
  //       this.container.appendChild(this.renderer.domElement);
  //   
  //       this.camera = new THREE.PerspectiveCamera(
  //         70,
  //         window.innerWidth / window.innerHeight,
  //         0.1,
  //         100
  //       );
  //   
  //       var frustumSize = 1;
  //       var aspect = window.innerWidth / window.innerHeight;
  //       this.camera = new THREE.OrthographicCamera(frustumSize / -2, frustumSize / 2, frustumSize / 2, frustumSize / -2, -1000, 1000);
  //       this.camera.position.set(0, 0, 2);
  //   
  //       this.time = 0;
  //   
  //       this.mouse = {
  //         x: 0,
  //         y: 0,
  //         prevX: 0,
  //         prevY: 0,
  //         vX: 0,
  //         vY: 0
  //       }
  //   
  //       this.isPlaying = true;
  //       this.settings();
  //       this.addObjects();
  //       this.resize();
  //       this.render();
  //       this.setupResize();
  //   
  //       this.mouseEvents()
  //   
  //     }
  //   
  //     getValue(val){
  //       return parseFloat(this.container.getAttribute('data-'+val))
  //     }
  //   
  //   
  //     mouseEvents() {
  //       window.addEventListener('mousemove', (e) => {
  //         this.mouse.x = e.clientX / this.width;
  //         this.mouse.y = e.clientY / this.height;
  //   
  //         // console.log(this.mouse.x,this.mouse.y)
  //   
  //         this.mouse.vX = this.mouse.x - this.mouse.prevX;
  //         this.mouse.vY = this.mouse.y - this.mouse.prevY;
  //   
  //   
  //         this.mouse.prevX = this.mouse.x
  //         this.mouse.prevY = this.mouse.y;
  //   
  //   
  //         // console.log(this.mouse.vX,'vx')
  //       })
  //     }
  //   
  //     settings() {
  //       let that = this;
  //       this.settings = {
  //         grid: this.getValue('grid')||34,
  //         mouse: this.getValue('mouse')||0.25,
  //         strength: this.getValue('strength')||1,
  //         relaxation: this.getValue('relaxation')||0.9,
  //       };
  //   
  //   
  //       this.gui = new GUI();
  //   
  //       this.gui.add(this.settings, "grid", 2, 1000, 1).onFinishChange(() => {
  //         this.regenerateGrid()
  //       });
  //       this.gui.add(this.settings, "mouse", 0, 1, 0.01);
  //       this.gui.add(this.settings, "strength", 0, 1, 0.01);
  //       this.gui.add(this.settings, "relaxation", 0, 1, 0.01);
  //     }
  //   
  //     setupResize() {
  //       window.addEventListener("resize", this.resize.bind(this));
  //     }
  //   
  //     resize() {
  //       this.width = this.container.offsetWidth;
  //       this.height = this.container.offsetHeight;
  //       this.renderer.setSize(this.width, this.height);
  //       this.camera.aspect = this.width / this.height;
  //   
  //   
  //       // image cover
  //       this.imageAspect = 1. / 1.5;
  //       let a1;
  //       let a2;
  //       if (this.height / this.width > this.imageAspect) {
  //         a1 = (this.width / this.height) * this.imageAspect;
  //         a2 = 1;
  //       } else {
  //         a1 = 1;
  //         a2 = (this.height / this.width) / this.imageAspect;
  //       }
  //   
  //       this.material.uniforms.resolution.value.x = this.width;
  //       this.material.uniforms.resolution.value.y = this.height;
  //       this.material.uniforms.resolution.value.z = a1;
  //       this.material.uniforms.resolution.value.w = a2;
  //   
  //       this.camera.updateProjectionMatrix();
  //       this.regenerateGrid()
  //   
  //   
  //     }
  //   
  //     regenerateGrid() {
  //       this.size = this.settings.grid;
  //   
  //       const width = this.size;
  //       const height = this.size;
  //   
  //       const size = width * height;
  //       const data = new Float32Array(3 * size);
  //       const color = new THREE.Color(0xffffff);
  //   
  //       const r = Math.floor(color.r * 255);
  //       const g = Math.floor(color.g * 255);
  //       const b = Math.floor(color.b * 255);
  //   
  //       for (let i = 0; i < size; i++) {
  //         let r = Math.random() * 255 - 125;
  //         let r1 = Math.random() * 255 - 125;
  //   
  //         const stride = i * 3;
  //   
  //         data[stride] = r;
  //         data[stride + 1] = r1;
  //         data[stride + 2] = r;
  //   
  //       }
  //   
  //       // used the buffer to create a DataTexture
  //   
  //       this.texture = new THREE.DataTexture(data, width, height, THREE.RGBFormat, THREE.FloatType);
  //   
  //       this.texture.magFilter = this.texture.minFilter = THREE.NearestFilter;
  //   
  //       if (this.material) {
  //         this.material.uniforms.uDataTexture.value = this.texture;
  //         this.material.uniforms.uDataTexture.value.needsUpdate = true;
  //       }
  //     }
  //   
  //     addObjects() {
  //   
  //       this.regenerateGrid()
  //       let texture = new THREE.Texture(this.img)
  //       texture.needsUpdate = true;
  //       this.material = new THREE.ShaderMaterial({
  //         extensions: {
  //           derivatives: "#extension GL_OES_standard_derivatives : enable"
  //         },
  //         side: THREE.DoubleSide,
  //         uniforms: {
  //           time: {
  //             value: 0
  //           },
  //           resolution: {
  //             value: new THREE.Vector4()
  //           },
  //           uTexture: {
  //             value: texture
  //           },
  //           uDataTexture: {
  //             value: this.texture
  //           },
  //         },
  //         vertexShader: vertex,
  //         fragmentShader: fragment
  //       });
  //   
  //       this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
  //   
  //       this.plane = new THREE.Mesh(this.geometry, this.material);
  //       this.scene.add(this.plane);
  //     }
  //   
  //   
  //     updateDataTexture() {
  //       let data = this.texture.image.data;
  //       for (let i = 0; i < data.length; i += 3) {
  //         data[i] *= this.settings.relaxation
  //         data[i + 1] *= this.settings.relaxation
  //       }
  //   
  //       let gridMouseX = this.size * this.mouse.x;
  //       let gridMouseY = this.size * (1 - this.mouse.y);
  //       let maxDist = this.size * this.settings.mouse;
  //       let aspect = this.height / this.width
  //   
  //       for (let i = 0; i < this.size; i++) {
  //         for (let j = 0; j < this.size; j++) {
  //   
  //           let distance = ((gridMouseX - i) ** 2) / aspect + (gridMouseY - j) ** 2
  //           let maxDistSq = maxDist ** 2;
  //   
  //           if (distance < maxDistSq) {
  //   
  //             let index = 3 * (i + this.size * j);
  //   
  //             let power = maxDist / Math.sqrt(distance);
  //             power = clamp(power, 0, 10)
  //             // if(distance <this.size/32) power = 1;
  //             // power = 1;
  //   
  //             data[index] += this.settings.strength * 100 * this.mouse.vX * power;
  //             data[index + 1] -= this.settings.strength * 100 * this.mouse.vY * power;
  //   
  //           }
  //         }
  //       }
  //   
  //       this.mouse.vX *= 0.9;
  //       this.mouse.vY *= 0.9;
  //       this.texture.needsUpdate = true
  //     }
  //   
  //   
  //     render() {
  //       if (!this.isPlaying) return;
  //       this.time += 0.05;
  //       this.updateDataTexture()
  //       this.material.uniforms.time.value = this.time;
  //       requestAnimationFrame(this.render.bind(this));
  //       this.renderer.render(this.scene, this.camera);
  //     }
  //   }
  //   
  //   new Sketch({
  //     dom: document.getElementById("canvasContainer")
  //   });
  //   
  // }, []);
  return (
    <section className="dobra" data-dobra="destaque-efeitos-webgl-8" ref={raiz}>
      <main>
      			<div className="frame">
      				<div className="frame__title-wrap">
      					<h1 className="frame__title">{s.titulo}</h1>
      					<p className="frame__tagline">{s.texto}</p>
      				</div>
      				<nav className="frame__links">
      					<a href={s.destino || '#'}>{s.acao}</a>
      					<a href={s.destino2 || '#'}>{s.acao2}</a>
      					<a href={s.destino3 || '#'}>{s.acao3}</a>
      				</nav>
      				<nav className="frame__demos">
      					<a href="index.html" className="frame__demo frame__demo--current">{s.acao4}</a>
      					<a href="index2.html" className="frame__demo">{s.acao5}</a>
      					<a href="index3.html" className="frame__demo">{s.acao6}</a>
      					<a href="index4.html" className="frame__demo">{s.acao7}</a>
      				</nav>
      			</div>
      			<div id="canvasContainer"
      				data-grid="50"
      				data-mouse="0.25"
      				data-strength="0.11"
      			>
      				<img src={s.imagem} alt="" />
      			</div>
      			<div className="content">
      				<h2 className="content__title">{s.titulo2}</h2>
      			</div>
      		</main>
    </section>
  );
}
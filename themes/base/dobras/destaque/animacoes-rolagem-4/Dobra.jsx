"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes-de-rolagem/animacoes-rolagem-4
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
  //   console.clear();
  //   
  //   let nMouse = new THREE.Vector2();
  //   window.addEventListener("mousemove", (event) => {
  //   	event.preventDefault();
  //   	nMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  //   	nMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  //   });
  //   
  //   let mouseOver = false,
  //   	mouseDown = false;
  //   
  //   const vertexShader = document.getElementById("vertexShader").innerHTML;
  //   const fragmentShader = document.getElementById("fragmentShader").innerHTML;
  //   
  //   const planeGeometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32);
  //   const planeMaterial = new THREE.ShaderMaterial({
  //   	vertexShader,
  //   	fragmentShader
  //   });
  //   
  //   const lerp = (a, b, n) => (1 - n) * a + n * b;
  //   
  //   const getMousePos = (e) => {
  //   	let posx = 0;
  //   	let posy = 0;
  //   	if (!e) e = window.event;
  //   	if (e.pageX || e.pageY) {
  //   		posx = e.pageX;
  //   		posy = e.pageY;
  //   	} else if (e.clientX || e.clientY) {
  //   		posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
  //   		posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  //   	}
  //   
  //   	return { x: posx, y: posy };
  //   };
  //   
  //   function preloadImages(selector) {
  //   	return Promise.resolve();
  //   }
  //   
  //   class Mouse {
  //   	constructor() {
  //   		this.position = { x: 0, y: 0 };
  //   		this.isMoving = false;
  //   		this.mouseEvent = { previous: null, current: null };
  //   		this.initEvents();
  //   		this.updateMovingState();
  //   	}
  //   	initEvents() {
  //   		window.addEventListener("mousemove", (ev) => {
  //   			this.mouseEvent.current = ev;
  //   			this.position = getMousePos(ev);
  //   		});
  //   	}
  //   	updateMovingState() {
  //   		setInterval(() => {
  //   			if (this.mouseEvent.previous && this.mouseEvent.current) {
  //   				const moveX = Math.abs(this.mouseEvent.current.screenX - this.mouseEvent.previous.screenX);
  //   				const moveY = Math.abs(this.mouseEvent.current.screenY - this.mouseEvent.previous.screenY);
  //   				const movement = Math.sqrt(moveX * moveX + moveY * moveY);
  //   				this.isMoving = movement !== 0;
  //   			}
  //   			this.mouseEvent.previous = this.mouseEvent.current;
  //   		}, 100);
  //   	}
  //   }
  //   
  //   class Splitter {
  //   	constructor(el) {
  //   		this.DOM = { el };
  //   		this.DOMElComputedStyles = getComputedStyle(this.DOM.el);
  //   		this.init();
  //   	}
  //   	init() {
  //   		const lines = this.split();
  //   		this.clearElement();
  //   		this.insertLines(lines);
  //   	}
  //   	split() {
  //   		const maxwidth = this.DOM.el.getBoundingClientRect().width;
  //   		const textContent = this.DOM.el.innerText;
  //   		const words = textContent.split(" ");
  //   		const lines = [];
  //   		let curline = [];
  //   		const fontWeight = this.DOMElComputedStyles["font-weight"];
  //   		const fontSize = this.DOMElComputedStyles["font-size"];
  //   		const fontFamily = this.DOMElComputedStyles["font-family"];
  //   		const canvasEl = document.createElement("canvas");
  //   		const context = canvasEl.getContext("2d");
  //   		context.font = `${fontWeight} ${fontSize} ${fontFamily}`;
  //   		for (let i = 0; i < words.length; i++) {
  //   			curline.push(words[i]);
  //   			if (context.measureText(curline.join(" ")).width >= maxwidth) {
  //   				const cache = curline.pop();
  //   				lines.push(curline.join(" "));
  //   				curline = [cache];
  //   			}
  //   		}
  //   		lines.push(curline.join(" "));
  //   		return lines;
  //   	}
  //   	insertLines(lines) {
  //   		this.linesEl = document.createElement("span");
  //   		this.linesEl.className = "lines";
  //   		this.linesEl.style.display = "block";
  //   		lines.forEach((line) => {
  //   			const lineEl = document.createElement("span");
  //   			const lineInnerTextEl = document.createElement("span");
  //   			lineEl.className = "line";
  //   			lineInnerTextEl.className = "line--innertext";
  //   			lineEl.style.display = "block";
  //   			lineInnerTextEl.style.display = "block";
  //   			lineInnerTextEl.innerText = line;
  //   			lineEl.appendChild(lineInnerTextEl);
  //   			this.linesEl.appendChild(lineEl);
  //   		});
  //   		this.DOM.el.appendChild(this.linesEl);
  //   	}
  //   	clearElement() {
  //   		this.DOM.el.innerHTML = "";
  //   	}
  //   }
  //   
  //   class GL {
  //   	constructor() {
  //   		this.scene = new THREE.Scene();
  //   		this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  //   		this.camera.position.z = 50;
  //   		this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  //   		this.renderer.setPixelRatio(gsap.utils.clamp(1.5, 1, window.devicePixelRatio));
  //   		this.renderer.setSize(window.innerWidth, window.innerHeight);
  //   		this.renderer.setClearColor(0xf2f2f2, 0);
  //   		this.clock = new THREE.Clock();
  //   		this.init();
  //   	}
  //   	init() {
  //   		this.addToDom();
  //   		this.addEvents();
  //   		this.run();
  //   	}
  //   	addToDom() {
  //   		const canvas = this.renderer.domElement;
  //   		canvas.classList.add("dom-gl");
  //   		document.body.appendChild(canvas);
  //   	}
  //   	addEvents() {
  //   		window.addEventListener("resize", this.resize.bind(this));
  //   		requestAnimationFrame(() => this.run());
  //   	}
  //   	resize() {
  //   		this.renderer.setSize(window.innerWidth, window.innerHeight);
  //   		this.camera.aspect = window.innerWidth / window.innerHeight;
  //   		this.camera.updateProjectionMatrix();
  //   		for (let i = 0; i < this.scene.children.length; i++) {
  //   			const plane = this.scene.children[i];
  //   			if (plane.resize) plane.resize();
  //   		}
  //   	}
  //   	run() {
  //   		let elapsed = this.clock.getElapsedTime();
  //   		for (let i = 0; i < this.scene.children.length; i++) {
  //   			const plane = this.scene.children[i];
  //   			if (plane.updateTime) plane.updateTime(elapsed);
  //   		}
  //   		this.render();
  //   	}
  //   	render() {
  //   		this.renderer.render(this.scene, this.camera);
  //   		requestAnimationFrame(() => this.run());
  //   	}
  //   }
  //   
  //   const Gl = new GL();
  //   
  //   class GlObject extends THREE.Object3D {
  //   	init(el) {
  //   		this.el = el;
  //   		this.resize();
  //   	}
  //   	resize() {
  //   		this.setBounds();
  //   	}
  //   	setBounds() {
  //   		this.rect = this.el.getBoundingClientRect();
  //   		this.bounds = {
  //   			left: this.rect.left,
  //   			top: this.rect.top + window.scrollY,
  //   			width: this.rect.width,
  //   			height: this.rect.height
  //   		};
  //   		this.updateSize();
  //   		this.updatePosition();
  //   	}
  //   	updateSize() {
  //   		this.camUnit = this.calculateUnitSize(Gl.camera.position.z - this.position.z);
  //   		const x = this.bounds.width / window.innerWidth;
  //   		const y = this.bounds.height / window.innerHeight;
  //   		if (!x || !y) return;
  //   		this.scale.x = this.camUnit.width * x;
  //   		this.scale.y = this.camUnit.height * y;
  //   	}
  //   	calculateUnitSize(distance = this.position.z) {
  //   		const vFov = (Gl.camera.fov * Math.PI) / 180;
  //   		const height = 2 * Math.tan(vFov / 2) * distance;
  //   		const width = height * Gl.camera.aspect;
  //   		return { width, height };
  //   	}
  //   	updateY(y = 0) {
  //   		const { top, height } = this.bounds;
  //   		this.position.y = this.camUnit.height / 2 - this.scale.y / 2;
  //   		this.position.y -= ((top - y) / window.innerHeight) * this.camUnit.height;
  //   		this.progress = gsap.utils.clamp(0, 1, 1 - (-y + top + height) / (window.innerHeight + height));
  //   	}
  //   	updateX(x = 0) {
  //   		const { left } = this.bounds;
  //   		this.position.x = -(this.camUnit.width / 2) + this.scale.x / 2;
  //   		this.position.x += ((left + x) / window.innerWidth) * this.camUnit.width;
  //   	}
  //   	updatePosition(y) {
  //   		this.updateY(y);
  //   		this.updateX(0);
  //   	}
  //   }
  //   
  //   class GlSlider extends GlObject {
  //   	init(el) {
  //   		super.init(el);
  //   		this.geometry = planeGeometry;
  //   		this.material = planeMaterial.clone();
  //   		this.material.uniforms = {
  //   			uCurrTex: { value: 0 },
  //   			uNextTex: { value: 0 },
  //   			uTime: { value: 0 },
  //   			uProg: { value: 0 },
  //   			uAmplitude: { value: 0 },
  //   			uProgDirection: { value: 0 },
  //   			uMeshSize: { value: [this.rect.width, this.rect.height] },
  //   			uImageSize: { value: [0, 0] },
  //   			uMousePos: { value: [0, 0] },
  //   			uMouseOverAmp: { value: 0 },
  //   			uAnimating: { value: false },
  //   			uRadius: { value: 0.08 },
  //   			uTranslating: { value: true }
  //   		};
  //   		this.textures = [];
  //   		this.raycaster = new THREE.Raycaster();
  //   		this.mouse = new THREE.Vector2();
  //   		this.mouseLerpAmount = 0.1;
  //   		this.state = { animating: false, current: 0 };
  //   		this.mesh = new THREE.Mesh(this.geometry, this.material);
  //   		this.add(this.mesh);
  //   		Gl.scene.add(this);
  //   		this.loadTextures();
  //   		this.addEvents();
  //   	}
  //   	loadTextures() {
  //   		const manager = new THREE.LoadingManager(() => {
  //   			this.material.uniforms.uCurrTex.value = this.textures[0];
  //   		});
  //   		const loader = new THREE.TextureLoader(manager);
  //   		const imgs = [...this.el.querySelectorAll("img")];
  //   		imgs.forEach((img) => {
  //   			loader.load(img.src, (texture) => {
  //   				texture.minFilter = THREE.LinearFilter;
  //   				texture.generateMipmaps = false;
  //   				this.material.uniforms.uImageSize.value = [img.naturalWidth, img.naturalHeight];
  //   				this.textures.push(texture);
  //   			});
  //   		});
  //   	}
  //   	switchTextures(index, direction) {
  //   		if (this.state.animating) return;
  //   		gsap.timeline({
  //   			onStart: () => {
  //   				this.state.animating = true;
  //   				this.material.uniforms.uAnimating.value = true;
  //   				this.material.uniforms.uProgDirection.value = direction;
  //   				this.material.uniforms.uNextTex.value = this.textures[index];
  //   			},
  //   			onComplete: () => {
  //   				this.state.animating = false;
  //   				this.material.uniforms.uAnimating.value = false;
  //   				this.material.uniforms.uCurrTex.value = this.textures[index];
  //   			}
  //   		})
  //   		.fromTo(this.material.uniforms.uProg, { value: 0 }, { value: 1, duration: 1, ease: "power2.out" }, 0)
  //   		.fromTo(this.material.uniforms.uAmplitude, { value: 0 }, { duration: 0.8, value: 1, repeat: 1, yoyo: true, yoyoEase: "sine.out", ease: "expo.out" }, 0);
  //   	}
  //   	updateTime(time) {
  //   		this.material.uniforms.uTime.value = time;
  //   		this.run();
  //   	}
  //   	addEvents() {
  //   		this.el.addEventListener("mouseenter", () => (mouseOver = true));
  //   		this.el.addEventListener("mouseleave", () => (mouseOver = false));
  //   		this.el.addEventListener("mousedown", () => (mouseDown = true));
  //   		this.el.addEventListener("mouseup", () => (mouseDown = false));
  //   	}
  //   	scaleImage(direction) {
  //   		const imageTl = gsap.timeline({
  //   			defaults: {
  //   				duration: 1.2,
  //   				ease: "elastic.out(1, 1)",
  //   				onUpdate: () => this.resize()
  //   			}
  //   		});
  //   		if (direction === "up") {
  //   			imageTl.to(this.el, { scale: window.innerHeight / 600 });
  //   		} else {
  //   			imageTl.to(this.el, { scale: 1 });
  //   		}
  //   	}
  //   	run() {
  //   		let m = mouseOver ? nMouse : new THREE.Vector2(0, 0);
  //   		this.mouse.lerp(m, this.mouseLerpAmount);
  //   		this.raycaster.setFromCamera(this.mouse, Gl.camera);
  //   		let intersects = this.raycaster.intersectObject(this.mesh);
  //   		if (intersects.length > 0) {
  //   			this.material.uniforms.uMousePos.value = [intersects[0].uv.x, intersects[0].uv.y];
  //   		}
  //   		if (mouseOver) {
  //   			this.material.uniforms.uMouseOverAmp.value = THREE.MathUtils.lerp(this.material.uniforms.uMouseOverAmp.value, 1, 0.08);
  //   			this.mouseLerpAmount = THREE.MathUtils.lerp(this.mouseLerpAmount, 0.1, 0.5);
  //   		} else {
  //   			this.material.uniforms.uMouseOverAmp.value = THREE.MathUtils.lerp(this.material.uniforms.uMouseOverAmp.value, 0, 0.08);
  //   			this.mouseLerpAmount = THREE.MathUtils.lerp(this.mouseLerpAmount, 0, 0.5);
  //   		}
  //   		if (mouseOver && mouseDown) {
  //   			this.material.uniforms.uRadius.value = THREE.MathUtils.lerp(this.material.uniforms.uRadius.value, 1, 0.01);
  //   		} else if (mouseOver && !mouseDown) {
  //   			this.material.uniforms.uRadius.value = THREE.MathUtils.lerp(this.material.uniforms.uRadius.value, 0.08, 0.08);
  //   		}
  //   		if (this.state.animating) {
  //   			this.material.uniforms.uMouseOverAmp.value = THREE.MathUtils.lerp(this.material.uniforms.uMouseOverAmp.value, 0, 0.1);
  //   		}
  //   	}
  //   }
  //   
  //   let mouse = new Mouse();
  //   
  //   class Cursor {
  //   	constructor(el) {
  //   		this.DOM = { el };
  //   		this.DOM.el.style.opacity = 0;
  //   		this.bounds = this.DOM.el.getBoundingClientRect();
  //   		this.renderedStyles = {
  //   			tx: { previous: 0, current: 0, amt: 0.2 },
  //   			ty: { previous: 0, current: 0, amt: 0.2 },
  //   			scale: { previous: 0, current: 1, amt: 0.2 },
  //   			opacity: { previous: 0, current: 1, amt: 0.15 }
  //   		};
  //   	}
  //   	init() {
  //   		this.onMouseMoveEv = () => {
  //   			this.renderedStyles.tx.previous = this.renderedStyles.tx.current = mouse.position.x - this.bounds.width / 2;
  //   			this.renderedStyles.ty.previous = this.renderedStyles.ty.current = mouse.position.y - this.bounds.height / 2;
  //   			requestAnimationFrame(() => this.render());
  //   			window.removeEventListener("mousemove", this.onMouseMoveEv);
  //   		};
  //   		window.addEventListener("mousemove", this.onMouseMoveEv);
  //   	}
  //   	setTranslateLerpAmount(amount) {
  //   		this.renderedStyles.tx.amt = amount;
  //   		this.renderedStyles.ty.amt = amount;
  //   		return this;
  //   	}
  //   	scale(amount = 1) {
  //   		this.renderedStyles.scale.current = amount;
  //   		return this;
  //   	}
  //   	opaque(amount = 1) {
  //   		this.renderedStyles.opacity.current = amount;
  //   		return this;
  //   	}
  //   	render() {
  //   		this.renderedStyles.tx.current = mouse.position.x - this.bounds.width / 2;
  //   		this.renderedStyles.ty.current = mouse.position.y - this.bounds.height / 2;
  //   		for (const key in this.renderedStyles) {
  //   			this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
  //   		}
  //   		gsap.set(this.DOM.el, {
  //   			x: this.renderedStyles.tx.previous,
  //   			y: this.renderedStyles.ty.previous,
  //   			scale: this.renderedStyles.scale.previous,
  //   			opacity: this.renderedStyles.opacity.previous
  //   		});
  //   		requestAnimationFrame(() => this.render());
  //   	}
  //   }
  //   
  //   class Cursors {
  //   	constructor() {
  //   		this.DOM = {
  //   			cursorEls: {
  //   				large: document.querySelector(".cursor--large"),
  //   				small: document.querySelector(".cursor--small"),
  //   				close: document.querySelector(".cursor--close")
  //   			}
  //   		};
  //   		this.cursors = {
  //   			large: new Cursor(this.DOM.cursorEls.large),
  //   			small: new Cursor(this.DOM.cursorEls.small),
  //   			close: new Cursor(this.DOM.cursorEls.close)
  //   		};
  //   		this.cursors.small.setTranslateLerpAmount(0.85);
  //   		this.cursors.close.opaque(0).scale(0.5).setTranslateLerpAmount(0.5);
  //   	}
  //   	init() {
  //   		Object.values(this.cursors).forEach((cursor) => cursor.init());
  //   		this.initEvents();
  //   	}
  //   	initEvents() {
  //   		this.initEventsOnElements();
  //   		this.initEventsOnImage();
  //   	}
  //   	initEventsOnElements() {
  //   		const onMouseEnter = () => {
  //   			this.cursors.large.scale(2).opaque(0);
  //   			this.cursors.small.scale(5);
  //   		};
  //   		const onMouseLeave = () => {
  //   			this.cursors.large.scale(1).opaque(1);
  //   			this.cursors.small.scale(1);
  //   		};
  //   		const onMouseDown = () => this.cursors.small.scale(4);
  //   		const onMouseUp = () => this.cursors.small.scale(5);
  //   		[...document.querySelectorAll("a"), ...document.querySelectorAll("button")].forEach((element) => {
  //   			element.addEventListener("mouseenter", onMouseEnter);
  //   			element.addEventListener("mouseleave", onMouseLeave);
  //   			element.addEventListener("mousedown", onMouseDown);
  //   			element.addEventListener("mouseup", onMouseUp);
  //   		});
  //   	}
  //   	initEventsOnImage() {
  //   		const imageWrapper = document.querySelector(".slider__image--wrapper");
  //   		const onMouseDown = () => {
  //   			this.cursors.large.scale(2).opaque(0);
  //   			this.cursors.small.scale(5);
  //   		};
  //   		const onMouseUp = () => {
  //   			this.cursors.large.scale(1).opaque(1);
  //   			this.cursors.small.scale(1);
  //   		};
  //   		imageWrapper.addEventListener("mousedown", onMouseDown);
  //   		imageWrapper.addEventListener("mouseup", onMouseUp);
  //   	}
  //   	initEventsOnSlider(slider) {
  //   		const imageWrapper = document.querySelector(".slider__image--wrapper");
  //   		const onMouseEnter = () => {
  //   			this.cursors.large.scale(2).opaque(0);
  //   			this.cursors.small.scale(5).setTranslateLerpAmount(0.25);
  //   			this.cursors.close.opaque(1).scale(1);
  //   		};
  //   		const onMouseLeave = () => {
  //   			this.cursors.large.scale(1).opaque(1);
  //   			this.cursors.small.scale(1).setTranslateLerpAmount(0.85);
  //   			this.cursors.close.opaque(0).scale(0.5);
  //   		};
  //   		slider.onFullscreen(() => {
  //   			onMouseEnter();
  //   			imageWrapper.addEventListener("mouseenter", onMouseEnter);
  //   			imageWrapper.addEventListener("mouseleave", onMouseLeave);
  //   		});
  //   		slider.offFullscreen(() => {
  //   			onMouseLeave();
  //   			imageWrapper.removeEventListener("mouseenter", onMouseEnter);
  //   			imageWrapper.removeEventListener("mouseleave", onMouseLeave);
  //   		});
  //   	}
  //   }
  //   
  //   class Slideinfo {
  //   	constructor(el) {
  //   		this.DOM = { el };
  //   		this.DOM.text = {
  //   			index: this.DOM.el.querySelectorAll(".slide__index .char"),
  //   			title: this.DOM.el.querySelectorAll(".slide__text--title .char"),
  //   			description: this.DOM.el.querySelector(".slide__text--description")
  //   		};
  //   		const split = new Splitter(this.DOM.text.description);
  //   		this.DOM.text.descriptionLines = [...split.linesEl.children].map((c) => [...c.children][0]);
  //   	}
  //   }
  //   
  //   let clicked = false;
  //   
  //   class Slideshow {
  //   	constructor(el) {
  //   		this.DOM = { el };
  //   		this.DOM.imageWrapperEl = this.DOM.el.querySelector(".slider__image--wrapper");
  //   		this.DOM.navigation = {
  //   			prev: this.DOM.el.querySelector(".slider__nav--prev"),
  //   			next: this.DOM.el.querySelector(".slider__nav--next")
  //   		};
  //   		this.slideInfos = [];
  //   		[...this.DOM.el.querySelectorAll(".slider__silde-info")].forEach((slide) => this.slideInfos.push(new Slideinfo(slide)));
  //   		this.current = 0;
  //   		this.slidesTotal = this.slideInfos.length;
  //   		this.GlSlider = new GlSlider();
  //   		this.GlSlider.init(document.querySelector(".slider__image--wrapper"));
  //   		this.initEvents();
  //   	}
  //   	init() {
  //   		const currentSlideInfo = this.slideInfos[this.current];
  //   		gsap.set([currentSlideInfo.DOM.text.index, currentSlideInfo.DOM.text.title], {
  //   			yPercent: 120,
  //   			rotation: -3,
  //   			stagger: -0.02
  //   		});
  //   		gsap.set(currentSlideInfo.DOM.text.descriptionLines, { yPercent: 100, stagger: 0.05 });
  //   		gsap.set(this.DOM.navigation.prev, { x: 100, opacity: 0 });
  //   		gsap.set(this.DOM.navigation.next, { x: -100, opacity: 0 });
  //   		gsap.set(this.DOM.imageWrapperEl, {
  //   			y: "150%",
  //   			onUpdate: () => this.GlSlider.setBounds()
  //   		});
  //   	}
  //   	initAnimation() {
  //   		const currentSlideInfo = this.slideInfos[this.current];
  //   		gsap.timeline({ defaults: { duration: 1, ease: "power4.inOut" }, delay: 0.25 })
  //   			.addLabel("start", 0)
  //   			.addLabel("upcoming", 1.25)
  //   			.to(this.DOM.imageWrapperEl, {
  //   				duration: 1.25,
  //   				y: 0,
  //   				ease: "sine.out",
  //   				onUpdate: () => this.GlSlider.setBounds()
  //   			}, "start")
  //   			.to(this.GlSlider.material.uniforms.uAmplitude, {
  //   				duration: 1,
  //   				value: 1,
  //   				repeat: 1,
  //   				yoyo: true,
  //   				yoyoEase: "sine.out",
  //   				ease: "expo.out",
  //   				onComplete: () => { this.GlSlider.material.uniforms.uTranslating.value = false; }
  //   			}, "start")
  //   			.to([currentSlideInfo.DOM.text.index, currentSlideInfo.DOM.text.title], {
  //   				yPercent: 0,
  //   				rotation: 0,
  //   				stagger: -0.02
  //   			}, "upcoming")
  //   			.to(currentSlideInfo.DOM.text.descriptionLines, { yPercent: 0, stagger: 0.05 }, "upcoming")
  //   			.to([this.DOM.navigation.prev, this.DOM.navigation.next], { x: 0, opacity: 1 }, "upcoming");
  //   	}
  //   	initEvents() {
  //   		this.DOM.navigation.prev.addEventListener("click", () => this.navigate("prev"));
  //   		this.DOM.navigation.next.addEventListener("click", () => this.navigate("next"));
  //   		this.DOM.imageWrapperEl.addEventListener("click", () => this.onImageClick());
  //   	}
  //   	onImageClick() {
  //   		if (this.isAnimating) return;
  //   		clicked = !clicked;
  //   		const currentSlideInfo = this.slideInfos[this.current];
  //   		gsap.timeline({
  //   			defaults: { duration: 1, ease: "power4.inOut" },
  //   			onStart: () => {
  //   				this.isAnimating = true;
  //   				if (clicked) {
  //   					this.GlSlider.scaleImage("up");
  //   					if (this.onFullscreenCallbackFn) this.onFullscreenCallbackFn();
  //   				} else {
  //   					this.GlSlider.scaleImage("down");
  //   					if (this.offFullscreenCallbackFn) this.offFullscreenCallbackFn();
  //   				}
  //   			},
  //   			onComplete: () => { this.isAnimating = false; }
  //   		})
  //   		.addLabel("start", clicked ? 0 : 0.2)
  //   		.fromTo([currentSlideInfo.DOM.text.index, currentSlideInfo.DOM.text.title], {
  //   			yPercent: clicked ? 0 : 120,
  //   			rotation: clicked ? 0 : -3
  //   		}, {
  //   			yPercent: clicked ? -120 : 0,
  //   			rotation: clicked ? 3 : 0,
  //   			stagger: clicked ? 0.02 : -0.02
  //   		}, "start")
  //   		.fromTo(currentSlideInfo.DOM.text.descriptionLines, {
  //   			yPercent: clicked ? 0 : 100
  //   		}, {
  //   			yPercent: clicked ? -100 : 0,
  //   			stagger: 0.05
  //   		}, "start")
  //   		.fromTo(this.DOM.navigation.prev, {
  //   			x: clicked ? 0 : 100,
  //   			opacity: clicked ? 1 : 0
  //   		}, {
  //   			x: clicked ? -100 : 0,
  //   			opacity: clicked ? 0 : 1
  //   		}, "start")
  //   		.fromTo(this.DOM.navigation.next, {
  //   			x: clicked ? 0 : -100,
  //   			opacity: clicked ? 1 : 0
  //   		}, {
  //   			x: clicked ? 100 : 0,
  //   			opacity: clicked ? 0 : 1
  //   		}, "start")
  //   		.set([this.DOM.navigation.prev, this.DOM.navigation.next], {
  //   			pointerEvents: clicked ? "none" : "auto"
  //   		});
  //   	}
  //   	onSlideChange(callback) { if (typeof callback === "function") this.onSlideChangeCallbackFn = callback; }
  //   	onFullscreen(callback) { if (typeof callback === "function") this.onFullscreenCallbackFn = callback; }
  //   	offFullscreen(callback) { if (typeof callback === "function") this.offFullscreenCallbackFn = callback; }
  //   	navigate(direction) {
  //   		if (this.GlSlider.state.animating) return;
  //   		const incrementSlideIndex = (val) => {
  //   			if (val > 0 && this.current + val < this.slidesTotal) this.current += val;
  //   			else if (val > 0) this.current = 0;
  //   			else if (val < 0 && this.current + val < 0) this.current = this.slidesTotal - 1;
  //   			else this.current += val;
  //   		};
  //   		const increment = direction === "prev" ? -1 : 1;
  //   		const currentSlideInfo = this.slideInfos[this.current];
  //   		incrementSlideIndex(increment);
  //   		const nextSlideInfo = this.slideInfos[this.current];
  //   		gsap.timeline({
  //   			defaults: { duration: 1, ease: "power4.inOut" },
  //   			onStart: () => {
  //   				this.GlSlider.switchTextures(this.current, increment);
  //   				if (this.onSlideChangeCallbackFn) this.onSlideChangeCallbackFn(this.current);
  //   				this.isAnimating = true;
  //   			},
  //   			onComplete: () => {
  //   				currentSlideInfo.DOM.el.classList.remove("slide--current");
  //   				this.isAnimating = false;
  //   			}
  //   		})
  //   		.addLabel("start", 0)
  //   		.to([currentSlideInfo.DOM.text.index, currentSlideInfo.DOM.text.title], {
  //   			yPercent: direction === "next" ? -120 : 120,
  //   			rotation: direction === "next" ? 3 : -3,
  //   			stagger: direction === "next" ? 0.02 : -0.02
  //   		}, "start")
  //   		.to(currentSlideInfo.DOM.text.descriptionLines, {
  //   			yPercent: direction === "next" ? -100 : 100,
  //   			stagger: direction === "next" ? 0.05 : -0.05
  //   		}, "start")
  //   		.addLabel("upcoming", 0.4)
  //   		.add(() => {
  //   			gsap.set([nextSlideInfo.DOM.text.index, nextSlideInfo.DOM.text.title], {
  //   				yPercent: direction === "next" ? 120 : -120,
  //   				rotation: direction === "next" ? -3 : 3
  //   			});
  //   			gsap.set(nextSlideInfo.DOM.text.descriptionLines, {
  //   				yPercent: direction === "next" ? 100 : -100
  //   			});
  //   			nextSlideInfo.DOM.el.classList.add("slide--current");
  //   		}, "upcoming")
  //   		.to([nextSlideInfo.DOM.text.index, nextSlideInfo.DOM.text.title], {
  //   			yPercent: 0,
  //   			rotation: 0,
  //   			stagger: direction === "next" ? 0.02 : -0.02
  //   		}, "upcoming")
  //   		.to(nextSlideInfo.DOM.text.descriptionLines, {
  //   			yPercent: 0,
  //   			stagger: direction === "next" ? 0.05 : -0.05
  //   		}, "upcoming");
  //   	}
  //   }
  //   
  //   const cursors = new Cursors();
  //   if (window.Splitting) Splitting();
  //   
  //   const bgColors = ["#1f1322", "#27172e", "#454d53", "#2d1f2d"];
  //   
  //   preloadImages(document.querySelectorAll(".slider__image")).then(() => {
  //   	const slider = new Slideshow(document.querySelector(".slider"));
  //   	slider.init();
  //   
  //   	const loadedAnimationTl = gsap.timeline({
  //   		onStart: () => gsap.set(".text__row .text", { autoAlpha: 1 })
  //   	})
  //   	.to(".loading__text", { duration: 1, opacity: 0 })
  //   	.from(".text__row .text", {
  //   		duration: 3,
  //   		y: (i) => -100 + i * -25 + "%",
  //   		ease: "expo.out",
  //   		stagger: 0.1
  //   	})
  //   	.to(".text__row .text", {
  //   		duration: 3,
  //   		y: (i) => 100 + i * 25 + "%",
  //   		ease: "expo.in",
  //   		stagger: 0.25
  //   	})
  //   	.to(".bg__transition--slide", {
  //   		duration: 1,
  //   		scaleY: 0,
  //   		transformOrigin: "top center",
  //   		ease: "expo.out",
  //   		onComplete: () => {
  //   			slider.initAnimation();
  //   			gsap.set(".loading__wrapper", { pointerEvents: "none", autoAlpha: 0 });
  //   		}
  //   	});
  //   
  //   	const pageAnimationTl = gsap.timeline({
  //   		delay: loadedAnimationTl.duration(),
  //   		onComplete: () => {
  //   			cursors.init();
  //   			cursors.initEventsOnSlider(slider);
  //   		}
  //   	})
  //   	.from([".frame__logo", ".frame__button", ".frame__artist > span", ".frame__credits > span"], {
  //   		duration: 1,
  //   		opacity: 0,
  //   		yPercent: 100,
  //   		stagger: 0.1,
  //   		ease: "expo.out"
  //   	});
  //   
  //   	gsap.timeline()
  //   	.add(loadedAnimationTl, 0)
  //   	.add(pageAnimationTl, pageAnimationTl.duration() - 0.5);
  //   
  //   	slider.onSlideChange((currentSlideIndex) => {
  //   		gsap.to("body", { duration: 1.2, backgroundColor: bgColors[currentSlideIndex] });
  //   	});
  //   });
  //   
  //   
  //   	precision mediump float;
  //   
  //   	varying vec2 vUv;
  //   	varying float vWave;
  //   
  //   	uniform float uTime;
  //   	uniform float uAmplitude;
  //   	uniform float uProgDirection;
  //   	uniform float uMouseOverAmp;
  //   	uniform float uRadius;
  //   
  //   	uniform vec2 uMeshSize;
  //   	uniform vec2 uMousePos;
  //   
  //   	uniform bool uAnimating;
  //   	uniform bool uTranslating;
  //   
  //   	float mapVal(in float n,in float start1,in float stop1,in float start2,in float stop2){
  //   			return((n-start1)/(stop1-start1))*(stop2-start2)+start2;
  //   	}
  //   
  //   	void main(){
  //   			vec3 pos=position;
  //   			vUv=uv;
  //   
  //   			vec2 center=vUv-uMousePos;
  //   			center.x*=uMeshSize.x/uMeshSize.y;
  //   			float dist=length(center);
  //   
  //   			float radius=uRadius;
  //   
  //   			float mask=smoothstep(radius,radius*5.,dist);
  //   			float d=mapVal(mask,-1.,1.,-1.,0.);
  //   
  //   			if(uAnimating){
  //   					pos.z=sin(pos.x*5.+uTime*10.*uProgDirection)*uAmplitude;
  //   					pos.z*=2.5;
  //   			}else{
  //   					pos.z=d*uMouseOverAmp;
  //   					pos.z*=15.;
  //   			}
  //   
  //   			if(uTranslating){
  //   					pos.z=sin(pos.y*6.+uTime*10.)*uAmplitude;
  //   					pos.z*=3.5;
  //   			}
  //   
  //   			vWave=pos.z;
  //   
  //   			gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);
  //   	}
  //   
  //   
  //   	precision mediump float;
  //   
  //   	varying vec2 vUv;
  //   	varying float vWave;
  //   
  //   	uniform float uTime;
  //   	uniform float uProg;
  //   	uniform float uProgDirection;
  //   
  //   	uniform sampler2D uCurrTex;
  //   	uniform sampler2D uNextTex;
  //   
  //   	uniform vec2 uMeshSize;
  //   	uniform vec2 uImageSize;
  //   
  //   	vec2 backgroundCoverUv(vec2 uv,vec2 canvasSize,vec2 textureSize){
  //   			vec2 ratio=vec2(
  //   					min((canvasSize.x/canvasSize.y)/(textureSize.x/textureSize.y),1.),
  //   					min((canvasSize.y/canvasSize.x)/(textureSize.y/canvasSize.x),1.)
  //   			);
  //   
  //   			vec2 uvWithRatio=uv*ratio;
  //   
  //   			return vec2(
  //   					uvWithRatio.x+(1.-ratio.x)*.5,
  //   					uvWithRatio.y+(1.-ratio.y)*.5
  //   			);
  //   	}
  //   
  //   	void main(){
  //   			vec2 texUv=backgroundCoverUv(vUv,uMeshSize,uImageSize);
  //   
  //   			float x=uProg;
  //   			float y;
  //   			if(uProgDirection==1.)y=(x*2.+(vUv.x-1.));
  //   			else y=((x*2.)-vUv.x);
  //   			x=smoothstep(0.,1.,y);
  //   
  //   			float w=vWave;
  //   
  //   			float r1=texture2D(uCurrTex,texUv+w*.04).r;
  //   			float g1=texture2D(uCurrTex,texUv+w*.01).g;
  //   			float b1=texture2D(uCurrTex,texUv+w*-.03).b;
  //   			vec3 tex1=vec3(r1,g1,b1);
  //   
  //   			float r2=texture2D(uNextTex,texUv+w*.04).r;
  //   			float g2=texture2D(uNextTex,texUv+w*.01).g;
  //   			float b2=texture2D(uNextTex,texUv+w*-.03).b;
  //   			vec3 tex2=vec3(r2,g2,b2);
  //   
  //   			float scaleUp=(.4+.6*(1.-uProg));
  //   			float scaleDown=(.6+.4*uProg);
  //   
  //   			vec4 f1=mix(
  //   					texture2D(uCurrTex,texUv*(1.-x)*scaleUp+vec2(.15)*uProg),
  //   					texture2D(uNextTex,texUv*x*scaleDown),
  //   			x);
  //   
  //   			vec3 f2=mix(tex1,tex2,x);
  //   
  //   			vec4 final=mix(f1,vec4(f2,1.),.12);
  //   
  //   			gl_FragColor=final;			
  //   	}
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-animacoes-rolagem-4" ref={raiz}>
      <main>
      	<div className="frame">
      		<h3 className="frame__logo">{s.subtitulo}</h3>
      		<button className="frame__button" onClick={s.onClick}>{s.acao}</button>
      		<p className="frame__artist">
      			<span>Artist — <a href={s.destino || '#'} target="_blank">{s.acao2}</a></span>
      		</p>
      		<p className="frame__credits">
      			<span>Wave effect inspired from — <a href={s.destino2 || '#'} target="_blank">{s.acao3}</a></span>
      		</p>
      	</div>
      
      	<div className="slider">
      		<div className="slider__image--wrapper">
      			<img className="slider__image slider__image--1" src={s.imagem} alt="image 01" />
      			<img className="slider__image slider__image--2" src={s.imagem2} alt="image 02" />
      			<img className="slider__image slider__image--3" src={s.imagem3} alt="image 03" />
      			<img className="slider__image slider__image--4" src={s.imagem4} alt="image 04" />
      		</div>
      		<div className="slider__slide-info--wrapper">
      			<div className="slider__silde-info slide--current">
      				<h2 className="slide__index" data-splitting>01</h2>
      				<div className="slide__text--wrapper">
      					<h2 className="slide__text slide__text--title" data-splitting>{s.titulo}</h2>
      					<p className="slide__text slide__text--description">{s.texto}</p>
      				</div>
      			</div>
      			<div className="slider__silde-info">
      				<h2 className="slide__index" data-splitting>02</h2>
      				<div className="slide__text--wrapper">
      					<h2 className="slide__text slide__text--title" data-splitting>{s.titulo2}</h2>
      					<p className="slide__text slide__text--description">{s.texto2}</p>
      				</div>
      			</div>
      			<div className="slider__silde-info">
      				<h2 className="slide__index" data-splitting>03</h2>
      				<div className="slide__text--wrapper">
      					<h2 className="slide__text slide__text--title" data-splitting>{s.titulo3}</h2>
      					<p className="slide__text slide__text--description">{s.texto3}</p>
      				</div>
      			</div>
      			<div className="slider__silde-info">
      				<h2 className="slide__index" data-splitting>04</h2>
      				<div className="slide__text--wrapper">
      					<h2 className="slide__text slide__text--title" data-splitting>{s.titulo4}</h2>
      					<p className="slide__text slide__text--description">{s.texto4}</p>
      				</div>
      			</div>
      		</div>
      		<nav className="slider__nav--wrapper">
      			<button className="slider__nav slider__nav--prev" onClick={s.onClick}>
      				<svg>
      					<path d="M 47.5547,8.05465 H 4.94603 L 10.0165,3.00878 C 10.5822,2.44568 10.5844,1.53058 10.0213,0.964816 9.45823,0.398976 8.54305,0.396881 7.97729,0.959902 L 0.425238,8.47552 c -5.06e-4,4.4e-4 -8.67e-4,9.4e-4 -0.0013,0.00138 -0.564323,0.56309 -0.566129,1.48115 -1.45e-4,2.0461 5.06e-4,5e-4 8.67e-4,10e-4 0.001301,0.0014 L 7.97714,18.04 c 0.5657,0.563 1.48087,0.561 2.04406,-0.0049 0.5631,-0.5658 0.5609,-1.4809 -0.0049,-2.044 L 4.94603,10.9453 H 47.5547 C 48.353,10.9453 49,10.2982 49,9.49996 49,8.70172 48.353,8.05465 47.5547,8.05465 Z" fill="white" />
      				</svg>
      			</button>
      			<button className="slider__nav slider__nav--next" onClick={s.onClick}>
      				<svg>
      					<path d="M 1.44529,10.9454 H 44.054 l -5.0705,5.0458 c -0.5657,0.5631 -0.5679,1.4782 -0.0048,2.044 0.5631,0.5658 1.4782,0.5679 2.044,0.0049 l 7.5521,-7.5156 c 5e-4,-5e-4 8e-4,-10e-4 0.0013,-0.0014 0.5643,-0.56309 0.5661,-1.48115 1e-4,-2.04613 -5e-4,-4.3e-4 -9e-4,-9.3e-4 -0.0013,-0.00137 L 41.0229,0.959983 C 40.4572,0.397033 39.542,0.398984 38.9788,0.964896 38.4157,1.53066 38.4179,2.44576 38.9837,3.00886 L 44.054,8.05473 H 1.44528 C 0.64704,8.05473 -2.75561e-5,8.7018 -2.74863e-5,9.50004 -2.74165e-5,10.2983 0.647041,10.9454 1.44529,10.9454 Z" fill="white" />
      				</svg>
      			</button>
      		</nav>
      	</div>
      </main>
      
      <svg className="cursor cursor--large" width="60" height="60" viewBox="0 0 60 60">
      	<circle className="cursor__inner" cx="30" cy="30" r="20" />
      </svg>
      <svg className="cursor cursor--small" width="60" height="60" viewBox="0 0 60 60">
      	<circle className="cursor__inner" cx="30" cy="30" r="5" />
      </svg>
      <svg className="cursor cursor--close" width="40" height="40" viewBox="0 0 512 512">
      	<line x1="368" y1="368" x2="144" y2="144" />
      	<line x1="368" y1="144" x2="144" y2="368" />
      </svg>
      
      <div className="loading__wrapper">
      	<h4 className="loading__text">
      		<span className="loading__text--inner">{s.rotulo}</span>
      	</h4>
      	<h1 className="text__wrapper">
      		<span className="text__row">
      			<span className="text">{s.rotulo2}</span>
      		</span>
      		<span className="text__row text__row--sibling" aria-hidden="true">
      			<span className="text">{s.rotulo3}</span>
      		</span>
      		<span className="text__row text__row--sibling" aria-hidden="true">
      			<span className="text">{s.rotulo4}</span>
      		</span>
      		<span className="text__row text__row--sibling" aria-hidden="true">
      			<span className="text">{s.rotulo5}</span>
      		</span>
      		<span className="text__row text__row--sibling" aria-hidden="true">
      			<span className="text">{s.rotulo6}</span>
      		</span>
      		<span className="text__row text__row--sibling" aria-hidden="true">
      			<span className="text">{s.rotulo7}</span>
      		</span>
      	</h1>
      	<div className="bg__transition--slide"></div>
      </div>
    </section>
  );
}
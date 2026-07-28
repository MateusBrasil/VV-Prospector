"use client";
/* DOBRA gerada pela esteira a partir de bank/_componentes/animacoes-de-rolagem/animacao-rolagem-17
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
  //   gsap.registerPlugin(SplitText, CustomEase)
  //   
  //   CustomEase.create(
  //   	'hop',
  //   	'M0,0 C0.071,0.505 0.192,0.726 0.318,0.852 0.45,0.984 0.504,1 1,1',
  //   )
  //   
  //   const carouselSlides = [
  //   	{
  //   		title: 'Feast of Color',
  //   		image: './public/carousel/slide-img-1.jpg',
  //   	},
  //   	{
  //   		title: 'The Matador',
  //   		image: './public/carousel/slide-img-2.jpg',
  //   	},
  //   	{
  //   		title: 'Final Plea',
  //   		image: './public/carousel/slide-img-3.jpg',
  //   	},
  //   	{
  //   		title: 'Old Philosopher',
  //   		image: './public/carousel/slide-img-4.jpg',
  //   	},
  //   	{
  //   		title: 'Evening Waltz',
  //   		image: './public/carousel/slide-img-5.jpg',
  //   	},
  //   ]
  //   
  //   let carousel, carouselImages, prevBtn, nextBtn
  //   
  //   let currentIndex = 0
  //   let carouselTextElements = []
  //   let splitTextInstances = []
  //   let isAnimating = false
  //   let slideOffset = 500
  //   
  //   function initCarousel() {
  //   	carousel = document.querySelector('.carousel')
  //   	carouselImages = document.querySelector('.carousel-images')
  //   	prevBtn = document.querySelector('.prev-btn')
  //   	nextBtn = document.querySelector('.next-btn')
  //   
  //   	createCarouselTitles()
  //   	createInitialSlide()
  //   	bindCarouselControls()
  //   	setSlideOffset()
  //   
  //   	window.addEventListener('resize', setSlideOffset)
  //   
  //   	document.fonts.ready.then(() => {
  //   		splitTitles()
  //   		initFirstSlide()
  //   	})
  //   }
  //   
  //   function setSlideOffset() {
  //   	slideOffset = window.innerWidth < 1000 ? 100 : 500
  //   }
  //   
  //   function createCarouselTitles() {
  //   	carouselSlides.forEach(slide => {
  //   		const slideTitleContainer = document.createElement('div')
  //   		slideTitleContainer.classList.add('slide-title-container')
  //   
  //   		const slideTitle = document.createElement('h1')
  //   		slideTitle.classList.add('title')
  //   		slideTitle.textContent = slide.title
  //   
  //   		slideTitleContainer.appendChild(slideTitle)
  //   		carousel.appendChild(slideTitleContainer)
  //   
  //   		carouselTextElements.push(slideTitleContainer)
  //   	})
  //   }
  //   
  //   function createInitialSlide() {
  //   	const initialSlideImgContainer = document.createElement('div')
  //   	initialSlideImgContainer.classList.add('img')
  //   
  //   	const initialSlideImg = document.createElement('img')
  //   	initialSlideImg.src = carouselSlides[0].image
  //   
  //   	initialSlideImgContainer.appendChild(initialSlideImg)
  //   	carouselImages.appendChild(initialSlideImgContainer)
  //   }
  //   
  //   function splitTitles() {
  //   	carouselTextElements.forEach(slide => {
  //   		const slideTitle = slide.querySelector('.title')
  //   		const splitText = new SplitText(slideTitle, {
  //   			type: 'words',
  //   			wordsClass: 'word',
  //   		})
  //   		splitTextInstances.push(splitText)
  //   	})
  //   }
  //   
  //   function bindCarouselControls() {
  //   	nextBtn.addEventListener('click', () => {
  //   		if (isAnimating) return
  //   		currentIndex = (currentIndex + 1) % carouselSlides.length
  //   		animateSlide('right')
  //   	})
  //   
  //   	prevBtn.addEventListener('click', () => {
  //   		if (isAnimating) return
  //   		currentIndex =
  //   			(currentIndex - 1 + carouselSlides.length) % carouselSlides.length
  //   		animateSlide('left')
  //   	})
  //   }
  //   
  //   function initFirstSlide() {
  //   	const initialSlideWords = carouselTextElements[0].querySelectorAll('.word')
  //   	gsap.to(initialSlideWords, {
  //   		filter: 'blur(0px)',
  //   		opacity: 1,
  //   		duration: 2,
  //   		ease: 'power3.out',
  //   	})
  //   }
  //   
  //   function updateActiveTextSlide() {
  //   	gsap.killTweensOf('.word')
  //   
  //   	carouselTextElements.forEach((slide, index) => {
  //   		const words = slide.querySelectorAll('.word')
  //   
  //   		if (index !== currentIndex) {
  //   			gsap.to(words, {
  //   				filter: 'blur(75px)',
  //   				opacity: 0,
  //   				duration: 2.5,
  //   				ease: 'power1.out',
  //   				overwrite: true,
  //   			})
  //   		}
  //   	})
  //   
  //   	const currentWords =
  //   		carouselTextElements[currentIndex].querySelectorAll('.word')
  //   	gsap.to(currentWords, {
  //   		filter: 'blur(0px)',
  //   		opacity: 1,
  //   		duration: 2,
  //   		ease: 'power3.out',
  //   		overwrite: true,
  //   		onComplete: () => {
  //   			gsap.set(currentWords, {
  //   				filter: 'blur(0px)',
  //   				opacity: 1,
  //   			})
  //   		},
  //   	})
  //   }
  //   
  //   function animateSlide(direction) {
  //   	if (isAnimating) return
  //   	isAnimating = true
  //   
  //   	setSlideOffset()
  //   
  //   	const currentSlide = carouselImages.querySelector('.img:last-child')
  //   	const currentSlideImage = currentSlide.querySelector('img')
  //   
  //   	const newSlideImgContainer = document.createElement('div')
  //   	newSlideImgContainer.classList.add('img')
  //   
  //   	const newSlideImg = document.createElement('img')
  //   	newSlideImg.src = carouselSlides[currentIndex].image
  //   
  //   	gsap.set(newSlideImg, {
  //   		x: direction === 'left' ? -slideOffset : slideOffset,
  //   	})
  //   
  //   	newSlideImgContainer.appendChild(newSlideImg)
  //   	carouselImages.appendChild(newSlideImgContainer)
  //   
  //   	gsap.to(currentSlideImage, {
  //   		x: direction === 'left' ? slideOffset : -slideOffset,
  //   		duration: 1.5,
  //   		ease: 'hop',
  //   	})
  //   
  //   	gsap.fromTo(
  //   		newSlideImgContainer,
  //   		{
  //   			clipPath:
  //   				direction === 'left'
  //   					? 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)'
  //   					: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
  //   		},
  //   		{
  //   			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  //   			duration: 1.5,
  //   			ease: 'hop',
  //   			onComplete: () => {
  //   				cleanupCarouselSlides()
  //   				isAnimating = false
  //   			},
  //   		},
  //   	)
  //   
  //   	gsap.to(newSlideImg, {
  //   		x: 0,
  //   		duration: 1.5,
  //   		ease: 'hop',
  //   	})
  //   
  //   	updateActiveTextSlide()
  //   }
  //   
  //   function cleanupCarouselSlides() {
  //   	const imgElements = carouselImages.querySelectorAll('.img')
  //   	if (imgElements.length > 1) {
  //   		for (let i = 0; i < imgElements.length - 1; i++) {
  //   			imgElements[i].remove()
  //   		}
  //   	}
  //   }
  //   
  //   document.addEventListener('DOMContentLoaded', initCarousel)
  //   
  //   
  }, { scope: raiz });
  return (
    <section className="dobra" data-dobra="destaque-animacao-rolagem-17" ref={raiz}>
      <nav>
            <div className="logo">
               <a href="#">{s.acao}</a>
            </div>
            <div className="nav-links">
               <a href="#">{s.acao2}</a>
               <a href="#">{s.acao3}</a>
               <a href="#">{s.acao4}</a>
            </div>
         </nav>
      
         <div className="carousel">
            <div className="carousel-images"></div>
         </div>
      
         <div className="slider-controls">
            <button className="control-btn prev-btn" onClick={s.onClick}>
               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--base-100)">
                  <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
               </svg>
            </button>
      
            <button className="control-btn next-btn" onClick={s.onClick}>
               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--base-100)">
                  <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
               </svg>
            </button>
         </div>
      
         <footer>
            <p>{s.texto}</p>
         </footer>
      
         <svg viewBox="0 0 0 0" aria-hidden="true" style={{position: 'absolute', zIndex: '-1', opacity: '0'}}>
            <defs>
               <filter id="blur-matrix">
                  <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -140">
                  </feColorMatrix>
               </filter>
            </defs>
         </svg>
    </section>
  );
}
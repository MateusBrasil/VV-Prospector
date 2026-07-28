(function(){
  var __root = document.querySelector('[data-blk="menu-navegacao-menu-19"]');
  if(!__root) return;
  var __q = function(s){ return __root.querySelector(s) || document.querySelector(s); };
  var __qa = function(s){ var r = __root.querySelectorAll(s); return r.length ? r : document.querySelectorAll(s); };

/* script.js */


document.addEventListener('DOMContentLoaded', () => {
	gsap.registerPlugin(CustomEase, SplitText)
	CustomEase.create('hop', '.87,0,.13,1')

	// --- helper: lock/unlock scroll (без Lenis) ---
	const lockScroll = lock => {
		document.documentElement.classList.toggle('no-scroll', lock)
		__root.classList.toggle('no-scroll', lock)
	}

	// --- SplitText setup ---
	const textContainers = __qa('.menu-col')
	const splitTextByContainer = []

	textContainers.forEach(container => {
		const textElements = container.querySelectorAll('a, p')
		const containerSplits = []

		textElements.forEach(el => {
			const split = SplitText.create(el, {
				type: 'lines',
				mask: 'lines',
				linesClass: 'line',
			})

			containerSplits.push(split)
			gsap.set(split.lines, { y: '-110%' })
		})

		splitTextByContainer.push(containerSplits)
	})

	// --- DOM refs ---
	const container = __q('.container')
	const menuToggleBtn = __q('.menu-toggle-btn')
	const menuOverlay = __q('.menu-overlay')
	const menuOverlayContainer = __q('.menu-overlay-content')
	const menuMediaWrapper = __q('.menu-media-wrapper')
	const copyContainers = __qa('.menu-col')
	const menuToggleLabel = __q('.menu-toggle-label p')
	const hamburgerIcon = __q('.menu-hamburger-icon')

	let isMenuOpen = false
	let isAnimating = false

	menuToggleBtn.addEventListener('click', () => {
		if (isAnimating) return

		if (!isMenuOpen) {
			isAnimating = true
			lockScroll(true)

			const tl = gsap.timeline()

			tl.to(menuToggleLabel, { y: '-110%', duration: 1, ease: 'hop' }, '<')
				.to(container, { y: '100svh', duration: 1, ease: 'hop' }, '<')
				.to(
					menuOverlay,
					{
						clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
						duration: 1,
						ease: 'hop',
					},
					'<',
				)
				.to(
					menuOverlayContainer,
					{ yPercent: 0, duration: 1, ease: 'hop' },
					'<',
				)
				.to(
					menuMediaWrapper,
					{ opacity: 1, duration: 0.75, ease: 'power2.out', delay: 0.5 },
					'<',
				)

			splitTextByContainer.forEach(containerSplits => {
				const lines = containerSplits.flatMap(s => s.lines)
				tl.to(
					lines,
					{ y: '0%', duration: 2, ease: 'hop', stagger: -0.075 },
					-0.15,
				)
			})

			hamburgerIcon?.classList.add('active')

			tl.call(() => {
				isAnimating = false
			})

			isMenuOpen = true
		} else {
			isAnimating = true

			hamburgerIcon?.classList.remove('active')

			const tl = gsap.timeline()

			tl.to(container, { y: '0svh', duration: 1, ease: 'hop' })
				.to(
					menuOverlay,
					{
						clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
						duration: 1,
						ease: 'hop',
					},
					'<',
				)
				.to(
					menuOverlayContainer,
					{ yPercent: -50, duration: 1, ease: 'hop' },
					'<',
				)
				.to(menuToggleLabel, { y: '0%', duration: 1, ease: 'hop' }, '<')
				.to(copyContainers, { opacity: 0.25, duration: 1, ease: 'hop' }, '<')

			tl.call(() => {
				// reset lines
				splitTextByContainer.forEach(containerSplits => {
					const lines = containerSplits.flatMap(s => s.lines)
					gsap.set(lines, { y: '-110%' })
				})

				gsap.set(copyContainers, { opacity: 1 })
				gsap.set(menuMediaWrapper, { opacity: 0 })

				lockScroll(false)
				isAnimating = false
			})

			isMenuOpen = false
		}
	})
})

})();
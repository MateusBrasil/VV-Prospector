// gsap, ScrollTrigger and SplitText are loaded as globals from CDN.
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
if (typeof gsap !== 'undefined' && typeof SplitText !== 'undefined') {
  gsap.registerPlugin(SplitText);
}

// Scroll-triggered entrance per overview block:
//   - Title: Heading Stagger pattern — per-word rise (yPercent 50 → 0)
//   - Description: line-by-line stagger (y 20 → 0, fade)
//   - Image: curtain reveal — wrapper grows height 0 → 100%, image
//     scales 1.05 → 1 (stays anchored at top via container queries).
// Same recipe used in Hero / ServicesHero / CaseStudyHero so all image
// reveals across the site share a coherent feel.
function initCsIntOverviewReveals() {
  if (typeof gsap === 'undefined') return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  const blocks = document.querySelectorAll('.csIntOverview');
  blocks.forEach((block) => {
    const title = block.querySelector('.csIntOverview__title');
    const desc = block.querySelector('.csIntOverview__description');
    const imageReveal = block.querySelector('.csIntOverview__imageReveal');
    const image = block.querySelector('.csIntOverview__image');

    // Heading word stagger.
    let titleWords = [];
    if (title && typeof SplitText !== 'undefined') {
      titleWords = SplitText.create(title, { type: 'words' }).words;
      gsap.set(titleWords, { yPercent: 50, autoAlpha: 0 });
    }

    // Description — animates as a SINGLE block, not split into lines.
    // The paragraph wraps naturally to the column width; treating each
    // visible line as its own animation target makes the text read as
    // disjoint slabs instead of one continuous body.
    if (desc) gsap.set(desc, { y: 20, autoAlpha: 0 });

    // Curtain reveal.
    if (imageReveal) gsap.set(imageReveal, { height: 0 });
    if (image) gsap.set(image, { scale: 1.05 });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: block, start: 'top 85%', once: true },
    });

    if (imageReveal) {
      tl.to(imageReveal, { height: '100%', duration: 1.1, ease: 'power3.out' }, 0);
    }
    if (image) {
      tl.to(image, { scale: 1, duration: 1.1, ease: 'power3.out' }, 0);
    }
    if (titleWords.length) {
      tl.to(titleWords, {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.06,
      }, 0.15);
    }
    if (desc) {
      tl.to(desc, { y: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out' }, 0.4);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(initCsIntOverviewReveals, 0));
} else {
  setTimeout(initCsIntOverviewReveals, 0);
}

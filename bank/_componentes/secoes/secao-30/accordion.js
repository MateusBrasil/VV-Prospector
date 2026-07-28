// Reusable accordion behavior (COMPONENTS_MAP #2).
// Source: Webflow IX2 accordion -- collapsed by default, single-open within a group,
// height-animated via max-height on the content, icon morphs +/- on open.
//
// DOM contract (wired by FaqSection.astro):
//   [data-accordion]            group wrapper (single-open scope; .faq_list)
//     [data-accordion-item]     one item (.accordion). Gets .is-open when expanded.
//       [data-accordion-trigger]  clickable heading button (.accordion_heading)
//       [data-accordion-content]  collapsible answer (.accordion_answer, overflow:hidden)
//
// Open state: .is-open on the item + max-height set to measured scrollHeight (px),
// aria-expanded on the trigger. Closed: max-height 0. prefers-reduced-motion -> no
// transition (instant snap). No GSAP -- vanilla only.
(function () {
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setOpen(item, open) {
    const content = item.querySelector('[data-accordion-content]');
    const trigger = item.querySelector('[data-accordion-trigger]');
    if (!content) return;

    if (open) {
      item.classList.add('is-open');
      // Safety net: the item is also a `.scroll-into-view` (scroll-reveal layer). If
      // that reveal hasn't run yet (slow scroll, late layout shift, anchor jump), the
      // item is still opacity:0 -- so the panel would expand INVISIBLY and read as
      // "first click did nothing, second worked". Force it shown on open.
      item.style.opacity = '1';
      item.style.visibility = 'visible';
      item.style.transform = 'none';
      content.style.maxHeight = reduceMotion ? 'none' : `${content.scrollHeight}px`;
    } else {
      item.classList.remove('is-open');
      // Snap from auto/none -> current px so the transition has a start value.
      if (!reduceMotion && content.style.maxHeight === 'none') {
        content.style.maxHeight = `${content.scrollHeight}px`;
        // Force reflow so the next assignment animates.
        void content.offsetHeight;
      }
      content.style.maxHeight = '0px';
    }

    if (trigger) trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function initGroup(group) {
    const items = Array.from(group.querySelectorAll('[data-accordion-item]'));

    items.forEach((item) => {
      const trigger = item.querySelector('[data-accordion-trigger]');
      const content = item.querySelector('[data-accordion-content]');
      if (!trigger || !content) return;

      // Collapsed baseline.
      content.style.maxHeight = '0px';
      trigger.setAttribute('aria-expanded', 'false');

      // Whole `.accordion` card is the click target (it carries cursor:pointer), not
      // just the heading -- clicking the padding or the open answer toggles too.
      item.addEventListener('click', () => {
        const willOpen = !item.classList.contains('is-open');
        // Single-open: close siblings first.
        if (willOpen) {
          items.forEach((sib) => {
            if (sib !== item && sib.classList.contains('is-open')) setOpen(sib, false);
          });
        }
        setOpen(item, willOpen);
      });

      // Keep an open panel sized correctly on resize.
      window.addEventListener('resize', () => {
        if (item.classList.contains('is-open') && !reduceMotion) {
          content.style.maxHeight = `${content.scrollHeight}px`;
        }
      });
    });
  }

  function init() {
    document
      .querySelectorAll('[data-accordion]')
      .forEach((group) => initGroup(group));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

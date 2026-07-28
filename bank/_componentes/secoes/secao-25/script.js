/* hirekit-faq: single-open accordion (component-scoped, de FaqSection.astro). */
document.querySelectorAll('[data-accordion]').forEach((list) => {
  const items = Array.from(list.querySelectorAll('.accordion'));
  items.forEach((acc) => {
    const top = acc.querySelector('.accordion_top');
    top?.addEventListener('click', () => {
      const open = acc.classList.contains('is-open');
      items.forEach((o) => {
        o.classList.remove('is-open');
        o.querySelector('.accordion_top')?.setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        acc.classList.add('is-open');
        top.setAttribute('aria-expanded', 'true');
      }
    });
  });
});

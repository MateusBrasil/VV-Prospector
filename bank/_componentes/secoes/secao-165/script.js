// Firmo team slider — native CSS scroll-snap carousel; this script only wires the
// prev/next arrows (the track itself scrolls/snaps natively). Ported verbatim from
// TeamSection.astro, TypeScript stripped. Plain global, self-init on DOM ready
// (no `export` — Rule 1). The scroll-into-view reveals are handled by the shared
// /firmo/scripts/scroll-reveal.js.
const EDGE_TOLERANCE = 1; // px slack when testing whether the track is at an end

function initTeamSlider(slider) {
  const track = slider.querySelector('[data-team-track]');
  const prev = slider.querySelector('[data-team-prev]');
  const next = slider.querySelector('[data-team-next]');
  if (!track || !prev || !next) return;

  // Scroll distance for one arrow click: a card plus its gap.
  const cardStep = () => {
    const card = track.querySelector('.team_slide');
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return (card ? card.getBoundingClientRect().width : 0) + gap;
  };

  // Disable each arrow once the track reaches that end.
  const syncArrows = () => {
    prev.disabled = track.scrollLeft <= EDGE_TOLERANCE;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - EDGE_TOLERANCE;
  };

  prev.addEventListener('click', () => track.scrollBy({ left: -cardStep(), behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: cardStep(), behavior: 'smooth' }));
  track.addEventListener('scroll', syncArrows, { passive: true });
  window.addEventListener('resize', syncArrows, { passive: true });
  syncArrows();
}

function initTeamSliders() {
  document.querySelectorAll('[data-team-slider]').forEach(initTeamSlider);
}

if (document.readyState !== 'loading') initTeamSliders();
else document.addEventListener('DOMContentLoaded', initTeamSliders);

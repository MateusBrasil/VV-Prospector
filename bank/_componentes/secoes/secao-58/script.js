// GSAP + ScrollTrigger are loaded as globals from the CDN in <head>.
// Register the plugin before any ScrollTrigger-backed tweens run.
if (window.gsap && window.ScrollTrigger) {
  window.gsap.registerPlugin(window.ScrollTrigger);
}

// ───────────────────────────────────────────────────────────────────
//  About — scroll-driven word reveal + stats staircase entrance
// ───────────────────────────────────────────────────────────────────
//  Paragraph
//    Each word starts at opacity 0.15 (CSS default) and climbs to 1 as
//    the section scrolls past. The ScrollTrigger is `scrub: true` so
//    progress is tied 1:1 to the scrollbar — scrolling up will dim the
//    words again, which reads as "lighting up word by word".
//  Stats staircase
//    Triggered just before the paragraph reveal ends. Each stat fades
//    in and rises 24px from below with a 0.1s stagger → "staircase"
//    effect. Fires once, independent of the scrub.
function initAboutReveals() {
  const gsap = window.gsap;
  if (!gsap) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const statement = document.querySelector('.about__statement');
  const stats = [...document.querySelectorAll('.about__stat')];

  // ── Word split ─────────────────────────────────────────────────────
  let wordSpans = [];
  if (statement && !statement.hasAttribute('data-words-split')) {
    statement.setAttribute('data-words-split', '');
    const text = statement.textContent.trim();
    const words = text.split(/\s+/);
    statement.innerHTML = '';
    words.forEach((word, i) => {
      const span = document.createElement('span');
      span.className = 'about__statementWord';
      span.textContent = word;
      statement.appendChild(span);
      wordSpans.push(span);
      if (i < words.length - 1) {
        statement.appendChild(document.createTextNode(' '));
      }
    });
  }

  if (reduce) {
    // Accessibility — snap everything to its final state, no scroll hooks.
    if (wordSpans.length) gsap.set(wordSpans, { opacity: 1 });
    return;
  }

  // ── Paragraph entrance — soft fade + rise ──────────────────────────
  // Fires just before the scrub activates (start: 'top 85%' < 'top 75%')
  // so the paragraph is settled at y=0 when the word-by-word scrub
  // begins. Animates the container, which compounds multiplicatively
  // with the word-level opacity below — a gentle "lift into frame".
  if (statement) {
    gsap.from(statement, {
      autoAlpha: 0,
      y: 20,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: statement,
        start: 'top 85%',
        once: true,
      },
    });
  }

  // ── Scroll-scrubbed word reveal ────────────────────────────────────
  if (wordSpans.length) {
    gsap.fromTo(wordSpans,
      { opacity: 0.15 },
      {
        opacity: 1,
        ease: 'none',
        stagger: { each: 1 },     // each word gets its own slice of progress
        scrollTrigger: {
          trigger: statement,
          start: 'top 75%',        // begins when the paragraph tops 75% vh
          end: 'bottom 60%',       // finishes as the paragraph leaves the middle
          scrub: true,
        },
      }
    );
  }

  // ── Stats staircase — fires near the end of the paragraph scrub ────
  if (stats.length) {
    gsap.from(stats, {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: stats[0].parentElement,
        start: 'top 85%',
        once: true,
      },
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => setTimeout(initAboutReveals, 0));
} else {
  setTimeout(initAboutReveals, 0);
}

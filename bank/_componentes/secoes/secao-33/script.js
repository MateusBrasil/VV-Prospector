// stayli-cta — no local logic. The heading + button reveal (blur → focus on
// scroll) is driven by the shared /stayli/scripts/scroll-reveal.js, which adds
// `.is-in` to [data-reveal] via IntersectionObserver (fail-safe: the hidden
// start-state only applies under html.reveal-js + prefers-reduced-motion:
// no-preference, so content stays visible if JS dies). Stub kept for the
// 4-file convention.

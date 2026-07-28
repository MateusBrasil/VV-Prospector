// vetic-mission — play/pause toggle for the non-autoplay background video.
// Ported from the inline <script> of src/components/MissionSection.astro (plain JS, no exports).
// The scroll reveals (data-reveal="view" / "curtain") run from the shared /vetic/scripts/scroll-reveal.js.

function initMissionVideo() {
  var toggles = document.querySelectorAll('[data-video-toggle]');
  toggles.forEach(function (btn) {
    var wrap = btn.closest('.our_video-wrap');
    var video = wrap ? wrap.querySelector('[data-video]') : null;
    var label = btn.querySelector('[data-video-label]');
    if (!video || !label) return;

    function sync() {
      var playing = !video.paused && !video.ended;
      label.textContent = playing ? 'Stop' : 'Play';
      btn.setAttribute('aria-label', playing ? 'Pause video' : 'Play video');
    }

    btn.addEventListener('click', function () {
      if (video.paused || video.ended) video.play();
      else video.pause();
    });
    video.addEventListener('play', sync);
    video.addEventListener('pause', sync);
    video.addEventListener('ended', sync);
  });
}

if (document.readyState !== 'loading') initMissionVideo();
else document.addEventListener('DOMContentLoaded', initMissionVideo);

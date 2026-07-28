(function(){
  var __root = document.querySelector('[data-blk="menu-navegacao-menu-20"]');
  if(!__root) return;
  var __q = function(s){ return __root.querySelector(s) || document.querySelector(s); };

  var nav = __q('nav');
  var app = __q('.App');
  var circle = __q('#circle');
  var path1 = __q('#Path_1');
  var path2 = __q('#Path_2');
  var line1 = __q('#Line_1');
  var introOverlay = __q('.intro-overlay');

  var menuOpened = false;
  var dimensions = { width: window.innerWidth, height: window.innerHeight };

  function setViewportHeight() {
    var vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
  }

  function debounce(fn, ms) {
    var timer;
    return function() {
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function(){ fn.apply(null, args); }, ms);
    };
  }

  function playIntroWipe() {
    if (!introOverlay) return;
    gsap.timeline()
      .to(__q('.overlay-top'), { duration: 0 })
      .to(introOverlay.querySelectorAll('.overlay-top'), { duration: 1.2, height: 0, ease: 'expo.inOut', stagger: 0.3, delay: 0.4 })
      .to(introOverlay.querySelectorAll('.overlay-bottom'), { duration: 1.2, width: 0, ease: 'expo.inOut', delay: -0.6, stagger: { amount: 0.3 } })
      .to(introOverlay, { duration: 0, display: 'none' });
  }

  var menuTl = gsap.timeline({ paused: true })
    .to(nav, { duration: 0, display: 'block' })
    .to('body', { duration: 0, overflow: 'hidden' })
    .to(app, {
      duration: 1,
      y: function(){ return dimensions.width <= 654 ? '70vh' : window.innerHeight / 2; },
      ease: 'expo.inOut'
    })
    .to(__q('.hamburger-menu span'), { duration: 0.6, delay: -1, scaleX: 0, transformOrigin: '50% 0%', ease: 'expo.inOut' })
    .to(path1, { duration: 0.4, delay: -0.6, strokeDashoffset: 10, strokeDasharray: 5 })
    .to(path2, { duration: 0.4, delay: -0.6, strokeDashoffset: 10, strokeDasharray: 20 })
    .to(line1, { duration: 0.4, delay: -0.6, strokeDashoffset: 40, strokeDasharray: 18 })
    .to(circle, { duration: 0.6, delay: -0.8, strokeDashoffset: 0, ease: 'expo.inOut' })
    .to(__q('.hamburger-menu-close'), { duration: 0.6, delay: -0.8, display: 'block' });

  function initMenuIcon() {
    gsap.set(circle, { strokeDasharray: 227, strokeDashoffset: -193 });
    gsap.set(path1, { strokeDasharray: 10, strokeDashoffset: 10 });
    gsap.set(path2, { strokeDasharray: 10, strokeDashoffset: 10 });
    gsap.set(line1, { strokeDasharray: 40, strokeDashoffset: 40 });
  }

  function openMenu() {
    if (menuOpened) return;
    menuOpened = true;
    menuTl.play(0);
  }

  function closeMenu() {
    if (!menuOpened) return;
    menuOpened = false;
    menuTl.reverse();
    menuTl.eventCallback('onReverseComplete', function(){
      gsap.set(__q('.hamburger-menu-close'), { display: 'none' });
      gsap.set('body', { overflow: 'auto' });
      gsap.set(nav, { display: 'none' });
    });
  }

  __root.addEventListener('click', function(event){
    if (event.target.closest('.hamburger-menu')) { openMenu(); return; }
    if (event.target.closest('.hamburger-menu-close')) { closeMenu(); return; }
  });

  window.addEventListener('resize', debounce(function(){
    dimensions = { width: window.innerWidth, height: window.innerHeight };
    setViewportHeight();
  }, 1000));

  setViewportHeight();
  initMenuIcon();
  gsap.set(nav, { display: 'none' });
  playIntroWipe();
})();

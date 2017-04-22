document.addEventListener("DOMContentLoaded", function(event) {
  var scene = new ScrollMagic.Scene({
    triggerHook: "onLeave",
    duration: 300
  })
  .setTween(".fade-header .bg", {'filter':'blur(10px)'}) // trigger a TweenMax.to tween
  .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerHook: "onLeave",
    duration: 300
  })
  .setTween(".fade-header .title", {color: '#fff'}) // trigger a TweenMax.to tween
  .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerHook: "onLeave",
    duration: 800
  })
  .setTween(".blur-layer", {opacity: 0.8}) // trigger a TweenMax.to tween
  .addTo(controller);

  var scene = new ScrollMagic.Scene({
    triggerHook: "onLeave",
    duration: 100
  })
  .setTween(".scroll-trigger", {opacity: 0, scale: 0.9}) // trigger a TweenMax.to tween
  .addTo(controller);
});

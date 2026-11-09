// Веточки у разделов прорисовываются, когда раздел появляется на экране
(function () {
  var sprigs = document.querySelectorAll('.sprig');
  if (!('IntersectionObserver' in window)) { sprigs.forEach(function (s) { s.classList.add('is-in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.6 });
  sprigs.forEach(function (s) { io.observe(s); });
})();

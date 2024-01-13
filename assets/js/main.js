$('.bc-nav-popup-toggle').click(function () {
  $('body').toggleClass('bc-nav-popup-modal-open');
});
$('.bc-main-nav .nav-link[href^="#"]:not([href="#!"])').click(function () {
  $('body').removeClass('bc-nav-popup-modal-open');
});
$myCarousel = $('.carousel');
function doAnimations(elems) {
  var animEndEv = 'webkitAnimationEnd animationend';
  elems.each(function () {
    var $this = $(this),
      $animationType = $this.data('animation');
    $this.addClass($animationType).one(animEndEv, function () {
      $this.removeClass($animationType);
    });
  });
}
var $firstAnimatingElems = $myCarousel.find('.carousel-item:first')
  .find('[data-animation ^= "animated"]');
doAnimations($firstAnimatingElems);
$myCarousel.on('slide.bs.carousel', function (e) {
  var $animatingElems = $(e.relatedTarget)
    .find("[data-animation ^= 'animated']");
  doAnimations($animatingElems);
});
function doAnimations(elems) {
  var animEndEv = 'webkitAnimationEnd animationend';
  elems.each(function () {
    var $this = $(this),
      $animationType = $this.data('animation');
    $this.addClass($animationType).one(animEndEv, function () {
      $this.removeClass($animationType);
    });
  });
}
var $firstAnimatingElems = $myCarousel.find('.carousel-item:first')
  .find('[data-animation ^= "animated"]');
doAnimations($firstAnimatingElems);
$myCarousel.on('slide.bs.carousel', function (e) {
  var $animatingElems = $(e.relatedTarget)
    .find("[data-animation ^= 'animated']");
  doAnimations($animatingElems);
});
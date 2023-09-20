$('.slide-nav').on('click', function(e) {
  e.preventDefault();
  // get current slide
  var current = $('.flex--active').data('slide'),
    // get button data-slide
    next = $(this).data('slide');

  $('.slide-nav').removeClass('active');
  $(this).addClass('active');

  if (current === next) {
    return false;
  } else {
    $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
    $('.flex--active').addClass('animate--end');
    setTimeout(function() {
      $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
      $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
    }, 800);
  }
});

function scrollToTop() {
  window.scrollTo(0, 0);
}

let popup = document.getElementById("popup");
let accetta = document.getElementById("accetta");
let rifiuta = document.getElementById("rifiuta");

function goUp() {
  popup.style = "transform: translateY(-125px);";
  accetta.style = "transform: translateY(-175px);";
  rifiuta.style = "transform: translateY(-175px);";
}

function disappear() {
  popup.style = "display: none;";
  accetta.style = "display: none;";
  rifiuta.style = "display: none;";
}



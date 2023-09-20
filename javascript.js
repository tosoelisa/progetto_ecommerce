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

$('.carousel').carousel('cycle')({
  interval: 2000
})

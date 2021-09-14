window.currentSlide = currentSlide;

var slideIndex = 2;
showSlides(slideIndex);
// console.log(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('specialties-slide');
  var dots = document.getElementsByClassName('specialties-slider-controls-dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

let i = 1;
setInterval(function () {
  currentSlide(i);
  i++;
  if (i == 4) {
    i = 1;
  }
}, 7000);

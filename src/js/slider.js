window.currentSlide = currentSlide;

let slideIndex = 2;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName('specialties-slide');
  const dots = document.getElementsByClassName('specialties-slider__dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < dots.length; i++) {
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

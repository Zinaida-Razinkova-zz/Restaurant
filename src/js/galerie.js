window.openFotoGallery = openFotoGallery;
window.closeGallery = closeGallery;
window.plusSlides = plusSlides;
window.fotoSlide = fotoSlide;
window.show_Slides = show_Slides;

function openFotoGallery() {
  document.getElementById('galerie-modal').style.display = 'block';
}

function closeGallery() {
  document.getElementById('galerie-modal').style.display = 'none';
}

var slideIndex = 1;
show_Slides(slideIndex);

function plusSlides(n) {
  show_Slides((slideIndex += n));
}

function fotoSlide(n) {
  show_Slides((slideIndex = n));
}

function show_Slides(n) {
  var i;
  var slides = document.getElementsByClassName('galerie-slide');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}

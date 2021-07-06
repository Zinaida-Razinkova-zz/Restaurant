// Open the Modal
function openGalerie() {
  document.getElementById('galerie-modal').style.display = 'block';
}

// Close the Modal
function closeGalerie() {
  document.getElementById('galerie-modal').style.display = 'none';
}

var slideIndex = 1;
show_Slides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  show_Slides((slideIndex += n));
}
function galerieSlide(n) {
  show_Slides((slideIndex = n));
}

function show_Slides(n) {
  var i;
  var slides = document.getElementsByClassName('galerie-slide');
  var dots = document.getElementsByClassName('galerie-dot');

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

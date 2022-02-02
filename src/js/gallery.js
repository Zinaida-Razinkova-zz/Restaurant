const smallFotos = document.querySelectorAll('.gallery-img');
const modalGallery =  document.querySelector('.gallery-modal');
const bigFotos = document.querySelectorAll('.gallery-modal__slide');
const btnLeft = document.querySelector('.gallery-modal__prev');
const btnRight = document.querySelector('.gallery-modal__next');
const btnClose = document.querySelector('.gallery-modal__close');

// open gallery
const getActiveSlide = () => {
  smallFotos.forEach(fotoSlide => fotoSlide.addEventListener("click", openFotoGallery));
}
getActiveSlide();

function openFotoGallery() {
  modalGallery.style.display = 'block';
  showSlides(event);
}

// next slide
let activeSlide=0;
const rightSlide = () => {
  activeSlide++;
  if(activeSlide > bigFotos.length -1){
    activeSlide = 0;
  }
  showSlides(event);
};
const leftSlide = () => {
  activeSlide--;
  if(activeSlide < 0){
    activeSlide = bigFotos.length -1;
  }
  showSlides(event);
};

// show large photo in gallery
const showSlides = (event) => {
  bigFotos.forEach(foto => foto.style.display = 'none'); 
  if (event.target.nodeName === "SPAN") {
    bigFotos[activeSlide].style.display = 'block';
}
    if (event.target.nodeName === "IMG") {
      const indexSlide = [...smallFotos].indexOf(event.target);
      bigFotos[indexSlide].style.display = 'block';
  }
}

// close gallery
function closeGallery() {
  modalGallery.style.display = 'none';
};

function backdropClick(event) {
  if (event.target === event.currentTarget) {
    closeGallery();
  }
}

function pressEscape(event) {
  if (event.code === 'Escape') {
    closeGallery();
  }
}

btnRight.addEventListener("click", rightSlide);
btnLeft.addEventListener("click", leftSlide);
btnClose.addEventListener("click", closeGallery);
modalGallery.addEventListener("click", backdropClick);
window.addEventListener('keydown', pressEscape);
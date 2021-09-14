const openModalBtn = document.querySelector('[data-action="modal-open"]');
const closeModalBtn = document.querySelector('[data-action="modal-close"]');
const backdropRef = document.querySelector('.js-backdrop');

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
backdropRef.addEventListener('click', backdropClick);

function openModal() {
  window.addEventListener('keydown', pressEscape);
  document.body.classList.add('show-modal');
}
function closeModal() {
  window.removeEventListener('keydown', pressEscape);
  document.body.classList.remove('show-modal');
}
function backdropClick(event) {
  // console.log(event.target);
  // console.log(event.currentTarget);
  if (event.target === event.currentTarget) {
    closeModal();
  }
}
function pressEscape(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

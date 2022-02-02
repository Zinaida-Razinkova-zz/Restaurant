const btnTop = document.querySelector('.book-scrollup');

btnTop.addEventListener('click', (e) =>   
window.scrollTo({
  behavior: "smooth",
  top,
})
)
var form = document.getElementById('book-form');

async function handleSubmit(event) {
  event.preventDefault();
  let status = document.getElementById('book-form-status');
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then(response => {
      status.innerHTML = 'Thank you, the order is accepted!';
      form.reset();
    })
    .catch(error => {
      status.innerHTML = 'Oops! There was a problem submitting your form';
    });
}
form.addEventListener('submit', handleSubmit);

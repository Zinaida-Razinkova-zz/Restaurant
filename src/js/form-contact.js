const form = document.getElementById('contact-form');

async function handleSubmit(event) {
  event.preventDefault();
  let status = document.getElementById('contact-form-status');
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: 'application/json',
    },
  })
    .then(response => {
      status.innerHTML = 'Thank you, your message has been sent!';
      form.reset();
    })
    .catch(error => {
      status.innerHTML = 'Oops! There was a problem submitting your form';
    });
}
form.addEventListener('submit', handleSubmit);

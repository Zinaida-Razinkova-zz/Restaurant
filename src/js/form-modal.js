var form = document.getElementById('modal-form');

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById('modal-form__status');
  var data = new FormData(event.target);
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

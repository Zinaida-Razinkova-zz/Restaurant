var form = document.getElementById('modal-form');

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById('modal-form-status');
  var data = new FormData(event.target);
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

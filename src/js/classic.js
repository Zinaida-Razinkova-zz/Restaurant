const refs = {
  controls: document.querySelector('#delicious-tabs-1 [data-controls]'),
  panes: document.querySelector('#delicious-tabs-1 [delicious-data]'),
};

refs.controls.addEventListener('click', onControlsClick);

function onControlsClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'A') {
    console.log('Кликнули не в ссылку');
    return;
  }

  const currentActiveControlItem = refs.controls.querySelector('.delicious-controls__item--active');

  if (currentActiveControlItem) {
    currentActiveControlItem.classList.remove('delicious-controls__item--active');

    const paneId = getPaneId(currentActiveControlItem);
    const pane = getPaneById(paneId);
    pane.classList.remove('delicious--active');
    // console.log(paneId);
  }

  const controlItem = event.target;
  controlItem.classList.add('delicious-controls__item--active');

  const paneId = getPaneId(controlItem);
  const pane = getPaneById(paneId);
  pane.classList.add('delicious--active');
  // console.log(pane);
}

function getPaneId(control) {
  return control.getAttribute('href').slice(1);
}

function getPaneById(id) {
  return refs.panes.querySelector(`#${id}`);
}

import throttle from 'lodash/throttle';

const storageKey = "feedback-form-state";
const modal = document.querySelector('.feedback-form');

modal.addEventListener('input', throttle(saveModalRefs, 500));
modal.addEventListener('submit', onModalSubmit);
checkModalRefs();

function saveModalRefs(evt) {
  const modalRefs = {
    email: modal.elements.email.value,
    message: modal.elements.message.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(modalRefs));
}

function onModalSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(localStorage.getItem(storageKey));
}

function checkModalRefs() {
  const savedModalRefs = localStorage.getItem(storageKey);
  const parsedModalRefs = JSON.parse(savedModalRefs);
  if (parsedModalRefs) {
    modal.elements.email.value = parsedModalRefs.email;
    modal.elements.message.value = parsedModalRefs.message;
  }
}

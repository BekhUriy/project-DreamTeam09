import { createModal } from './about-book-modal';
// Змінити на клік по зображенням

const idModal = document.querySelector('.about-book-modal');
const closeModalBtn = document.querySelector('#modal-close');
const fireBaseBackdrop = document.querySelector('.fire-base-backdrop');
const idBackdropModal = document.querySelector('.js-backdrop-modal');

function openModalId() {
  idModal.classList.remove('is-hidden');
  idBackdropModal.classList.remove('is-hidden');
}

function closeModalId() {
  idModal.classList.add('is-hidden');
  idBackdropModal.classList.add('is-hidden');
  // allModal.innerHTML = ''
}

closeModalBtn.addEventListener('click', closeModalId);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModalId();
  }
});

idBackdropModal.addEventListener('click', function (event) {
  if (event.target === idBackdropModal) {
    closeModalId();
  }
});

export { openModalId };
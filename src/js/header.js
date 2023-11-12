const modalW = document.querySelector('.header-modal');
const modalWinBtn = document.querySelector('.modal-open-btn');
const allbody = document.querySelector('body');
const burger = document.querySelector('.open-icon');

console.dir(burger.innerHTML);

modalWinBtn.addEventListener('click', modWin);

function modWin(event) {
  if (modalW.classList.contains('hidden-modal')) {
    modalW.classList.remove('hidden-modal');
    allbody.classList.add('stop-scrolling');
    burger.innerHTML = `<use href="./img/sprit.svg#x-close"/>`;

    return;
  } else {
    modalW.classList.add('hidden-modal');
    allbody.classList.remove('stop-scrolling');
    burger.innerHTML = `<use href="./img/sprit.svg#icon-burger"/>`;
  }
}

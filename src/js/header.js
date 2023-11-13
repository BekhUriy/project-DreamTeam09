const elem = {
  modalW: document.querySelector('.header-modal'),
  modalWinBtn: document.querySelector('.modal-open-btn'),
  allbody: document.querySelector('body'),
  burger: document.querySelector('.open-icon'),
};

elem.modalWinBtn.addEventListener('click', modWin);

function modWin(event) {
  if (elem.modalW.classList.contains('hidden-modal')) {
    elem.modalW.classList.remove('hidden-modal');
    elem.allbody.classList.add('stop-scrolling');
    elem.burger.innerHTML = `<use href="./img/sprit.svg#x-close"/>`;

    return;
  } else {
    elem.modalW.classList.add('hidden-modal');
    elem.allbody.classList.remove('stop-scrolling');
    elem.burger.innerHTML = `<use href="./img/sprit.svg#icon-burger"/>`;
  }
}

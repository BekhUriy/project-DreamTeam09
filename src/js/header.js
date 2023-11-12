const modalW = document.querySelector('.header-modal');
const modalWinBtn = document.querySelector('.modal-open-btn');
const body = document.querySelector('body');
console.dir(body);
console.log(modalWinBtn);

modalWinBtn.addEventListener('click', modWin);
body.addEventListener('wheel', stopScroll);

function modWin(event) {
  console.log(modalW.classList);
  if (modalW.classList.contains('hidden-modal')) {
    modalW.classList.remove('hidden-modal');
    return;
  } else {
    modalW.classList.add('hidden-modal');
  }
}

function stopScroll(evt) {
  console.log(evt);
  //   evt.preventDefault();
  evt.stopPropagation();
}

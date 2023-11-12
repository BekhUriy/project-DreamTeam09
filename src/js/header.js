const modalW = document.querySelector('.header-modal');
const modalWinBtn = document.querySelector('.modal-open-btn');
console.dir(modalW);
console.log(modalWinBtn);

modalWinBtn.addEventListener('click', modWin);
function modWin(event) {
  console.log(modalW.classList);
  if (modalW.classList.contains('hidden-modal')) {
    modalW.classList.remove('hidden-modal');
    return;
  } else {
    modalW.classList.add('hidden-modal');
  }
}

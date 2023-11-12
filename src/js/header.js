const modalW = document.querySelector('.header-modal');
const modalWinBtn = document.querySelector('.modal-open-btn');
const allbody = document.querySelector('body');
// console.dir(body);
// console.log(modalWinBtn);

modalWinBtn.addEventListener('click', modWin);
body.addEventListener('wheel', stopScroll);

function modWin(event) {
  // console.log(modalW.classList);
  if (modalW.classList.contains('hidden-modal')) {
    modalW.classList.remove('hidden-modal');
    allbody.classList.add('stop-scrolling');
    return;
  } else {
    modalW.classList.add('hidden-modal');
    allbody.classList.remove('stop-scrolling');
  }
}

function stopScroll(evt) {
  console.log(evt);
  evt.preventDefault();
  evt.stopPropagation();
}

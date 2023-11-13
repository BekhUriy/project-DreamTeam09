const root = document.querySelector(':root')
const themeSwitch = document.querySelector('#themeSwitch');

themeSwitch.addEventListener('change', changeTheme);

function changeTheme() {
<<<<<<< HEAD
  const body = document.body;
  body.classList.toggle('light-theme');
  body.classList.toggle('dark-theme');
}
=======
    event.preventDefault();
    root.classList.toggle('dark-theme', themeSwitch.checked);
}
>>>>>>> 500ffc63006f710c4259850dae9f1347c2ab3490

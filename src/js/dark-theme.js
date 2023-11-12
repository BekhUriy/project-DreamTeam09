const themeSwitch = document.getElementById('themeSwitch');

themeSwitch.addEventListener('change', changeTheme);

function changeTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
}
let body = document.querySelector('.light-theme');
let themeButton = document.querySelector('.theme-button');
//body.classList.add('dark-theme');
themeButton.onclick = function () {
    body.classList.toggle('dark-theme');
}
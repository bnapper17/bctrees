const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-nav-container');

hamburger.onclick = e => {
    hamburger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
}

menu.onclick = e => {
    hamburger.classList.remove('is-active');
    menu.classList.remove('is-active');
}

window.onload = () => {
    hamburger.classList.remove('is-active');
    menu.classList.remove('is-active');
}
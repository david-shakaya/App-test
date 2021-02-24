import './sass/main.scss';

const body = document.querySelector('.body');
const btnMobileMenu = document.querySelector('.menu-btn-tel');
const menuWrapper = document.querySelector('.menu-wrapper-tel');
const btnCloseMobileMenu = document.querySelector('.close-mobile-menu');

btnMobileMenu.addEventListener('click', handlleShowMenu);
btnCloseMobileMenu.addEventListener('click', handlleHideMenu);

function handlleShowMenu() {
  menuWrapper.classList.add('active');
  body.classList.add('active');
}

function handlleHideMenu() {
  menuWrapper.classList.remove('active');
  body.classList.remove('active');
}

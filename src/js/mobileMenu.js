import refs from './refs';

refs.btnMobileMenu.addEventListener('click', handlleShowMenu);
refs.btnCloseMobileMenu.addEventListener('click', handlleHideMenu);

function handlleShowMenu() {
  refs.menuWrapper.classList.add('active');
  refs.body.classList.add('active');
}

function handlleHideMenu() {
  refs.menuWrapper.classList.remove('active');
  refs.body.classList.remove('active');
}

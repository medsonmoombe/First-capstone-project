const humbergur = document.querySelector('.humber');
const menuList = document.querySelector('.desk-menu');
const navbar = document.querySelector('.second-nav');
const listItems = document.querySelectorAll('.desk-menu-list');
const closeMenu = document.querySelector('.closeMenu');

/* reset menu function */

function resetMenu() {
  listItems.forEach((item) => item.classList.remove('show'));
  humbergur.classList.remove('hidden');
  menuList.classList.remove('ul-list');
  navbar.classList.remove('expand');
  closeMenu.classList.remove('close-show');
}

humbergur.addEventListener('click', () => {
  listItems.forEach((item) => item.classList.remove('hidden'));
  listItems.forEach((item) => item.classList.add('show'));

  humbergur.classList.add('hidden');
  menuList.classList.add('ul-list');
  navbar.classList.add('expand');
  closeMenu.classList.add('close-show');

//  listItems.forEach((item) => item.addEventListener('click', resetMobileMenu));
});

closeMenu.addEventListener('click', resetMenu);

function resizeWindow() {
  if (window.innerWidth > 768) {
    resetMenu();
  }
}

window.addEventListener('resize', resizeWindow);
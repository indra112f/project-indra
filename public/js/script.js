// Navbar Fixed //
window.onscroll = function () {
  const header = document.querySelector('header');
  const FixedNav = header.offsetTop;

  if (window.pageYOffset > FixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

// kotak header //
const kotak = document.querySelector('#kotak');
const navmenu = document.querySelector('#nav-menu');

kotak.addEventListener('click', function () {
  kotak.classList.toggle('kotak-active');
  navmenu.classList.toggle('hidden');
});

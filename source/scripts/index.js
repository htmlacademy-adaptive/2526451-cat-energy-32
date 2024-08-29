const navMobile = document.querySelector('.page-header_nav');
const buttonToggle = document.querySelector('.page-header__nav-toggle');

navMobile.classList.remove('page-header_nav--state-open');
buttonToggle.classList.replace('page-header__nav-toggle--cross', 'page-header__nav-toggle--burger');


buttonToggle.onclick = function() {
  navMobile.classList.toggle('page-header_nav--state-open');
  if (buttonToggle.classList.contains('page-header__nav-toggle--cross')) {
    buttonToggle.classList.replace('page-header__nav-toggle--cross', 'page-header__nav-toggle--burger');
  }else{
    buttonToggle.classList.replace('page-header__nav-toggle--burger', 'page-header__nav-toggle--cross');
  }
};

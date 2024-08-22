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

// ...проба пера

const slider = document.querySelector('.cats-slider__wrapper');
const toggle = slider.querySelector('.slider-toggle__button');
const stick = slider.querySelector('.slider-toggle__stick');
const imageBefore = slider.querySelector('.cats-slider__cat-before');
const imageAfter = slider.querySelector('.cats-slider__cat-after');


toggle.onmousedown = function (event) {
  event.preventDefault();
  const shiftX = event.clientX - toggle.getBoundingClientRect().left;
  // получим кординаты маусдаун на круге...
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
  function onMouseMove (e) {
    let newLeft = e.clientX - shiftX - slider.getBoundingClientRect().left + (toggle.getBoundingClientRect().width / 2);

    if(newLeft < 0) {
      newLeft = 0;
    }
    if (newLeft > slider.offsetWidth) {
      newLeft = slider.offsetWidth;
    }
    newLeft = Math.round((newLeft / slider.getBoundingClientRect().width) * 100);

    toggle.style.left = `${newLeft}%`;
    stick.style.left = `${newLeft}%`;
    imageBefore.style.width = `${newLeft}%`;
    imageAfter.style.width = `${100 - newLeft}%`;
  }

  function onMouseUp () {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }
};

// разобраться еще
let isDraggging = true;

toggle.addEventListener('touchstart', (event) => {
  isDraggging = true;
  const shiftX = event.touches[0].pageX - toggle.getBoundingClientRect().left;
  toggle.addEventListener('touchmove',(e) => {
    if (isDraggging) {
      let newLeft = e.touches[0].pageX - shiftX - slider.getBoundingClientRect().left + (toggle.getBoundingClientRect().width / 2);
      if (newLeft <= 0) {
        newLeft = 0;
      }
      if (newLeft > slider.offsetWidth) {
        newLeft = slider.offsetWidth;
      }
      newLeft = Math.round((newLeft / slider.getBoundingClientRect().width) * 100);
      toggle.style.left = `${newLeft}%`;
      stick.style.left = `${newLeft}%`;
      imageBefore.style.width = `${newLeft}%`;
      imageAfter.style.width = `${100 - newLeft}%`;
    }
  });
  toggle.addEventListener('toucheend',()=> {
    isDraggging = true;
  });
});
toggle.ondragstart = function () {
  return false;
};

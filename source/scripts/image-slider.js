const slider = document.querySelector('.cats-slider__wrapper');
const toggle = slider.querySelector('.slider-toggle__button');
const stick = slider.querySelector('.slider-toggle__stick');
const imageBefore = slider.querySelector('.cats-slider__cat-before');
const imageAfter = slider.querySelector('.cats-slider__cat-after');


toggle.addEventListener('touchstart', (event) => {
  let isDraging = true;
  toggle.classList.add ('on-touch');
  const shiftX = event.touches[0].pageX - toggle.getBoundingClientRect().left;

  toggle.addEventListener('touchmove',(e) => {
    if (isDraging) {
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

  toggle.addEventListener('touchend', onToucheEnd);
  function onToucheEnd () {
    toggle.classList.remove ('on-touch');
    isDraging = false;
  }
});


toggle.onmousedown = function (event) {
  event.preventDefault();
  const shiftX = event.clientX - toggle.getBoundingClientRect().left;

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

    newLeft = (newLeft / slider.getBoundingClientRect().width) * 100;

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
toggle.ondragstart = function () {
  return false;
};

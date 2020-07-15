const ilbuniElem = document.querySelector('.topb');

function showValue() {

  let posY = ilbuniElem.getBoundingClientRect().top;

  if (posY<window.innerHeight*4.8) {
    ilbuniElem.classList.add('zoom');
  } else {
    ilbuniElem.classList.remove('zoom');
  }


}

  window.addEventListener('scroll',function () {
    showValue();

  })

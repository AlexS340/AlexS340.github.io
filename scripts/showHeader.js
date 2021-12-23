window.onscroll = function showHeader() {

  var header = document.querySelector('.header')

  if (window.pageYOffset > 150) {
    header.classList.add('header_fixed');
  } else {
    header.classList.remove('header_fixed');
  }
  if (window.matchMedia('(max-width: 700px)').matches){
    header.classList.remove('header_fixed');
  }
}

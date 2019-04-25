const toggler = document.querySelector('.menu__toggler');
const menu    = document.querySelector('.menu');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('active');
});

const myLazyLoad = new LazyLoad({
 elements_selector: ".lazyload"
});

document.addEventListener('DOMContentLoaded', function() {
 var elems = document.querySelectorAll('.parallax');
 var instances = M.Parallax.init(elems, options);
});


document.addEventListener('DOMContentLoaded', function() {
 var elems = document.querySelectorAll('.carousel');
 var instances = M.Carousel.init(elems, options);
});

// function smoothScroll(target, duration) {
//  let target = document.querySelector(target);
//  const targetPosition = target.getBoundingClientReact().top;
//  const startPostiton =
// }

// smoothScroll('.section2', 1000)
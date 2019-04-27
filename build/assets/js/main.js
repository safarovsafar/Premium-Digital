const toggler = document.querySelector('.menu__toggler');
const menu    = document.querySelector('.menu');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('active');
});

const myLazyLoad = new LazyLoad({
 elements_selector: ".lazyload"
});
AOS.init({
  duration: 2500,
});
// function smoothScroll(target, duration) {
//  let target = document.querySelector(target);
//  const targetPosition = target.getBoundingClientReact().top;
//  const startPostiton =
// }

// smoothScroll('.section2', 1000)
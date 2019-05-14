const toggler = document.querySelector(".menu__toggler");
const menu = document.querySelector(".menu");
const close = document.querySelector('.wrapper');

toggler.addEventListener("click", () => {
    toggler.classList.toggle("active");
    menu.classList.toggle("active");
    close.classList.toggle(toggler);
});

const myLazyLoad = new LazyLoad({
    elements_selector: ".lazyload"
});


AOS.init({
    duration: 2500
});


let scroller = new SmoothScroll({
    target: document.querySelector("#scroll-container"), // element container to scroll
    scrollEase: 0.05,
});
const scroll = new SmoothScroll('a[href*="#"]');
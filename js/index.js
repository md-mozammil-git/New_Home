// AOS initalization
AOS.init();

// js start here
// get element from DOM
const openbtn = document.querySelector(".nav-toggler");
const closebtn = document.querySelector(".clsbtn");
const sidebar = document.querySelector(".mobile-view");
const body = document.querySelector("body");

// function for open sidebar
function opensidebar() {
  sidebar.classList.add("active");
  body.classList.add("menu-open");
}

// function for close sidebar
function closesidebar() {
  sidebar.classList.remove("active");
  body.classList.remove("menu-open");
}

// add eventlistener
openbtn.addEventListener("click", opensidebar);
closebtn.addEventListener("click", closesidebar);

const links = document.querySelectorAll(".nav-bar ul a");
const currentUrl = window.location.href;

links.forEach((link) => {
  if (currentUrl.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});

// Splide initalization
var splide = new Splide(".splide", {
  perPage: 4,
  perMove: 1,
  type: "loop",
  autoplay: true,
  autoHeight: true,
  breakpoints: {
    1200: {
      perPage: 3,
    },
    992: {
      perPage: 2,
    },
    650: {
      perPage: 1,
    },
  },
});
splide.mount();

new Splide("#slider2", {
  type: "loop",
  perPage: 2,
  perMove: 1,
  type: "loop",
  autoplay: true,
  autoHeight: true,
  breakpoints: {
    1200: {
      perPage: 1,
    },
  },
}).mount();

new Splide("#slider3", {
  type: "loop",
  perPage: 5,
  perMove: 1,
  type: "loop",
  autoplay: true,
  autoHeight: true,
  breakpoints: {
    1200: {
      perPage: 4,
    },
    768: {
      perPage: 3,
    },
    576: {
      perPage: 1,
    },
  },
}).mount();


new Splide("#slider4", {
  type: "loop",
  perPage: 4,
  perMove: 1,
  type: "loop",
  autoplay: true,
  autoHeight: true,
  breakpoints: {
    1200: {
      perPage: 4,
    },
    768: {
      perPage: 3,
    },
    576: {
      perPage: 1,
    },
  },
}).mount();
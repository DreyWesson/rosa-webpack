gsap.registerPlugin(ScrollTrigger);
const toggler = document.querySelector(".navbar-toggler"),
  timeLn = new TimelineMax({ paused: true, reversed: true }),
  tl = new TimelineMax();
tl2 = new TimelineMax();
//
// NAVIGATION BAR
// if (window.innerWidth <= 991) {
toggler.addEventListener("click", (_) => {
  const navbar = document.querySelector(".navbar");
  if (navbar.matches(".bg-transparent")) {
    console.log("logged");
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("navbar-bg-custom");
  } else if (navbar.matches(".navbar-bg-custom")) {
    navbar.classList.remove("navbar-bg-custom");
    navbar.classList.add("bg-transparent");
  }
  timeLn.from("li", {
    x: 50,
    opacity: 0,
    stagger: 0.1,
    // ease: "back",
  });
  timeLn.reversed() ? timeLn.play() : timeLn.reversed();
});
// }

// Hero
gsap.from(".first-animation", 1, { opacity: 0, y: -50 });
gsap.from(".single-animation", 1, { opacity: 0, y: 50 });
gsap.from(".separator", 1, { opacity: 0, scale: 1.8 });
tl.from(".asterisk", { rotation: 360, opacity: 0, scale: 2, duration: 1.5 });
// DISCOVER
gsap.from(".fromLeft", {
  scrollTrigger: {
    trigger: ".fromLeft",
    start: "50px 80%",
  },
  duration: 1,
  x: -250,
  opacity: 0,
});
gsap.from(".fromRight", {
  scrollTrigger: {
    trigger: ".fromRight",
    start: "50px 80%",
  },
  duration: 1,
  x: 250,
  opacity: 0,
});

// TASTEFUL RECIPES
gsap.from(".animate-top", {
  scrollTrigger: {
    trigger: ".animate-top",
    start: "50px 80%",
  },
  duration: 1,
  y: -150,
  opacity: 0,
});
gsap.from(".animate-bottom", {
  scrollTrigger: {
    trigger: ".animate-bottom",
    start: "50px 80%",
  },
  duration: 1,
  y: 100,
  opacity: 0,
});

// DISCOVER MENU
gsap.from(".scaleUp-v1", {
  scrollTrigger: {
    trigger: ".scaleUp-v1",
    start: "200px 80%",
  },
  duration: 2,
  scale: 1.3,
  opacity: 0,
});
gsap.from(".scaleUp-v2", {
  scrollTrigger: {
    trigger: ".scaleUp-v2",
    start: "200px 80%",
  },
  duration: 2,
  scale: 1.3,
  opacity: 0,
});

// PERFECT BLEND
gsap.from(".animate-top-v2", {
  scrollTrigger: {
    trigger: ".animate-top-v2",
    start: "50px 80%",
  },
  duration: 1,
  y: -150,
  opacity: 0,
});
gsap.from(".animate-bottom-v2", {
  scrollTrigger: {
    trigger: ".animate-bottom-v2",
    start: "50px 80%",
  },
  duration: 1,
  y: 100,
  opacity: 0,
});

// Culinary DELIGHT
gsap.from(".scaleUp-v3", {
  scrollTrigger: {
    trigger: ".scaleUp-v3",
    start: "200px 80%",
  },
  duration: 2,
  scale: 1.3,
  opacity: 0,
});
gsap.from(".swipe-up", {
  scrollTrigger: {
    trigger: ".swipe-up",
    start: "50px 80%",
  },
  duration: 1,
  y: 150,
  opacity: 0,
});
gsap.from(".swipe-down", {
  scrollTrigger: {
    trigger: ".swipe-up",
    start: "50px 80%",
  },
  duration: 1,
  y: -150,
  opacity: 0,
});

// FOOTER
let tl3 = new TimelineMax({ repeat: -1, yoyo: false });
tl3.from(".pointer", { y: 15, opacity: 0, duration: 1 });
tl3.from(".pointer", { y: 15, opacity: 0, duration: 1 });
gsap.from(".scaleUp-v4", {
  scrollTrigger: {
    trigger: ".scaleUp-v4",
  },
  scale: 1.3,
  opacity: 0,
});
gsap.from(".social-media", {
  scrollTrigger: {
    trigger: ".social-media",
  },
  duration: 1,
  x: -250,
  opacity: 0,
});

gsap.from(".newsletter-container", {
  scrollTrigger: {
    trigger: ".newsletter-container",
  },
  duration: 1,
  x: 250,
  opacity: 0,
});

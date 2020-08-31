gsap.registerPlugin(ScrollTrigger);
const toggler = document.querySelector(".navbar-toggler"),
  timeLn = new TimelineMax({ paused: true, reversed: true }),
  tl = new TimelineMax();
tl2 = new TimelineMax();

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

tl.from(".headline", { scale: 2, opacity: 0 })
  .from(".sub-headline", { y: 30, opacity: 0 })
  .from(".asterisk", { rotation: 360, opacity: 0 })
  .from(".line", { opacity: 0 })
  .from(".single-animation", { y: 10, opacity: 0 });

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
gsap.from(".scaleUp", {
  scrollTrigger: {
    trigger: ".scaleUp",
    start: "200px 80%",
  },
  duration: 2,
  scale: 1.3,
  opacity: 0,
});
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

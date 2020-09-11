gsap.registerPlugin(ScrollTrigger);
const toggler = document.querySelector(".navbar-toggler"),
  timeLn = new TimelineMax({ paused: true, reversed: true });

//
// NAVIGATION BAR
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
  });
  timeLn.reversed() ? timeLn.play() : timeLn.reversed();
});

// Scale Up
gsap.utils.toArray(".scale_up").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "200px 80%",
    },
    duration: 2,
    scale: 1.3,
    opacity: 0,
  });
});

// Swipe left
gsap.utils.toArray(".swipe_left").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "50px 80%",
    },
    duration: 1,
    x: 250,
    opacity: 0,
  });
});
// Swipe right
gsap.utils.toArray(".swipe_right").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "50px 80%",
    },
    duration: 1,
    x: -250,
    opacity: 0,
  });
});

// Swipe down
gsap.utils.toArray(".swipe_up").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "50px 80%",
    },
    duration: 1,
    y: 150,
    opacity: 0,
  });
});
// Swipe up
gsap.utils.toArray(".swipe_down").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "50px 80%",
    },
    duration: 1,
    y: -150,
    opacity: 0,
  });
});

gsap.utils.toArray(".roll").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
    },
    duration: 2,
    opacity: 0,
    rotate: -360,
    scale: 0,
  });
});

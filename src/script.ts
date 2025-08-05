import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navbar from "./components/Navbar";

//timer function
const delay = ms => new Promise(res => setTimeout(res, ms));
const timer = async (ms) => {
  await delay(ms);
};

//scroll smooth
const lenis = new Lenis({
  autoRaf: true,
});


function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


//scrolltrigger stuff

gsap.registerPlugin(ScrollTrigger);

function waitForElements(selectors, callback) {
  const interval = setInterval(() => {
    const allExist = selectors.every(sel => document.querySelector(sel));
    if (allExist) {
      clearInterval(interval);
      callback();
    }
  }, 50);
}

async function loadProjects() {
  const projectItems = document.querySelectorAll(".project-card");

  for (let i=0;i<3;i++) {
    gsap.fromTo(projectItems[i], {
      opacity: 0,
      y:50,
    },{
      opacity: 1,
      y:0,
      duration: 0.5,
    });
    await timer(200);
  }
}

waitForElements([ ".name-overlay", ".orjust", ".overlay-name", ".navbar"], () => {
  const orJust = document.querySelector(".orjust");
  const orJustLine = document.querySelector(".orjust-line");
  const overlayName = document.querySelector(".overlay-name");
  const geriWhite = document.querySelector(".geri-white");
  const forShort = document.querySelector(".for-short");
  const navbar = document.querySelector(".navbar");
  
  const scrollTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".name-overlay",
    start: "top 60%",
    end: "top -20%",
    scrub: true,
    }
  });

  scrollTl
    .to(forShort, { opacity:1}, 0.6)
    .to(geriWhite, { opacity: 1}, 0.2)
    .to(orJust, { opacity: 1}, 0.5)
    .to(orJustLine, { width: "5vw", ease: "power1.inOut" }, 0.5)
    .to(overlayName, { letterSpacing: "18.6vw", ease: "power3.inOut" }, 0.4)

    gsap.timeline({
    scrollTrigger: {
      trigger: ".projects",
      start: "top 102px",
      end: "top -100px",
      scrub: true,
      }
    })
    .to(navbar, { opacity: 0, y: -104}, 0)
    .to(".nav-buffer", { opacity: 0}, 0);

    gsap.timeline({
      scrollTrigger: {
        trigger: ".projects",
        start: "top 45%",
        onEnter: loadProjects,
        markers: true,
        once: true
      }
    })
});

//see more loading
document.querySelector(".see-more")?.addEventListener("click",()=>{
  
})
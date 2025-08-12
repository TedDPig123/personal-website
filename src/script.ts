import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

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

async function loadFirstProjects() {
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

async function loadAllProjects() {
  const projectItems = document.querySelectorAll(".project-card");

  for (let i=3;i<projectItems.length;i++) {
    gsap.fromTo(projectItems[i], {
      opacity: 0,
      y:50,
      height:function(i, target) {
        target.style.height = "auto"; 
        const height = target.offsetHeight; //record the natural height
        target.style.height = "0px"; //now reset it to 0
        return height; //return the natural height
      }
    },{
      opacity: 1,
      y:0,
      duration: 0.3,
      ease: "power1.out"
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
  const projectItems = document.querySelectorAll(".project-card");

  //making only the first 3 visible
  for (let i=0;i<3;i++) {
    projectItems[i].classList.remove("hidden")
  }
  
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
    .to(overlayName, { letterSpacing: "18.6vw", ease: "power1.in" }, 0.4)

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
        onEnter: loadFirstProjects,
        once: true
      }
    })
});

//see more / see less functionality
let seeMore = true;

waitForElements([".see-more"], () => {
  const seeMoreBtn = document.querySelector(".see-more");

  seeMoreBtn?.addEventListener("click", async () => {
    if (seeMore){
      const projectItems = document.querySelectorAll(".project-card");
      for (let i = 0; i < projectItems.length; i++) {
        projectItems[i].classList.remove("hidden");
      }

      await loadAllProjects();
      lenis.resize();

      seeMoreBtn.textContent = "see less";
      seeMore = false;
    }else{
      const projectItems = document.querySelectorAll(".project-card");
      const extraProjects = Array.from(projectItems).slice(3)
      
        for (let i = extraProjects.length-1; i >= 0; i--) {
          await gsap.to(extraProjects[i], {
          opacity: 0,
          y: 20,
          duration: 0.1,
          ease: "power1.out"
        });
      }
      await gsap.to(extraProjects, {
          opacity: 0,
          height: 0,
          duration: 0.5,
          onComplete: () => {
            extraProjects.forEach(e => e.classList.add("hidden"));
          }
      });

      // projectItems[i].classList.add("hidden");

      lenis.resize();
      seeMoreBtn.textContent = "see more";
      seeMore = true;
    } 
  });
});

//infinite scroll animation
const scrollers = document.querySelectorAll(".scroller");

addAnimation();

function addAnimation(){
  scrollers.forEach((scroller)=>{
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      scrollerInner?.appendChild(duplicatedItem);
    })
  })
}
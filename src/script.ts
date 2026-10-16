import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import Lenis from "lenis";

// Easing for the "GERI" letter-spacing animation, written like CSS cubic-bezier(x1, y1, x2, y2).
// Tip: design one at https://cubic-bezier.com and paste the four numbers here.
// The default below matches the previous "power1.in" ease.
const NAME_SPACING_BEZIER = ".28,-0.01,.48,1";


//timer function
const delay = (ms: number): Promise<void> => new Promise(res => setTimeout(res, ms));
const timer = async (ms: number): Promise<void> => {
  await delay(ms);
};

//scroll smooth
const lenis = new Lenis({
  autoRaf: true,
});

function raf(time: number): void {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//scrolltrigger stuff
gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create("nameSpacing", NAME_SPACING_BEZIER);

function waitForElements(selectors: string[], callback: () => void): void {
  const interval = setInterval(() => {
    const allExist = selectors.every((sel: string) => document.querySelector(sel));
    if (allExist) {
      clearInterval(interval);
      callback();
    }
  }, 20);
}

async function loadFirstProjects(): Promise<void> {
  const projectItems = document.querySelectorAll(".project-card");

  for (let i = 0; i < 3; i++) {
    gsap.fromTo(projectItems[i], {
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
    });
    await timer(200);
  }
}

async function loadAllProjects(): Promise<void> {
  const projectItems = document.querySelectorAll(".project-card");

  for (let i = 3; i < projectItems.length; i++) {
    // Grow from 0 to the card's natural height, then drop the inline height so the
    // card can still resize (e.g. on window resize) after the reveal.
    gsap.fromTo(projectItems[i], {
      opacity: 0,
      y: 50,
      height: 0,
    }, {
      opacity: 1,
      y: 0,
      height: "auto",
      duration: 0.3,
      ease: "power1.out",
      clearProps: "height"
    });
    await timer(200);
  }
}

waitForElements([".name-overlay", ".orjust", ".overlay-name", ".navbar"], () => {
  const orJust = document.querySelector(".orjust");
  const orJustLine = document.querySelector(".orjust-line");
  const overlayName = document.querySelector(".overlay-name");
  const overlayName2 = document.querySelector(".overlay-name-phone");
  const geriWhite = document.querySelector(".geri-white");
  const forShort = document.querySelector(".for-short");
  const navbar = document.querySelector(".navbar");
  const projectItems = document.querySelectorAll(".project-card");

  for (let i = 0; i < 3; i++) {
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

  // Both timelines end at "top -20%". The name and "or — just" tweens are sized to run
  // right up to the end of their timeline so they all finish together.
  gsap.timeline({
    scrollTrigger: {
      trigger: ".name-overlay",
      start: "top 40%",
      end: "top -20%",
      scrub: true,
    }
  }).to(overlayName, { letterSpacing: "18.6vw", ease: "nameSpacing", duration: 0.5 }, 0.4)
    .to(overlayName2, { letterSpacing: "15vw", ease: "nameSpacing", duration: 0.6 }, 0.3)

  scrollTl
    .to(forShort, { opacity: 1 }, 0.6)
    .to(geriWhite, { opacity: 1 }, 0.2)
    .to(orJust, { opacity: 1, duration: 0.6 }, 0.5)
    .to(orJustLine, { width: "5vw", ease: "power1.inOut", duration: 0.6 }, 0.5)
    
  gsap.timeline({
    scrollTrigger: {
      trigger: ".projects",
      start: "top 102px",
      end: "top -100px",
      scrub: true,
    }
  })
    .to(navbar, { opacity: 0, y: -104 }, 0)
    .to(".nav-buffer", { opacity: 0 }, 0);

  gsap.timeline({
    scrollTrigger: {
      trigger: ".projects",
      start: "top 45%",
      onEnter: loadFirstProjects,
      once: true
    }
  })
});

// Lenis only re-measures the page when <html> itself resizes, but nearly all of this page's
// content overflows a fixed-height section, so <html> never changes size. Watch the
// sections directly so late-loading images/fonts don't leave Lenis short of the bottom.
waitForElements([".rest-of-stuff-container"], () => {
  const container = document.querySelector(".rest-of-stuff-container")!;
  let resizeQueued = false;
  const observer = new ResizeObserver(() => {
    if (resizeQueued) return;
    resizeQueued = true;
    requestAnimationFrame(() => {
      resizeQueued = false;
      lenis.resize();
    });
  });
  observer.observe(container);
  Array.from(container.children).forEach(child => observer.observe(child));
});

let seeMore: boolean = true;

waitForElements([".see-more"], () => {
  const seeMoreBtn = document.querySelector(".see-more") as HTMLElement | null;

  seeMoreBtn?.addEventListener("click", async () => {
    if (seeMore) {
      const projectItems = document.querySelectorAll(".project-card");
      for (let i = 0; i < projectItems.length; i++) {
        projectItems[i].classList.remove("hidden");
      }

      await loadAllProjects();
      lenis.resize();

      seeMoreBtn.textContent = "see less";
      seeMore = false;
    } else {
      const projectItems = document.querySelectorAll(".project-card");
      const extraProjects = Array.from(projectItems).slice(3)
      
      for (let i = extraProjects.length - 1; i >= 0; i--) {
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

      lenis.resize();
      seeMoreBtn.textContent = "see more";
      seeMore = true;
    } 
  });
});

const scrollers = document.querySelectorAll(".scroller");

addAnimation();

function addAnimation(): void {
  scrollers.forEach((scroller) => {
    const scrollerInner = scroller.querySelector(".scroller__inner");
    
    if (scrollerInner) {
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  });
}
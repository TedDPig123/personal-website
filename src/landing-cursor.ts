import comp1 from "./landingshots/comp1.png"
import comp2 from "./landingshots/comp2.png"
import comp3 from "./landingshots/comp3.png"
import art1 from "./landingshots/art1.png"
import art2 from "./landingshots/art2.png"
import art3 from "./landingshots/art3.png"
import music1 from "./landingshots/music1.png"
import music2 from "./landingshots/music2.png"
import music3 from "./landingshots/music3.png"

const images = [comp1, comp2, comp3, art1, art2, art3, music1, music2, music3];

function waitForElements(selectors: string[], callback: () => void): void {
    const interval = setInterval(() => {
        const allExist = selectors.every((sel: string) => document.querySelector(sel));
        if (allExist) {
            clearInterval(interval);
            callback();
        }
    }, 20);
}

waitForElements([".track-container", ".name-overlay"], () => {
    // courtesy of Codegrid (they do really awesome stuff)
    const container = document.querySelector(".track-container");
    const nameOverlay = document.querySelector(".name-overlay");

    const config = {
        imageCount: 9,
        imageLifespan: 1000,
        removalDelay: 50,
        mouseThreshold: 200,
        scrollThreshold: 50,
        idleCursorInterval: 300,
        inDuration: 750,
        outDuration: 1000,
        inEasing: "cubic-bezier(.07,0.5,0.5,1)",
        outEasing: "cubic-bezier(.87, 0, .13, 1)"
    }

    const trail = [];

    let mouseX = 0;
    let mouseY = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let isMoving = false;
    let isCursorInContainer = 0;
    let lastRemovalTime = 0;
    let lastSteadyImageTime = 0;
    let lastScrollTime = 0;
    let isScrolling = false;
    let scrollTicking = false;

    function isInContainer(x,y){
        const rect = container.getBoundingClientRect();
        if(!rect){
            return false;
        }
        return (
            x >= rect.left && x <= rect.right &&
            y >= rect.top && y <= rect.bottom
        );
    }

    function setInitialMousePos(event){
        mouseX = event.clientX;
        mouseY = event.clientY;
        lastMouseX = mouseX;
        lastMouseY = mouseY;
        isCursorInContainer = isInContainer(mouseX, mouseY);
        document.removeEventListener("mouseover", setInitialMousePos, false);
    };
    document.addEventListener("mouseover", setInitialMousePos, false);

    function hasMovedEnough(){
        const distance = Math.sqrt(Math.pow(mouseX - lastMouseX, 2) + Math.pow(mouseY - lastMouseY, 2));
        return distance > config.mouseThreshold;
    }

    function createTrailImage(){
        if(!isCursorInContainer || mouseY < 110 || nameOverlay?.getBoundingClientRect().top < 110){
            return;
        }

        const now = Date.now();

        if(isMoving && hasMovedEnough()){
            lastMouseX = mouseX;
            lastMouseY = mouseY;
            createImage();
        }
    }

    function createImage(){
        const img = document.createElement("img");
        img.classList.add("trail-img");

        const randomIndex = Math.floor(Math.random() * images.length);
        const rotation = (Math.random() - 0.5) * 50;
        img.src = images[randomIndex];

        const rect = container?.getBoundingClientRect();
        const relativeX = mouseX - rect?.left;
        const relativeY = mouseY - rect?.top;

        img.style.position = 'absolute';
        img.style.left = `${relativeX}px`;
        img.style.top = `${relativeY}px`; 
        img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0)`;

        container?.appendChild(img);

        setTimeout(()=>{
            img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(1)`
        },10)

        trail.push({
            element: img,
            rotation: rotation,
            removeTime: Date.now() + config.imageLifespan
        })
    };

    function createScrollTrailImage(){
        if(!isCursorInContainer){
            return;
        }

        lastMouseX += (config.mouseThreshold + 10) * (Math.random() > 0.5 ? 1 : -1);
        lastMouseY += (config.mouseThreshold + 10) * (Math.random() > 0.5 ? 1 : -1);

        createImage();

        lastMouseX = mouseX;
        lastMouseY = mouseY;
    }

    function removeOldImages(){
        const now = Date.now();

        if(now - lastRemovalTime < config.removalDelay || trail.length === 0){
            return;
        }

        const oldestImage = trail[0];
        if(now >= oldestImage.removeTime){
            const imgToRemove = trail.shift();

            // imgToRemove.element.style.transition = `transform ${config.outDuration}ms ${config.outEasing}`;
            imgToRemove.element.style.transform = `translate(-50%, -50%) rotate(${imgToRemove.rotation}deg) scale(0)`;
            lastRemovalTime = now;

            setTimeout(()=>{
                if(imgToRemove.element.parentNode){
                    imgToRemove.element.parentNode.removeChild(imgToRemove.element);
                }
            }, config.outDuration);
        }
    }

    document.addEventListener("mousemove", (e)=>{
        mouseX = e.clientX;
        mouseY = e.clientY;
        isCursorInContainer = isInContainer(mouseX, mouseY);

        if(isCursorInContainer){
            isMoving = true;
            clearTimeout(window.moveTimeout);
            window.moveTimeout = setTimeout(()=>{
                isMoving = false;
            },100)
        }
    });

    // window.addEventListener("scroll", ()=>{
    //     isCursorInContainer = isInContainer(mouseX, mouseY);

    //     if(isCursorInContainer){
    //         isMoving = true;
    //         lastMouseX += (Math.random());

    //         clearTimeout(window.scrollTimeout);
    //         window.scrollTimeout = setTimeout(()=>{
    //             isMoving = false;
    //         },100)
    //     }
    // }, {passive:false});

    // window.addEventListener("scroll", ()=>{
    //     const now = Date.now();
    //     isScrolling = true;

    //     if(now - lastScrollTime < config.scrollThreshold){
    //         return;
    //     }

    //     lastScrollTime = now;

    //     if(!scrollTicking){
    //         requestAnimationFrame(()=>{
    //             if(isScrolling){
    //                 createScrollTrailImage();
    //                 isScrolling = false;
    //             }
    //             scrollTicking = false;
    //         });
    //         scrollTicking = true;
    //     }
    // }, {passive: true});

    function animate(){
        const viewportWidth = window.innerWidth;
        if(viewportWidth < 500){
            return;
        }
        createTrailImage();
        removeOldImages();
        requestAnimationFrame(animate);
    };
    animate();
});
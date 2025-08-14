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

interface TrailImage {
    element: HTMLImageElement;
    rotation: number;
    removeTime: number;
}

declare global {
    interface Window {
        moveTimeout?: number;
        scrollTimeout?: number;
    }
}

function waitForElements(selectors: string[], callback: () => void): void {
    const interval = setInterval(() => {
        const allExist = selectors.every((sel: string) => document.querySelector(sel));
        if (allExist) {
            clearInterval(interval);
            callback();
        }
    }, 20);
}

waitForElements([".track-container", ".name-overlay", ".landing-photo-phone"], () => {
    const phoneImage = document.getElementById("landing-photo-phone-picture") as HTMLImageElement;

    setInterval(()=>{
        const random : number = Math.floor(Math.random()*images.length);
        if(phoneImage){
            phoneImage.src = images[random];
        }
    },1500);

    // courtesy of Codegrid (they do really awesome stuff)
    const container = document.querySelector(".track-container") as HTMLElement;
    const nameOverlay = document.querySelector(".name-overlay") as HTMLElement;

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

    const trail: TrailImage[] = [];

    let mouseX = 0;
    let mouseY = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let isMoving = false;
    let isCursorInContainer = false;
    let lastRemovalTime = 0;

    function isInContainer(x: number, y: number): boolean {
        if (!container) {
            return false;
        }
        const rect = container.getBoundingClientRect();
        if (!rect) {
            return false;
        }
        return (
            x >= rect.left && x <= rect.right &&
            y >= rect.top && y <= rect.bottom
        );
    }

    function setInitialMousePos(event: MouseEvent): void {
        mouseX = event.clientX;
        mouseY = event.clientY;
        lastMouseX = mouseX;
        lastMouseY = mouseY;
        isCursorInContainer = isInContainer(mouseX, mouseY);
        document.removeEventListener("mouseover", setInitialMousePos, false);
    }
    document.addEventListener("mouseover", setInitialMousePos, false);

    function hasMovedEnough(): boolean {
        const distance = Math.sqrt(Math.pow(mouseX - lastMouseX, 2) + Math.pow(mouseY - lastMouseY, 2));
        return distance > config.mouseThreshold;
    }

    function createTrailImage(): void {
        if (!isCursorInContainer || mouseY < 110 || (nameOverlay?.getBoundingClientRect().top ?? 0) < 110) {
            return;
        }

        if (isMoving && hasMovedEnough()) {
            lastMouseX = mouseX;
            lastMouseY = mouseY;
            createImage();
        }
    }

    function createImage(): void {
        if (!container) return;

        const img = document.createElement("img");
        img.classList.add("trail-img");

        const randomIndex = Math.floor(Math.random() * images.length);
        const rotation = (Math.random() - 0.5) * 50;
        img.src = images[randomIndex];

        const rect = container.getBoundingClientRect();
        const relativeX = mouseX - rect.left;
        const relativeY = mouseY - rect.top;

        img.style.position = 'absolute';
        img.style.left = `${relativeX}px`;
        img.style.top = `${relativeY}px`;
        img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0)`;

        container.appendChild(img);

        setTimeout(() => {
            img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(1)`
        }, 10)

        trail.push({
            element: img,
            rotation: rotation,
            removeTime: Date.now() + config.imageLifespan
        });
    }

    function removeOldImages(): void {
        const now = Date.now();

        if (now - lastRemovalTime < config.removalDelay || trail.length === 0) {
            return;
        }

        const oldestImage = trail[0];
        if (now >= oldestImage.removeTime) {
            const imgToRemove = trail.shift();
            
            if (imgToRemove) {
                imgToRemove.element.style.transform = `translate(-50%, -50%) rotate(${imgToRemove.rotation}deg) scale(0)`;
                lastRemovalTime = now;

                setTimeout(() => {
                    if (imgToRemove.element.parentNode) {
                        imgToRemove.element.parentNode.removeChild(imgToRemove.element);
                    }
                }, config.outDuration);
            }
        }
    }

    document.addEventListener("mousemove", (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        isCursorInContainer = isInContainer(mouseX, mouseY);

        if (isCursorInContainer) {
            isMoving = true;
            if (window.moveTimeout) {
                clearTimeout(window.moveTimeout);
            }
            window.moveTimeout = setTimeout(() => {
                isMoving = false;
            }, 100);
        }
    });

    function animate(): void {
        const viewportWidth = window.innerWidth;
        if (viewportWidth < 500) {
            requestAnimationFrame(animate);
            return;
        }
        createTrailImage();
        removeOldImages();
        requestAnimationFrame(animate);
    }
    animate();
});
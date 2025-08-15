import comp1 from "./landingshots/comp1.png"
import comp2 from "./landingshots/comp2.png"
import comp3 from "./landingshots/comp3.png"
import art1 from "./landingshots/art1.png"
import art2 from "./landingshots/art2.png"
import art3 from "./landingshots/art3.png"
import music1 from "./landingshots/music1.png"
import music2 from "./landingshots/music2.png"
import music3 from "./landingshots/music3.png"

const IMAGES = [comp1, comp2, comp3, art1, art2, art3, music1, music2, music3];

const CONFIG = {
    imageCount: 9,
    imageLifespan: 1000,
    removalDelay: 80,
    mouseThreshold: 40000,
    scrollThreshold: 50,
    minViewportWidth: 500,
    minMouseY: 110,
    inDuration: 750,
    outDuration: 800,
    inEasing: "cubic-bezier(.07,0.5,0.5,1)",
    outEasing: "cubic-bezier(.87, 0, .13, 1)",
    maxRotation: 25,
    phoneChangeInterval: 1500,
    moveStopDelay: 100
} as const;

interface TrailImage {
    element: HTMLImageElement;
    rotation: number;
    removeTime: number;
}

let container: HTMLElement | null = null;
let nameOverlay: HTMLElement | null = null;
let containerRect: DOMRect | null = null;
let nameOverlayTop = 0;

let mouseX = 0;
let mouseY = 0;
let lastMouseX = 0;
let lastMouseY = 0;
let isMoving = false;
let isCursorInContainer = false;
let lastRemovalTime = 0;
let cachedViewportWidth = 0;

let moveTimeoutId: number | null = null;
let phoneIntervalId: number | null = null;
let animationId: number | null = null;

const trail: TrailImage[] = [];

const imagePool: HTMLImageElement[] = [];
const MAX_POOL_SIZE = 20;

function waitForElements(selectors: string[], callback: () => void): void {
    const interval = setInterval(() => {
        if (selectors.every(sel => document.querySelector(sel))) {
            clearInterval(interval);
            callback();
        }
    }, 20);
}

function preloadImages(): void {
    const fragment = document.createDocumentFragment();
    IMAGES.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        fragment.appendChild(link);
    });
    document.head.appendChild(fragment);
}

function getPooledImage(): HTMLImageElement {
    const img = imagePool.pop() || document.createElement("img");
    img.className = "trail-img";
    return img;
}

function returnToPool(img: HTMLImageElement): void {
    if (imagePool.length < MAX_POOL_SIZE) {
        img.style.cssText = '';
        img.removeAttribute('src');
        imagePool.push(img);
    }
}

function updateCachedValues(): void {
    cachedViewportWidth = window.innerWidth;
    if (container) {
        containerRect = container.getBoundingClientRect();
    }
    if (nameOverlay) {
        nameOverlayTop = nameOverlay.getBoundingClientRect().top;
    }
}

function isInContainer(x: number, y: number): boolean {
    if (!containerRect) return false;
    return (
        x >= containerRect.left && x <= containerRect.right &&
        y >= containerRect.top && y <= containerRect.bottom
    );
}

function hasMovedEnough(): boolean {
    const deltaX = mouseX - lastMouseX;
    const deltaY = mouseY - lastMouseY;
    const distanceSquared = deltaX * deltaX + deltaY * deltaY;
    return distanceSquared > CONFIG.mouseThreshold;
}

function createTrailImage(): void {
    if (!isCursorInContainer || mouseY < CONFIG.minMouseY || nameOverlayTop < CONFIG.minMouseY) {
        return;
    }

    if (isMoving && hasMovedEnough()) {
        lastMouseX = mouseX;
        lastMouseY = mouseY;
        createImage();
    }
}

function createImage(): void {
    if (!container || !containerRect) return;

    const img = getPooledImage();
    const randomIndex = Math.floor(Math.random() * IMAGES.length);
    const rotation = (Math.random() - 0.5) * CONFIG.maxRotation;
    
    img.src = IMAGES[randomIndex];

    const relativeX = mouseX - containerRect.left;
    const relativeY = mouseY - containerRect.top;

    img.style.cssText = `
        position: absolute;
        left: ${relativeX}px;
        top: ${relativeY}px;
        transform: translate(-50%, -50%) rotate(${rotation}deg) scale(0);
        pointer-events: none;
    `;

    container.appendChild(img);

    img.offsetHeight;
    img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(1)`;

    trail.push({
        element: img,
        rotation: rotation,
        removeTime: performance.now() + CONFIG.imageLifespan
    });
}

function removeOldImages(): void {
    const now = performance.now();

    if (now - lastRemovalTime < CONFIG.removalDelay || trail.length === 0) {
        return;
    }

    let removed = false;
    
    while (trail.length > 0 && now >= trail[0].removeTime) {
        const imgToRemove = trail.shift()!;
        
        imgToRemove.element.style.transform = `translate(-50%, -50%) rotate(${imgToRemove.rotation}deg) scale(0)`;
        imgToRemove.element.style.transition = `transform ${CONFIG.outDuration}ms ${CONFIG.outEasing}`;
        
        setTimeout(() => {
            if (imgToRemove.element.parentNode) {
                imgToRemove.element.parentNode.removeChild(imgToRemove.element);
                returnToPool(imgToRemove.element);
            }
        }, CONFIG.outDuration);
        
        removed = true;
    }
    
    if (removed) {
        lastRemovalTime = now;
    }
}

function animate(): void {
    if (cachedViewportWidth < CONFIG.minViewportWidth) {
        animationId = requestAnimationFrame(animate);
        return;
    }
    
    createTrailImage();
    removeOldImages();
    animationId = requestAnimationFrame(animate);
}

function startAnimation(): void {
    if (!animationId) {
        animationId = requestAnimationFrame(animate);
    }
}

function stopAnimation(): void {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
}

function handleMouseMove(e: MouseEvent): void {
    mouseX = e.clientX;
    mouseY = e.clientY;
    isCursorInContainer = isInContainer(mouseX, mouseY);

    if (isCursorInContainer) {
        isMoving = true;
        
        if (moveTimeoutId) {
            clearTimeout(moveTimeoutId);
        }
        
        moveTimeoutId = setTimeout(() => {
            isMoving = false;
        }, CONFIG.moveStopDelay);
    }
}

function handleResize(): void {
    updateCachedValues();
}

function handleScroll(): void {
    updateCachedValues();
}

waitForElements([".track-container", ".name-overlay", ".landing-photo-phone"], () => {
    const phoneImage = document.getElementById("landing-photo-phone-picture") as HTMLImageElement;
    container = document.querySelector(".track-container") as HTMLElement;
    nameOverlay = document.querySelector(".name-overlay") as HTMLElement;

    if (!container || !nameOverlay) return;

    preloadImages();
    updateCachedValues();

    if (phoneImage) {
        let currentPhoneIndex = 0;
        phoneIntervalId = setInterval(() => {
            currentPhoneIndex = (currentPhoneIndex + 1) % IMAGES.length;
            phoneImage.src = IMAGES[currentPhoneIndex];
        }, CONFIG.phoneChangeInterval);
    }

    function setInitialMousePos(event: MouseEvent): void {
        mouseX = event.clientX;
        mouseY = event.clientY;
        lastMouseX = mouseX;
        lastMouseY = mouseY;
        isCursorInContainer = isInContainer(mouseX, mouseY);
    }

    document.addEventListener("mousemove", setInitialMousePos, { once: true, passive: true });
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });

    startAnimation();

    return function cleanup() {
        stopAnimation();
        
        if (phoneIntervalId) {
            clearInterval(phoneIntervalId);
        }
        
        if (moveTimeoutId) {
            clearTimeout(moveTimeoutId);
        }
        
        trail.forEach(item => {
            if (item.element.parentNode) {
                item.element.parentNode.removeChild(item.element);
            }
        });
        trail.length = 0;
        
        imagePool.length = 0;
        
        document.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        document.removeEventListener("scroll", handleScroll);
    };
});
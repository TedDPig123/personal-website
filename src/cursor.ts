import center from './headshots/center.png'
import p0 from './headshots/portrait0.png'
import p1 from './headshots/portrait1.png'
import p2 from './headshots/portrait2.png'
import p3 from './headshots/portrait3.png'
import p4 from './headshots/portrait4.png'
import p5 from './headshots/portrait5.png'
import p6 from './headshots/portrait6.png'
import p7 from './headshots/portrait7.png'
import p8 from './headshots/portrait8.png'
import p9 from './headshots/portrait9.png'
import p10 from './headshots/portrait10.png'
import p11 from './headshots/portrait11.png'

const UPDATE_THRESHOLD = 16; // ~60fps
const MIN_VIEWPORT_WIDTH = 500;
const FACE_MARGIN = 80;
const VIEWPORT_THRESHOLD = 0.55;
const ANGLE_OFFSET = 105;
const ANGLE_STEP = 30;
const IMAGE_MAP = [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11];

let cachedViewportWidth = 0;
let cachedFaceRect: DOMRect | null = null;
let faceCenterX = 0;
let faceCenterY = 0;
let lastUpdateTime = 0;
let mouseX = 0;
let mouseY = 0;
let currentImageSrc = center;
let animationId: number | null = null;
let isMouseInWindow = true;

function waitForElements(selectors: string[], callback: () => void): void {
    const interval = setInterval(() => {
        if (selectors.every(sel => document.querySelector(sel))) {
            clearInterval(interval);
            callback();
        }
    }, 20);
}

function preloadImages(): void {
    const images = [center, ...IMAGE_MAP];
    const fragment = document.createDocumentFragment();
    
    images.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        fragment.appendChild(link);
    });
    
    document.head.appendChild(fragment);
}

function lightThrottle<T extends (...args: any[]) => void>(func: T, delay: number): T {
    let lastExecTime = 0;
    return ((...args: any[]) => {
        const currentTime = performance.now();
        if (currentTime - lastExecTime > delay) {
            func(...args);
            lastExecTime = currentTime;
        }
    }) as T;
}

function updateCachedValues(face: HTMLImageElement): void {
    cachedViewportWidth = window.innerWidth;
    cachedFaceRect = face.getBoundingClientRect();
    
    if (cachedFaceRect) {
        faceCenterX = cachedFaceRect.left + (cachedFaceRect.width * 0.5);
        faceCenterY = cachedFaceRect.top + (cachedFaceRect.height * 0.5);
    }
}

function isOnFace(x: number, y: number): boolean {
    return cachedFaceRect ? (
        x >= cachedFaceRect.left + FACE_MARGIN && 
        x <= cachedFaceRect.right - FACE_MARGIN &&
        y >= cachedFaceRect.top + FACE_MARGIN && 
        y <= cachedFaceRect.bottom - FACE_MARGIN
    ) : false;
}

function updateImage(face: HTMLImageElement): void {
    const now = performance.now();
    if (now - lastUpdateTime < UPDATE_THRESHOLD) return;
    lastUpdateTime = now;

    if (cachedViewportWidth < MIN_VIEWPORT_WIDTH || !cachedFaceRect) return;

    let newImageSrc: string;
    const deltaX = mouseX - faceCenterX;

    if (Math.abs(deltaX) > VIEWPORT_THRESHOLD * cachedViewportWidth) {
        newImageSrc = center;
    } else if (isOnFace(mouseX, mouseY)) {
        newImageSrc = center;
    } else {
        const deltaY = mouseY - faceCenterY;
        const angle = Math.atan2(deltaY, deltaX);
        const angleDegrees = (angle * 180 / Math.PI + 360) % 360;
        
        const angleIndex = Math.floor(((angleDegrees + ANGLE_OFFSET) % 360) / ANGLE_STEP);
        newImageSrc = IMAGE_MAP[angleIndex >= 12 ? 0 : angleIndex] || center;
    }

    if (newImageSrc !== currentImageSrc) {
        face.src = newImageSrc;
        currentImageSrc = newImageSrc;
    }
}

waitForElements([".about-portrait"], () => {
    const face = document.querySelector(".about-portrait") as HTMLImageElement;
    if (!face) return;

    preloadImages();
    updateCachedValues(face);

    function animate(): void {
        if (isMouseInWindow) {
            updateImage(face);
        }
        animationId = requestAnimationFrame(animate);
    }

    animationId = requestAnimationFrame(animate);

    function handleMouseMove(e: MouseEvent): void {
        mouseX = e.clientX;
        mouseY = e.clientY;
        isMouseInWindow = true;
    }

    const handleResize = lightThrottle(() => {
        updateCachedValues(face);
    }, 250);

    const handleScroll = lightThrottle(() => {
        updateCachedValues(face);
    }, 100);

    function setInitialMousePos(event: MouseEvent): void {
        mouseX = event.clientX;
        mouseY = event.clientY;
        isMouseInWindow = true;
    }

    document.addEventListener("mousemove", setInitialMousePos, { once: true, passive: true });
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    document.addEventListener("mouseleave", () => {
        isMouseInWindow = false;
    }, { passive: true });

    document.addEventListener("mouseenter", () => {
        isMouseInWindow = true;
    }, { passive: true });

    return function cleanup() {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
        
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
        document.removeEventListener("mouseleave", () => isMouseInWindow = false);
        document.removeEventListener("mouseenter", () => isMouseInWindow = true);
    };
});
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

function waitForElements(selectors: string[], callback: () => void): void {
    const interval = setInterval(() => {
        const allExist = selectors.every((sel: string) => document.querySelector(sel));
        if (allExist) {
            clearInterval(interval);
            callback();
        }
    }, 20);
}

function preloadImages(): void {
    const images = [center, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11];
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

function throttle<T extends (...args: any[]) => void>(func: T, delay: number): T {
    let timeoutId: number | null = null;
    let lastExecTime = 0;
    return ((...args: any[]) => {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime > delay) {
            func(...args);
            lastExecTime = currentTime;
        } else {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func(...args);
                lastExecTime = Date.now();
            }, delay - (currentTime - lastExecTime));
        }
    }) as T;
}

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
    let timeoutId: number | null = null;
    return ((...args: any[]) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    }) as T;
}

waitForElements([".about-portrait"], () => {
    const face = document.querySelector(".about-portrait") as HTMLImageElement;

    if (!face) {
        return;
    }

    preloadImages();

    let cachedViewportWidth = window.innerWidth;
    let cachedFaceRect: DOMRect | null = null;
    let lastUpdateTime = 0;
    const UPDATE_THRESHOLD = 16; // about 60fps

    const imageMap = [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11];

    function updateCachedValues(): void {
        cachedViewportWidth = window.innerWidth;
        cachedFaceRect = face.getBoundingClientRect();
    }

    function isOnFace(x: number, y: number): boolean {
        if (!cachedFaceRect) return false;
        
        const margin = 80;
        return (
            x >= cachedFaceRect.left + margin && 
            x <= cachedFaceRect.right - margin &&
            y >= cachedFaceRect.top + margin && 
            y <= cachedFaceRect.bottom - margin
        );
    }

    let mouseX = 0;
    let mouseY = 0;
    let currentImageSrc = center;
    let animationId: number | null = null;

    function updateImage(x: number, y: number): void {
        const now = performance.now();
        if (now - lastUpdateTime < UPDATE_THRESHOLD) return;
        lastUpdateTime = now;

        // Skip on small screens
        if (cachedViewportWidth < 500) return;

        if (!cachedFaceRect) return;

        const faceCenter = {
            x: cachedFaceRect.left + (cachedFaceRect.width / 2),
            y: cachedFaceRect.top + (cachedFaceRect.height / 2)
        };

        let newImageSrc: string;

        if (Math.abs(x - faceCenter.x) > 0.55 * cachedViewportWidth) {
            newImageSrc = center;
        } else if (isOnFace(x, y)) {
            newImageSrc = center;
        } else {
            const deltaX = x - faceCenter.x;
            const deltaY = y - faceCenter.y;
            const angle = Math.atan2(deltaY, deltaX);
            const angleDegrees = (angle * 180 / Math.PI + 360) % 360;
            
            const angleIndex = Math.floor(((angleDegrees + 105) % 360) / 30);
            const mappedIndex = angleIndex >= 12 ? 0 : angleIndex;
            newImageSrc = imageMap[mappedIndex] || center;
        }

        if (newImageSrc !== currentImageSrc) {
            face.src = newImageSrc;
            currentImageSrc = newImageSrc;
        }
    }

    function animate(): void {
        updateImage(mouseX, mouseY);
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

    const handleMouseMove = throttle((e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        startAnimation();
    }, 16);

    const debouncedStopAnimation = debounce(() => {
        stopAnimation();
    }, 150);

    const handleResize = throttle(() => {
        updateCachedValues();
    }, 250);

    const handleScroll = throttle(() => {
        updateCachedValues();
        startAnimation();
        debouncedStopAnimation();
    }, 16);

    updateCachedValues();

    function setInitialMousePos(event: MouseEvent): void {
        mouseX = event.clientX;
        mouseY = event.clientY;
        document.removeEventListener("mousemove", setInitialMousePos);
    }

    document.addEventListener("mousemove", setInitialMousePos, { once: true });

    document.addEventListener("mousemove", (e) => {
        handleMouseMove(e);
        debouncedStopAnimation();
    }, { passive: true });

    document.addEventListener("scroll", handleScroll, { passive: true });
    
    window.addEventListener("resize", handleResize, { passive: true });

    document.addEventListener("mouseleave", () => {
        stopAnimation();
    });

    return function cleanup() {
        stopAnimation();
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
    };
});
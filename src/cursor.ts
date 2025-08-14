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

waitForElements([".about-section", ".about-portrait"], () => {
    const container = document.querySelector(".about-section");
    const face = document.querySelector(".about-portrait");

    if (!container || !face) {
        return;
    }

    function isInContainer(x, y) {
        const rect = container.getBoundingClientRect();
        const inContainer = (
            x >= rect.left && x <= rect.right &&
            y >= rect.top && y <= rect.bottom
        );
        return inContainer;
    }

    function isOnFace(x, y) {
        const rect = face.getBoundingClientRect();
        const onFace = (
            x >= rect.left && x <= rect.right &&
            y >= rect.top && y <= rect.bottom
        );
        return onFace;
    }

    let mouseX = 0;
    let mouseY = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let isCursorInContainer = false;
    let isAnimating = false;
    let animationId: number | null = null;

    function updateImage(x, y) {
        if (isCursorInContainer) {
            const faceRect = face.getBoundingClientRect();
            const faceCenter = {
                x: faceRect.left + (faceRect.width / 2),
                y: faceRect.top + (faceRect.height / 2)
            };

            if (isOnFace(x, y)) {
                face.src = center;
            } else {
                const deltaX = x - faceCenter.x;
                const deltaY = y - faceCenter.y;
                const angle = Math.atan2(deltaY, deltaX);

                const angleDegrees = (angle * 180 / Math.PI + 360) % 360;
                switch (true){
                    case(angleDegrees >= 345 || angleDegrees <15):
                        face.src = p3;
                        break;
                    
                }
            }
        }
    }

    function animate() {
        // Check if mouse has actually moved
        if (mouseX !== prevMouseX || mouseY !== prevMouseY) {
            updateImage(mouseX, mouseY);
            prevMouseX = mouseX;
            prevMouseY = mouseY;
        }
        
        animationId = requestAnimationFrame(animate);
    }

    function startAnimation() {
        if (!isAnimating) {
            isAnimating = true;
            animate();
        }
    }

    function stopAnimation() {
        if (isAnimating && animationId) {
            isAnimating = false;
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }

    let moveTimeout: number | null = null;

    function setInitialMousePos(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        prevMouseX = mouseX;
        prevMouseY = mouseY;
        isCursorInContainer = isInContainer(mouseX, mouseY);
        
        if (isCursorInContainer) {
            startAnimation();
        }
        
        document.removeEventListener("mousemove", setInitialMousePos, false);
    }

    document.addEventListener("mousemove", setInitialMousePos, { once: true });

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        const wasInContainer = isCursorInContainer;
        isCursorInContainer = isInContainer(mouseX, mouseY);

        if (isCursorInContainer) {
            startAnimation();
            
            if (moveTimeout) {
                clearTimeout(moveTimeout);
            }
            
            moveTimeout = setTimeout(() => {
                stopAnimation();
            }, 100);

        } else if (wasInContainer && !isCursorInContainer) {
            stopAnimation();
        }
    });

    document.addEventListener("mouseleave", () => {
        stopAnimation();
    });
});
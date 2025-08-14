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

waitForElements([".about-portrait"], () => {
    const face = document.querySelector(".about-portrait") as HTMLImageElement;

    if (!face) {
        return;
    }

    function isOnFace(x:number, y:number) {
        const rect = face?.getBoundingClientRect();
        if(!rect){
            return
        }
        const onFace = (
            x >= rect.left + 80 && x <= rect.right - 80 &&
            y >= rect.top + 80 && y <= rect.bottom - 80
        );
        return onFace;
    }

    let mouseX = 0;
    let mouseY = 0;
    let isAnimating = false;
    let animationId: number | null = null;

    function updateImage(x:number, y:number) {
        const viewportWidth = window.innerWidth;
        if(viewportWidth < 500){
            return;
        }

        const faceRect = face?.getBoundingClientRect();
        if (!faceRect || !face){
            return;
        }
        const faceCenter = {
            x: faceRect.left + (faceRect.width / 2),
            y: faceRect.top + (faceRect.height / 2)
        };

        if(Math.abs(x-faceCenter.x) > 0.55*viewportWidth){
            face.src = center;
            return;
        }

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
                case(angleDegrees >= 15 && angleDegrees <45):
                    face.src = p4;
                    break;
                case(angleDegrees >= 45 && angleDegrees <75):
                    face.src = p5;
                    break;
                case(angleDegrees >= 75 && angleDegrees <105):
                    face.src = p6;
                    break;
                case(angleDegrees >= 105 && angleDegrees <135):
                    face.src = p7;
                    break;
                case(angleDegrees >= 135 && angleDegrees <165):
                    face.src = p8;
                    break;
                case(angleDegrees >= 165 && angleDegrees <195):
                    face.src = p9;
                    break;
                case(angleDegrees >= 195 && angleDegrees <225):
                    face.src = p10;
                    break;
                case(angleDegrees >= 225 && angleDegrees <255):
                    face.src = p11;
                    break;
                case(angleDegrees >= 255 && angleDegrees <285):
                    face.src = p0;
                    break;
                case(angleDegrees >= 285 && angleDegrees <315):
                    face.src = p1;
                    break;
                case(angleDegrees >= 315 && angleDegrees <345):
                    face.src = p2;
                    break;
                default:
                    face.src = center;
            }
        }
    }

    function animate() {
        updateImage(mouseX, mouseY);
        
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

    function setInitialMousePos(event : MouseEvent) {
        mouseX = event.clientX;
        mouseY = event.clientY;        
        document.removeEventListener("mousemove", setInitialMousePos, false);
    }

    document.addEventListener("mousemove", setInitialMousePos, { once: true });

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        startAnimation();
        
        if (moveTimeout) {
            clearTimeout(moveTimeout);
        }
        
        moveTimeout = setTimeout(() => {
            stopAnimation();
        }, 100);
    });

    document.addEventListener("scroll", () => {
        startAnimation();
    }, { passive: true });

    document.addEventListener("mouseleave", () => {
        stopAnimation();
    });
});
function waitForElements(selectors: string[], callback: () => void): void {
    const interval = setInterval(() => {
        const allExist = selectors.every((sel: string) => document.querySelector(sel));
        if (allExist) {
            clearInterval(interval);
            callback();
        }
    }, 20);
}

waitForElements([".track-container"], () => {
    // courtesy of Codegrid (they do really awesome stuff)
    const container = document.querySelector(".trail-container");

    const config = {
        imageCount: 9,
        imageLifespan: 750,
        removalDelay: 50,
        mouseThreshold: 100,
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
            return
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
        if(!isCursorInContainer){
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

        const randomIndex = Math.floor(Math.random()*ImageTrackList.length);
        const rotation = (Math.random() - 0.5) * 50;
        img.src = images[randomIndex];

        const rect = container?.getBoundingClientRect();
        const relativeX = mouseX - rect?.left;
        const relativeY = mouseX - rect?.top;

        img.style.left = `${relativeX}px`;
        img.style.right = `${relativeY}px`;
        img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0)`;
        img.style.transition = `transform ${config.inDuration}ms ${config.inEasing}`;

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

            imgToRemove.element.style.transition = `transform ${config.outDuration}ms ${config.outEasing}`;
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

        if
    })
});
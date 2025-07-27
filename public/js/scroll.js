
const scrollElements = document.querySelectorAll(".js-scroll"); // display elements once in view
const scrollWrapper = document.querySelectorAll(".js-scroll-wrapper"); // displays element once parent wrapper is in view
// const scrollout = document.querySelectorAll(".scrolled");
// change element to transparent
scrollElements.forEach((el) => {
    el.style.opacity = 0
});
scrollWrapper.forEach(el => {
    for (let i = 0; i < el.children.length; i++) {
        el.children[i].style.opacity = 0;
    }
})

/**
 * A throttler function reduces number of times a function is called
 * help increase performance
 * A throttle function calls the function passed into it only once during a specified time interval
 */
//initialize throttleTimer as false
let throttleTimer = false;

const throttle = (callback, time) => {
    //don't run the function while throttle timer is true
    if (throttleTimer) return;

    //first set throttle timer to true so the function doesn't run
    throttleTimer = true;

    setTimeout(() => {
        //call the callback function in the setTimeout and set the throttle timer to false after the indicated time has passed 
        callback();
        throttleTimer = false;
    }, time);
}


const elementInView = (el, scrollOffset = 0) => {
    // check if element is in view
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;
    // detect when the element has scrolled x pixels into the page, 
    // or when a percentage of the page has been scrolled
    return (
        elementTop <= ((window.innerHeight || document.documentElement.clientHeight) + scrollOffset)
    );
};


const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el)) {
            displayScrollElement(el);
        }
        else {
            hideScrollElement(el);
        }
    });

    let timer = 0;
    scrollWrapper.forEach((el) => {
        if (elementInView(el) && el.dataset.scrollCascade === "true") {
            for (let i = 0; i < el.children.length; i++) {
                setTimeout(() => displayScrollElement(el.children[i]), timer);
                timer += 100;
            }
            timer = 0;
        }
        else if (elementInView(el)) {
            for (let i = 0; i < el.children.length; i++) {
                displayScrollElement(el.children[i]);
            }
        }
        else {
            for (let i = 0; i < el.children.length; i++) {
                hideScrollElement(el.children[i]);
            }
        }
    });
}

// change element to be visible
const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

window.onload = function () {
    handleScrollAnimation();
};

// on scroll, animate elements
window.addEventListener('scroll', () => {
    throttle(handleScrollAnimation, 50);
});
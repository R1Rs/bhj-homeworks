let sliderNext = document.querySelector(".slider__arrow_next");
sliderNext.onclick = clickNext;

let sliderPrev = document.querySelector(".slider__arrow_prev");
sliderPrev.onclick = clickPrev;

function clickNext() {
    let sliderItems = document.querySelectorAll(".slider__item");
       
    for (i = 0; i < sliderItems.length; i++) {
        if (sliderItems[i].classList.contains("slider__item_active")) {
            sliderItems[i].classList.remove("slider__item_active");
            if (i == sliderItems.length - 1) {
                i = 0;
            } else {
                i++;
            }
            sliderItems[i].classList.add("slider__item_active");
            return;
        }   
    } 
}

function clickPrev() {
    let sliderItems = document.querySelectorAll(".slider__item");

    for (i = sliderItems.length - 1; i >=0; i--) {
        if (sliderItems[i].classList.contains("slider__item_active")) {
            sliderItems[i].classList.remove("slider__item_active");
            if (i == 0) {
                i = sliderItems.length - 1;
            }   else {
                i--;
            }
            sliderItems[i].classList.add("slider__item_active");
            return;
        }
    }
}

let dot = document.querySelectorAll(".slider__dot");
for (i = 0; i < dot.length; i++) {
    dot[i].onclick = clickDot;
}

function clickDot(eventObj) {
    for (i = 0; i < dot.length; i++) {
            dot[i].classList.contains("slider__dot_active") 
            dot[i].classList.remove("slider__dot_active");
            addDotActive();
    }

    function addDotActive() {
    let element = eventObj.target;
    let elementClosest = element.closest("*");
        elementClosest.classList.add("slider__dot_active");

    let numberDot;
        
    } 

} 

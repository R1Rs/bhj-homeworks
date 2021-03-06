// Задача с повышенной сложностью. Версия №2. 

let sliderNext = document.querySelector(".slider__arrow_next");
sliderNext.onclick = clickNext; // ставим слушатель события по клику на стрелку вправо

let sliderPrev = document.querySelector(".slider__arrow_prev");
sliderPrev.onclick = clickPrev; // слушатель на стрелку влево

let dots = document.querySelectorAll(".slider__dot");
let arrayDots = Array.from(dots);
arrayDots.forEach((name) => name.onclick = clickDot ); // ставим слушатель на точку


let indexActiveItem = 0;
let sliderItems = document.querySelectorAll(".slider__item");
let arraySliderItems = Array.from(sliderItems);

function changeItem() {
    let activeItem = arraySliderItems.find((name) => name.classList.contains("slider__item_active"));
    indexActiveItem = arraySliderItems.findIndex((name) => name.classList.contains("slider__item_active"));
    activeItem.classList.remove("slider__item_active");
}

function clickNext() {
    changeItem();
    indexActiveItem++;
    if (indexActiveItem == arraySliderItems.length) {
        indexActiveItem = 0;
    }
    activateDot();
}

function clickPrev() {
    changeItem();
    indexActiveItem--;
    if (indexActiveItem < 0) {
        indexActiveItem = arraySliderItems.length - 1;
    }
    activateDot();
}

function activateDot() {
    dots.forEach((name) => name.classList.remove("slider__dot_active"));
    dots[indexActiveItem].classList.add("slider__dot_active");
    arraySliderItems.find((name) => name.classList.remove("slider__item_active"));
    arraySliderItems[indexActiveItem].classList.add("slider__item_active");
}

function clickDot(eventObj) {
    let element = eventObj.target; 
    let elementClosest = element.closest("*");  // берём у тригера события ближайшего родителя
    indexActiveItem = arrayDots.indexOf(elementClosest); // берем индекс этого элемента
    activateDot();
}

window.onload = activateDot;



// Версия архитектуры №1

// function clickNext() {
//     let sliderItems = document.querySelectorAll(".slider__item");
       
//     for (i = 0; i < sliderItems.length; i++) {
//         if (sliderItems[i].classList.contains("slider__item_active")) {
//             sliderItems[i].classList.remove("slider__item_active"); // удаляем класс с активным изображением, если есть
//             if (i == sliderItems.length - 1) { 
//                 i = 0;  // если индексы элементов кончились - обнуляем счётчик (для беспрерывного слайдера)
//             } else {
//                 i++; // добавляем +1 к счётчику, чтобы добавить изображение следующего слайда, а не этого же
//             }
//             sliderItems[i].classList.add("slider__item_active"); // добавляем следующее изображение
//             setDotFromSlider(i); // передаём индекс, к которому добавили изображение, в точку с тем же индексом
//             return;
//         }   
//     } 
// }

// function clickPrev() {
//     let sliderItems = document.querySelectorAll(".slider__item"); // тот же алгоритм, что и для clickNext, но в другую сторону

//     for (i = sliderItems.length - 1; i >=0; i--) {
//         if (sliderItems[i].classList.contains("slider__item_active")) {
//             sliderItems[i].classList.remove("slider__item_active");
//             if (i == 0) {
//                 i = sliderItems.length - 1;
//             }   else {
//                 i--;
//             }
//             sliderItems[i].classList.add("slider__item_active");
//             setDotFromSlider(i);
//             return;
//         }
//     }
// }

// let dot = document.querySelectorAll(".slider__dot");
// let arrayDots = Array.from(dot);
// for (i = 0; i < arrayDots.length; i++) {
//     arrayDots[i].onclick = clickDot;  // добавляем слушатель для клика по точке
// }

// function clickDot(eventObj) {
//     for (i = 0; i < arrayDots.length; i++) {
//             arrayDots[i].classList.remove("slider__dot_active"); // удаляем все активные точки     
//         }
//         let element = eventObj.target; 
//         let elementClosest = element.closest("*");  // берём у тригера события ближайшего родителя
//         elementClosest.classList.add("slider__dot_active"); // и делаем его активным
//         let indexDot = arrayDots.indexOf(elementClosest); // берем индекс этого элемента
//         getImgForDot(indexDot);     // и передаём в функцию, чтобы та поставила изображение того же индекса
//     } 

// function getImgForDot(indexDot) {
//     let sliderItems = document.querySelectorAll(".slider__item"); 
//     for (i = 0; i < sliderItems.length; i++) {
//         sliderItems[i].classList.remove("slider__item_active"); // удаляем все активные изображения
//     }
//         sliderItems[indexDot].classList.add("slider__item_active"); // по полученному индексу находим изображение и делаем активным
// }

// function setDotFromSlider(i) {
//     let index = i;
//     for (i = 0; i < arrayDots.length; i++) {
//         arrayDots[i].classList.remove("slider__dot_active"); // удаляем все активные точки
//     }
//     arrayDots[index].classList.add("slider__dot_active");  // берем индекс активного изображения и делаем точку с таким же индексом активной
// }

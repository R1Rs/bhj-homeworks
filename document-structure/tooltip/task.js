// Повышенный уровень сложности №1

let hasTooltip = document.getElementsByClassName("has-tooltip");
arrayHasTooltip = Array.from(hasTooltip); //делаем коллекцию массивом, т.к. forEach работает строго с массивами
arrayHasTooltip.forEach((element) => element.addEventListener("click", addTooltip)); 
arrayHasTooltip.forEach((element) => element.addEventListener("mouseout", changeFocus)); 

function addTooltip(el) {
   el.preventDefault();
   let title = el.target.title;
   let targetPositionLeft = el.target.getBoundingClientRect().left; //берём расстояние слева у элемента, по которому кликнули
   el.target.insertAdjacentHTML("beforeEnd", `<div class ="tooltip tooltip_active" style="left: ${targetPositionLeft}px">${title}</div>`);
}

function changeFocus(el) {
    element = el.target;
    if (element.lastElementChild) {  //берем последний дочерний элемент, т.к. первым будет являться текстовый узел элемента
     element.removeChild(element.childNodes[1]); // если находим - значит это наш добавленный в событии "клик" элемент div 
}}                                                   // удаляем его при отведении курсора


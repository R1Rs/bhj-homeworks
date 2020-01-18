// Задача 2. Повышенный уровень сложности
// в 26 строчке - вопрос. Просьба пояснить.


let menuLink = document.querySelectorAll(".menu__link");
let arrMenuLink = Array.from(menuLink); // нашли линки

for (i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = activateMenu;
}    

function activateMenu(el) {

    let element = el.target; //берем элемент события
    let ul = element.parentElement; // берем у него ближайший элемент-родитель
    let menuSub = ul.querySelector("ul"); // смотрим вниз от элемент-родителя в поисках первого ul
    closedMenuActive(menuSub); // сначала проверяем есть ли открытое меню и закрываем его, кроме элемента-триггера
    menuSub.classList.toggle("menu_active"); // если находим - добавляем/удаляем menu_active
    let menuSubLink = menuSub.querySelectorAll("a"); // берём первый найденный элемент ul и ищем ниже все ссылки
    for (i = 0; i < menuSubLink.length; i++) { 
         menuSubLink[i].onclick = function() {
            return false;  // для каждой ссылки запрещаем переход
        }
    }
    return false; //для каждой ссылки запрещаем переход, иначе меню открывается и сразу закрывается. 
}                
    
function closedMenuActive(menuSub) {
    let CloseMenuActive = document.querySelectorAll(".menu_active"); // находим все открытые меню
    for (i = 0; i < CloseMenuActive.length; i++) {
        if (i.closest("*") != menuSub) {
        CloseMenuActive[i].closest("*").classList.remove("menu_active"); //для каждого найденного класса - находим его ближайшего родителя,                                                       
    }                                                                 // включая элемент-родитель самого класса и удаляем у него класс menu_active
}                                                         
}


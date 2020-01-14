let menuLink = document.querySelectorAll(".menu__link");
let arrMenuLink = Array.from(menuLink); // нашли линки

// добавляем вышестоящему элементу с menu_sub класс menu_active при клике на линк

for (i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = activateMenu;
}    

function activateMenu(el) {
    let element = el.target; //берем элемент события
    let ul = element.parentElement; // берем у него ближайший элемент-родитель
    let menuSub = ul.querySelector("ul"); // смотрим вниз от элемент-родителя в поисках ul
    menuSub.classList.add("menu_active"); // если находим - добавляем menu_active
    return false; // для главного меню почему-то возвращает ошибку и переходит
}
    



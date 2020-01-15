
// 1. В момент запуска скрипта, покажите окно #modal_main

let modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");

let CloseClass = document.getElementsByClassName("modal__close");
let arrayCloseClass = Array.from(CloseClass);

// Обработчик для 2 и 3 пункта
for (i = 0; i < arrayCloseClass.length; i++) {
arrayCloseClass[i].classList.add("modal_active");
if (arrayCloseClass[i].classList.contains("show-success")) {
    arrayCloseClass[i].onclick = returnModalSuccess;
}   else {
arrayCloseClass[i].onclick = retutnActive;
}
}

// 2. Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close
function retutnActive() {
    modalMain.classList.remove("modal_active");
}

// 3. По нажатию на элемент с классом show-success покажите окно #modal_success
function returnModalSuccess() {
    let success = document.getElementById("modal_success");
    success.classList.add("modal_active");
}



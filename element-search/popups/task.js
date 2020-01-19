
// 1. В момент запуска скрипта, покажите окно #modal_main

let modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");

let closeClasse = document.getElementsByClassName("modal__close");

let success = document.getElementById("modal_success");

// Обработчик для 2 и 3 пункта
for (i = 0; i < closeClasse.length; i++) {
    closeClasse[i].classList.add("modal_active");
    if (closeClasse[i].classList.contains("show-success")) {
        closeClasse[i].onclick = returnModalSuccess;
    } else {
        closeClasse[i].onclick = retutnActive;
    }
}

// 2. Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close
function retutnActive() {
    modalMain.classList.remove("modal_active");
    success.classList.remove("modal_active");

}

// 3. По нажатию на элемент с классом show-success покажите окно #modal_success
function returnModalSuccess() {
    modalMain.classList.remove("modal_active");
    success.classList.add("modal_active");
}



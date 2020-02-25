// Закрытие всплывающего окна раз и навсегда

let modal = document.getElementById("subscribe-modal");

// при закрытии всплывающего окна - делаем отметку в localStorage
let modalClose = document.querySelector(".modal__close");
modalClose.addEventListener("click", () => {
    modal.classList.remove("modal_active");
    localStorage.modalClose = "true";
})

//если при открытии окна в localStorage нет отметки о закрытом окне, то показываем его
window.onload = () => {
    if (localStorage.modalClose == "true") {
        return;
    }   else {
        modal.classList.add("modal_active");
    }
}

window.addEventListener("scroll", revealActive); // добавляем слушатель на скролл

function revealActive() {
    let reveal = document.querySelectorAll(".reveal");
    let windowHeight = window.innerHeight;
    for (i = 0; i < reveal.length; i++) {
    let revealTop = reveal[i].getBoundingClientRect().top; //берем высоту от верхней границы до элемента
    if (revealTop < windowHeight & revealTop > 0) { // если высота меньше окна браузера и больше 0
    reveal[i].classList.add("reveal_active"); // то добавляем видимость 
    }   else {
    reveal[i].classList.remove("reveal_active"); // иначе - убираем
    }
    }
}
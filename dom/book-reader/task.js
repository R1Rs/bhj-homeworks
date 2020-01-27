let button = document.querySelectorAll("a");
let book = document.querySelector(".book");
for (i = 0; i < button.length; i++) {
    button[i].onclick = changeFontSize;
}

function changeFontSize(eventObj) {
    button.forEach((elem) => elem.classList.remove("font-size_active"));
    book.classList.remove("book_fs-big", "book_fs-small");

    let element = eventObj.target;
    let elementClosest = element.closest("*");
    elementClosest.classList.add("font-size_active");
    
    if (elementClosest.classList.contains("font-size_small")) {
        book.classList.add("book_fs-small");
    }   else if (elementClosest.classList.contains("font-size_big")) {
        book.classList.add("book_fs-big");
    }
    return false;
}
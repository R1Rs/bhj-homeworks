// querySelectorAll применяется из расчёта, что может быть несколько кнопок с меню


let dropdownValue = document.querySelectorAll(".dropdown__value");
for (i = 0; i < dropdownValue.length; i++) {
dropdownValue[i].onclick = makeActiveList;
}

let dropdownItem = document.querySelectorAll(".dropdown__item");
for (i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].onclick = changeValue;
}


function makeActiveList() {
    let dropdownList = document.querySelectorAll(".dropdown__list");
    for (i = 0; i < dropdownList.length; i++) {
        if (dropdownList[i].classList.contains("dropdown__list_active")) {
            dropdownList[i].classList.remove("dropdown__list_active");
    }   else {
            dropdownList[i].classList.add("dropdown__list_active");
    } return false;
}
}

function changeValue(eventObj) {
    let element = eventObj.target;

    let dropdown = element.closest(".dropdown"); // находим ближайшего родителя с классом dropdown
    let dropdownValue = dropdown.querySelector(".dropdown__value"); // идём от него вниз и находим текст основной кнопки
    dropdownValue.innerHTML = element.innerHTML; // присваиваем ей текст из dropdown__item

    let dropdownList = element.closest(".dropdown__list");
    dropdownList.classList.remove("dropdown__list_active");
    return false;
}

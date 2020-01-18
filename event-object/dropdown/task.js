
let dropdownValue = document.querySelectorAll(".dropdown__value");
for (i = 0; i < dropdownValue.length; i++) {
dropdownValue[i].onclick = makeActiveList(i);
}

let dropdownItem = document.querySelectorAll(".dropdown__item");
for (i = 0; i < dropdownItem.length; i++) {
    dropdownItem[i].onclick = changeValue;
}


function makeActiveList(i) {
    let dropdownList = document.querySelectorAll(".dropdown__list");

    if (dropdownList[i].classList.contains("dropdown__list_active")) {
        dropdownList[i].classList.remove("dropdown__list_active");
    }   else {
        dropdownList[i].classList.add("dropdown__list_active");
    } return false;
}

function changeValue(eventObj) {
    let element = eventObj.target;
    let dropdownValue = element.closest(".dropdown__value");
    dropdownValue.innerHTML = element.innerHTML;
    dropdownList.classList.remove("dropdown__list_active");
    return false;
}

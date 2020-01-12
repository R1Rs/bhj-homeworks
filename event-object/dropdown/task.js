
let dropDownValue = document.getElementsByClassName("dropdown__value");

dropDownValue[0].onclick = listActive;

let dropdownItem = document.querySelectorAll(".dropdown__item"); // чужой код, надо разобраться

for (let i = 0; i < dropdownItem.length; i++) { //чужой код, надо разобраться
    dropdownItem[i].addEventListener("click", function (event) {
        let elem = this.closest('.dropdown__list');
        if (elem.classList[0] == 'dropdown__list') {
            event.target.onclick = function () {
                return false;
            dropdownValue.textContent = event.target.textContent;
            dropdownList.classList.remove('dropdown__list_active');
        }
    }
});
}

function changeValue() { // создаю функцию, меняющую dropDownVAlue и сворачивающую список

}

function listActive() { // это работает
    let list = document.querySelector(".dropdown__list");

    list.classList.toggle("dropdown__list_active");
}


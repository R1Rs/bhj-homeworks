let tab = document.querySelectorAll(".tab");
let tabContent = document.querySelectorAll(".tab__content");

for (i = 0; i < tab.length; i++) {
    tab[i].onclick = tabActive;
}

function tabActive(event) {
    for (i = 0; i < tab.length; i++) {
        tab[i].classList.remove("tab_active");
    }
    let element = event.target;
    element.classList.toggle("tab_active");

    let arrayTab = Array.from(tab);
    let index = arrayTab.indexOf(element);
    tabContentActive(index);
}

function tabContentActive(index) {
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("tab__content_active");
    }
    tabContent[index].classList.toggle("tab__content_active");
}


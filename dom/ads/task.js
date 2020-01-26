function changeSpan() {
    let rotator = document.querySelectorAll(".rotator__case");
    rotator.forEach((elem) => elem.classList.remove("rotator__case_active"));

    let randomActive = Math.floor(Math.random() * rotator.length);
    rotator[randomActive].classList.add("rotator__case_active");   
}

setInterval(changeSpan, 1000);
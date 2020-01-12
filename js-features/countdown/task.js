function timer() {
    let time = document.getElementById("timer");
    time.innerHTML -=  1;
    if (time.innerHTML == 0) {
        clearInterval(startTimer);
        alert("Вы победили в конкурсе!");
    }
}

let startTimer = setInterval(timer, 1000);  
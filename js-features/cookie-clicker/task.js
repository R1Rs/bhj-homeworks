
function changeClickerCounter() {
    let clickerCounter = document.getElementById("clicker__counter");
    clickerCounter.innerHTML ++; 

    let cookie = document.getElementById("cookie");
    if (cookie.width == "200") {
        cookie.width = "150";
    }   else {
        cookie.width = "200";
    }
}

cookie.onclick = changeClickerCounter;



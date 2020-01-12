// Проверка клика по hole_has-mole и вызов соответвующей функции

// Мне кажется здесь что-то не так. Всё верно??
let hole = document.getElementsByClassName("hole");
for (i = 0; i < hole.length; i++) {
    if (hole[i].classList.contains("hole_has-mole")) {
        hole[i].onclick = deadHole;
    }   else { 
        hole[i].onclick = lostHole;
}
}

// подсчёт попаданий
function deadHole() {
    let deadValue = document.getElementById("dead");
    deadValue.innerHTML ++;
    
    if (deadValue.innerHTML == "10") {
        alert ("Мужиик! Победил крота!");
        deadValue.innerHTML = "0";
    }
}

// подсчёт промахов
function lostHole() {
    let lostValue = document.getElementById("lost");
    lostValue.innerHTML ++;

    if (lostValue.innerHTML == "5") {
        alert ("Вы промахнулись 5 раз. Вы проиграли эту битву");
        lostValue.innerHTML = "0";
    }
}

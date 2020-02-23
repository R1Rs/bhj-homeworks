let get = new XMLHttpRequest;
get.open("GET", " https://netology-slow-rest.herokuapp.com/poll.php");
get.responseType = "json";
get.send();

let question = document.getElementById("poll__title");
let answersButton = document.getElementById("poll__answers");

get.onreadystatechange = () => {
    if (get.readyState === get.DONE && get.status === 200) {
        question.innerText = get.response.data.title;
        let answers = get.response.data.answers;
        answers.forEach(element => {
            answersButton.insertAdjacentHTML("afterbegin", `<button class="poll__answer">${element}</button>`);
        });
    }
    let button = document.getElementsByClassName("poll__answer");
    let arrButton = Array.from(button);

    arrButton.forEach(el => el.addEventListener("click", () => {
        alert("спасибо, Ваш голос засчитан");
    }));
}



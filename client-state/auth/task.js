let signin = document.querySelector(".signin");
signin.classList.add("signin_active");

let form = document.forms["signin__form"];
let btn = document.querySelector(".btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    
    let getForm = new XMLHttpRequest();
    getForm.responseType = "json"
    getForm.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
    getForm.send(formData);

    // если загрузка прошла успешна и получен ответ, проверяем логин и пароль
    getForm.onreadystatechange = ()=> {
        if (getForm.readyState === 4) {
            let user = getForm.response.user_id;
            if (getForm.response.success === false) {
                alert("неверный логин и/или пароль");
            }   else {
                document.querySelector(".welcome").classList.add("welcome_active");
                document.getElementById("user_id").textContent = user;
                signin.classList.remove("signin_active");
                localStorage.user_id = JSON.stringify(user); //если совпал логин и пароль - выводим инфу и сохраняем в локалСторадж
            }
        }
    }
})

// если пользователь уже успешно авторизовывался, то берем данные о пользователе и пропускаем этап авторизации
window.onload = () => {
    if (localStorage.user_id) {
        document.querySelector(".welcome").classList.add("welcome_active");
        document.getElementById("user_id").textContent = localStorage.user_id;
        signin.classList.remove("signin_active");
    }
}
let taskInput = document.getElementById("task__input");
let tasksList = document.getElementById("tasks__list");
let button = document.getElementById("tasks__add");

button.addEventListener("click", addTask); //событие на кнопку

taskInput.addEventListener("keydown", addTask); // тоже самое событие, но на enter

// добавление задачи
function addTask(e) {
    if ((e.keyCode === 13 || !e.keyCode) & (taskInput.value.trim() != "")) {
    tasksList.innerHTML += `<div class="task">
                                <div class="task__title">
                                    ${taskInput.value}
                                </div>
                                <a href="#" class="task__remove">&times;</a>
                            </div>` 
    e.preventDefault(); // убираем автообновление формы

    let taskRemove = document.querySelectorAll(".task__remove"); // если поместить вне этой функции, то будет ошибка, т.к. на момент вызова функции в DOM еще нет такого класса
    let arrayTaskRemove = Array.from(taskRemove);
    arrayTaskRemove.forEach((el) => el.addEventListener("click", remove)); //добавляем слушатель на удаление для добавленного элемента
    taskInput.value = ""; // очищаем поле ввода
    localStorage.setItem("task", `${tasksList.innerHTML}`); //сохраняем задачи в локальном хранилище
    }  
} 

// удаление задачи
function remove(el) {
    let element = el.target;
    let taskForRemove = element.parentElement;
    taskForRemove.remove();
    localStorage.setItem("task", `${tasksList.innerHTML}`); //сохраняем текущий перечень задач в локальном хранилище
}

// обращение к локальному хранилищу для отображение задач после перезапуска браузера
function getLocalStorage() {
    tasksList.innerHTML = localStorage.getItem("task"); 
}

window.onload = getLocalStorage(); 

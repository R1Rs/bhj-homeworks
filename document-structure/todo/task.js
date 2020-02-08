let taskInput = document.getElementById("task__input");
let tasksList = document.getElementById("tasks__list");

taskInput.addEventListener("keydown", addTask);

function addTask(e) {

    if (e.keyCode === 13) {
    tasksList.innerHTML += `<div class="task">
                                <div class="task__title">
                                    ${taskInput.value}
                                </div>
                                <a href="#" class="task__remove">&times;</a>
                            </div>` 
    // e.preventDefault();
    } 
} 



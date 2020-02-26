 // сохранять данные из поля ввода в localStorage и восстанавливать их после перезагрузки браузера
 let text = document.getElementById("editor");
 text.addEventListener("input", (e) => {
    localStorage.text = JSON.stringify(e.target.value);
 })

 window.onload = () => {
     if (localStorage.text) {
     text.value = JSON.parse(localStorage.text);
     }
 }
let form = document.getElementById("form");
let progress = document.getElementById("progress");

form = addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.upload.onloadstart = (event) => {
        let see = setInterval(seeProgress, 2000);
        function seeProgress() {
            if (progress.value < 0.8) {
                progress.value += 0.1;
            } else {
                clearInterval(see);
            }
        }
        console.log("Загрузка началась");
    }
    
    xhr.upload.onprogress = event => {
       console.log(event.loaded);
    }
     
    xhr.upload.onload = () => {
        progress.value = "1";
        console.log("Загружено полностью");
    }

    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");

    xhr.send(formData);

    } 
)
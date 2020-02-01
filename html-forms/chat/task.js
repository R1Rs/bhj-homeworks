// открытие окна чата
let chatWidget = document.querySelector(".chat-widget");
chatWidget.addEventListener("click", () => chatWidget.classList.add("chat-widget_active"));

// поле ввода сообщения
let inputMessage = document.getElementById("chat-widget__input");
inputMessage.addEventListener("keydown", sendMessage);

// сообщения в переписке
let textMessage = document.getElementById("chat-widget__messages");

// время для сообщения
let date = new Date(); 
let time = date.getHours() + ":" + date.getMinutes();

// область переписки со скроллом
let scrollWindow = document.querySelector(".chat-widget__messages-container");

let lastTimeMessage; //время последнего сообщения клиента для проверки 30 секунда простоя
function sendMessage(e) {
    if (e.keyCode === 13 & inputMessage.value != "") {
        textMessage.innerHTML += `<div class="message message_client">
                                    <div class="message__time">${time}</div>
                                    <div class="message__text">${inputMessage.value}
                                 </div>`;
        inputMessage.value = "";
        scrollWindow.scrollTop = scrollWindow.scrollHeight; //автопрокрутка вниз чата
        setTimeout(getMessage, 1000);

        lastTimeMessage = new Date(); //обновляем время последнего сообщения клиента
        setTimeout(verificationClientLive, 30000); // через 30 секунд вызываем проверку клиента
    }
}

function getMessage() {
    let phrasesRobot = ["уточняю", "повторите", "спросите Сири, у меня лапки", "бывает"];
    let randomPhraseRobot = Math.floor(Math.random() * phrasesRobot.length);
    textMessage.innerHTML += `<div class="message">
                                <div class="message__time">${time}</div>
                                <div class="message__text">${phrasesRobot[randomPhraseRobot]}
                              </div>`;
    scrollWindow.scrollTop = scrollWindow.scrollHeight;
    
}

//если от текущего времени и времени последнего сообщения клиента больше 30 секунд, и чат активен - задаем вопрос клиенту
function verificationClientLive() {
    let timeNow = new Date();
    if ((timeNow - lastTimeMessage > 30000) & chatWidget.classList.contains("chat-widget_active")) {
        textMessage.innerHTML += `<div class="message">
                                    <div class="message__time">${time}</div>
                                    <div class="message__text">Спишь?
                                  </div>`;
    }
}
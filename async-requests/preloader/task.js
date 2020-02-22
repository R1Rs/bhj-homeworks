// отправить get запрос

let valGet = new XMLHttpRequest;
valGet.open("get", " https://netology-slow-rest.herokuapp.com");
valGet.responseType = "json"; // если не указать json, то не получится обратиться к значениям как к объекту
valGet.send();

let item = document.querySelector(".item");

valGet.addEventListener("readystatechange", () => {
document.querySelector(".loader").classList.remove("loader_active");

   if (valGet.readyState === 4) {
    let valute = valGet.response.response.Valute; // первый response - обращаемся к ответу сервера, второй - обращаемся к объекту в структуре ответа
    for (prop in valute) {                        //задаём переменную для обхода свойств(в данном случае - объектов) внутри объекта
        let itemCode = valute[prop].CharCode;     // и у каждого объекта внутри объекта обращаемся к нужному свойству
        let itemValue = valute[prop].Value;
        let itemCurrency = valute[prop].Name;
        item.insertAdjacentHTML("beforebegin", `<div class="item">
                                                <div class="item__code">${itemCode}</div>
                                                <div class="item__value">${itemValue}</div>
                                                <div class="item__currency">${itemCurrency}</div>
                                                </div>`)
    }
   }
}
) 


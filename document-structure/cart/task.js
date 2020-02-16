// Задание с повышенной сложностью - перемещение изображения при добавлении в корзину

let quantityControlDec = document.querySelectorAll(".product__quantity-control_dec");
let quantityControlInc = document.querySelectorAll(".product__quantity-control_inc");
let product = document.querySelectorAll(".product__add");

// слушатель нажатия  на минус
let arrayDec = Array.from(quantityControlDec);
arrayDec.forEach((el) => el.addEventListener("click", valueDec));

// слушатель нажатия на плюс
let arrayInc = Array.from(quantityControlInc);
arrayInc.forEach((el) => el.addEventListener("click", valueInc));

// слушатель нажатия "добавить в корзину"
let arrayProduct = Array.from(product);
arrayProduct.forEach((el) => el.addEventListener("click", productAdd));

function valueDec(el) {
    let element = el.target;
    let quantityValue = element.nextElementSibling;
    let value = quantityValue.textContent.trim();
    value = (value == 0) ? value = 0 : value - 1;
    quantityValue.textContent = value;
}

function valueInc(el) {
    let element = el.target;
    let quantityValue = element.previousElementSibling;
    quantityValue.textContent ++;
}


function productAdd(el) {
    // не выводим поиск селектора вне функции, чтобы поддерживать динамичное обновление содержания селекторов при добавлении товара
    let cartProducts = document.querySelector(".cart__products"); // находим корзину
    let productInCart = cartProducts.querySelectorAll(".cart__product"); // находим добавленный в корзину товар
    let arrayProductInCart = Array.from(productInCart);

    
    let element = el.target;
    let product = element.closest(".product"); // находим у элемента родителя с классом product
    let productId = product.dataset.id; // берём у родителя id
    let imageProduct = product.querySelector(".product__image"); // находим у элемента дочку с изображением
    let imageSrc = imageProduct.src; // и присваиваем её изображение переменной
    let imageProductCopy = imageProduct.cloneNode(); // делаем копию элемента с изображением

   
    let valueProduct = product.querySelector(".product__quantity-value").textContent.trim(); // находим у элемента дочку с текстом и присваиваем

    function finder(elem) {                 // функция для поиска совпадений id добавляемого продукта и имеющегося в корзине
       return elem.dataset.id == productId;
    }
    
    // изменение html в зависимости от наличия или отсутсвтия товара в корзине
    if ((arrayProductInCart.find(finder) == undefined)) { // если добавляемые товар отсутствует в корзине
        cartProducts.innerHTML += `<div class="cart__product" data-id="${productId}">
                                        <img class="cart__product-image" src="${imageSrc}">
                                        <div class="cart__product-count">${valueProduct}</div>
                                    </div>`;
        productInCart = cartProducts.querySelectorAll(".cart__product"); // обновляем содержимое, т.к. querySelector сам не обновляется при изменении DOM
        arrayProductInCart = Array.from(productInCart); // это нужно для поиска координат нового добавленного в корзину продукта
    } else { arrayProductInCart.forEach((el) => {
        if (el.dataset.id == productId) {
            let valueProductInCart = el.querySelector(".cart__product-count").textContent.trim();
            valueProductInCart = +valueProductInCart + +valueProduct; //переводим строки в числа и складываем
            el.querySelector(".cart__product-count").textContent = valueProductInCart;
        }
    })
}
    // вычисляем координаты изображения товара в корзине
    let imageInCart = arrayProductInCart.find(finder)
    let imageInCartPlaceX = imageInCart.getBoundingClientRect().left; // вычисляем координаты элемента в корзине
    let imageInCartPlaceY = imageInCart.getBoundingClientRect().top;

    // выносим вычисления координат добавляемого продукта в эту часть, т.к. при изменении html в корзине - меняется DOM и, следовательно, координаты продукта
    let imageProductPlaceX = imageProduct.getBoundingClientRect().left; // вычисляем коорданаты добавляемого продукта
    let imageProductPlaceY = imageProduct.getBoundingClientRect().top;

    product.insertAdjacentElement("afterBegin", imageProductCopy); // добавляем созданный клон изображения в DOM после того как DOM стабилизировался после изменений HTML
    let left = imageProductPlaceX; // берем расстояние x y оригинального продукта
    let top = imageProductPlaceY;
    
    //размещаем копию продукта идентично положению оригинального продукта
    imageProductCopy.style.position = "absolute"; // добавляем в копию абсолютное позиционирование
    imageProductCopy.style.left = left + "px"; // добавляем в копию х у расстояние оригинального продукта
    imageProductCopy.style.top = top + "px";

    let itteration = 0; // задаём счётчик запусков setInterval
    function effectMoving() {
        let imageProductCopyX = imageProductCopy.getBoundingClientRect().left;
        let imageProductCopyY = imageProductCopy.getBoundingClientRect().top;
        left = Math.floor(imageProductCopyX + (imageInCartPlaceX - imageProductCopyX) / 5);
        top = Math.floor(imageProductCopyY - (imageProductCopyY - imageInCartPlaceY) / 5);
        imageProductCopy.style.left = left + "px"; // добавляем в копию х у расстояние оригинального продукта
        imageProductCopy.style.top = top + "px";
        itteration ++
          if (itteration == 10) { // если 10 раз запустили setInterval, то удаляем его и копию изображения
            clearInterval(id);
            imageProductCopy.remove();
        }
    }

    let id = setInterval(effectMoving, 25);
}
  
         

    

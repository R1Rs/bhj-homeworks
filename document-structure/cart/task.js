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
    let imageProductPlaceX = imageProduct.getBoundingClientRect().left; // вычисляем положение элемента
    let imageProductPlaceY = imageProduct.getBoundingClientRect().top;
    let imageSrc = imageProduct.src; // и присваиваем её изображение переменной
    let imageProductCopy = imageProduct.cloneNode(); // делаем копию элемента с изображением
    imageProductCopy.setAttribute("position", "absolute"); // добавляем в копию абсолютное позиционирование
    let imageProductCopyPlaceX = imageProductCopy.getBoundingClientRect().left; // вычисляем положение копии элемента
    let imageProductCopyPlaceY = imageProductCopy.getBoundingClientRect().top;
    imageProductCopyPlaceX = imageProductPlaceX; // делаем положение идентичным оригинальному
    imageProductCopyPlaceY = imageProductPlaceY;
   
    let valueProduct = product.querySelector(".product__quantity-value").textContent.trim(); // находим у элемента дочку с текстом и присваиваем

    function finder(elem) {                 // функция для поиска совпадений id добавляемого продукта и имеющегося в корзине
       return elem.dataset.id == productId;
    }
    
    // изменение html в зависимости от наличия или отсутсвтия товара в корзине
    if ((arrayProductInCart.length == 0) || (arrayProductInCart.find(finder) == undefined)) {
        cartProducts.innerHTML += `<div class="cart__product" data-id="${productId}">
                                        <img class="cart__product-image" src="${imageSrc}">
                                        <div class="cart__product-count">${valueProduct}</div>
                                    </div>`;
        let imageInCart = cartProducts.querySelector(".cart__product-image"); // берем элемент с изображением продукта в корзине
        let imageInCartPlaceX = imageInCart.getBoundingClientRect().left; // вычисляем положение элемента в корзине
        let imageInCartPlaceY = imageInCart.getBoundingClientRect().top;

        let spaceX = imageInCartPlaceX - imageProductCopyPlaceX;
        let spaceY = imageInCartPlaceY - imageProductCopyPlaceY;
        
        imageProductCopyPlaceX = spaceX / 2; // проверка перемещения

 
    } else { arrayProductInCart.forEach((el) => {
        if (el.dataset.id == productId) {
            let valueProductInCart = el.querySelector(".cart__product-count").textContent.trim();
            valueProductInCart = +valueProductInCart + +valueProduct; //переводим строку в число и складываем
            el.querySelector(".cart__product-count").textContent = valueProductInCart;
        }
    })
}

  



}  


  
         

    

let quantityControlDec = document.querySelectorAll(".product__quantity-control_dec");
let quantityControlInc = document.querySelectorAll(".product__quantity-control_inc");
let product = document.querySelectorAll(".product__add");

let arrayDec = Array.from(quantityControlDec);
arrayDec.forEach((el) => el.addEventListener("click", valueDec));

let arrayInc = Array.from(quantityControlInc);
arrayInc.forEach((el) => el.addEventListener("click", valueInc));

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
    let cartProducts = document.querySelector(".cart__products"); // находим корзину
    let productInCart = cartProducts.querySelectorAll(".cart__product"); // находим добавленный в корзину товар
    let arrayProductInCart = Array.from(productInCart);

    
    let element = el.target;
    let product = element.closest(".product"); // находим у элемента родителя с классом product
    let productId = product.dataset.id; // берём у родителя id
    let image = product.querySelector(".product__image").src; // находим у элемента дочку с изображением и присваиваем
    let valueProduct = product.querySelector(".product__quantity-value").textContent.trim(); // находим у элемента дочку с текстом и присваиваем

    function finder(elem) {
       return elem.dataset.id == productId;
    }
    
    if ((arrayProductInCart.length == 0) || (arrayProductInCart.find(finder) == undefined)) {
        cartProducts.innerHTML += `<div class="cart__product" data-id="${productId}">
                                        <img class="cart__product-image" src="${image}">
                                        <div class="cart__product-count">${valueProduct}</div>
                                    </div>`
    } else { arrayProductInCart.forEach((el) => {
        if (el.dataset.id == productId) {
            let valueProductInCart = el.querySelector(".cart__product-count").textContent.trim();
            valueProductInCart = +valueProductInCart + +valueProduct;
            el.querySelector(".cart__product-count").textContent = valueProductInCart;
        }
    })
}
}  
  
         

    

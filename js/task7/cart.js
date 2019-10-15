const cartDiv = document.querySelector("#cart");
const counterSpan = document.querySelector('#item-counter');
let cart = {};
fetch('./data.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        let goods = data;
        checkCart();
        showCart();
        showMiniCart();
        function showCart() {
            let out = '';
            let sum = 0;
            if (isEmpty(cart)) {
                out += "<h1>Ваша корзина пуста. Возвращайтесь на <a href='index.html'>Главная</a> и быстрее делайте покупку</h1>"
                // showMiniCart();
            } else {
                for (let key in cart) {
                    out += `<div class="cart__item cart-item">
                    <button class="cart-item__delete" data-delete="${goods[key - 1].id}">x</button>
                    <img src="${goods[key - 1].imgUrl}" alt="${goods[key - 1].imgUrl}" class="cart-item__img">
                    <h1 class="cart-item__title">${goods[key - 1].name}</h1>
                    <div class="cart-item__counts">
                        <button class="btn-minus" data-actminus="${goods[key - 1].id}">-</button>
                        ${cart[key]}
                        <button class="btn-plus" data-actplus="${goods[key - 1].id}">+</button>
                    </div>
                    <div class="cart-item__price">
                        <p>Цена:</p>
                        <p>${cart[key] * goods[key - 1].price} <span class="value">грн</span></p>
                    </div>
                </div>`;
                sum += cart[key] * goods[key - 1].price;
                }
                out += `<div class="full-price"><span>Общая цена:</span><span> ${sum} грн</span></div>`
            }
            cartDiv.innerHTML = out;
        }
        cartDiv.addEventListener('click', function (e) {
            let targetPlus = e.target.dataset.actplus;
            let targetMinus = e.target.dataset.actminus;
            let targetDelete = e.target.dataset.delete;
            if (targetPlus) {
                cart[targetPlus]++;
                localStorage.setItem('cart', JSON.stringify(cart));
                showMiniCart();
                showCart();
            } else if (targetMinus) {
                if (cart[targetMinus] > 1) cart[targetMinus]--;
                else {
                    delete cart[targetMinus];
                }
                localStorage.setItem('cart', JSON.stringify(cart));
                showMiniCart();
                showCart();
            } else if (targetDelete) {
                delete cart[targetDelete];
                localStorage.setItem('cart', JSON.stringify(cart));
                showMiniCart();
                showCart();
            }
        });
    })

function checkCart() {
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }
}
function showMiniCart() {
    if (Object.keys(cart).length != 0) {
        let sum = 0;
        for (let key in cart) {
            sum += cart[key];
        }
        counterSpan.innerHTML = sum;
        counterSpan.classList.remove('hidden');
    } else{
        counterSpan.classList.add('hidden');
    }
}
function isEmpty(obj) {
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            return false;
        }
    }
    return JSON.stringify(obj) === JSON.stringify({});
}
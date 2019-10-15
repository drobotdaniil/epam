const basketDiv = document.querySelector("#basket");
const counterSpan = document.querySelector('#item-counter');
let basket = {};
fetch('./data.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        let goods = data;
        checkbasket();
        showbasket();
        showMinibasket();
        function showbasket() {
            let out = '';
            let sum = 0;
            if (isEmpty(basket)) {
                out += "<h1>Ваша корзина пуста. Возвращайтесь на <a href='index.html'>Главная</a> и быстрее делайте покупку</h1>"
                // showMinibasket();
            } else {
                for (let key in basket) {
                    out += `<div class="basket__item basket-item">
                    <button class="basket-item__delete" data-delete="${goods[key - 1].id}">x</button>
                    <img src="${goods[key - 1].imgUrl}" alt="${goods[key - 1].imgUrl}" class="basket-item__img">
                    <h1 class="basket-item__title">${goods[key - 1].name}</h1>
                    <div class="basket-item__counts">
                        <button class="btn-minus" data-actminus="${goods[key - 1].id}">-</button>
                        ${basket[key]}
                        <button class="btn-plus" data-actplus="${goods[key - 1].id}">+</button>
                    </div>
                    <div class="basket-item__price">
                        <p>Цена:</p>
                        <p>${basket[key] * goods[key - 1].price} <span class="value">грн</span></p>
                    </div>
                </div>`;
                sum += basket[key] * goods[key - 1].price;
                }
                out += `<div class="full-price"><span>Общая цена:</span><span> ${sum} грн</span></div>`
            }
            basketDiv.innerHTML = out;
        }
        basketDiv.addEventListener('click', function (e) {
            let targetPlus = e.target.dataset.actplus;
            let targetMinus = e.target.dataset.actminus;
            let targetDelete = e.target.dataset.delete;
            if (targetPlus) {
                basket[targetPlus]++;
                localStorage.setItem('basket', JSON.stringify(basket));
                showMinibasket();
                showbasket();
            } else if (targetMinus) {
                if (basket[targetMinus] > 1) basket[targetMinus]--;
                else {
                    delete basket[targetMinus];
                }
                localStorage.setItem('basket', JSON.stringify(basket));
                showMinibasket();
                showbasket();
            } else if (targetDelete) {
                delete basket[targetDelete];
                localStorage.setItem('basket', JSON.stringify(basket));
                showMinibasket();
                showbasket();
            }
        });
    })

function checkbasket() {
    if (localStorage.getItem('basket') != null) {
        basket = JSON.parse(localStorage.getItem('basket'));
    }
}
function showMinibasket() {
    if (Object.keys(basket).length != 0) {
        let sum = 0;
        for (let key in basket) {
            sum += basket[key];
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
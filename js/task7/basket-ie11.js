"use strict";

var basketDiv = document.querySelector("#basket");
var counterSpan = document.querySelector('#item-counter');
var basket = {};
var xmlhttp = new XMLHttpRequest();
var url = "./data.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var showbasket = function showbasket() {
            var out = '';
            var sum = 0;

            if (isEmpty(basket)) {
                out += "<h1>Ваша корзина пуста. Возвращайтесь на <a href='index.html'>Главная</a> и быстрее делайте покупку</h1>";
            } else {
                for (var key in basket) {
                    out += "<div class=\"basket__item basket-item\">\n                    <button class=\"basket-item__delete\" data-delete=\"".concat(goods[key - 1].id, "\">x</button>\n                    <img src=\"").concat(goods[key - 1].imgUrl, "\" alt=\"").concat(goods[key - 1].imgUrl, "\" class=\"basket-item__img\">\n                    <h1 class=\"basket-item__title\">").concat(goods[key - 1].name, "</h1>\n                    <div class=\"basket-item__counts\">\n                        <button class=\"btn-minus\" data-actminus=\"").concat(goods[key - 1].id, "\">-</button>\n                        ").concat(basket[key], "\n                        <button class=\"btn-plus\" data-actplus=\"").concat(goods[key - 1].id, "\">+</button>\n                    </div>\n                    <div class=\"basket-item__price\">\n                        <p>\u0426\u0435\u043D\u0430:</p>\n                        <p>").concat(basket[key] * goods[key - 1].price, " <span class=\"value\">\u0433\u0440\u043D</span></p>\n                    </div>\n                </div>");
                    sum += basket[key] * goods[key - 1].price;
                }

                out += "<div class=\"full-price\"><span>\u041E\u0431\u0449\u0430\u044F \u0446\u0435\u043D\u0430:</span><span> ".concat(sum, " \u0433\u0440\u043D</span></div>");
            }

            basketDiv.innerHTML = out;
        };

        var goods = JSON.parse(this.responseText);
        checkbasket();
        showbasket();
        showMinibasket();
        basketDiv.addEventListener('click', function (e) {
            var targetPlus = e.target.dataset.actplus;
            var targetMinus = e.target.dataset.actminus;
            var targetDelete = e.target.dataset.delete;

            if (targetPlus) {
                basket[targetPlus]++;
                localStorage.setItem('basket', JSON.stringify(basket));
                showMinibasket();
                showbasket();
            } else if (targetMinus) {
                if (basket[targetMinus] > 1) basket[targetMinus]--; else {
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
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

function checkbasket() {
    if (localStorage.getItem('basket') != null) {
        basket = JSON.parse(localStorage.getItem('basket'));
    }
}

function showMinibasket() {
    if (Object.keys(basket).length != 0) {
        var sum = 0;

        for (var key in basket) {
            sum += basket[key];
        }

        counterSpan.innerHTML = sum;
        counterSpan.classList.remove('hidden');
    } else {
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
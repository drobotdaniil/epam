"use strict";

//create basket
var basket = {}; //DOM Elements

var goodsDiv = document.querySelector('#goods');
var pagination = document.querySelector("#pages");
var gridBtn = document.querySelector('#btn-grid');
var listBtn = document.querySelector('#btn-list');
var checkAvailable = document.querySelector('#available');
var selector = document.querySelector('#selector'); // const basketDiv = document.querySelector('#basket')

var manipulations = document.querySelector("#manipulations");
var startDiv = document.querySelector("#start");
var counterSpan = document.querySelector('#item-counter'); //variables for counts items on a page

var notesOnPage = 6;
var active;
var xmlhttp = new XMLHttpRequest();
var url = "./data.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var createPages = function createPages(goods) {
            var countOfItems = Math.ceil(goods.length / notesOnPage);
            var out = '';

            for (var i = 1; i <= countOfItems; i++) {
                out += '<li>' + i + '</li>';
            }

            pagination.innerHTML = out;
            var li = document.querySelectorAll('li');
            for(var i = 0; i<li.length; i++){
                li[i].addEventListener('click', function () {
                    scrollIt(goodsDiv);
                    showPage(this, goods);
                });
            }
            return li;
        }; 
        
        var data = JSON.parse(this.responseText);
        var goods = JSON.parse(this.responseText);
        //function for showing current page
        var showPage = function showPage(item, goods) {
            // console.log(filterByAll(goods))
            if (active) {
                active.classList.remove('active');
            }
            active = item;
            item.classList.add('active');
            var pageNum = +item.innerHTML;
            var start = (pageNum - 1) * notesOnPage;
            var end = start + notesOnPage;
            var notes = goods.slice(start, end);
            var out = '';
            for (var i = 0; i < notes.length; i++) {
                if (gridBtn.classList.contains('active')) {
                    out += "<div class='goods__item goods-item'>";
                } else {
                    out += "<div class='goods__item goods-item_listView'>";
                }

                out += "<img src='".concat(notes[i].imgUrl, "' alt='").concat(notes[i].name, "' class='goods-item__img'>\n                    <h2 class='goods-item__title'>").concat(notes[i].name, "</h2>");
                out += "<div class=\"goods-item__desc\">";

                if (notes[i].available) {
                    out += "<p class='goods-item__available'>\u0412 \u043D\u0430\u043B\u0438\u0447\u0438\u0438</p>\n                       <p class='goods-item__price'>".concat(notes[i].price, "<span> \u0433\u0440\u043D</span></p>\n                       <button class=\"goods-item__btn\" data-action=\"").concat(notes[i].id, "\">\u041A\u0423\u041F\u0418\u0422\u042C</button>");
                } else {
                    out += "<p class='goods-item__available'>\u041D\u0435\u0442 \u0432 \u043D\u0430\u043B\u0438\u0447\u0438\u0438</p>\n                    <p class='goods-item__price'>".concat(notes[i].price, "<span> \u0433\u0440\u043D</span></p>");
                }

                out += "</div >\n                </div> ";
            }
            goodsDiv.innerHTML = out;
        } 
        //events for buttons "Купить"
        goodsDiv.addEventListener('click', function (e) {
            var item = e.target.dataset.action;

            if (item) {
                var goodName = goods.filter(function (good) {
                    return good.id == item;
                })[0].name;

                if (basket[item] != undefined) {
                    basket[item]++;
                } else {
                    basket[item] = 1;
                }

                alert("\u0422\u043E\u0432\u0430\u0440 \"".concat(goodName, "\" \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443!"));
                localStorage.setItem('basket', JSON.stringify(basket));
                showMinibasket();
            }
        }); 
        //Events for btns grid and list
        gridBtn.addEventListener('click', function (e) {
            manipulations.classList.add('visible');
            startDiv.classList.add('hidden');
            listBtn.classList.remove('active');
            this.classList.add('active');
            showPage(createPages(sortByPopularity(goods))[0], sortByPopularity(goods));
        });
        listBtn.addEventListener('click', function () {
            manipulations.classList.add('visible');
            startDiv.classList.add('hidden');
            gridBtn.classList.remove('active');
            this.classList.add('active');
            showPage(createPages(sortByPopularity(goods))[0], sortByPopularity(goods));
        }); 
        //events for checkbox and select
        available.addEventListener('change', function (e) {
            if (this.checked) {
                goods = filterByAvailable(goods);
                showPage(createPages(goods)[0], goods);
            } else {
                goods = data;

                if (selector.value === "По популярности") {
                    showPage(createPages(sortByPopularity(goods))[0], sortByPopularity(goods));
                } else if (selector.value === "От дорогих к дешевым") {
                    showPage(createPages(sortByPriceDecrease(goods))[0], sortByPriceDecrease(goods));
                } else {
                    showPage(createPages(sortByPriceIncrease(goods))[0], sortByPriceIncrease(goods));
                }
            }
        });
        selector.addEventListener('change', function (e) {
            if (this.value === "По популярности") {
                showPage(createPages(sortByPopularity(goods))[0], sortByPopularity(goods));
            } else if (this.value === "От дорогих к дешевым") {
                showPage(createPages(sortByPriceDecrease(goods))[0], sortByPriceDecrease(goods));
            } else {
                showPage(createPages(sortByPriceIncrease(goods))[0], sortByPriceIncrease(goods));
            }
        });
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send(); 
//function for getting items from LS and parse to Object basket
function checkbasket() {
    if (localStorage.getItem('basket') != null) {
        basket = JSON.parse(localStorage.getItem('basket'));
    }
} 
//function for counts items in basket
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
} //function to scrollToTop


function scrollIt(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop
    });
} //sorting functions


var sortByPriceDecrease = function sortByPriceDecrease(goods) {
    return goods.sort(function (a, b) {
        return parseInt(b.price) - parseInt(a.price);
    });
}; //from high


var sortByPriceIncrease = function sortByPriceIncrease(goods) {
    return goods.sort(function (a, b) {
        return parseInt(a.price) - parseInt(b.price);
    });
}; //from low


var sortByPopularity = function sortByPopularity(goods) {
    return goods.sort(function (a, b) {
        return b.popularity - a.popularity;
    });
}; // by popularity


var filterByAvailable = function filterByAvailable(goods) {
    return goods.filter(function (good) {
        return good.available;
    });
};

var filterByAll = function filterByAll(goods) {
    return goods.filter(function (good) {
        return good;
    });
}; //run


checkbasket();
showMinibasket();
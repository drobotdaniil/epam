//create basket
let basket = {};
//DOM Elements
const goodsDiv = document.querySelector('#goods');
const pagination = document.querySelector("#pages");
const gridBtn = document.querySelector('#btn-grid');
const listBtn = document.querySelector('#btn-list');
const checkAvailable = document.querySelector('#available');
const selector = document.querySelector('#selector');
// const basketDiv = document.querySelector('#basket')
const manipulations = document.querySelector("#manipulations");
const startDiv = document.querySelector("#start");
const counterSpan = document.querySelector('#item-counter');

//variables for counts items on a page
let notesOnPage = 8;
let active;
fetch('./data.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        let goods = data;
        function createPages(goods) {
            let countOfItems = Math.ceil(goods.length / notesOnPage);
            let out = '';
            for (let i = 1; i <= countOfItems; i++) {
                out += '<li>' + i + '</li>';
            }
            pagination.innerHTML = out;
            let li = document.querySelectorAll('li');
            li.forEach(item => {
                item.addEventListener('click', function () {
                    scrollIt(goodsDiv);
                    showPage(this, goods);
                });
            });
            return li;
        }
        const showPage = (item, goods) => {
            if (active) {
                active.classList.remove('active');
            }
            active = item;
            item.classList.add('active');
            let pageNum = +item.innerHTML;
            let start = (pageNum - 1) * notesOnPage;
            let end = start + notesOnPage;
            let notes = goods.slice(start, end);
            let out = '';
            notes.forEach(note => {
                if (gridBtn.classList.contains('active')) {
                    out += `<div class='goods__item goods-item'>`;
                } else {
                    out += `<div class='goods__item goods-item_listView'>`;
                }
                out += `<img src='${note.imgUrl}' alt='${note.name}' class='goods-item__img'>
                    <h2 class='goods-item__title'>${note.name}</h2>`;
                out += `<div class="goods-item__desc">`;
                if (note.avilable) {
                    out += `<p class='goods-item__available'>В наличии</p>
                       <p class='goods-item__price'>${note.price}<span> грн</span></p>
                       <button class="goods-item__btn" data-action="${note.id}">КУПИТЬ</button>`;
                } else {
                    out += `<p class='goods-item__available'>Нет в наличии</p>
                    <p class='goods-item__price'>${note.price}<span> грн</span></p>`;
                }
                out += `</div >
                </div> `;
            });
            goodsDiv.innerHTML = out;
        };
        goodsDiv.addEventListener('click', function (e) {
            let item = e.target.dataset.action;
            if (item) {
                if (basket[item] != undefined) {
                    basket[item]++;
                } else {
                    basket[item] = 1;
                }
                alert('Товар добавлен в корзину!');
                localStorage.setItem('basket', JSON.stringify(basket));
                showMinibasket()
            }
        });
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
            gridBtn.classList.remove('active')
            this.classList.add('active');
            showPage(createPages(sortByPopularity(goods))[0], sortByPopularity(goods))
        });
        available.addEventListener('change', function () {
            if (this.checked) {
                if (selector.value === "По популярности") {
                    showPage(createPages(filterByAvailable(sortByPopularity(goods)))[0], filterByAvailable(sortByPopularity(goods)));
                }
                else if (selector.value === "От дорогих к дешевым") {
                    showPage(createPages(filterByAvailable(sortByPriceDecrease(goods)))[0], filterByAvailable(sortByPriceDecrease(goods)));
                }
                else {
                    showPage(createPages(filterByAvailable(sortByPriceIncrease(goods)))[0], filterByAvailable(sortByPriceIncrease(goods)));
                }
            }
            else {
                if (selector.value === "По популярности") {
                    showPage(createPages(sortByPopularity(goods))[0], sortByPopularity(goods));
                }
                else if (selector.value === "От дорогих к дешевым") {
                    showPage(createPages(sortByPriceDecrease(goods))[0], sortByPriceDecrease(goods));
                }
                else {
                    showPage(createPages(sortByPriceIncrease(goods))[0], sortByPriceIncrease(goods));
                }
            }
        });
        selector.addEventListener('change', function () {
            if (available.checked) {
                if (selector.value === "По популярности") {
                    showPage(createPages(filterByAvailable(sortByPopularity(goods)))[0], filterByAvailable(sortByPopularity(goods)));
                }
                else if (selector.value === "От дорогих к дешевым") {
                    showPage(createPages(sortByPriceDecrease(filterByAvailable(goods)))[0], sortByPriceDecrease(filterByAvailable(goods)));
                }
                else {
                    showPage(createPages(sortByPriceIncrease(filterByAvailable(goods)))[0], sortByPriceIncrease(filterByAvailable(goods)));
                }
            } else {
                if (selector.value === "По популярности") {
                    showPage(createPages(sortByPopularity(goods))[0], sortByPopularity(goods));
                }
                else if (selector.value === "От дорогих к дешевым") {
                    showPage(createPages(sortByPriceDecrease(goods))[0], sortByPriceDecrease(goods));
                }
                else {
                    showPage(createPages(sortByPriceIncrease(goods))[0], sortByPriceIncrease(goods));
                }
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
    } else {
        counterSpan.classList.add('hidden');
    }
}
function scrollIt(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop
    });
}
const sortByPriceDecrease = (goods) => goods.slice().sort((a, b) => parseInt(b.price) - parseInt(a.price));//from high
const sortByPriceIncrease = (goods) => goods.slice().sort((a, b) => parseInt(a.price) - parseInt(b.price));//from low
const sortByPopularity = (goods) => goods.slice().sort((a, b) => b.popularity - a.popularity);// by popularity
const filterByAvailable = (goods) => goods.filter(good => good.avilable);

checkbasket();
showMinibasket();
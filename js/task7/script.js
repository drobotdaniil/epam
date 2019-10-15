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
        //function for creating pages
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
        //function for showing current page
        const showPage = (item, goods) => {
            // console.log(filterByAll(goods))
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
                if (note.available) {
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
        //events for buttons "Купить"
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
            gridBtn.classList.remove('active')
            this.classList.add('active');
            showPage(createPages(sortByPopularity(goods))[0], sortByPopularity(goods))
        });
        //events for checkbox and select
        available.addEventListener('change', function (e) {
            if (this.checked) {
                goods = filterByAvailable(goods);
                showPage(createPages(goods)[0], goods)
            } else {
                goods = data;
                if (selector.value === "По популярности") {
                    showPage(createPages(sortByPopularity(goods))[0], sortByPopularity(goods))
                } else if (selector.value === "От дорогих к дешевым") {
                    showPage(createPages(sortByPriceDecrease(goods))[0], sortByPriceDecrease(goods))
                } else {
                    showPage(createPages(sortByPriceIncrease(goods))[0], sortByPriceIncrease(goods))
                }
            }
        });
        selector.addEventListener('change', function (e) {
            if (this.value === "По популярности") {
                showPage(createPages(sortByPopularity(goods))[0], sortByPopularity(goods))
            } else if (this.value === "От дорогих к дешевым") {
                showPage(createPages(sortByPriceDecrease(goods))[0], sortByPriceDecrease(goods))
            } else {
                showPage(createPages(sortByPriceIncrease(goods))[0], sortByPriceIncrease(goods))
            }
        });
    })
//function for getting items from LS and parse to Object basket
function checkbasket() {
    if (localStorage.getItem('basket') != null) {
        basket = JSON.parse(localStorage.getItem('basket'));
    }
}
//function for counts items in basket
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
//function to scrollToTop
function scrollIt(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop
    });
}
//sorting functions
const sortByPriceDecrease = (goods) => goods.sort((a, b) => parseInt(b.price) - parseInt(a.price));//from high
const sortByPriceIncrease = (goods) => goods.sort((a, b) => parseInt(a.price) - parseInt(b.price));//from low
const sortByPopularity = (goods) => goods.sort((a, b) => b.popularity - a.popularity);// by popularity
const filterByAvailable = (goods) => goods.filter(good => good.available);
const filterByAll = (goods) => goods.filter(good => good);
//run
checkbasket();
showMinibasket();
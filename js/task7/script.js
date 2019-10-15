let goods = [
    {
        id: 1,
        name: "Тор. Плоды осады. Пожиратели миров",
        price: "300",
        popularity: 700,
        imgUrl: "img/1.jpg",
        avilable: true
    },
    {
        id: 2,
        name: "Непобедимый Человек-Паук",
        price: "500",
        popularity: 300,
        imgUrl: "img/2.jpg",
        avilable: true
    },
    {
        id: 3,
        name: "Росомаха. Начало",
        price: "250",
        popularity: 400,
        imgUrl: "img/3.jpg",
        avilable: false
    },
    {
        id: 4,
        name: "Хэнк Пим",
        price: "285",
        popularity: 100,
        imgUrl: "img/4.jpg",
        avilable: true
    },
    {
        id: 5,
        name: "Дедпул",
        price: "380",
        popularity: 1000,
        imgUrl: "img/5.jpg",
        avilable: true
    },
    {
        id: 6,
        name: "Земля икс. Книга вторая",
        price: "410",
        popularity: 700,
        imgUrl: "img/6.jpg",
        avilable: false
    },
    {
        id: 7,
        name: "Новый Призрачный Гонщик. Двигатели Возмездия.",
        price: "230",
        popularity: 450,
        imgUrl: "img/7.jpg",
        avilable: false
    },
    {
        id: 8,
        name: "Что за... Перчатка бесконечности?!",
        price: "310",
        popularity: 410,
        imgUrl: "img/8.jpg",
        avilable: true
    },
    {
        id: 9,
        name: "Люди Икс. Начало",
        price: "180",
        popularity: 580,
        imgUrl: "img/9.jpg",
        avilable: false
    },
    {
        id: 10,
        name: "Дедпул. Минибус 2",
        price: "390",
        popularity: 1010,
        imgUrl: "img/10.jpg",
        avilable: false
    },
    {
        id: 11,
        name: "Соколоный глаз",
        price: "210",
        popularity: 380,
        imgUrl: "img/11.jpg",
        avilable: true
    },
    {
        id: 12,
        name: "Новый Человек-Паук 2099",
        price: "380",
        popularity: 2100,
        imgUrl: "img/12.jpg",
        avilable: true
    },
    {
        id: 13,
        name: "Путь к Гражданской войне",
        price: "405",
        popularity: 660,
        imgUrl: "img/13.jpg",
        avilable: true
    },
    {
        id: 14,
        name: "Люди Икс. Худший из Людей Икс",
        price: "290",
        popularity: 200,
        imgUrl: "img/14.jpg",
        avilable: false
    },
    {
        id: 15,
        name: "Капитан Марвел. Том 2. На стиле",
        price: "235",
        popularity: 777,
        imgUrl: "img/15.jpg",
        avilable: false
    },
    {
        id: 16,
        name: "Современные Мстители. Следующее поколение",
        price: "610",
        popularity: 200,
        imgUrl: "img/16.jpg",
        avilable: false
    },
    {
        id: 17,
        name: "Мстители. Начало",
        price: "170",
        popularity: 600,
        imgUrl: "img/17.jpg",
        avilable: true
    },
    {
        id: 18,
        name: "Дардевил. Шум и ярость.",
        price: "255",
        popularity: 590,
        imgUrl: "img/18.jpg",
        avilable: true
    },
    {
        id: 19,
        name: "Люди-Х'92",
        price: "330",
        popularity: 190,
        imgUrl: "img/19.jpg",
        avilable: true
    },
    {
        id: 20,
        name: "Совершенный Человек-паук",
        price: "390",
        popularity: 340,
        imgUrl: "img/20.jpg",
        avilable: true
    },
    {
        id: 21,
        name: "Мстители. Начало",
        price: "315",
        popularity: 400,
        imgUrl: "img/17.jpg",
        avilable: false
    },
    {
        id: 22,
        name: "Дардевил. Шум и ярость.",
        price: "325",
        popularity: 800,
        imgUrl: "img/18.jpg",
        avilable: true
    },
    {
        id: 23,
        name: "Люди-Х'92",
        price: "510",
        popularity: 120,
        imgUrl: "img/19.jpg",
        avilable: true
    },
    {
        id: 24,
        name: "Совершенный Человек-паук",
        price: "500",
        popularity: 990,
        imgUrl: "img/20.jpg",
        avilable: false
    }
];
let cart = {};
const goodsDiv = document.querySelector('#goods');
const pagination = document.querySelector("#pages");
const gridBtn = document.querySelector('#btn-grid');
const listBtn = document.querySelector('#btn-list');
const checkAvailable = document.querySelector('#available');
const selector = document.querySelector('#selector');
const cartDiv = document.querySelector('#cart')
const manipulations = document.querySelector("#manipulations");
const startDiv = document.querySelector("#start");
const counterSpan = document.querySelector('#item-counter');

let notesOnPage = 8;
let active;
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
        if (cart[item] != undefined) {
            cart[item]++;
        } else {
            cart[item] = 1;
        }
        alert('Товар добавлен в корзину!');
        localStorage.setItem('cart', JSON.stringify(cart));
        // console.log(cart)
        showMiniCart()
    }
});
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
checkCart();
showMiniCart();
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
const sortByPriceDecrease = (goods) => goods.slice().sort((a, b) => parseInt(b.price) - parseInt(a.price));//from high
const sortByPriceIncrease = (goods) => goods.slice().sort((a, b) => parseInt(a.price) - parseInt(b.price));//from low
const sortByPopularity = (goods) => goods.slice().sort((a, b) => b.popularity - a.popularity);// by popularity
const filterByAvailable = (goods) => goods.filter(good => good.avilable);
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

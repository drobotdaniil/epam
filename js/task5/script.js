//initial array
let goods = [
    { name: "Тор. Плоды осады. Пожиратели миров", price: "50 UAH", imgUrl: "img/1.jpg" },
    { name: "Непобедимый Человек-Паук", price: "50 UAH", imgUrl: "img/2.jpg" },
    { name: "Росомаха. Начало", price: "50 UAH", imgUrl: "img/3.jpg" },
    { name: "Хэнк Пим", price: "50 UAH", imgUrl: "img/4.jpg" },
    { name: "Дедпул", price: "50 UAH", imgUrl: "img/5.jpg" },
    { name: "Земля икс. Книга вторая", price: "50 UAH", imgUrl: "img/6.jpg" },
    { name: "Новый Призрачный Гонщик. Двигатели Возмездия.", price: "50 UAH", imgUrl: "img/7.jpg" },
    { name: "Что за... Перчатка бесконечности?!", price: "50 UAH", imgUrl: "img/8.jpg" },
    { name: "Люди Икс. Начало", price: "50 UAH", imgUrl: "img/9.jpg" },
    { name: "Дедпул. Минибус 2", price: "50 UAH", imgUrl: "img/10.jpg" },
    { name: "Соколоный глаз", price: "50 UAH", imgUrl: "img/11.jpg" },
    { name: "Новый Человек-Паук 2099", price: "50 UAH", imgUrl: "img/12.jpg" },
    { name: "Путь к Гражданской войне", price: "50 UAH", imgUrl: "img/13.jpg" },
    { name: "Люди Икс. Худший из Людей Икс", price: "50 UAH", imgUrl: "img/14.jpg" },
    { name: "Капитан Марвел. Том 2. На стиле", price: "50 UAH", imgUrl: "img/15.jpg" },
    { name: "Современные Мстители. Следующее поколение", price: "50 UAH", imgUrl: "img/16.jpg" },
    { name: "Мстители. Начало", price: "50 UAH", imgUrl: "img/17.jpg" },
    { name: "Дардевил. Шум и ярость.", price: "50 UAH", imgUrl: "img/18.jpg" },
    { name: "Люди-Х'92", price: "50 UAH", imgUrl: "img/19.jpg" },
    { name: "Совершенный Человек-паук", price: "50 UAH", imgUrl: "img/20.jpg" },
    { name: "Мстители. Начало", price: "50 UAH", imgUrl: "img/17.jpg" },
    { name: "Дардевил. Шум и ярость.", price: "50 UAH", imgUrl: "img/18.jpg" },
    { name: "Люди-Х'92", price: "50 UAH", imgUrl: "img/19.jpg" },
    { name: "Совершенный Человек-паук", price: "50 UAH", imgUrl: "img/20.jpg" }
];
//DOM Elements
const h3 = document.querySelector("#title");
const goodsDiv = document.querySelector("#goods");
const pagination = document.querySelector("#pages");
const btnGrid = document.querySelector("#btn-grid");
const btnList = document.querySelector("#btn-list");
//variables
let notesOnPage = 8;
let countOfItems = Math.ceil(goods.length / notesOnPage);
let pages = [];
let active;
//loop for counts of pages
for (let i = 1; i <= countOfItems; i++) {
    let li = document.createElement('li');
    li.innerHTML = i;
    pagination.appendChild(li);
    pages.push(li);
    pagination.style.display = "none";
}
//Events
//for btn Grid-View
btnGrid.addEventListener('click', () => {
    btnList.classList.remove("active");
    btnGrid.classList.add("active");
    showPage(pages[0]);
});
//for btn List-View
btnList.addEventListener('click', () => {
    btnGrid.classList.remove("active");
    btnList.classList.add("active");
    showPage(pages[0]);
});
//loop for a pagination
pages.forEach(item => {
    item.addEventListener('click', function () {
        scrollIt(goodsDiv); 
        showPage(this);
    });
});
//Function for creating a page
function showPage(item) {
    if (active) {
        active.classList.remove('active');
    }
    active = item;
    item.classList.add('active');
    let pageNum = +item.innerHTML;
    let start = (pageNum - 1) * notesOnPage;
    let end = start + notesOnPage;
    let notes = goods.slice(start, end);
    let output = '';
    notes.forEach(note => {
        if(btnList.classList.contains("active")){
            output += `<div class='goods-item_listView'>`;
        }
        else{
            output += `<div class='goods__item goods-item'>`;
        }
        output += `<img src='${note.imgUrl}' alt='${note.name}' class='goods-item__img'>
            <h2 class='goods-item__title'>${note.name}</h2>
            <p class='goods-item__price'> ${note.price}</p>
            </div>`;
    });
    goodsDiv.innerHTML = output;
    pagination.style.display = "flex";
}
//Function for scrollingToTop
function scrollIt(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop
    });
}
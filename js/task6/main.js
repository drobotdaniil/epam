const goodsDiv = document.querySelector('#goods');
const btn = document.querySelector('button');
let goods = [
    {
        name: "Iphone 11",
        price: "25000 UAH",
        imgUrl: "img/1.jpg",
        hasColor: true
    },
    {
        name: "Iphone 11",
        price: "25000 UAH",
        imgUrl: "img/2.jpg"
    },
    {
        name: "Iphone 11",
        price: "25000 UAH",
        imgUrl: "img/3.jpg"
    }
];
function createGoods() {
    let output = '';
    goods.forEach(item => {
        output += `<div class='goods-item' id='goodsitem'>
            <img src="${item.imgUrl}" alt='${item.name}' class='goods-item__img'>`;
        if (item.hasColor) {
            output += `<ul>
                <li><div class='active' data-first></div></li>
                <li><div data-second></div></li>
                <li><div data-third></div></li>
            </ul>
            <h2 class='goods-item__title'>${item.name}</h2>
            <p class='goods-item__price'>${item.price}</p>
            </div>`;
        } else {
            output += `<h2 class='goods-item__title'>${item.name}</h2>
            <p class='goods-item__price'>${item.price}</p>
            </div>`;
        }
    });
    goodsDiv.innerHTML = output;
};
class AddGood {
    constructor(name, imgUrl, price) {
        this.name = name,
            this.imgUrl = imgUrl,
            this.price = price;
    }
}
btn.addEventListener('click', function () {
    let nameInput = document.querySelector("#name").value;
    let priceInput = document.querySelector("#price").value;
    let imageInput = document.querySelector("#image").files[0].name;
    goods.push(new AddGood(nameInput, "img/" + imageInput, priceInput + " UAH"));
    createGoods();
    eventForChangeColor();
})
function eventForChangeColor() {
    const ul = document.querySelector('ul');
    ul.addEventListener('click', function (e) {
        let img = document.querySelector('img');
        let target = e.target;
        if (e.target.tagName != "DIV") return;
        if (e.target.classList.contains('active')) return;
        else if (e.target.dataset.first != undefined) {
            changeColor(target)
            img.src = "img/1.jpg"
        }
        else if (e.target.dataset.second != undefined) {
            changeColor(target)
            img.src = "img/2.jpg"
        }
        else {
            changeColor(target)
            img.src = "img/3.jpg"
        }
    });
}
function changeColor(target) {
    let active = document.querySelector('li .active');
    active.classList.remove('active')
    target.classList.add('active');
}
createGoods()
eventForChangeColor()
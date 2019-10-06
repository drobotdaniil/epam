const goodsDiv = document.querySelector("#goods");
const btn = document.querySelector("button");

class AddGood {
    constructor(name, imgUrl, price) {
        this.name = name,
            this.imgUrl = imgUrl,
            this.price = price;
    }
}
let goods = [
    { name: "Тор. Плоды осады. Пожиратели миров", price: "50 UAH", imgUrl: "img/1.jpg" },
    { name: "Непобедимый Человек-Паук", price: "50 UAH", imgUrl: "img/2.jpg" },
    { name: "Росомаха. Начало", price: "50 UAH", imgUrl: "img/3.jpg" },
    { name: "Хэнк Пим", price: "50 UAH", imgUrl: "img/4.jpg" }
];
function createGood() {
    let output = '';
    goods.forEach(note => {
        output += `<div class='goods-item'>`;
        output += `<img src='${note.imgUrl}' alt='${note.name}' class='goods-item__img'>
            <h2 class='goods-item__title'>${note.name}</h2>
            <p class='goods-item__price'> ${note.price}</p>
            </div>`;
    });
    goodsDiv.innerHTML = output;
}
btn.addEventListener('click', function () {
    let nameInput = document.querySelector("#name").value;
    let priceInput = document.querySelector("#price").value;
    let imageInput = document.querySelector("#image").files[0].name;
    goods.push(new AddGood(nameInput,"img/" + imageInput, priceInput + " UAH"));
    createGood();
});
createGood();

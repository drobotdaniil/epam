const goodsDiv = document.querySelector("#goods");
const btn = document.querySelector('button');
let goods = [
    {
        name: "Iphone 11",
        price: "50 UAH",
        imgUrl: "img/1.jpg"
    }
];
class Menu {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this); // (*)
    }
    red() {
        let img = this._elem.querySelector('img');
        img.src = "img/1.jpg";
    }

    purple() {
        let img = this._elem.querySelector('img');
        img.src = "img/2.jpg";
    }
    white() {
        let img = this._elem.querySelector('img');
        img.src = "img/3.jpg";
    }
    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    };
}
function createGood() {
    let output = '';
    goods.forEach(note => {
        output +=
            `<div class='goods-item' id='goodsitem'>
            <img src="${note.imgUrl}" alt='${note.name}' class='goods-item__img'>
            <div id="menu">
            <button data-action="red">Red</button>
            <button data-action="purple">Purple</button>
            <button data-action="white">White</button>
            </div>
            <h2 class='goods-item__title'>${note.name}</h2>
            <p class='goods-item__price'>${note.price}</p>
        </div>`;
    });
    goodsDiv.innerHTML = output;
    var mas = [];
    mas.push(new Menu(goodsitem))
}
createGood();

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
    createGood();
});


// // const ul = document.querySelectorAll('ul');
// // ul.forEach(item => {
// //     item.addEventListener('click', function (e) {
// //         let img = document.querySelector('img');
// //         let target = e.target;
// //         if (e.target.tagName != "DIV") return;
// //         if (e.target.classList.contains('active')) return;
// //         else if (e.target.dataset.first != undefined) {
// //             remove(target)
// //             img.src = "img/1.jpg"
// //         }
// //         else if (e.target.dataset.second != undefined) {
// //             remove(target)
// //             img.src = "img/2.jpg"
// //         }
// //         else{
// //             remove(target)
// //             img.src = "img/3.jpg"
// //         }
// //     });
// // })
// // function remove(target){
// //     let active = document.querySelector('li .active');
// //     active.classList.remove('active')
// //     target.classList.add('active');
// // }

// // var arr = [new Menu(goodsitem), new Menu(goodsitem2)];

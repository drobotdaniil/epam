let kickscooter = {
    model: "children",
    color: "red",
    mileage: 100,
    steeringWheel: true
};

// let bycicle = {
//     model: "Downhill",
//     color: "blue",
//     mileage: 1000,
//     brake: true,
//     sound() {
//         console.log("Ding dong");
//     }
// };
// let car = {
//     model: "Invalidka",
//     color: "blue",
//     mileage: 60000,
//     sound() {
//         console.log("Bip bip");
//     }
// };
// bycicle.__proto__ = kickscooter;
// car.__proto__ = bycicle;

// console.dir(car)

// console.log(car.steeringWheel)
// console.log(car.brake)


// class Item {
//     constructor(model, color, milleage) {
//         this.model = model;
//         this.color = color;
//         this.mileage = milleage;
//     }
// }

// let newScooter = new Item("Adult", "pink", 100);
// let newByke = new Item("Sport", "red", 0);
// let newCar = new Item("Mazda", "black", 10000);

// newByke.brake = true;
// newByke.__proto__ = newScooter;
// newCar.__proto__ = newByke;

// console.log(newScooter)
// console.log(newByke)
// console.log(newCar)

// for(key in newCar){
//     console.log(`${key}: ${newCar[key]}`)
// }

// const goods = [
//     { ratingRevievs: "1355 отзывов", price: "4999", name: "Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!" },
//     { ratingRevievs: "426 отзывов", price: "5199", name: "Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!" },
//     { ratingRevievs: "403 отзыва", price: "4349", name: "Xiaomi Redmi Note 4X 3/32GB Black" },
//     { ratingRevievs: "488 отзывов", price: "6199", name: "Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!" },
//     { ratingRevievs: "59 отзывов", price: "5999", name: "Nokia 5 Dual Sim Tempered Blue" },
//     { ratingRevievs: "119 отзывов", price: "11999", name: "Samsung Galaxy A5 2017 Duos SM-A520 Black + карта памяти 128гб!" },
//     { ratingRevievs: "1106 отзывов", price: "3999", name: "Samsung Galaxy J5 J500H/DS Black + чехол + защитное стекло!" },
//     { ratingRevievs: "380 отзывов", price: "2199", name: "Huawei Y3 II Tiffany (White-Blue) + чехол + защитное стекло!" },
//     { ratingRevievs: "177 отзывов", price: "6499", name: "Huawei P8 Lite 2017 White + УМБ Huawei AP08Q + защитное стекло + чехол!" },
//     { ratingRevievs: "347 отзывов", price: "4299", name: "Xiaomi Redmi 4X 3/32GB Black (Международная версия)" },
//     { ratingRevievs: "709 отзывов", price: "2799", name: "Samsung Galaxy J1 2016 SM-J120H Black + защитное стекло + чехол!" },
//     { ratingRevievs: "527 отзывов", price: "6499", name: "Huawei Y6 Pro Gold + чехол + защитное стекло!" },
//     { ratingRevievs: "66 отзывов", price: "6499", name: "Apple iPhone 6s 32GB Gold" },
//     { ratingRevievs: "14 отзывов", price: "6499", name: "Apple iPhone 6 32GB Space Gray" },
// ];


// goods.sort((a, b) => {
//     if (parseInt(a.price) == parseInt(b.price)) {
//         return parseInt(a.ratingRevievs) - parseInt(b.ratingRevievs)
//     }
//     else {
//         return parseInt(a.price) - parseInt(b.price)
//     }
// });
// console.log(goods)

// let arr = [5, 2, 11, 8, 4];

// console.log(Math.min(...arr))
// console.log(Math.max(...arr))


// const newFunc = (string) => {
//     let arr = string.split("");
//     let mas = [];
//     arr.forEach(item => {
//         if(item != '_'){
//             mas.push(item)
//         }
//     });
//     arr.filter(item => {
        
//     })
//     return mas.join("");
//     // return string.replace("_", "");
// };
// console.log(newFunc("str_age_"));

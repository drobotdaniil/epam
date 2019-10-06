// //first exe
let arr = [
    { country: "Республика Корея", city: "Сеул-Инчхон", population: 24210 },
    { country: "Индия", city: "Мумбаи", population: 23265 },
    { country: "Индонезия", city: "Джакарта", population: 32275 },
    { country: "Япония", city: "Токио-Иокогама", population: 38050 },
    { country: "Индия", city: "Дели", population: 27280 },
    { country: "КНР", city: "Шанхай", population: 24115 },
    { country: "Филиппины", city: "Манила", population: 24650 },
    { country: "Япония", city: "Токио", population: 32007 },
    { country: "Япония", city: "Нагойя", population: 35986 }
];

// let set = [...new Set(arr.map(item => item.city))]
// set.forEach((value) => {
//     checkLength(value, 6);
// });
// function checkLength(item, length){
//     return item.length === length ? console.log(true) : console.log(false);
// }

//second exe

let map = new Map();

arr.forEach(item => {
    if (map.has(item.country)) {
        map.set(item.country, map.get(item.country) + item.population)
    }
    else {
        map.set(item.country, item.population)
    }
});
console.log(map)
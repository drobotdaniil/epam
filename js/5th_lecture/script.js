// let arr = [9, 5, 3, 7, 2, 8, 1, 4, 6];
// let arr1 = arr.filter(item => item % 2 == 0);
// let arr2 = arr.filter(item => !(item % 2 == 0)).sort((a, b) => a - b);
// let result = [];

// arr2.forEach(item => {
//     if (item != 9) {
//         result.push(item);

//     }
// });
// arr1.forEach(item => {
//     if (item !== 4 && item !== 6) {
//         result.push(item);

//     }
// });
// arr2.forEach(item => {
//     if (item === 9) {
//         result.push(item);

//     }
// });
// arr1.forEach(item => {
//     if (item === 4 || item === 6) {
//         result.push(item);

//     }
// });
// let delay = 500;
// result.forEach(item => {
//     setTimeout(() => {
//         console.log(item);
//     }, delay);
//     delay+=500;
// });

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
// function removeDuplicates(originalArray, prop) {
//     var newArray = [];
//     var lookupObject = {};

//     for (var i in originalArray) {
//         lookupObject[originalArray[i][prop]] = originalArray[i];
//     }

//     for (i in lookupObject) {
//         newArray.push(lookupObject[i]);
//     }
//     return newArray;
// }
// var uniqueArray = removeDuplicates(arr, "country");
// console.log(uniqueArray);
// console.log(countriesWithoutRepeat)
// let arr2 = arr.slice().sort((a, b) => {
//     var countryA = a.country.toLowerCase(), 
//     countryB = b.country.toLowerCase()
//     if (countryA < countryB)
//         return -1
//     if (countryA > countryB)
//         return 1
//     return 0 
// });
// // console.log(arr2)
// let countriesOnly = [];
// arr2.forEach((item)=>{
//     countriesOnly.push(item.country);
// });
// console.log(countries)
// let countriesWithoutRepeat = countriesOnly.filter((item, pos) => countriesOnly.indexOf(item) == pos);
// console.log(countriesWithoutRepeat)
// let newB = [];
// countriesWithoutRepeat.forEach(country => {
//     arr2.forEach(item2 => {
//         let pop = item2.population;
//         if(country === item2.country){
//             console.log(item2)
//         }

//     });

// });


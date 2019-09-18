// let obj = Object.create(Object.prototype);


// var obj1 = { ["First" + "Name"]: "Olga" };
// console.log(obj1["First" + "Name"]);


// var calculator = {
//     operand1: 1,
//     operand2: 1,
//     add: function () {
//         this.result = this.operand1 + this.operand2;
//     }
// };
// calculator.add();
// console.log(calculator.result);


// var x = { x: 12 };
// var y = Object.create(x, { y: { value: 13 } });
// console.log(y.x);
// console.log(y)
// console.log(y.y);
// // ES6
// let a = { 
//     a: 12, 
//     __proto__: { b: 13 } }
// // console.log(a.a);
// // console.log(a.b); 


// Object.prototype.x = 10;
// var a = {};
// alert(a["x"]);
// alert(a.toString());
// alert(a.constructor);


// var emptyHash = Object.create(null);
// console.log(emptyHash.toString());


// var a = {
//     x: 10,
//     calculate: function (z) {
//         return this.x + this.y + z;
//     }
// };
// var b = {
//     y: 20,
//     __proto__: a
// };
// var c = {
//     y: 30,
//     __proto__: a
// };
// b.calculate(30);
// // c.calculate(40);


// let a = {
//     x: 10,
//     calculate: function (z){
//         return this.x + this.y + z;
//     }
// };

// let b = {
//     y: 20,
//     __proto__: a
// };

// console.log(b.calculate(30));


// const user = {
//     name: "John"
// };
// user.age = 25;
// alert(user.age);

// var o1 = { a: 1 }; 
// var o2 = { a: 2 }; 
// var o3 = { c: 3 }; 
// var obj = Object.assign(o1, o2, o3); 
// console.log(obj); 
// console.log(o1); 


// class Person {
//     constructor(name, age) {
//         this.name = name,
//         this.age = age;
//     }
//     get FullInfo(){
//         return `${this.name} ${this.age}`
//     }
// }

// let person1 = new Person("Daniil", 25);

// console.log(person1.FullInfo)


// function Person(name, age){
//     this.name = name,
//     this.age = age;
// }

// Person.prototype.proffesion = "teacher"

// let person1 = new Person("Kirill", 12);

// console.log(person1.proffesion)

let person1 = {
    name: "Alex",
    age: 28,
    career: "teacher",
    hobbies: "guitar"
};

let person2 = {
    name: "Kirill",
    age: 30,
    city: "Kharkov",
    sex: "male",
    hobbies: "table games"
}

// for (let key in person1) {
//     for (let key1 in person2) {
//         if (key == key1) person2[key1] = person1[key]
//     }
// }
// console.log(person2)

// for (let key2 in person2) {
//     for (let key1 in person1){
//         if(key1 != key2) delete key1;
//     }
// }
// for(let key1 in person1){
//         if(!(key1 in person2)){
//             delete person1[key1];
//         }
//     }
// console.log(person1);
// console.log(person2);

var arr = [
    { country: "Республика Корея", city: "Сеул-Инчхон", population: 24210 },
    { country: "Индия", city: "Мумбаи", population: 23265 },
    { country: "Индонезия", city: "Джакарта", population: 32275 },
    { country: "Япония", city: "Токио-Иокогама", population: 38050 },
    { country: "Индия", city: "Дели", population: 27280 },
    { country: "КНР", city: "Шанхай", population: 24115 },
    { country: "Филиппины", city: "Манила", population: 24650 }
];
arr.sort(function (a, b) {
    if (a.population > b.population) {
        return 1;
    }
    if (a.population < b.population) {
        return -1;
    }
    // a должно быть равным b
    return 0;
});
console.log(arr)
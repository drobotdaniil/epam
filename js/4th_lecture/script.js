// function Counter() {
//     var count = 0;
//     return function () {
//         count++;
//         return count;
//     }
// }

// var counter = Counter();
// var newCounter = Counter();

// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(newCounter())

// function numberGenerator() {
//     var currentNum = 2;
//     return function multNumber() {
//         return currentNum *= currentNum;
//     };
// }
// var generation = numberGenerator();
// var generation2 = numberGenerator();
// console.log(generation());
// console.log(generation());
// console.log(generation2());
// console.log(generation2());

// function foo(callback) {
//     callback();
// }

// foo(function bar() {
//     console.log('foo.bar');
// });

// foo(function baz() {
//     console.log('foo.baz');
// });

// function myConcat(separator) {
//     var result = "";
//     for (var i = 1; i < arguments.length; i++) {
//         result += arguments[i] + separator;
//     }
//     return result;
// }
// myConcat(", ", "red", "orange", "blue"); 

// function multiply(a, b = 1) {
//     return a * b;
// }
// multiply(5, 2);
// console.log(multiply(5, 2))

// function func(...rest) {
//     console.log(rest);
// }
// func('a', 'b', 1, 2);

// var array = [2, 3, 5];
// console.log(Math.min(...array));


// function func() {
//     console.log(arguments);
// }
// const parameters = [3, 4, 8];
// func(1, ...parameters, 11, ...[15, 20]);


// function getFunc() {
//     let value = 2;
//     let func = function () {
//         console.log(value * 3);
//     };
//     return func;
// }
// let new1 = getFunc()();
// let new2 = getFunc()();

// console.log(new1)
// console.log(new1)
// console.log(new2)

// function func(...rest) {
//     console.log(rest);
// }
// func('a', 'b', 1, 2);


// function sum(multiplier, ...rest) {
//     let sum = 0;
//     for (let i = 0; i <rest.length; i++){
//             sum+=rest[i];
//     }
//     sum -= rest[0];
//     return multiplier*sum;
// }
// const parameters = [3, 6, 8];

// console.log(sum(3, ...parameters))

var arr = [
    { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
    { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
    { name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
];

function func() {
    let result = arr.reduce(function (sum, arr) {
        return sum + arr.books + ",";
    }, "");
    console.log(result);
}
func(...arr);

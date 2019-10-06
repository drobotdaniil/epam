// var s1 = "2 + 2"; 
// var s2 = new String("2 + 2"); 
// eval(s1); 
// eval(s2);


// var re = /\w+\s/g;
// var str = "fee fi fo fum Fee Fo";
// var myArray = str.match(re);
// console.log(myArray);

// var anyString = 'MozillaFox'; 
// console.log(anyString.slice(-3));
// console.log(anyString.substring(3, 0));

// var anyString = 'Mozilla'; 
// var anyString4 = anyString.substring(anyString.length - 4); 
// console.log(anyString4);


// console.log("A" < "a");

// var let = A.codePointAt("a")
// console.log(let)

// var arr = []; 
// arr[3.4] = "Oranges"; 
// console.log(arr); 
// console.log(arr.length); 


// let arr = ["3", "2", "3", "5"];
// let newArr = arr.fill(4, 2, 2);
// console.log(newArr);


// var cats = ['Dusty', 'Misty', 'Twiggy']; 
// console.log(cats.length); 

// cats.length = 2; 
// console.log(cats); 
// cats.length = 0; 
// console.log(cats); 
// cats.length = 3; 
// console.log(cats);


// let arr1 = [1];
// let arr2 = [2];
// let arr3 = [...arr1,...arr2,...[3,4]];
// let arr4 = [5];


// function mySum(a,b,c,d,e){
//     return a+b+c+d+e;
//   }

//   let result = mySum(...arr3,...arr4);
//   console.log(result);

// let fruits = ["Apple", "Orange", "Plum"]; // iterates over array elements 
// for (let fruit of fruits) { 
//   console.log( fruit ); 
// }

// var s = "456456";
// // for (var i = 0; i < s.length; i++) {
// //     console.log(+s[i]);
// // }
// // console.log(+s[0] + +s[1]) 
// if(+s[0] + +s[1] + +s[2] == +s[3]+ +s[4] + +s[5]) console.log("true");
// else console.log("False");

let arr = ['aaa', 'bbb', 'ccc', 'ddd', 'aaa', 'aaa', 'aaaa', 'aaaa', 'aaaa'];

let newArr = arr.filter((item, pos) => arr.indexOf(item) == pos);
console.log(newArr)
// let result = [];

// let arr2 = [];

// for(let i = 0; i < 4; i++){
//     arr2.push(arr[i]);
// }

// console.log(arr2)

// let numbers = [1, 10, 15, 20, -5, 8, 14];
// let negative = [];

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);

// }
// numbers.forEach(function(item, i){
//     console.log(item + " i:" + i)
// });

// for(let i = 0; i < numbers.length; i++){
//     // if(numbers[i] < 0) {
//         negative.push(numbers[i]*-1);
//     // }
// }
// console.log(negative);



// let negative2 = numbers.filter(function(item){
//     return item > 0;

// });
// console.log(negative2)


// let data = ['1', '-10', '15', '20', '-5', '8', '14'];

// let newData = [];

// for (let i = 0; i < data.length; i++){
//     newData.push(parseInt(data[i]));
// }
// console.log(data)
// console.log(newData);

// let newData2 = data.map(function(item){
//     return parseInt(item);
// });
// console.log(newData2);

// let numbers = [1, 10, 15, 20, 5, -8, 14];

// let allPos = true;

// for (let i = 0; i < numbers.length; i++){
//     if(numbers[i] < 0){
//         allPos = false;
//         break;
//     }
// }
// console.log(allPos);

// let allPos2 = numbers.every(function(item){
//     return item >= 0;
// });

// console.log(allPos2);


// let numbers = [1, 10, 15, 20, 5, -8, 14];

// let hasNeg = false;

// for (let i = 0; i < numbers.length; i++){
//     if(numbers[i] < 0){
//         hasNeg = true;
//         break;
//     }
// }
// console.log(hasNeg);

// let hasNeg2 = numbers.some(function(item){
//     return item <=0;
// });
// console.log(hasNeg2);

// let numbers = [1, 10, 15, 20, 5, -8, 14];

// let sum = 0;

// for( let i =0; i < numbers.length; i++){
//     sum += numbers[i];
// }

// console.log(sum);

// let sum2 = numbers.reduce(function(total, item){
//     console.log(total);
//     console.log(item);
//     return total + item;
// }, 0);

// console.log(sum2);
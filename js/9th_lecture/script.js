// localStorage.colorSetting = '#a4509b';
// localStorage['colorSetting'] = '#a4509b';
localStorage.setItem('colorSetting', '#a4509b');



// localStorage.setItem('userName', 'Daniil');
// localStorage.setItem('userAge', '22');
// let h1 = document.querySelector('h1');
// h1.style.color = localStorage.getItem('colorSetting');
// h1.innerHTML = localStorage.getItem('userName') + " " + localStorage.getItem('userAge');
// localStorage.setItem('user', '{name: "Antron"}')
// let newuser = localStorage.setItem('user2', {name: "Anton"})

// let obj = {
//     user: 'Igor',
//     age: 15,
//     eat(){
//         console.log(this.user + ' eating')
//     }
// };
// let serialObj = JSON.stringify(obj);
// localStorage.setItem("user", serialObj);

// let func = localStorage.setItem('function', "(function newFunc(){console.log('Working')})()")


// console.log(new Function(localStorage.getItem('function')));


var fun = function Function2(){
    alert("123");
}
localStorage.setItem('function', fun.toString());

let abc = localStorage.getItem('function');
console.log(abc)
let newF = new Function("return(" + abc + ")");
newF()
// console.log(newF)
// let data = {};

// if(localStorage.getItem('function')){
//     data = JSON.parse(localStorage.getItem('function'))
// }
// console.log(data)

// let testing = function newTest(){
//     alert("Test")
// };
// let serialTesting = JSON.stringify(testing);
// localStorage.setItem('function', serialTesting);
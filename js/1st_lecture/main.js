// var result,
// password;
// result = prompt("What is your login?", "Login");
// if(result === "Admin"){
//     password = prompt("Ваш пароль", "0");
//     if(password === "12345"){
//         alert("OK")
//     }
//     else{
//         alert("Неверный пароль!")
//     }
// } else{
//     alert("Доступ запрещен.")
// }

// var a = +prompt("a = ", 0);
// var b = +prompt("b = ", 0);
// var c = +prompt("c = ", 0);

// if (((2 < a < 11) || (6 <= b < 14)) && c<14 || c > 90) {
//     alert("OK");
// } else{
//     alert("False");
// }
// for(var i = 0; i < 11; i++){
//     if(i/2 % 2 && i/2 % 3 && i/3 % 3 && i/2 % 5)
//     console.log(i);
// }

function isPrime(num){
    if(num < 2) return false;
    for(var i = 2; i < num; i++){
        if(num%i == 0)
        return false;
    }
    return true;
}
for(var i=0; i <= 13; i++){
    if(isPrime(i)) 
    console.log(i);
}

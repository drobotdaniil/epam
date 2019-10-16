// $( "li" ).filter( ":odd" ).css( "background-color", "red" );
// $("li").filter("li:first-child").css({"font-size":"30px", "background-color":"blue"});
// $("li").filter(document.querySelector("li:first-child")).css( "background-color", "red" );
// let ul = $('ul');
// $('<li>123</li>').appendTo(ul);
// ul.append('<li>222</li>');
// ul.attr({'data-action':'2','class':'my item-ul myUl'});
// ul.attr();
let time = performance.now()
// console.log(time)
let ul = $('ul');
for(let i = 1; i<= 100; i++){
    $('<li class="item'+i+'" id="item'+i+'">'+i+'</li>').appendTo(ul);
}
let time1 = performance.now()
// console.log(time1)
console.log(time1 - time)
for(let i = 100; i>=1; i--){
    $('<li>'+i+'</li>').appendTo(ul).attr({'class':'item'+ i, 'id':"item" + i})
}
let time2 = performance.now()
console.log(time2 - time1)

for(let i = 1; i <= 100; i++){
    let li = document.createElement('li');
    li.classList.add('item' + i);
    li.id = "item" + i;
    li.innerHTML=i;
    ul.append(li);
}
let time3 = performance.now();
console.log(time3-time2)
$('button').on('click',function(){
    $('li').toggle();
})
$('<li name ="Test Testing-one NoTest">123</li>').appendTo(ul);
$("[name ~= one]").css("background-color", "red");
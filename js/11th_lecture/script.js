// let xhr = new XMLHttpRequest();
// var url = "text.txt";

// xhr.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var data = this.responseText;
//         document.querySelector('#hello').innerHTML = data;
//         document.querySelector('button').addEventListener('click', (e)=>{
//             document.body.style.background = "red"
//         })
//     }
// }
// xhr.open('GET', url, true)
// xhr.send();
// function postData(url = 'https://jsonbox.io/box_8a9b8f59398ce0e9ef9c', data = { "name": "Danil123" }) {
//     return fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, cors, *same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json',
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrer: 'no-referrer', // no-referrer, *client
//         body: JSON.stringify(data),
//     })
//         .then(response => response.json())
// }
// postData()

// fetch('https://jsonbox.io/box_3e81162b483776385011')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data)
//         let out = '';

//         data.forEach(item => {
//             console.log(item)
//             // out = "<div>"
//             // out += "<p>" + item[_id] + "</p>";
//             // out += "<p>" + item[name] + "</p>";
//             // out += "<p>" + item[createdOn] + "</p>";
//             // out += "</div>"
//         });
//         // document.querySelector('#hello').innerHTML = out;
//     })
fetch('./data.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(item => {
            console.log(item)
            out = "<div>"
            out += "<p>" + item.id + "</p>";
            out += "<p>" + item.name + "</p>";
            out += "<p>" + item.available + "</p>";
            out += "</div>"
        });
        document.querySelector('#hello').innerHTML = out;
    })
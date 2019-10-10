const btn = document.querySelector("#btn");


//Start
btn.addEventListener('click', function () {
    let size = document.querySelector("#size").value;
    showMatrix(createMatrix(size));
})


// Functions

//create Matrix
function createMatrix(size) {
    // let matrix = [],
    //     x = y = 0,
    //     steps = size - 1; // number of steps in one direction or another
    // for (let i = 0; i < size; i++) matrix[i] = []; // Create matrix. Now matrix.length = size; 
    // for (let i = 1; i <= Math.pow(size, 2); i++) {
    //     matrix[y][x] = i; // starts from x = 0; y = 0;
    //     // Change number of steps
    //     if (y === steps && x === size - steps - 1) steps--;
    //     // Move right
    //     if ((x >= y && x < steps) || (y - 1 === x && y === size - steps - 1)) x++;
    //     // Move left
    //     else if (x <= y && x >= size - steps) x--;
    //     // Move down
    //     else if (y <= x && y < steps) y++;
    //     // Move up
    //     else if (y >= x && y >= size - steps) y--;
    // }
    // return matrix;
    let matrix = new Array(5);
    for (let i = 0; i < matrix.length; i++){
        matrix[i] = new Array(5);
        for(let j = 0; j < matrix[i].length; j++){
            
            matrix[i][j] = 1;

        }
    }
    return matrix;

}
//show matrix in html
function showMatrix(matrix) {
    let rows = '';
    for (let i = 0; i < matrix.length; i++) {
        let cells = '';
        for (let j = 0; j < matrix[i].length; j++) {
            cells += '<div class="block">' + matrix[i][j] + '</div>';
        }
        rows += '<div class="row">' + cells + '</div>';
    }
    document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="container">' + rows + '</div>');

    let container = document.querySelector(".container");
    container.addEventListener('click', function(e){
        e.target.style.background = 'rgb(' + getRandom(0,255) + ',' + getRandom(0,255) + ',' + getRandom(0,255) + ')';
    });
}
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
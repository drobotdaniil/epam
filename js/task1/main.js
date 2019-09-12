let size = prompt("Введите размер матрицы: (АхА)", 2);

//Start
showMatrix(createMatrix(size));

// Functions

//create Matrix
function createMatrix(size) {
  if (size >= 11) {
    alert("Матрица не должна быть больше 10");
    let size = prompt("Введите размер матрицы: (АхА)", 2);
    showMatrix(createMatrix(size));

  } else if(size == 0 || size <= 1){
    alert("Матрица должна быть больше 2");
    let size = prompt("Введите размер матрицы: (АхА)", 2);
    showMatrix(createMatrix(size));
  } 
  else {
    let matrix = [],
      x = y = 0,
      steps = size - 1; // number of steps in one direction or another
    for (let i = 0; i < size; i++) matrix[i] = []; // Create matrix. Now matrix.length = size; 
    for (let i = 1; i <= Math.pow(size, 2); i++) {
      matrix[y][x] = i; // starts from x = 0; y = 0;
      // Change number of steps
      if (y === steps && x === size - steps - 1) steps--;
      // Move right
      if ((x >= y && x < steps) || (y - 1 === x && y === size - steps - 1)) x++;
      // Move left
      else if (x <= y && x >= size - steps) x--;
      // Move down
      else if (y <= x && y < steps) y++;
      // Move up
      else if (y >= x && y >= size - steps) y--;
    }
    return matrix;
  }
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
}

// matrixView(createMatrix());
// function createMatrix(){
// let matrix = [],
//   x = y = 0,
//   steps1 = 6;
// steps2 = 5;
// dimension = 42;
// for (let i = 0; i < 6; i++) {
//   matrix[i] = [];
// }
// for (let i = 1; j <= dimension; i++) {
//   matrix[y][x] = i;
//   if(y === steps2 && x === steps1 - steps2-1) {
//    steps2--;
//   }
//   if (x === steps1 && y === steps1 - steps2 -1){
//     steps1--;
//     steps2--;
//   }
//   if ((x >= y && x < steps1 && y<steps2) || (y-1 === x && y === (steps1 - steps2) - 1)) x++;
//   else if ((y <= x && y <= steps2) || (y <= 4)) y++;
//   else if (x >= steps1 - steps2) x--;
//   else if(y >= x && y >= steps1 - steps2) y--;
// }
// console.log(matrix)
// }

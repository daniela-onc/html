
//transpose a matrix (or 2D array), each element has its row become its column, and its column become its row.
//implementing a function called transpose (which will receive an array of arrays as its only parameter)
// Your function must return a new array with the columns and rows switched. Note that we've included a printMatrix function, which nicely prints out your 2D arrays.



const transpose = function(matrix) {
  const rows = matrix.length;
  let columns = matrix[0].length;
  const newMatrix = [];
  for (let j = 0; j < columns; j++) {
    newMatrix[j] = Array(rows);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      newMatrix[j][i] = matrix[i][j];
    }
  }
  return newMatrix;
}

// Do not edit this function.
const printMatrix = (matrix) => {
    for (let row of matrix) {
        for (let element of row) {
            process.stdout.write(element + " ");
        }
        process.stdout.write('\n')
    }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));
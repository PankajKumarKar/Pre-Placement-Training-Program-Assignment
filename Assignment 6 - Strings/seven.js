/*
💡 **Question 7**

Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

**Example 1:**

**Input:** n = 3

**Output:** [[1,2,3],[8,9,4],[7,6,5]]

*/

function generateMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0));
  }

  let rowStart = 0;
  let rowEnd = n - 1;
  let colStart = 0;
  let colEnd = n - 1;
  let num = 1;

  while (num <= n * n) {
    // Fill top row
    for (let i = colStart; i <= colEnd; i++) {
      matrix[rowStart][i] = num++;
    }
    rowStart++;

    // Fill right column
    for (let i = rowStart; i <= rowEnd; i++) {
      matrix[i][colEnd] = num++;
    }
    colEnd--;

    // Fill bottom row
    for (let i = colEnd; i >= colStart; i--) {
      matrix[rowEnd][i] = num++;
    }
    rowEnd--;

    // Fill left column
    for (let i = rowEnd; i >= rowStart; i--) {
      matrix[i][colStart] = num++;
    }
    colStart++;
  }

  return matrix;
}

const n = 3;
const result = generateMatrix(n);
console.log(result);

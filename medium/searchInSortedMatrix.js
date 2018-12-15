function searchInSortedMatrix(matrix, target) {

  let row = 0;
  let col = matrix[0].length - 1;
  while (row < matrix.length && col >= 0) {
    const current = matrix[row][col];
    if (target === current) {
      return [row, col];
    }
    else if (target < current) {
      col--
    }
    else {
      row++;
    }
  }
  return [-1, -1];
}

// Do not edit the line below.
exports.searchInSortedMatrix = searchInSortedMatrix;

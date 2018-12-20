const swap = (i, j, array) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

function quickSort(array, start = 0, end = array.length - 1) {
  if (start >= end) return array;
  const pivotIndex = start;
  let leftIndex = start + 1;
  let rightIndex = end;
  while (rightIndex >= leftIndex) {
    if (
      array[leftIndex] > array[pivotIndex] &&
      array[rightIndex] < array[pivotIndex]
    ) {
      swap(leftIndex, rightIndex, array);
    }
    if (array[leftIndex] <= array[pivotIndex]) {
      leftIndex++;
    }
    if (array[rightIndex] >= array[pivotIndex]) {
      rightIndex--;
    }
  }
  swap(pivotIndex, rightIndex, array);

  quickSort(array, start, rightIndex - 1);
  quickSort(array, leftIndex, end);

  return array;
}

// Do not edit the line below.
exports.quickSort = quickSort;

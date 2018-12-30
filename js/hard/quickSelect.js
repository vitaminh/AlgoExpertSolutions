const swap = (i, j, array) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

function quickselect(array, k, start = 0, end = array.length - 1) {
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

  if (k - 1 < rightIndex) {
    return quickselect(array, k, start, rightIndex - 1);
  } else if (k - 1 > rightIndex) {
    return quickselect(array, k, leftIndex, end);
  } else {
    return array[rightIndex];
  }
}

// Do not edit the line below.
exports.quickselect = quickselect;

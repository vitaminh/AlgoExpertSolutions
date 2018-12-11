function selectionSort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let maxIndex = 0;
    let maxVal = array[0];
    for (let j = 0; j <= i; j++) {
      if (array[j] > maxVal) {
        maxVal = array[j];
        maxIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[maxIndex];
    array[maxIndex] = temp;
  }
  return array;
}

// Do not edit the line below.
exports.selectionSort = selectionSort;

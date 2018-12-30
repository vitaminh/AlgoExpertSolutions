function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        const temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;

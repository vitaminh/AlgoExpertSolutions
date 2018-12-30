function bubbleSort(array) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      const leftItem = array[i];
      const rightItem = array[i + 1];
      if (leftItem > rightItem) {
        isSorted = false;
        array[i] = rightItem;
        array[i + 1] = leftItem;
      }
    }
  }
  return array;
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort;

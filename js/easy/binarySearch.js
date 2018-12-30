function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }
  const mid = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);
  if (target === array[mid]) return mid;
  if (target < array[mid]) {
    return binarySearchHelper(array, target, leftIndex, mid - 1);
  }
  if (target > array[mid]) {
    return binarySearchHelper(array, target, mid + 1, rightIndex);
  }
  return -1;
}

// Do not edit the line below.
exports.binarySearch = binarySearch;

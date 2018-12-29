function shiftedBinarySearch(array, target) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  while (leftIndex <= rightIndex) {
    const mid = Math.floor(leftIndex + ((rightIndex - leftIndex) / 2));
    const current = array[mid];
    const leftNum = array[leftIndex];
    const rightNum = array[rightIndex];
    if (current === target) return mid;
    // if leftmost number <= current number we're looking at
    if (leftNum <= current) {
      if (target <= current && target >= leftNum) {
        rightIndex = mid - 1;
      } else {
        leftIndex = mid + 1
      }
    }
    // if leftmost number > current number we're looking at
    else {
      if (target > current && target <= rightNum) {
        leftIndex = mid + 1;
      } else {
        rightIndex = mid - 1;
      }
    }
  }
  // if target not found within array
  return -1;
}

// Do not edit the line below.
exports.shiftedBinarySearch = shiftedBinarySearch;

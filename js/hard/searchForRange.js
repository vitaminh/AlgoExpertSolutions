function searchForRange(array, target) {
  const finalRange = [-1, -1];
  // find leftmost range index
  alteredBinarySearch(array, target, finalRange, true);
  // find rightmost range index
  alteredBinarySearch(array, target, finalRange, false);
  return finalRange;
}

const alteredBinarySearch = (
  array,
  target,
  finalRange,
  searchLeft,
  leftIndex = 0,
  rightIndex = array.length - 1
) => {
  while (leftIndex <= rightIndex) {
    const mid = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);
    if (array[mid] < target) {
      leftIndex = mid + 1;
    } else if (array[mid] > target) {
      rightIndex = mid - 1;
    } else {
      if (searchLeft) {
        if (mid === 0 || array[mid - 1] !== target) {
          finalRange[0] = mid;
          return;
        } else {
          rightIndex = mid - 1;
        }
      } else {
        if (mid === array.length - 1 || array[mid + 1] !== target) {
          finalRange[1] = mid;
          return;
        } else {
          leftIndex = mid + 1;
        }
      }
    }
  }
};

// Do not edit the line below.
exports.searchForRange = searchForRange;

function subarraySort(array) {
  let largestOutOfOrder = -Infinity;
  let smallestOutOfOrder = Infinity;

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    if (i > 0 && current < array[i - 1]) {
      smallestOutOfOrder =
        current < smallestOutOfOrder ? current : smallestOutOfOrder;
    }
    if (i < array.length - 1 && current > array[i + 1]) {
      largestOutOfOrder =
        current > largestOutOfOrder ? current : smallestOutOfOrder;
    }
  }

  let left = -1;
  let right = -1;

  for (let j = 0; j < array.length; j++) {
    if (smallestOutOfOrder < array[j]) {
      left = j;
      break;
    }
  }

  for (let k = array.length - 1; k >= 0; k--) {
    if (largestOutOfOrder > array[k]) {
      right = k;
      break;
    }
  }

  return [left, right];
}

// Do not edit the line below.
exports.subarraySort = subarraySort;

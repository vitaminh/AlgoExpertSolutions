function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let result = [arrayOne[0], arrayTwo[0]];
  let smallestDiff = Math.abs(result[0] - result[1]);
  while (i < arrayOne.length && j < arrayTwo.length) {
    const currentDifference = Math.abs(arrayOne[i] - arrayTwo[j]);
    if (currentDifference === 0) {
      return [arrayOne[i], arrayTwo[j]];
    }
    if (currentDifference < smallestDiff) {
      smallestDiff = currentDifference;
      result = [arrayOne[i], arrayTwo[j]];
    }
    if (arrayOne[i] > arrayTwo[j]) {
      j++;
    } else {
      i++;
    }
  }
  return result;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;

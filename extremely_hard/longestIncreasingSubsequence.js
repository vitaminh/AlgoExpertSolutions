const buildSubSequence = (array, indexes, start) => {
  const result = [array[start]];
  let i = start;
  while (i !== indexes[i]) {
    i = indexes[i];
    result.unshift(array[i]);
  }
  return result;
};

function longestIncreasingSubsequence(array) {
  if (array.length <= 1) return array;
  const lengths = array.map(() => 1);
  const indexes = array.map((e, index) => index);
  let maxLength = 0;
  let maxIndex = 0;
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      const newLength = lengths[j] + 1;
      if (array[j] < array[i] && lengths[i] <= newLength) {
        lengths[i] = newLength;
        indexes[i] = j;
        if (newLength >= maxLength) {
          maxLength = newLength;
          maxIndex = i;
        }
      }
    }
  }
  return buildSubSequence(array, indexes, maxIndex);
}

// Do not edit the line below.
exports.longestIncreasingSubsequence = longestIncreasingSubsequence;

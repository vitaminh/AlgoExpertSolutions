const createSequence = (arr, indexes, start) => {
  const result = [arr[start]];
  let i = start;
  while (i !== indexes[i]) {
    i = indexes[i];
    result.unshift(arr[i]);
  }
  return result;
};

function maxSumIncreasingSubsequence(array) {
  // create additional arrays to store MSISs as well as starting indexes
  const sums = array.map(num => num);
  const indexes = array.map((e, index) => index);

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      // compare elements in initial array
      if (array[j] < array[i]) {
        // add current element to a prior max sum
        const newSum = array[i] + sums[j];
        // compare current max sum to newly created sum
        if (newSum > sums[i]) {
          sums[i] = newSum;
          indexes[i] = j;
        }
      }
    }
  }

  const result = sums.reduce(
    (acc, current, index) => {
      if (current > acc.maxVal) {
        acc.maxVal = current;
        acc.index = index;
      }
      return acc;
    },
    {
      maxVal: -Infinity,
      index: -1
    }
  );

  return [result.maxVal, createSequence(array, indexes, result.index)];
}

// Do not edit the line below.
exports.maxSumIncreasingSubsequence = maxSumIncreasingSubsequence;

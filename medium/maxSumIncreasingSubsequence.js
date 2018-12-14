function maxSumIncreasingSubsequence(array) {
  let maxSum = array[0];
  let resultArray = [array[0]];
  for (let i = 0; i < array.length; i++) {
    let currentMaxSum = array[i];
    const tempArray = [array[i]];
    let j = i + 1;
    while (j < array.length) {
      if (array[j] > tempArray[tempArray.length - 1]) {
        currentMaxSum += array[j];
        tempArray.push(array[j]);
      }
      j++;
    }
    if (currentMaxSum > maxSum) {
      maxSum = currentMaxSum;
      resultArray = tempArray;
    }
  }
  return [maxSum, resultArray];
}

// Do not edit the line below.
exports.maxSumIncreasingSubsequence = maxSumIncreasingSubsequence;

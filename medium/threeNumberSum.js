function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < array.length - 2; i++) {
    let leftIndex = i + 1;
    let rightIndex = array.length - 1;
    while (leftIndex < rightIndex) {
      const currentNum = array[i];
      const leftNum = array[leftIndex];
      const rightNum = array[rightIndex];
      const total = currentNum + leftNum + rightNum;
      if (total === targetSum) {
        result.push([currentNum, leftNum, rightNum]);
        leftIndex++;
      } else if (total > targetSum) {
        rightIndex--;
      } else {
        leftIndex++;
      }
    }
  }

  return result;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;

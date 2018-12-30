function largestRange(array) {
  const notSeen = {};
  let longestRangeLength = -Infinity;
  let result;
  for (const num of array) {
    notSeen[num] = true;
  }
  for (let num of array) {
    // find numbers less than current number decrementing by 1
    let descendingNum = num;
    let leftVal = descendingNum;
    while (notSeen[--descendingNum]) {
      leftVal = descendingNum;
      notSeen[descendingNum] = false;
    }
    // find numbers greater than current number incrementing by 1
    let ascendingNum = num;
    let rightVal = num;
    while (notSeen[++ascendingNum]) {
      rightVal = ascendingNum;
      notSeen[ascendingNum] = false;
    }
    let tempLength = rightVal - leftVal;
    if (tempLength > longestRangeLength) {
      longestRangeLength = tempLength;
      result = [leftVal, rightVal];
    }
  }
  return result;
}

// Do not edit the line below.
exports.largestRange = largestRange;

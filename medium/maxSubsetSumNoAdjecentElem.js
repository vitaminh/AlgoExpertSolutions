function maxSubsetSumNoAdjacent(array) {
  if (array.length <= 0) return 0;
  if (array.length === 1) return array[0];
  let first = array[0];
  let second = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    // compare previous greatest sum to array[i] + array[i - 2]
    let current = Math.max(second, array[i] + first);
    first = second;
    second = current;
  }
  return second;
}

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;

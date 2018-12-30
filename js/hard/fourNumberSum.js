function fourNumberSum(array, targetSum) {
  if (array.length < 4) return [];
  const quadruplets = [];
  const pairSums = {};
  for (let i = 1; i < array.length - 1; i++) {
    // find if any pairs > current index pair with previously seen pairs
    for (let j = i + 1; j < array.length; j++) {
      const sum = array[i] + array[j];
      const diff = targetSum - sum;
      if (pairSums.hasOwnProperty(diff)) {
        pairSums[diff].forEach(pair => quadruplets.push(pair.concat([array[i], array[j]])));
      }
    }
    // build hashtable of previously seen pairs
    for (let k = 0; k < i; k++) {
      const sum = array[i] + array[k];
      if (pairSums.hasOwnProperty(sum)) {
        pairSums[sum].push([array[i], array[k]]);
      } else {
        pairSums[sum] = [[array[i], array[k]]];
      }
    }
  }
  return quadruplets;
}

// Do not edit the line below.
exports.fourNumberSum = fourNumberSum;

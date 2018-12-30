function findThreeLargestNumbers(array) {
  array.sort((a, b) => a - b);
  return array.slice(array.length - 3);
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;

// Alternate implementation
// function kadanesAlgorithm(array) {
//   let max = array[0];
//   let sum = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (sum < 0) {
//       sum = 0;
//     }
//     sum += array[i];
//     if (sum > max) {
//       max = sum;
//     }
//   }
//   return max;
// }


// Official implementation
function kadanesAlgorithm(array) {
  let currentMax = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    const num = array[i];
    currentMax = Math.max(num, currentMax + num);
    max = Math.max(max, currentMax);
  }
  return max;
}

// Do not edit the line below.
exports.kadanesAlgorithm = kadanesAlgorithm;

function minNumberOfJumps(array) {
  if (array.length <= 1) return 0;
  let jumps = 0;
  let maxReach = array[0];
  let steps = array[0];
  for (let i = 1; i < array.length - 1; i++) {
    maxReach = Math.max(maxReach, array[i] + i);
    if (--steps === 0) {
      jumps++;
      steps = maxReach - i;
    }
  }
  return jumps + 1;
}

// Do not edit the line below.
exports.minNumberOfJumps = minNumberOfJumps;

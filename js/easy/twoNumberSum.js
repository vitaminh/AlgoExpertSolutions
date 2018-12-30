function twoNumberSum(array, targetSum) {
  result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      const x = array[i];
      const y = array[j];
      if (x + y === targetSum) {
        result = [x, y];
      }
    }
  }
  return result.sort();
}

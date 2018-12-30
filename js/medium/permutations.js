function getPermutations(array) {
  const result = [];
  if (array.length === 1) {
    return [[array[0]]];
  }
  for (let i = 0; i < array.length; i++) {
    let subArray = array.slice(i + 1).concat(array.slice(0, i))
    const subArrayPermutations = getPermutations(subArray);
    subArrayPermutations.forEach(perm => {
      result.push([array[i], ...perm])
    });
  }
  return result;
}

// Do not edit the line below.
exports.getPermutations = getPermutations;

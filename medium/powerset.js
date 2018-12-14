function powerset(array) {
  if (!array || array.length === 0) {
    return [[]];
  }

  const currentElement = array[0];
  const subSets = powerset(array.slice(1));
  const length = subSets.length;
  for (let i = 0; i < length; i++) {
    const currentSubset = subSets[i];
    subSets.push(currentSubset.concat(currentElement));
  }

  return subSets;
}

// Do not edit the line below.
exports.powerset = powerset;

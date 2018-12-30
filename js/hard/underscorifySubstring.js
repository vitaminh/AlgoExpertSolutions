function underscorifySubstring(string, substring) {
  const indexes = getSubstringIndexes(string, substring);
  const collapsedIndexes = collapseIndexes(indexes);
  return createUnderscoredString(string, collapsedIndexes);
}

// get start and end indexes of all instances of substring
const getSubstringIndexes = (string, substring) => {
  const indexes = [];
  let startIndex = 0;
  while (startIndex < string.length) {
    const nextIndex = string.indexOf(substring, startIndex);
    if (nextIndex !== -1) {
      indexes.push([nextIndex, nextIndex + substring.length]);
      startIndex = nextIndex + 1;
    } else {
      break;
    }
  }
  return indexes;
};

// handle cases where substrings overlap
const collapseIndexes = indexes => {
  if (indexes.length === 0) return [];
  const newIndexes = [indexes[0]];
  let previousIndex = newIndexes[0];
  for (let i = 1; i < indexes.length; i++) {
    const currentIndex = indexes[i];
    if (currentIndex[0] <= previousIndex[1]) {
      previousIndex[1] = currentIndex[1];
    } else {
      newIndexes.push(currentIndex);
      previousIndex = currentIndex;
    }
  }
  return newIndexes;
};

// create string with underscores
const createUnderscoredString = (string, collapsedIndexes) => {
  if (!collapsedIndexes || collapsedIndexes.length === 0) return string;
  const result = [];
  let substringIndex = 0;
  for (let stringIndex = 0; stringIndex < string.length; stringIndex++) {
    if (substringIndex < collapsedIndexes.length) {
      if (stringIndex === collapsedIndexes[substringIndex][0]) {
        result.push('_');
      } else if (stringIndex === collapsedIndexes[substringIndex][1]) {
        result.push('_');
        substringIndex++;
      }
    }
    result.push(string[stringIndex]);
  }
  if (substringIndex < collapsedIndexes.length) {
    result.push('_');
  }
  return result.join('');
};

// Do not edit the line below.
exports.underscorifySubstring = underscorifySubstring;

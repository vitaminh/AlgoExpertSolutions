function knuthMorrisPrattAlgorithm(string, substring) {
  const pattern = buildPattern(substring);
  return matches(string, substring, pattern);
}

// find and create patterns from substring
const buildPattern = (substring) => {
  const pattern = (new Array(substring.length)).fill(-1);
  let i = 1;
  let j = 0;
  while (i < substring.length) {
    if (substring[i] === substring[j]) {
      // mark index denoting end of substring
      pattern[i] = j;
      i++;
      j++;
    } else if (j > 0) {
      j = pattern[j - 1] + 1;
    } else {
      i++;
    }
  }
  return pattern;
}

const matches = (string, substring, pattern) => {
  let i = 0;
  let j = 0;
  // index of string + the distance iterated through substring
  while (i + substring.length - j <= string.length) {
    if (string[i] === substring[j]) {
      // if end of substring has been reached
      if (j === substring.length - 1) return true;
      i++;
      j++;
    } else if (j > 0) {
      j = pattern[j - 1] + 1;
    } else {
      i++;
    }
  }
  return false;
}

// Do not edit the line below.
exports.knuthMorrisPrattAlgorithm = knuthMorrisPrattAlgorithm;

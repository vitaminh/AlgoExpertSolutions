function patternMatcher(pattern, string) {
  if (pattern.length > string.length) return [];
  const newPattern = getNewPattern(pattern);
  const switchedXandY = newPattern[0] !== pattern[0];
  // count up all occurences of 'x' and 'y' in new pattern array
  const counts = { x: 0, y: 0 };
  const firstYPos = getCountsAndYIndex(newPattern, counts);
  // if any 'y's are present in the pattern
  if (counts.y > 0) {
    for (let lengthOfX = 1; lengthOfX < string.length; lengthOfX++) {
      const lengthOfY = (string.length - lengthOfX * counts.x) / counts.y;
      if (lengthOfY <= 0 || lengthOfY % 1 !== 0) continue;
      const yIndex = firstYPos * lengthOfX;
      const x = string.slice(0, lengthOfX);
      const y = string.slice(yIndex, yIndex + lengthOfY);
      const possibleMatch = newPattern.map(char => char === 'x' ? x : y).join('');
      if (string === possibleMatch) {
        return switchedXandY ? [y, x] : [x, y];
      }
    }
  }
  // if no 'y's are present in the pattern
  else {
    let lengthOfX = string.length / counts.x;
    if (lengthOfX % 1 === 0) {
      const x = string.slice(0, lengthOfX);
      const possibleMatch = newPattern.map(_ => x);
      if (string === possibleMatch.join('')) {
        return switchedXandY ? ['', x] : [x, ''];
      }
    }
  }
  return [];
}

// ensure pattern begins with 'x'
const getNewPattern = pattern => {
  const patternLetters = pattern.split('');
  if (patternLetters[0] === 'x') {
    return patternLetters;
  } else {
    return patternLetters.map(char => (char === 'x' ? 'y' : 'x'));
  }
};

const getCountsAndYIndex = (pattern, counts) => {
  let firstYPos = null;
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    counts[char]++;
    if (char === 'y' && !firstYPos) {
      firstYPos = i;
    }
  }
  return firstYPos;
};

// Do not edit the line below.
exports.patternMatcher = patternMatcher;

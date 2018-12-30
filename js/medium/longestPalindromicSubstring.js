const getLongestPalindromicSubstring = (i, j, string) => {
  while (i >= 0 && j < string.length) {
    if (string[i] !== string[j]) {
      break;
    }
    i--;
    j++;
  }
  return [i + 1, j];
};

function longestPalindromicSubstring(string) {
  let longestSubstringIndexes = [0, 0];
  for (let i = 0; i < string.length; i++) {
    const even = getLongestPalindromicSubstring(i - 1, i, string);
    const odd = getLongestPalindromicSubstring(i - 1, i + 1, string);
    const evenLength = even[1] - even[0];
    const oddLength = odd[1] - odd[0];
    const currentLongest = evenLength > oddLength ? even : odd;
    if (
      currentLongest[1] - currentLongest[0] >
      longestSubstringIndexes[1] - longestSubstringIndexes[0]
    ) {
      longestSubstringIndexes = currentLongest;
    }
  }
  return string.slice(longestSubstringIndexes[0], longestSubstringIndexes[1]);
}

// Do not edit the line below.
exports.longestPalindromicSubstring = longestPalindromicSubstring;

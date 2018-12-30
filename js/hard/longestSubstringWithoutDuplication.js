function longestSubstringWithoutDuplication(string) {
  const seen = {};
  let longest = [0, 1];
  let startIndex = 0;
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char in seen) {
      startIndex = Math.max(startIndex, seen[char] + 1);
    }
    if (longest[1] - longest[0] < i + 1 - startIndex) {
      longest = [startIndex, i + 1];
    }
    seen[char] = i;
  }
  return string.slice(longest[0], longest[1]);
}

// Do not edit the line below.
exports.longestSubstringWithoutDuplication = longestSubstringWithoutDuplication;

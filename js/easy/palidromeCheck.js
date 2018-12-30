function isPalindrome(string) {
  const chars = string.split('');
  const lastIndex = chars.length - 1;
  for (let i = 0; i < chars.length / 2; i++) {
    if (chars[i] !== chars[lastIndex - i]) {
      return false;
    }
  }
  return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;

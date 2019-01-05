function palindromePartitioningMinCuts(string) {
  const palindromes = [];
  // initialize array denoting if substring is palindrome
  // row index = start index of substring
  // column index = end index of substring
  for (let i = 0; i < string.length; i++) {
    const row = [];
    for (let j = 0; j < string.length; j++) {
      // initial substrings of length one are always palindromes
      if (i === j) {
        row.push(true);
      } else {
      // otherwise initialize as false
        row.push(false);
      }
    }
    palindromes.push(row);
  }
  // determine if substrings are palindromes starting with substrings of length 2
  for (let subStringLength = 2; subStringLength <= string.length; subStringLength++) {
    // start at beginning of string, advance index until substring would exceed final index of string
    for (let i = 0; i <= string.length - subStringLength; i++) {
      // j = end index of current substring
      const j = i + subStringLength - 1;
      // if length 2, only need to check if the two characters are equal
      if (subStringLength === 2) {
        palindromes[i][j] = string[i] === string[j];
      } else {
        // otherwise need to check if both end characters are equal
        // AND if the string contained between them is also a palindrome
        palindromes[i][j] = string[i] === string[j] && palindromes[i + 1][j - 1];
      }
    }
  }
  // use palindromes array to determine # of cuts neccessary
  const cuts = (new Array(string.length)).fill(Infinity);
  for (let i = 0; i < string.length; i++) {
    // if string ending at index i is a palindrome, no cuts needed
    if (palindromes[0][i]) {
      cuts[i] = 0;
    } else {
      // initialize as previous # of cuts + 1
      cuts[i] = cuts[i - 1] + 1;
      for (let j = 1; j < i; j++) {
        // if string beginning at index j and ending at index i is a palindrome
        // AND # of cuts[j - 1] plus 1 is less than cuts[i]
        if (palindromes[j][i] && cuts[j - 1] + 1 < cuts[i]) {
          cuts[i] = cuts[j - 1] + 1;
        }
      }
    }
  }
  return cuts[cuts.length - 1];
}

// Do not edit the line below.
exports.palindromePartitioningMinCuts = palindromePartitioningMinCuts;

function longestCommonSubsequence(str1, str2) {
  // lcs = longest common subsequence
  const lcs = [];
  // initialize lcs array
  for (let i = 0; i < str1.length + 1; i++) {
    const newRow = [];
    for (let j = 0; j < str2.length + 1; j++) {
      const newEntry = {
        letterUsed: null,
        length: 0,
        prevEntryRow: null,
        prevEntryCol: null,
      };
      newRow.push(newEntry);
    }
    lcs.push(newRow);
  }
  // find the longest common subsequence
  for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
      const currentEntry = lcs[i][j];
      if (str1[i - 1] === str2[j - 1]) {
        currentEntry.letterUsed = str1[i - 1];
        currentEntry.length = lcs[i - 1][j - 1].length + 1;
        currentEntry.prevEntryRow = i - 1;
        currentEntry.prevEntryCol = j - 1;
      } else {
        currentEntry.letterUsed = null;
        if (lcs[i - 1][j].length > lcs[i][j - 1].length) {
          currentEntry.length = lcs[i - 1][j].length;
          currentEntry.prevEntryRow = i - 1;
          currentEntry.prevEntryCol = j;
        } else {
          currentEntry.length = lcs[i][j - 1].length;
          currentEntry.prevEntryRow = i;
          currentEntry.prevEntryCol = j - 1;
        }
      }
    }
  }
  return buildSequence(lcs);
}

const buildSequence = arr => {
  const sequence = [];
  let i = arr.length - 1;
  let j = arr[0].length - 1;
  while (i !== 0 && j !== 0) {
    const currentEntry = arr[i][j];
    if (currentEntry.letterUsed) {
      sequence.unshift(currentEntry.letterUsed);
    }
    i = currentEntry.prevEntryRow;
    j = currentEntry.prevEntryCol;
  }
  return sequence;
};

// Do not edit the line below.
exports.longestCommonSubsequence = longestCommonSubsequence;

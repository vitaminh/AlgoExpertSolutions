function levenshteinDistance(str1, str2) {
  let rowString, colString;
  if (str1.length < str2.length) {
    rowString = str1;
    colString = str2;
  } else {
    rowString = str2;
    colString = str1;
  }
  const firstRow = new Array(rowString.length + 1)
    .fill('')
    .map((e, index) => index);
  const edits = [['', ...rowString], [], firstRow];
  for (let i = 0; i < colString.length; i++) {
    edits[1] = edits[2];
    edits[2] = [i + 1];
    for (let j = 1; j <= rowString.length; j++) {
      let numOfEdits;
      if (colString[i] === edits[0][j]) {
        numOfEdits = edits[1][j - 1];
      } else {
        const upper = edits[1][j];
        const diag = edits[1][j - 1];
        const left = edits[2][j - 1];
        numOfEdits = Math.min(upper, diag, left) + 1;
      }
      edits[2].push(numOfEdits);
    }
  }
  return edits[2][rowString.length];
}

// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance;

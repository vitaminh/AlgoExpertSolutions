function knapsackProblem(items, capacity) {
  // create matrix of max knapsack values
  const knapSackValues = [];
  for (let i = 0; i < items.length + 1; i++) {
    const row = new Array(capacity + 1).fill(0);
    knapSackValues.push(row);
  }
  // populate matrix
  for (let i = 1; i < items.length + 1; i++) {
    const value = items[i - 1][0];
    const weight = items[i - 1][1];
    for (let j = 0; j < capacity + 1; j++) {
      if (weight > j) {
        knapSackValues[i][j] = knapSackValues[i - 1][j];
      } else {
        knapSackValues[i][j] = Math.max(
          knapSackValues[i - 1][j],
          value + knapSackValues[i - 1][j - weight]
        );
      }
    }
  }

  return [
    knapSackValues[items.length][capacity],
    getKnapSackItems(items, knapSackValues),
  ];
}

const getKnapSackItems = (items, values) => {
  const result = [];
  let currentRow = values.length - 1;
  let currenCol = values[0].length - 1;
  while (currentRow > 0 && currenCol > 0) {
    if (values[currentRow][currenCol] === values[currentRow - 1][currenCol]) {
      currentRow--;
    } else {
      result.unshift(--currentRow);
      currenCol -= items[currentRow][1];
    }
  }
  return result;
};

// Do not edit the line below.
exports.knapsackProblem = knapsackProblem;

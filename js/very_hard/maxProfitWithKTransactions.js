function maxProfitWithKTransactions(prices, k) {
  if (prices.length <= 1) return 0;
  if (k === 0) return 0;
  let previousDayProfits = new Array(prices.length).fill(0);
  let currentDayProfits = [0];
  let result;
  // t = # of transactions
  for (let t = 1; t <= k; t++) {
    let currentMax = -Infinity;
    for (let day = 1; day < prices.length; day++) {
      currentMax = Math.max(currentMax, previousDayProfits[day - 1] - prices[day - 1]);
      const maxDayProfit = Math.max(currentDayProfits[day - 1], prices[day] + currentMax);
      currentDayProfits.push(maxDayProfit);
    }
    result = currentDayProfits[currentDayProfits.length - 1];
    previousDayProfits = currentDayProfits;
    currentDayProfits = [0];
  }
  return result;
}

// Do not edit the line below.
exports.maxProfitWithKTransactions = maxProfitWithKTransactions;

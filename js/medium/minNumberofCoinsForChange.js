function minNumberOfCoinsForChange(n, denoms) {
  const numOfCoins = new Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;
  for (const denom of denoms) {
    for (let amount = 0; amount < numOfCoins.length; amount++) {
      if (denom <= amount) {
        numOfCoins[amount] = Math.min(numOfCoins[amount - denom] + 1, numOfCoins[amount]);
      }
    }
  }
  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}

// Do not edit the line below.
exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;

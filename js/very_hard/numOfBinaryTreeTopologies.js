function numberOfBinaryTreeTopologies(n) {
  const cache = [1];
  // build up cache by calculating num of trees up to n
  for (let i = 1; i <= n; i++) {
    let numOfTrees = 0;
    for (let leftTreeSize = 0; leftTreeSize < i; leftTreeSize++) {
      const rightTreeSize = i - 1 - leftTreeSize;
      const numOfLeftTrees = cache[leftTreeSize];
      const numOfRightTrees = cache[rightTreeSize];
      numOfTrees += numOfLeftTrees * numOfRightTrees;
    }
    cache.push(numOfTrees);
  }
  // final element in cache is result due to push operation in loop
  return cache[n];
}

// Do not edit the line below.
exports.numberOfBinaryTreeTopologies = numberOfBinaryTreeTopologies;

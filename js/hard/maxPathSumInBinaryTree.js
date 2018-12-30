function maxPathSum(tree) {
  return findMaxPath(tree)[1];
}

const findMaxPath = tree => {
  // [0] === max sum of child path as a branch
  // [1] === current max sum of largest path
  if (!tree) return [0, 0];
  const [leftMaxSumAsBranch, leftMaxPathSum] = findMaxPath(tree.left);
  const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxPath(tree.right);
  const maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch);

  const { value } = tree;
  // if max child path sum is negative, we can ignore
  // is branch greater if it includes one child or none?
  const maxSumAsBranch = Math.max(maxChildSumAsBranch + value, value);
  // get max sum of path if this node were the root
  // if root, is it greater including two children or one/none?
  const maxSumAsRoot = Math.max(
    leftMaxSumAsBranch + value + rightMaxSumAsBranch,
    maxSumAsBranch
  );
  // what is the greatest path sum seen so far?
  const maxPathSumValue = Math.max(
    maxSumAsRoot,
    leftMaxPathSum,
    rightMaxPathSum
  );

  return [maxSumAsBranch, maxPathSumValue];
};

// Do not edit the line below.
exports.maxPathSum = maxPathSum;

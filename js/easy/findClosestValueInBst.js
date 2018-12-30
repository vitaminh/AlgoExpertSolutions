function findClosestValueInBst(tree, target) {
  const currentDiff = Math.abs(target - tree.value);
  let currentClosest = tree.value;
  if (tree.left) {
    const leftClosest = findClosestValueInBst(tree.left, target);
    if (currentDiff > Math.abs(target - leftClosest)) currentClosest = leftClosest;
  }
  if (tree.right) {
    const rightClosest = findClosestValueInBst(tree.right, target);
    if (currentDiff > Math.abs(target - rightClosest)) currentClosest = rightClosest;

  }
  return currentClosest;
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;

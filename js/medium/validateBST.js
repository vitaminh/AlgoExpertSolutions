function validateBst(tree, minVal = -Infinity, maxVal = Infinity) {
  if (!tree) return true;

  // validate children
  if (tree.value < minVal || tree.value >= maxVal) return false;

  // compare tree.value to children values
  const leftIsValid = validateBst(tree.left, minVal, tree.value);
  const rightIsValid = validateBst(tree.right, tree.value, maxVal);
  return leftIsValid && rightIsValid;
}

// Do not edit the line below.
exports.validateBst = validateBst;

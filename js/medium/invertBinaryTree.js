function invertBinaryTree(tree) {
  const queue = [tree];
  while (queue.length > 0) {
    const currentNode = queue.shift();
    const left = currentNode.left;
    const right = currentNode.right;
    if (left) queue.push(left);
    if (right) queue.push(right);
    currentNode.left = right;
    currentNode.right = left;
  }
}

// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;

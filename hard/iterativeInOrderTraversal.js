function iterativeInOrderTraversal(tree, callback) {
  let previousNode = null;
  let currentNode = tree;
  let nextNode;
  while (currentNode !== null) {
    if (previousNode === null || previousNode === currentNode.parent) {
      if (currentNode.left) {
        nextNode = currentNode.left;
      } else {
        callback(currentNode);
        nextNode = currentNode.right ? currentNode.right : currentNode.parent;
      }
    } else if (previousNode === currentNode.left) {
      callback(currentNode);
      nextNode = currentNode.right ? currentNode.right : currentNode.parent;
    } else if (previousNode === currentNode.right) {
      nextNode = currentNode.parent;
    }
    previousNode = currentNode;
    currentNode = nextNode;
  }
}

// Do not edit the line below.
exports.iterativeInOrderTraversal = iterativeInOrderTraversal;

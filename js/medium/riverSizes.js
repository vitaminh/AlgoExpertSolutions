// get a node's unviewed neighbors
const getUnviewedNeighbors = (i, j, matrix, viewedNodes) => {
  const neighbors = [];
  if (i > 0 && !viewedNodes[i - 1][j]) {
    neighbors.push([i - 1, j]);
  }
  if (i < matrix.length - 1 && !viewedNodes[i + 1][j]) {
    neighbors.push([i + 1, j]);
  }
  if (j > 0 && !viewedNodes[i][j - 1]) {
    neighbors.push([i, j - 1]);
  }
  if (j < matrix[i].length - 1 && !viewedNodes[i][j + 1]) {
    neighbors.push([i, j + 1]);
  }
  return neighbors;
};

// traverse nodes using breadth-first search
const traverseNode = (i, j, matrix, viewedNodes, sizes) => {
  const nodesToTraverse = [[i, j]];
  let currentSize = 0;
  while (nodesToTraverse.length > 0) {
    const currentNode = nodesToTraverse.pop();
    i = currentNode[0];
    j = currentNode[1];
    if (viewedNodes[i][j]) continue;
    viewedNodes[i][j] = true;
    if (matrix[i][j] === 0) continue;
    currentSize++;
    const validNeighbors = getUnviewedNeighbors(i, j, matrix, viewedNodes);
    for (const node of validNeighbors) {
      nodesToTraverse.push(node);
    }
  }
  if (currentSize > 0) sizes.push(currentSize);
};

function riverSizes(matrix) {
  const viewedNodes = matrix.map(row => row.map(() => false));
  const sizes = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      traverseNode(i, j, matrix, viewedNodes, sizes);
    }
  }
  return sizes;
}

// Do not edit the line below.
exports.riverSizes = riverSizes;

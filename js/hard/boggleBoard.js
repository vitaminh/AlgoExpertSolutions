function boggleBoard(board, words) {
  // create Trie of possible words to be found in board
  const wordTrie = new Trie();
  for (const word of words) {
    wordTrie.insert(word);
  }
  // create object to store words that are found in board
  const foundWords = {};
  // object to track nodes visited during node exploration
  const visitedNodes = board.map(row => row.map(char => false));
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      explore(i, j, board, wordTrie, wordTrie.root, visitedNodes, foundWords);
    }
  }
  return Object.keys(foundWords);
}

// explore a node
const explore = (i, j, board, wordTrie, trieNode, visitedNodes, foundWords) => {
  // check if node has already been visited
  if (visitedNodes[i][j]) return;
  const letter = board[i][j];
  // if letter not in current suffix trie node, stop searching this node
  if (!(letter in trieNode)) return;
  visitedNodes[i][j] = true;
  trieNode = trieNode[letter];
  // existence of endsymbol signifies we have found a word
  if (wordTrie.endSymbol in trieNode) foundWords[trieNode[wordTrie.endSymbol]] = true;
  const neighbors = getNeighbors(i, j, board);
  for (const neighbor of neighbors) {
    explore(neighbor[0], neighbor[1], board, wordTrie, trieNode, visitedNodes, foundWords);
  }
  // reset node to unvisited state
  visitedNodes[i][j] = false;
}
// get a node's neighboring nodes
const getNeighbors = (i, j, board) => {
  const neighbors = [];
  // upper left neighbor
  if (i > 0 && j > 0) {
    neighbors.push([i - 1, j - 1]);
  }
  // upper mid neighbor
  if (i > 0) {
    neighbors.push([i - 1, j]);
  }
  // upper right neighbor
  if (i > 0 && j < board[i].length - 1) {
    neighbors.push([i - 1, j + 1]);
  }
  // left neighbor
  if (j > 0) {
    neighbors.push([i, j - 1]);
  }
  // right neighbor
  if (j < board[i].length - 1) {
    neighbors.push([i, j + 1]);
  }
  // lower left neighbor
  if (i < board.length - 1 && j > 0) {
    neighbors.push([i + 1, j - 1]);
  }
  // lower mid neighbor
  if (i < board.length - 1) {
    neighbors.push([i + 1, j]);
  }
  // lower right neighbor
  if (i < board.length - 1 && j < board[i].length - 1) {
    neighbors.push([i + 1, j + 1]);
  }
  return neighbors;
};

class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = '*';
  }

  insert(string) {
    let current = this.root;
    for (const char of string) {
      if (!(char in current)) {
        current[char] = {};
      }
      current = current[char];
    }
    current[this.endSymbol] = string;
  }
}

// Do not edit the line below.
exports.boggleBoard = boggleBoard;

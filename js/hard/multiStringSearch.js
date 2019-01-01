function multiStringSearch(bigString, smallStrings) {
  const trieOfSmallStrings = new Trie();
  for (const string of smallStrings) {
    trieOfSmallStrings.insert(string);
  }
  const containedStrings = {};
  for (let i = 0; i < bigString.length; i++) {
    findSmallStrings(bigString, i, trieOfSmallStrings, containedStrings);
  }
  return smallStrings.map(string => string in containedStrings);
}

const findSmallStrings = (bigString, startIndex, trie, containedStrings) => {
  let currentTrieNode = trie.root;
  for (let i = startIndex; i < bigString.length; i++) {
    const char = bigString[i];
    if (!(char in currentTrieNode)) break;
    currentTrieNode = currentTrieNode[char];
    if (currentTrieNode.hasOwnProperty(trie.endSymbol)) {
      containedStrings[currentTrieNode[trie.endSymbol]] = true;
    }
  }
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
exports.multiStringSearch = multiStringSearch;

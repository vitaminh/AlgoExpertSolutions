// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = "*";
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      let node = this.root;
      let subString = string.slice(i);
      for (let j = 0; j < subString.length; j++) {
        const letter = subString[j];
        if (!node.hasOwnProperty(letter)) {
          node[letter] = {};
        }
        node = node[letter];
      }
      node[this.endSymbol] = true;
    }
  }

  contains(string) {
    let node = this.root;
    for (const letter of string) {
      if (!node.hasOwnProperty(letter)) {
        return false;
      }
      node = node[letter];
    }
    return node.hasOwnProperty(this.endSymbol);
  }
}

// Do not edit the line below.
exports.SuffixTrie = SuffixTrie;

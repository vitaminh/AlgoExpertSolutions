// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let currentNode = this;
    if (value >= this.value) {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new BST(value);
      }
    } else {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new BST(value);
      }
    }
    return this;
  }

  contains(value) {
    if (value < this.value && this.left) {
      return this.left.contains(value);
    }
    if (value >= this.value && this.right) {
      return this.right.contains(value);
    }
    return this.value === value;
  }

  remove(value, parentNode = null) {
    if (value > this.value && this.right) {
      return this.right.remove(value, this);
    }
    if (value < this.value && this.left) {
      return this.left.remove(value, this);
    }
    return this;
  }
}

// Do not edit the line below.
exports.BST = BST;

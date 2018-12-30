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
    if (value > this.value && this.right) {
      return this.right.contains(value);
    }
    return this.value === value;
  }

  remove(value, parent = null) {
    if (value > this.value && this.right) {
      this.right.remove(value, this);
    }
    if (value < this.value && this.left) {
      this.left.remove(value, this);
    }
    // if value not found in tree, do nothing
    if (value !== this.value) {
      return this;
    }
    // if value to remove is found
    // Case 1: node has no children
    // Remove reference to node in its parent node
    if (!this.left && !this.right) {
      // root node removal
      if (parent === null) {
        return null;
      } else {
        this.value < parent.value
          ? (parent.left = null)
          : (parent.right = null);
      }
    }
    // Case 2: node has two children
    // Replace node with minimum value from right subtree
    else if (this.left && this.right) {
      const minVal = this.right.getMin();
      this.value = minVal;
      this.right.remove(minVal);
    }
    // Case 3: node has one child
    // replace node with its only child
    else {
      const child = this.left ? this.left : this.right;
      if (parent === null) {
        this.value = child.value;
        this.left = child.left;
        this.right = child.right;
      } else {
        this.value < parent.value
          ? (parent.left = child)
          : (parent.right = child);
      }
    }
    return this;
  }

  getMin() {
    let currentNode = this;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }
}

// Do not edit the line below.
exports.BST = BST;

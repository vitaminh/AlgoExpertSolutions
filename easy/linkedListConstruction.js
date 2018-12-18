// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.insertBefore(this.head, node);
    }
  }

  setTail(node) {
    if (!this.tail) {
      this.tail = this.head = node;
    } else {
      this.insertAfter(this.tail, node);
    }
  }

  insertBefore(node, nodeToInsert) {
    // if list consists of one node, do nothing
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.next = node;
    nodeToInsert.prev = node.prev;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;

  }

  insertAfter(node, nodeToInsert) {
    // if list consists of one node, do nothing
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    let node = this.head;
    let counter = 1;
    while (counter < position && node !== null) {
      node = node.next;
      counter++;
    }
    if (node === null) {
      this.setTail(nodeToInsert);
    } else {
      this.insertBefore(node, nodeToInsert);
    }
  }

  removeNodesWithValue(value) {
    let node = this.head;
    while (node) {
      const currentNode = node;
      node = node.next;
      if (currentNode.value === value) this.remove(currentNode);
    }
  }

  remove(node) {
    if (node === this.head) this.head = node.next;
    if (node === this.tail) this.tail = node.prev;
    // remove node connections
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
  }

  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null && node.value !== value) {
      node = node.next;
    }
    return node !== null;
  }
}

// Do not edit the line below.
exports.DoublyLinkedList = DoublyLinkedList;

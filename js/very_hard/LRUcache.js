// Do not edit the class below except for the insertKeyValuePair,
// getValueFromKey, and getMostRecentKey methods. Feel free
// to add new properties and methods to the class.
// LRU = Least Recently Used
class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
    this.cacheList = new DoublyLinkedList();
    this.cacheSize = 0;
    this.keys = {};
  }

  insertKeyValuePair(key, value) {
    if (!this.keys.hasOwnProperty(key)) {
      this.keys[key] = new Node(key, value);
    } else {
      this.keys[key].value = value;
    }
    this.makeMostRecent(this.keys[key]);
  }

  getValueFromKey(key) {
    const currentNode = this.keys[key];
    if (!currentNode || !this.isInList(currentNode)) {
      return null;
    }
    this.makeMostRecent(currentNode);
    return this.cacheList.head.value;
  }

  getMostRecentKey() {
    return this.cacheList.head.key;
  }

  makeMostRecent(node) {
    if (!this.isInList(node)) {
      if (this.cacheSize === this.maxSize) {
        this.removeLRUnode();
      } else {
        this.cacheSize++;
      }
    }
    this.cacheList.setHead(node);
  }

  isInList(node) {
    if (node.next === null && node.prev === null) {
      return node === this.cacheList.head;
    }
    return true;
  }

  removeLRUnode() {
    // removes node at tail of the cachelist
    this.cacheList.remove(this.cacheList.tail);
  }
}

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

  insertBefore(node, nodeToInsert) {
    // if list consists of one node, do nothing
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    if (nodeToInsert === node) return;
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

  remove(node) {
    if (node === this.head) this.head = node.next;
    if (node === this.tail) this.tail = node.prev;
    // remove node connections
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// Do not edit the line below.
exports.LRUCache = LRUCache;

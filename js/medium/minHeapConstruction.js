// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const start = Math.floor((array.length - 2) / 2 )
    for (let i = start; i >= 0; i--) {
      this.siftDown(i, array);
    }
    return array;
  }

  siftDown(i, heap) {
    let leftChildIndex = 2 * i + 1;
    while (leftChildIndex < heap.length) {
      const rightChildIndex = 2 * i + 2 < heap.length ? 2 * i + 2 : null;
      const indexToSwap =
        rightChildIndex && heap[rightChildIndex] < heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;
      if (heap[indexToSwap] < heap[i]) {
        this.swap(i, indexToSwap, heap);
        i = indexToSwap;
        leftChildIndex = 2 * i + 1;
      } else {
        break;
      }
    }
  }

  siftUp(i, heap) {
    let current = heap[i];
    while (i > 0 && current < heap[Math.floor((i - 1) / 2)]) {
      const parentIndex = Math.floor((i - 1) / 2);
      this.swap(i, parentIndex, heap);
      current = heap[parentIndex];
      i = parentIndex;
    }
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const result = this.heap.pop();
    this.siftDown(0, this.heap);
    return result;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  swap(i, j, heap) {
    const temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }
}

// Do not edit the line below.
exports.MinHeap = MinHeap;

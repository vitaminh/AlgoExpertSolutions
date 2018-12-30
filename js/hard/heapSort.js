const swap = (i, j, heap) => {
  const temp = heap[i];
  heap[i] = heap[j];
  heap[j] = temp;
};

const siftDown = (i, endIndex, heap) => {
  let leftChildIndex = 2 * i + 1;
  while (leftChildIndex <= endIndex) {
    const rightChildIndex = 2 * i + 2 <= endIndex ? 2 * i + 2 : null;
    const indexToSwap =
      rightChildIndex && heap[rightChildIndex] > heap[leftChildIndex]
        ? rightChildIndex
        : leftChildIndex;
    if (heap[indexToSwap] > heap[i]) {
      swap(i, indexToSwap, heap);
      i = indexToSwap;
      leftChildIndex = 2 * i + 1;
    } else {
      break;
    }
  }
};

const buildHeap = array => {
  const start = Math.floor((array.length - 2) / 2);
  for (let i = start; i >= 0; i--) {
    siftDown(i, array.length - 1, array);
  }
  return array;
};

function heapSort(array) {
  buildHeap(array);
  const endIndex = array.length - 1;
  for (let i = endIndex; i > 0; i--) {
    swap(0, i, array);
    siftDown(0, i - 1, array);
  }
  return array;
}

// Do not edit the line below.
exports.heapSort = heapSort;

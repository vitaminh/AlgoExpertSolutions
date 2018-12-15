// Original Solution
// function removeKthNodeFromEnd(head, k) {
//   const nodes = [];
//   let currentNode = head;
//   while (currentNode) {
//     nodes.push(currentNode);
//     currentNode = currentNode.next;
//   }
//   if (k === nodes.length) {
//     head.value = head.next.value || null;
//     head.next = head.next.next || null;
//     return;
//   }
//   const indexToRemove = nodes.length - k;
//   nodes[indexToRemove].next = null;
//   const newNextNode = k === 1 ? null : nodes[indexToRemove + 1];
//   if (indexToRemove - 1 >= 0) {
//     nodes[indexToRemove - 1].next = newNextNode;
//   }
// }

// // Do not edit the line below.
// exports.removeKthNodeFromEnd = removeKthNodeFromEnd;

function removeKthNodeFromEnd(head, k) {
  let position = 1;
  let first = head;
  let second = head;
  while (position <= k) {
    second = second.next;
    position++;
  }
  // if second becomes null, it signifies we are removing the head of the linked list
  if (second === null) {
    head.value = head.next.value || null;
    head.next = head.next.next || null;
    return;
  }
  while (second.next !== null) {
    first = first.next;
    second = second.next;
  }
  first.next = first.next.next;
}

// // Do not edit the line below.
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;


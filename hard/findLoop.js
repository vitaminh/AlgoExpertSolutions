function findLoop(head) {
  let first = head.next;
  let second = head.next.next;
  while (first !== second) {
    first = first.next;
    second = second.next.next;
  }
  second = head;
  while (first !== second) {
    first = first.next;
    second = second.next;
  }
  return first;
}

// Do not edit the line below.
exports.findLoop = findLoop;

function removeKthNodeFromEnd(head, k) {
  let listSize = 0;
  let current = head;

  while (current) {
    listSize++;
    current = current.next;
  }

  current = head;
  const itemPosition = listSize - k - 1;
  if (itemPosition < 0) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  let i = 0;
  while (i < itemPosition) {
    current = current.next;
    i++;
  }

  current.next = current.next.next;
}

// Do not edit the line below.
exports.removeKthNodeFromEnd = removeKthNodeFromEnd;

function helper(array, left, right, target) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);
  const num = array[mid];

  if (num === target) {
    return mid;
  }

  return target < num ? helper(array, left, mid - 1, target) : helper(array, mid + 1, right, target);
}

function binarySearch(array, target) {
  return helper(array, 0, array.length - 1, target);
}

// Do not edit the line below.
exports.binarySearch = binarySearch;

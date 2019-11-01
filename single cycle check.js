const mod = (x, n) => (x % n + n) % n

function hasSingleCycle(array) {
  const count = array.length;
  let index = 0;
  const visitedIndexes = new Set();

  for (let i = 0; i < array.length; i++) {
    index += array[index];
    index = mod(index, count);
    if (visitedIndexes.has(index)) {
      return false;
    }
    visitedIndexes.add(index);
  }

  return true;
}

// Do not edit the line below.
exports.hasSingleCycle = hasSingleCycle;

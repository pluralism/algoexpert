function findThreeLargestNumbers(array) {
  const result = [-Infinity, -Infinity, -Infinity];

  for (const num of array) {
    if (num > result[0]) {
      let index = 0;
      while(index < result.length && result[index] < num) index++;
      if (index > 0) index--;

      for (let i = 0; i < index; i++) {
        result[i] = result[i + 1];
      }
      result[index] = num;
    }
  }

  return result;
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;

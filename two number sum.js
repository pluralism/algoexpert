function twoNumberSum(array, targetSum) {
  array.sort((a, b) => +a - +b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === targetSum) {
      return [array[left], array[right]];
    }

    if (sum < targetSum) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;

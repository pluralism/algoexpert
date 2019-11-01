function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => +a - +b);
  arrayTwo.sort((a, b) => +a - +b);

  let idxOne = 0;
  let idxTwo = 0;
  let smallestDiff = Infinity;
  let smallesPair = [];

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let diff = Math.abs(arrayOne[idxOne] - arrayTwo[idxTwo]);
    if (diff < smallestDiff) {
      smallestDiff = diff;
      smallesPair = [arrayOne[idxOne], arrayTwo[idxTwo]];
    }

    if (arrayOne[idxOne] === arrayTwo[idxTwo]) {
      smallesPair = [arrayOne[idxOne], arrayTwo[idxTwo]];
      break;
    }

    arrayTwo[idxTwo] > arrayOne[idxOne] ? idxOne++ : idxTwo++;
  }

  return smallesPair;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;

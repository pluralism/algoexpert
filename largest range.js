function largestRange(array) {
    array.sort((a, b) => +a - +b);

    let currentRange = [0, 0];
    let bestRange = [0, 0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] - array[i - 1] <= 1) {
            currentRange[1]++;
        }

        if (i === array.length - 1 || array[i] - array[i - 1] > 1) {
            if (currentRange[1] - currentRange[0] > bestRange[1] - bestRange[0]) {
                bestRange = currentRange;
            }
            currentRange = [i, i];
        }
    }

    return [array[bestRange[0]], array[bestRange[1]]];
}

function largestRange(array) {
    const numbersSet = new Set([...array]);
    let bestRange = [0, 0];

    for (let i = 0; i < array.length && numbersSet.size > 0; i++) {
        const num = array[i];
        let left = num - 1;
        let right = num + 1;

        while (numbersSet.has(left)) {
            numbersSet.delete(left);
            left--;
        }

        while (numbersSet.has(right)) {
            numbersSet.delete(right);
            right++;
        }

        left++;
        right--;
        const bestRangeDiff = bestRange[1] - bestRange[0];
        const currentRangeDiff = right - left + 1;
        if (currentRangeDiff > bestRangeDiff) {
            bestRange = [left, right];
        }
    }

    return bestRange;
}

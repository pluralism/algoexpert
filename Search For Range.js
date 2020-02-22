function searchForRange(array, target) {
    let leftindex = 0;
    let rightIndex = array.length - 1;

    while (leftindex <= rightIndex) {
        const midIndex = Math.floor((leftindex + rightIndex) / 2);

        if (array[midIndex] < target) {
            leftindex = midIndex + 1;
        } else if (array[midIndex] > target) {
            rightIndex = midIndex - 1;
        } else if (array[midIndex] === target) {
            leftindex = rightIndex = midIndex;

            while (leftindex - 1 >= 0 && array[leftindex - 1] === target) {
                leftindex--;
            }

            while (rightIndex + 1 <= array.length - 1 && array[rightIndex + 1] === target) {
                rightIndex++;
            }

            return [leftindex, rightIndex];
        }
    }

    return [-1, -1];
}

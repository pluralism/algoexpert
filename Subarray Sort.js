function subarraySort(array) {
    let minOutOfOrder = Infinity;
    let maxOutOfOrder = -Infinity;
    let leftIndex = -1;
    let rightIndex = -1;

    let currentMax = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < currentMax) {
            minOutOfOrder = Math.min(minOutOfOrder, array[i]);
            maxOutOfOrder = Math.max(maxOutOfOrder, array[i]);
            if (leftIndex === -1) {
                leftIndex = i;
            }
            rightIndex = i;
            continue;
        }
        currentMax = array[i];
    }

    if (leftIndex !== -1) {
        leftIndex = array.findIndex(num => num > minOutOfOrder);
    }

    return [leftIndex, rightIndex];
}

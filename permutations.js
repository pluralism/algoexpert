function helper(array, startIndex, permutations) {
    if (startIndex === array.length - 1) {
        permutations.push([...array]);
    } else {
        for (let i = startIndex; i < array.length; i++) {
            swap(array, startIndex, i);
            helper(array, startIndex + 1, permutations);
            swap(array, startIndex, i);
        }
    }
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function getPermutations(array) {
    const permutations = [];
    helper(array, 0, permutations);
    return permutations;
}

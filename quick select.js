function quickselect(array, k) {
    return helper(array, 0, array.length - 1, k - 1);
}

function helper(array, left, right, k) {
    var index;
    if (array.length > 1) {
        index = partition(array, left, right);

        if (left < index - 1 && k < index) {
            return helper(array, left, index - 1, k);
        }

        if (index < right && k >= index) {
            return helper(array, index, right, k);
        }
    }

    return array[k];
}

function partition(array, left, right, k) {
    const pivot = array[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while(array[i] < pivot) {
            i++;
        }
        while(array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
            j--;
        }
    }

    return i;
}

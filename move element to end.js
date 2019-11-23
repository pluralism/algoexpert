function moveElementToEnd(array, toMove) {
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== toMove) {
            const tmp = array[i];
            array[i] = array[index];
            array[index++] = tmp;
        }
    }
    return array;
}

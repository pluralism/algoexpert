function powerset(array) {
    const result = [[]];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        const len = result.length;
        for(let j = 0; j < len; j++) {
            const combination = result[j].concat(element);
            result.push(combination);
        }
    }
    return result;
}

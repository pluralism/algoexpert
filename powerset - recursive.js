function powerset(array) {
    const results = [[]];
    helper(array, [], -1, results);
    return results;
}

function helper(array, currentResult, startIdx, allResults) {
    for (let i = startIdx + 1; i < array.length; i++) {
        allResults.push(helper(array, [...currentResult, array[i]], i, allResults));
    }

    return currentResult;
}

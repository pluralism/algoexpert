function maxSubsetSumNoAdjacent(array) {
    if (array.length === 0) {
        return 0;
    }

    if (array.length === 1) {
        return array[0];
    }

    let dp = Array(array.length).fill(Infinity);
    dp[0] = array[0];
    dp[1] = Math.max(dp[0], array[1]);

    for (let i = 2; i < array.length; i++) {
        dp[i] = Math.max(dp[i - 1], array[i] + dp[i - 2]);
    }

    return dp[array.length - 1];
}
// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;

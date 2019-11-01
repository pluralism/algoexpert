function minNumberOfCoinsForChange(n, denoms) {
		let dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (const denom of denoms) {
        for (let amount = 0; amount < dp.length; amount++) {
            if (denom <= amount) {
                dp[amount] = Math.min(dp[amount], 1 + dp[amount - denom]);
            }
        }
    }

    return dp[n] === Infinity ? - 1 : dp[n];
}

// Do not edit the line below.
exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;

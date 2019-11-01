function levenshteinDistance(str1, str2) {
    const dp = Array(str1.length + 1).fill(0).map(_ => Array(str2.length + 1).fill(0));
    
    for (let i = 0; i < str2.length + 1; i++) {
        dp[0][i] = i;
    }

    for (let i = 0; i < str1.length + 1; i++) {
        dp[i][0] = i;
    }

    for (let i = 1; i < str1.length + 1; i++) {
        for (let j = 1; j < str2.length + 1; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
        }
    }

    return dp[str1.length][str2.length];
}

// Do not edit the line below.
exports.levenshteinDistance = levenshteinDistance;

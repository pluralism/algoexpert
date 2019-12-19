function minRewards(scores) {
    const rewards = new Array(scores.length).fill(1);
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > scores[i - 1] && rewards[i] <= rewards[i - 1]) {
            rewards[i] = rewards[i - 1] + 1;
        }

        if (scores[i] < scores[i - 1]) {
            let j = i - 1;
            while (j >= 0 && scores[j] > scores[j + 1] && rewards[j] <= rewards[j + 1]) {
                ++rewards[j--];
            }
        }
    }
    return rewards.reduce((a, b) => a + b);
}

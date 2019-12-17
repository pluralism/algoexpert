function minNumberOfJumps(array) {
    const jumps = new Array(array.length).fill(Infinity);
    jumps[0] = 0;

    for (let i = 0; i < array.length; i++) {
        const maxSteps = array[i];
        for (let j = 1; j <= maxSteps && i + j < array.length; j++) {
            jumps[i + j] = Math.min(jumps[i + j], jumps[i] + 1);
        }
    }
    return jumps[jumps.length - 1];
}

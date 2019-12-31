function maxPathSum(tree) {
    return helper(tree)[1];
}

function helper(tree) {
    if (tree === null) {
        return [0, 0];
    }

    const left = helper(tree.left);
    const right = helper(tree.right);

    const maxAsBranch = Math.max(Math.max(left[0], right[0]) + tree.value, tree.value);
    const maxSum = Math.max(maxAsBranch, left[1], right[1], left[0] + right[0] + tree.value);
    return [maxAsBranch, maxSum];
}

function helper(tree, min, max) {
    if (tree === null) {
        return true;
    }

    if (tree.value < min || tree.value >= max) {
        return false;
    }

    return helper(tree.left, min, tree.value) && helper(tree.right, tree.value, max);
}

function validateBst(tree) {
    return helper(tree, -Infinity, +Infinity);
}

// Do not edit the line below.
exports.validateBst = validateBst;

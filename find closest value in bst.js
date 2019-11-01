function helper(currentNode, closestNode, closestDiff, target) {
    if (currentNode === null) return closestNode.value;
    if (target === currentNode.value) return currentNode.value;

    const diff = Math.abs(target - currentNode.value);
    if (diff < closestDiff) {
        closestDiff = diff;
        closestNode = currentNode;
    }

    return helper(target > currentNode.value ? currentNode.right : currentNode.left, closestNode, closestDiff, target);
}

function findClosestValueInBst(tree, target) {
    return helper(tree, tree, Number.MAX_SAFE_INTEGER, target);
}
// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;

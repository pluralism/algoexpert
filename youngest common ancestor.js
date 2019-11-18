function getNodeDepth(topAncestor, descendant) {
    let depth = 0;
    while (descendant != topAncestor) {
        descendant = descendant.ancestor;
        depth++;
    }

    return depth;
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    let node1Depth = getNodeDepth(topAncestor, descendantOne);
    let node2Depth = getNodeDepth(topAncestor, descendantTwo);

    let maxDepth = Math.max(node1Depth, node2Depth);
    let minDepth = Math.min(node1Depth, node2Depth);

    let [farthestNode, closestNode] = node2Depth > node1Depth ? [descendantTwo, descendantOne] : [descendantOne, descendantTwo]

    while(maxDepth !== minDepth) {
        farthestNode = farthestNode.ancestor;
        maxDepth--;
    }

    while(farthestNode !== closestNode) {
        farthestNode = farthestNode.ancestor;
        closestNode = closestNode.ancestor;
    }

    return closestNode;
}

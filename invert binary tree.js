function invertBinaryTree(tree) {
  if (tree === null) {
    return;
  }
	swap(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

function swap(tree) {
  let temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
}

// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;

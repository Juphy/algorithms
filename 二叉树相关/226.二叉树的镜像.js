var invertTree = function (root) {
    if(!root) return []
    let tmp = root.left
    node.left = invertTree(root.right)
    node.right = invertTree(tmp)
    return node
};
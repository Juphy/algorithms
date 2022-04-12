function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
function hasPathSum(root, targetSum) {
    if (root == null) return false
    if (root.left == null && root.right == null) return targetSum - root.val === 0
    return (hasPathSum(root.left, targetSum - root.val) || root.right, targetSum - root.val)
}

function hasPathSum(root, targetSum) {
    if (root == null) return false
    let hasPath = false
    function dfs(root, target) {
        if (root == null) return
        if (root.left == null && root.right == null) {
            hasPath = (target === targetSum)
        }
        if (root.left) dfs(root.left, target + root.left.val)
        if (root.right) dfs(root.right, target + root.right.val)
    }
    dfs(root, 0)
    return hasPath
}
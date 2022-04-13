import TreeNode from "../utils/TreeNode"
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

function hasPathSum(root, targetSum) {
    let hasPath = false
    function dfs(root, target) {
        if (root == null) return
        if (root.left == null && root.right == null && target === root.val) {
            hasPath = true;
        }
        if (root.left) dfs(root.left, target - root.val)
        if (root.right) dfs(root.right, target - root.val)
    }
    dfs(root, targetSum)
    return hasPath
}

function hasPathSum(root, target) {
    if (root == null) return false
    if (root.left == null && root.right == null) return target === root.val
    return hasPathSum(root.left, target - root.val) || hasPathSum(root.right, target - root.val)
}
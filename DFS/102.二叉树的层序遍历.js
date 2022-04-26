// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

//  

// 示例 1：


// 输入：root = [3, 9, 20, null, null, 15, 7]
// 输出：[[3], [9, 20], [15, 7]]
// 示例 2：

// 输入：root = [1]
// 输出：[[1]]
// 示例 3：

// 输入：root = []
// 输出：[]


// 提示：

// 树中节点数目在范围[0, 2000] 内
// - 1000 <= Node.val <= 1000
import { TreeNode } from '../utils/TreeNode'
function levelOrder(root) {
    let res = []
    function dfs(root, index) {
        if (!root) return
        (root[index] || (root[index] = [])).push(root.val)
        dfs(root.left, index + 1)
        dfs(root.right, index + 1)
    }
    dfs(root, 0)
    return res
}
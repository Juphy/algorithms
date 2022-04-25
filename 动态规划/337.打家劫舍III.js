// 小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为 root 。

// 除了 root 之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果 两个直接相连的房子在同一天晚上被打劫 ，房屋将自动报警。

// 给定二叉树的 root 。返回 在不触动警报的情况下 ，小偷能够盗取的最高金额 。

//

// 示例 1:

// 输入: root = [3,2,3,null,3,null,1]
// 输出: 7
// 解释: 小偷一晚能够盗取的最高金额 3 + 3 + 1 = 7
// 示例 2:

// 输入: root = [3,4,5,1,3,null,1]
// 输出: 9
// 解释: 小偷一晚能够盗取的最高金额 4 + 5 = 9
//

// 提示：

// 树的节点数在 [1, 104] 范围内
// 0 <= Node.val <= 104
const TreeNode = require("../utils/TreeNode")
//   3
// 2   3
//  3    1
//   3
// 4   5
//1 3    1
// 记忆化递归
var rob = function (root) {
  let map = new Map()
  function fn(root) {
    if (root == null) return 0
    if (map.has(root)) return map.get(root)
    let res1 = root.val
    if (root.left) {
      res1 += fn(root.left.left) + fn(root.left.right)
    }
    if (root.right) {
      res1 += fn(root.right.left) + fn(root.right.right)
    }
    let res2 = fn(root.left) + fn(root.right)
    let res = Math.max(res1, res2)
    map.set(root, res)
    return res
  }
  return fn(root)
}
// [0, 1] 0,1分别表示打劫和不打劫根节点的最大收益
function rob(root) {
  let dp = new Map()
  function fn(root) {
    if (root == null) return [0, 0]
    let left = fn(root.left),
      right = fn(root.right)
    if (!dp.has(root)) {
      dp.set(root, [0, 0])
    }
    let res = dp.get(root)
    // 不打劫根节点
    res[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    // 打劫根节点
    res[1] = root.val + left[0] + right[0]
    return res
  }
  let res = fn(root)
  return Math.max(res[0], res[1])
}

function rob(root) {
  let dp = new Map()
  function fn(root) {
    if (root == null) return [0, 0]
    let left = fn(root.left),
      right = fn(root.right)
    // 不打劫根节点
    res1 = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    // 打劫根节点
    res2 = root.val + left[0] + right[0]
    return [res1, res2]
  }
  let res = fn(root)
  return Math.max(res[0], res[1])
}

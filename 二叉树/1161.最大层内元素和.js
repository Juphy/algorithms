// 给你一个二叉树的根节点 root。设根节点位于二叉树的第 1 层，而根节点的子节点位于第 2 层，依此类推。

// 请返回层内元素之和 最大 的那几层（可能只有一层）的层号，并返回其中 最小 的那个。

//  

// 示例 1：



// 输入：root = [1, 7, 0, 7, -8, null, null]
// 输出：2
// 解释：
// 第 1 层各元素之和为 1，
// 第 2 层各元素之和为 7 + 0 = 7，
// 第 3 层各元素之和为 7 + -8 = -1，
// 所以我们返回第 2 层的层号，它的层内元素之和最大。
// 示例 2：

// 输入：root = [989, null, 10250, 98693, -89388, null, null, null, -32127]
// 输出：2


// 提示：

// 树中的节点数在[1, 104]范围内
// - 105 <= Node.val <= 105

var maxLevelSum = function (root) {
    let i = 1, len = root.length;
    let res = [root[0]], arr = [1], max = root[0];
    while (arr[0] * 2 <= len) {
        arr = arr.flatMap(i => [2 * i, 2 * i + 1])
        let sum = arr.reduce((a, b) => a + (root[b] || 0), 0)
        res.push(sum);
        if (sum > max) {
            i = res.length
        }
    }
    return i
};

var maxLevelSum = function (root) {
    let stack = [root], max = -Infinity, i = 0, depth = 1;
    while (stack.length) {
        let len = stack.length, sum = 0;
        while (len--) {
            let cur = stack.shift();
            sum += cur.val;
            if (cur.left) stack.push(cur.left)
            if (cur.right) stack.push(cur.right)
        }
        if (sum > max) {
            max = sum
            i = depth
        }
        depth++;
    }
    return i
}
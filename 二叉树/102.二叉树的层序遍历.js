var levelOrder = function (root) {
    if (root == null) return []
    let queue = [root], res = [];
    while (queue.length) {
        let size = queue.length, arr = []
        while (size--) {
            let cur = queue.shift();
            arr.push(cur.val);
            if (cur.left !== null) queue.push(cur.left);
            if (cur.right !== null) queue.push(cur.right);
        }
        res.push(arr);
    }
    return res
};
var levelOrder = function (root) {
    let res = []
    if (root == null) return res;
    function dfs(node, i) {
        (res[i] || (res[i] = [])).push(node.val)
        if (node.left !== null) dfs(node.left, i + 1);
        if (node.right !== null) dfs(node.right, i + 1);
    }
    dfs(root, 0)
    return res
}
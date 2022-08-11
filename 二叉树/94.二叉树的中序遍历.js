var inorderTraversal = function (root) {
    let res = [];
    function dfs(node) {
        if (node == null) return;
        dfs(node.left);
        res.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    return res
};
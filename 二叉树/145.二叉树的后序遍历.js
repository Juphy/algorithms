var postorderTraversal = function (root) {
    let res = [];
    function dfs(node) {
        if (node == null) return;
        dfs(node.left);
        dfs(node.right);
        res.push(node.val);
    }
    dfs(root);
    return res
};
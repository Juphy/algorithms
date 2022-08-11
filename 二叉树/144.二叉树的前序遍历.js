var preorderTraversal = function (root) {
    let res = [];
    function dfs(node){
        if(node == null) return;
        res.push(node.value);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return res
};
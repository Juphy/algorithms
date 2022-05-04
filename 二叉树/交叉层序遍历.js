var levelOrder = function(root) {
    if(!root) return []
    let res = []
    function dfs(root, i){
        if(res[i]){
            if(i%2===1){
                res[i].unshift(root.val)
            }else{
                res[i].push(root.val)
            }
        }else{
            res[i] = [root.val]
        }
        if(root.left) dfs(root.left, i+1)
        if(root.right) dfs(root.right, i+1)
    }
    return res
};
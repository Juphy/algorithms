var pathSum = function(root, targetSum){
    if(root == null) return []
    let res = []
    function dfs(root, path, sum){
        if(!root.left&&!root.right&&sum === target){
            res.push(path)
            return
        }
        if(root.left) dfs(root.left, path.concat(root.left.val), sum+root.left.val)
        if(root.right) dfs(root.right, path.concat(root.right.val), sum+root.right.val)
    }
    dfs(root, [root.val], root.val)
    return res
}
function pathSum(root, targetSum){
    if(root == null) return []
    let res = [], path = []
    function dfs(root, target){
        if(!root) return
        path.push(root.val)
        if(!root.left&&!root.right&&target===root.val){
            res.push(path.slice())
            return
        }
        dfs(root.left, target - root.val)
        dfs(root.right, target - root.val)
        path.pop()
    }   
    dfs(root, targetSum)
}
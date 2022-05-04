var levelOrder = function(root) {
    if(!root) return []
    let stack = [root], res = []
    while(stack.length){
        let node = stack.shift()
        res.push(node.val)
        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)
    }
    return res
};
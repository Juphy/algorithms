function treeToDoublyList(root){
    if(root == null) return 
    let pre = null, head = null
    function dfs(node){
        if(!node) return
        dfs(node.left) // 遍历左子树
        if(!pre){
            // 遍历到最左边节点
            head = node
        }else{
            pre.right = node
        }
        // 当前节点的左指针指向上一个节点
        node.left = pre
        pre = node

        // 遍历右子树
        dfs(node.right)
    }
    // 中序遍历
    dfs(root)
    head.left = pre
    pre.right = head
    return head
}
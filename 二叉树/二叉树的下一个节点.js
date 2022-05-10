// 给定一个二叉树其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。
// 注意，树中的结点不仅包含左右子结点，同时包含指向父结点的next指针。
// 下图为一棵有9个节点的二叉树。树中从父节点指向子节点的指针用实线表示，从子节点指向父节点的用虚线表示
// next 指向父节点

/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/

function GetNext(pNode){
    let cur = pNode
    // 找到根节点
    while(cur.next !== null){
        cur = cur.next
    }
    // 中序遍历
    let arr = []
    function InOrder(node){
        if(node){
            InOrder(node.left)
            arr.push(node)
            InOrder(node.right)
        }
    }
    let index = arr.indexOf(pNode)
    return arr[index+1]
}
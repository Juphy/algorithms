import TreeNode from "../utils/TreeNode";

var constructFromPrePost = function (preorder, postorder) {
    if(!preorder.length || !postorder.length) return null
    let node = new TreeNode(postorder.pop())
    preorder.shift()
    if(preorder.length){
        let index = postorder.indexOf(preorder[0])
        node.left = constructFromPrePost(preorder.slice(0, index + 1), postorder.slice(0, index + 1))
        node.right = constructFromPrePost(preorder.slice(index + 1), postorder.slice(index + 1))
    }
    return node
};
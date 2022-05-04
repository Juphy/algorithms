import TreeNode from "../utils/TreeNode";
var buildTree = function (inorder, postorder) {
    if(!inorder.length || !postorder.length) return null
    let lastVal = postorder.pop()
    let node = new TreeNode(lastVal)
    let index = inorder.indexOf(lastVal)

    node.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
    node.right = buildTree(inorder.slice(index+1), postorder.slice(index))
    return node
};
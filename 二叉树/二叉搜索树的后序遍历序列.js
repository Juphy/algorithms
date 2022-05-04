// left < root < right  left=>right=>root root=>right=>left
function verifyPostorder(postorder){
    let stack = [], min = Infinity
    for(let i = postorder.length - 1; i >= 0; i--){
        let cur = postorder[i]
        if(cur > min){
            return false
        }
        // 如果栈内有值且栈顶元素大于当前元素，那么此时是right节点，接着弹出root 栈空，left入栈
        while(stack.length && cur < stack[stack.length - 1]){
            min = stack.pop()
        }
        stack.push(cur)
    }
    return true
}
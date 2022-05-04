function validateStackSequences(pushed, popped){
    let stack = []
    let index = 0, len = pushed.length
    for(let i = 0; i < len; i++){
        let cur = pushed[i]
        stack.push(cur)
        while(poped[index]!==undefined && popped[index] === stack[stack.length - 1]){
            stack.pop()
            index++
        }
    }
    return !stack.length
}
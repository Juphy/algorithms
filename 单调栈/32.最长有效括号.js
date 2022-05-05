function f(s){
    let stack = [-1], len = s.length
    let max = 0
    for(let i = 0; i < len; i++){
        if(s[i]==='('){
            stack.push(i)
        }else{
            stack.pop()
            if(stack.length === 0){
                stack.push(i)
            }else{
                max = Math.max(max, i - stack[stack.length - 1])
            }
        }
    }
    return max
}
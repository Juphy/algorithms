var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let stack = []
    for(let i = 0; i < intervals.length; i++){
        let cur = intervals[i]
        if(!stack.length){
            stack.push(cur)
        }else{
            let last = stack.pop()
            if(last[1] < cur[0] || cur[1] < last[0]){
                stack.push(last)
                stack.push(cur)
            }else{
                stack.push([Math.min(last[0], cur[0]), Math.max(last[1], cur[1])])
            }
        }
    }
    return stack
}
function merge(intervals){
    let len = intervals.length
    if(len < 1) return []
    let stack = [], tmp = intervals[0]
    for(let i = 1; i < len; i++){
        let cur = intervals[i]
        if(tmp[1] < cur[0]){
            stack.push(tmp)
            tmp = cur
        }else{
            tmp[1] = Math.max(tmp[1], cur[1])
        }
    }
    stack.push(tmp)
    return stack
}
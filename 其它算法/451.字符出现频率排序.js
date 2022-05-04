function fn(s){
    let map = new Map(), len = s.length
    for(let i = 0; i < len; i++){
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    let arr = [...map].sort((a, b) => b[1] - a[1])
    let res = ''
    for(let [str, num] of arr){
        res += str.repeat(num)
    }
    return res
}
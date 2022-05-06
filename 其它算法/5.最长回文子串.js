function f(s){
    let str = ''
    for(let i = 0; i < s.length; i++){
        let l = i-1
        while(i < len -1 && s[i] === s[i+1]) i++
        let r = i + 1
        while(l >= 0 && r < s.length){
            if(s[l--] !== s[r++]){
                break
            }
        }
        let res = s.slice(left + 1, right)
        if(res.length > str.length){
            str = res
        }
    }
    return str
}
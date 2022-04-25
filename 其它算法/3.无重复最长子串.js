// 3 无重复最长子串
function longStr(s) {
    let i = 0, j = 0, max = 0, len = s.length, set = new Set()
    for (; j < len; j++) {
        let val = s[j]
        if (set.has(val)) {
            max = Math.max(max, j - i)
            while (set.has(val)) {
                set.delete(s[i++])
            }
        }
        set.add(val)
    }
    return Math.max(max, j - i)
}
s = 'abcabcbb'
console.log(longStr(s))
s = 'asjrgapa'
console.log(longStr(s))
s = "tmmzuxt"
console.log(longStr(s))
s = "pwwkew"
console.log(longStr(s))

function longStr(s){
    let res = '', max = 0, len = s.length
    for(let i = 0; i < len; i++){
        let str = s[i]
        let index = res.indexOf(str)
        if(index === -1){
            res += str
        }else{
            max = Math.max(max, res.length)
            res = res.slice(index+1) + str
        }
    }
    return Math.max(res.length, max)
}
console.log(longStr(' '))
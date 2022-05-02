function minWindow(s, t) {
    let obj = {}, map = {}, len = s.length
    for (let a of t) {
        obj[a] = (obj[a] || 0) + 1
    }
    let left = 0, right = 0
    let valid = 0, // 字符种类数
        min = Infinity, // 最小长度 
        start = 0 // 字符起始位置
    while (right < len) {
        let c = s[right]
        right++
        if (obj[c]) {
            map[c] = (map[c] || 0) + 1
            if (map[c] === obj[c]) {
                valid++
            }
        }
        while (valid === Object.keys(obj).length) {
            if (right - left < min) {
                start = left
                min = right - left
            }
            let d = s[left]
            left++
            if (obj[d]) {
                if (map[d] === obj[d]) {
                    valid--
                }
                map[d]--
            }
        }
    }
    return min === Infinity ? '' : s.substr(start, min)
}

function minWindow(s, t){
    let need = new Map(), len = s.length
    for(let o of t){
        need.set(o, (need.get(o) || 0) + 1)
    }
    let size = need.size, res = ''
    let l = 0, r = 0
    while(r < len){
        let c = s[r]
        if(need.has(c)){
            need.set(c, need.get(c) - 1)
            if(need.get(c) === 0) size--
        }
        while(size === 0){
            let str = s.slice(l, r + 1)
            if(!res || str.length < res.length) res = str
            let c2 = s[r]
            if(need.has(c2)){
                need.set(c2, need.set(c2) + 1)
                if(need.get(c2) === 1) size++
            }
            l++
        }
        r++
    }
    return res
}
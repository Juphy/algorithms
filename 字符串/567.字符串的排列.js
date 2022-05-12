// 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。

// 换句话说，s1 的排列之一是 s2 的 子串 。

//  

// 示例 1：

// 输入：s1 = "ab" s2 = "eidbaooo"
// 输出：true
// 解释：s2 包含 s1 的排列之一("ba").
//     示例 2：

// 输入：s1 = "ab" s2 = "eidboaoo"
// 输出：false


// 提示：

// 1 <= s1.length, s2.length
function checkInclusion(s1, s2){
    let map = {}, m = s1.length, n = s2.length
    for(let i = 0; i < m; i++){
        let s = s1[i]
        map[s] = (map[s] || 0) + 1
    }
    let flag = false
    for(let i = 0; i < n - m + 1; i++){
        let obj = {}
        for(let j = i; j < i + m; j++){
            let s = s2[j]
            obj[s] = (obj[s] || 0) + 1
        }
        if (equal(map, obj)){
            flag = true
            break
        }
    }
    return flag
}

function equal(a, b){
    for(let k in a){
        if(a[key] !== b[key]) return false
    }
    return true
}

// 用数组记录所有字母的个数，进行逐个比较
function checkInclusion(s1, s2) {
    let arr1 = new Array(26).fill(0),
        arr2 = new Array(26).fill(0),
        m = s1.length, n = s2.length
    let start = 'a'.charCodeAt()    
    for(let i = 0; i < m; i++){
        arr1[s1[i].charCodeAt()-start]++
    }
    for(let i = 0; i < n; i++){
        arr2[s2[i].charCodeAt()-start]++
        if(i >= m-1){
            if(equal(arr1, arr2)){
                return true
            }
            arr2[s2[i-(m-1)].charCodeAt()-start]--
        }
    }
    
    function equal(arr1, arr2){
        for(let i = 0; i < 26; i++){
            if(arr1[i]!==arr2[i]) return false
        }
        return true
    }
    return false
}



// var checkInclusion = function (s1, s2) {
//     let res = [], m = s1.length, n = s2.length
//     let map = {}
//     function dfs(str) {
//         if (str.length === m) {
//             res.push(str)
//             return
//         }
//         for (let i = 0; i < m; i++) {
//             let s = s1[i], tmp = str
//             if (!map[i]) {
//                 map[i] = true
//                 str += s
//                 dfs(str)
//                 map[i] = false
//                 str = tmp
//             }
//         }
//     }
//     dfs('')
//     let flag = false
//     for (let i = 0; i < res.length; i++) {
//         if (s2.indexOf(res[i]) > -1) flag = true
//     }
//     return flag
// };

console.log(checkInclusion("ab", "eidbaooo"))
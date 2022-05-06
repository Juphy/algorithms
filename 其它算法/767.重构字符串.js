// 给定一个字符串 s ，检查是否能重新排布其中的字母，使得两相邻的字符不同。

// 返回 s 的任意可能的重新排列。若不可行，返回空字符串 "" 。

//  

// 示例 1:

// 输入: s = "aab"
// 输出: "aba"
// 示例 2:

// 输入: s = "aaab"
// 输出: ""


// 提示:

// 1 <= s.length <= 500
// s 只包含小写字母
// 先按从多到少排序
// 先偶数位置插入再奇数位置插入
var reorganizeString = function (s) {
    let len = s.length;
    let map = new Map()
    for (let i = 0; i < len; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    let arr = [...map].sort((a, b) => b[1] - a[1])
    if (arr[0][1] > (len + 1) / 2) return ''
    let str = ''
    for (let [s, n] of arr) {
        str += s.repeat(n)
    }
    let res = [], i = 0, j = 0
    while (j < len) {
        res[i] = str[j++]
        i = i + 2
        if(i >= len){
            i = 1
        }
    }
};
// 给你一个字符串 s，找到 s 中最长的回文子串。

//  

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"


// 提示：

// 1 <= s.length <= 1000
// s 仅由数字和英文字母组成

function longestPalindrome(s){
    let max = 0, res = '', len = s.length
    for(let i = 0; i < len; i++){
        let str = s[i]
        let left = i - 1
        while(s[i] === s[i+1]){
            str += s[i+1]
            i++
        }
        let right = i + 1
        while(s[left] === s[right] && left >= 0 && right < len){
            str = s[left] + str + s[right]
            left--
            right++
        }
        if(str.length > max){
            max = str.length
            res = str
        }
    }
    return res
}
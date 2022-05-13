// 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。

// 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现。

//  

// 示例 1：

// 输入：s = "hello"
// 输出："holle"
// 示例 2：

// 输入：s = "leetcode"
// 输出："leotcede"


// 提示：

// 1 <= s.length <= 3 * 105
// s 由 可打印的 ASCII 字符组成

function reverseVowels(s){
    let set = ['a', 'e', 'i', 'o', 'u']
    let len = set.length
    for(let i = 0; i < len; i++){
        set.push(set[i].toUpperCase())
    }
    let arr = s.split('')
    let l = 0, r = arr.length - 1
    while(l < r){
        while(l < r && !set.includes(arr[l])) l++
        while(l < r && !set.includes(arr[r])) r--
        if(l < r){
            [arr[l], arr[r]] = [arr[r], arr[l]]
            l++
            r--
        }
    }
    return arr.join('')
}
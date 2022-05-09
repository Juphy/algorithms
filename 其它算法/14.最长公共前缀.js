// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

//  

// 示例 1：

// 输入：strs = ["flower", "flow", "flight"]
// 输出："fl"
// 示例 2：

// 输入：strs = ["dog", "racecar", "car"]
// 输出：""
// 解释：输入不存在公共前缀。


// 提示：

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] 仅由小写英文字母组成
// 先字典排序，选中第一个和最后一个
function longestCommonPrefix(strs){
    strs.sort()
    let first = strs[0], last = strs.pop()
    let len = first.length
    if (len === 0) return ''
    let res = ''
    for (let i = 0; i < first.length; i++) {
        if (first[i] !== last[i]) break
        res += first[i]
    }
    return res    
}
// 给定一个未排序的整数数组 nums ， 返回最长递增子序列的个数 。

// 注意 这个数列必须是 严格 递增的。

//  

// 示例 1:

// 输入: [1, 3, 5, 4, 7]
// 输出: 2
// 解释: 有两个最长递增子序列，分别是[1, 3, 4, 7] 和[1, 3, 5, 7]。
// 示例 2:

// 输入: [2, 2, 2, 2, 2]
// 输出: 5
// 解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。


// 提示:

// 1 <= nums.length <= 2000
// - 106 <= nums[i] <= 106
// if(nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1)
// 位置i的最长递增子序列等于j从0到i-1各个位置的最长升序子序列+1的最大值
// 以nums[i]为结尾的字符串，最长递增子序列的个数为count[i]
// 那么在nums[i] > nums[j]的前提下，如果在[0, j-1]的范围内，找到了j，
// 使得dp[j] + 1 > dp[i]说明找到了一个更长的递增子序列


function findNumberOfLIS(nums){
    let len = nums.length, max = 0
    let dp = new Array(len).fill(1),
        count = new Array(len).fill(1)
    for(let i = 0; i < len; i++){
        for(let j = 0; j < i; j++){
            if (nums[j] < nums[i]){
                if(dp[j] + 1 > dp[i]){
                    dp[i] = dp[j] + 1
                    count[i] = count[j]
                }else if(dp[j] + 1 === dp[i]){
                    count[i] += count[j]
                }
            }
            max = Math.max(max, dp[i])
        }
    }
    let res = 0
    for(let i = 0; i < len; i++){
        if(dp[i] === max) res += count[i]
    }
    return res
}    

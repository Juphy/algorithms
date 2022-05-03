// 给你一个整数数组 nums 和一个整数 target 。

// 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：

// 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
// 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。

//  

// 示例 1：

// 输入：nums = [1, 1, 1, 1, 1], target = 3
// 输出：5
// 解释：一共有 5 种方法让最终目标和为 3 。
// -1 + 1 + 1 + 1 + 1 = 3
//     + 1 - 1 + 1 + 1 + 1 = 3
//         + 1 + 1 - 1 + 1 + 1 = 3
//             + 1 + 1 + 1 - 1 + 1 = 3
//                 + 1 + 1 + 1 + 1 - 1 = 3
// 示例 2：

// 输入：nums = [1], target = 1
// 输出：1


// 提示：

// 1 <= nums.length <= 20
// 0 <= nums[i] <= 1000
// 0 <= sum(nums[i]) <= 1000
// - 1000 <= target <= 1000

function f(nums, target){
    let res = 0, len = nums.length
    function dfs(nums, n, type, sum) {
        console.log(n, sum)
        if (n === len && (sum === target)) {
            console.log(n, sum)
            res += 1
            return
        }
        if (type) {
            sum += nums[n]
        } else {
            sum -= nums[n]
        }
        n += 1
        if (n <= len) {
            dfs(nums, n, true, sum)
            dfs(nums, n, false, sum)
        }
    }
    dfs(nums, 0, true, 0)
    dfs(nums, 0, false, 0)
    return res
}

/**
 * +和为x  -和为y 
 * S = x - y
 * sum = x + y
 * x = (S + sum)/2
 */
function findTargetSumWays(nums, S){
    let sum = nums.reduce((a,b) => a+b)
    if(Math.abs(S) > sum){
        return 0
    }
    if((S + sum) % 2 === 1) return 0
    let x = Math.floor((S + sum) /2)
    let dp = Array(x + 1).fill(0)
    dp[0] = 1 // dp初始化；dp[0]=1,实际含义：填满容量为0的背包只有1中方法；
    for(let num of nums){
        for(let j = x; j >= num; j--){
            dp[j] = dp[j] + dp[j-num]
        }
    }
    return dp[x]
}


// 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。

// 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。

// 请你计算并返回达到楼梯顶部的最低花费。

//  

// 示例 1：

// 输入：cost = [10, 15, 20]
// 输出：15
// 解释：你将从下标为 1 的台阶开始。
// - 支付 15 ，向上爬两个台阶，到达楼梯顶部。
// 总花费为 15 。
// 示例 2：

// 输入：cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// 输出：6
// 解释：你将从下标为 0 的台阶开始。
// - 支付 1 ，向上爬两个台阶，到达下标为 2 的台阶。
// - 支付 1 ，向上爬两个台阶，到达下标为 4 的台阶。
// - 支付 1 ，向上爬两个台阶，到达下标为 6 的台阶。
// - 支付 1 ，向上爬一个台阶，到达下标为 7 的台阶。
// - 支付 1 ，向上爬两个台阶，到达下标为 9 的台阶。
// - 支付 1 ，向上爬一个台阶，到达楼梯顶部。
// 总花费为 6 。


// 提示：

// 2 <= cost.length <= 1000
// 0 <= cost[i] <= 999

// 链接：https://leetcode-cn.com/problems/min-cost-climbing-stairs

function minCostClimbingStairs(cost){
    let len = cost.length;
    for(let i = 2; i < len; i++){
        cost[i] = cost[i] + Math.min(cost[i-1], cost[i-2])
    }
    return Math.min(cost[len - 1], cost[len - 2])
}
//  f[i]表示爬到第i层的最小花费
// 由于每次只能爬 1 个或者 2 个台阶，所以 f[i] 这个状态只能从 f[i-1] 或者 f[i-2] 转移过来：
//    1）如果从 i-1 爬上来，需要的花费就是 f[i-1] + cost[i-1]
//    2）如果从 i-2 爬上来，需要的花费就是 f[i-2] + cost[i-2]
//    没有其他情况了，而我们要 求的是最小花费，所以 f[i] 就应该是这两者的小者，得出状态转移方程：
//               f[i] = min(f[i-1]+cost[i-1], f[i-2]+cost[i-2])
//    然后考虑一下初始情况 f[0] 和 f[1]，根据题目要求它们都应该是 0。
function minCostClimbingStairs(cost){
    let len = cost.length
    let arr = [0, 0]
    for(let i = 2; i <= len; i++){
        arr[i] = Math.min(arr[i-1]+cost[i-1], arr[i-2]+cost[i-2])
    }
    return arr[len]
}
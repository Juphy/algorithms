// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回 滑动窗口中的最大值 。

//  

// 示例 1：

// 输入：nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// 输出：[3, 3, 5, 5, 6, 7]
// 解释：
// 滑动窗口的位置                最大值
// --------------- -----
//     [1  3 - 1] - 3  5  3  6  7       3
// 1[3 - 1 - 3] 5  3  6  7       3
// 1  3[-1 - 3  5]3  6  7       5
// 1  3 - 1[-3  5  3]6  7       5
// 1  3 - 1 - 3[5  3  6]7       6
// 1  3 - 1 - 3  5[3  6  7]7
// 示例 2：

// 输入：nums = [1], k = 1
// 输出：[1]


// 提示：

// 1 <= nums.length <= 105
// - 104 <= nums[i] <= 104
// 1 <= k <= nums.length
// 单调栈，单调递减队列
function maxSlidingWindow(nums, k){
    let stack = [], res = [], len = nums.length
    for(let i = 0; i < len; i++){
        // 当进入滑动窗口的元素大于等于队尾的元素时，队尾元素不断出队
        // 
        while(stack.length && nums[i] >= nums[stack[stack.length-1]]){
            stack.pop()
        }
        stack.push(i)
        while(stack[0] <= i-k){// 队头元素已经在滑动窗口之外就移除
            stack.shift()
        }
        if(i >= k - 1) res.push(nums[stack[0]])
    }
    return res
}

function f(nums, k){
    let res = [], stack = [], len = nums.length
    for(let i = 0; i < len; i++){
        stack.push(nums[i])
        if(i >= k-1){
            res.push(Math.max(...stack))
            stack.shift()
        }
    }
    return res
}

function f(nums, k){
    let res = [], stack = [], len = nums.length
    for(let i = 0; i < len; i++){
        while(stack.length && nums[i] >= nums[stack[stack.length-1]]){
            stack.pop()
        }
        stack.push(i)
        while(stack[0] <= i - k) stack.shift()
        if(i >= k-1) res.push(nums[stack[0]])
    }    
    return res
}
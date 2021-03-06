// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

//  

// 示例 1：



// 输入：height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
// 输出：6
// 解释：上面是由数组[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
// 示例 2：

// 输入：height = [4, 2, 0, 3, 2, 5]
// 输出：9


// 提示：

// n == height.length
// 1 <= n <= 2 * 104
// 0 <= height[i] <= 105
var trap = function (height) {
    let res = 0
    let left = 0, right = height.length - 1
    let leftMax = 0, rightMax = 0
    while(left < right){
        if(height[left] < height[right]){
            height[left] >= leftMax ? (leftMax = height[left]) : res += (leftMax-height[left])
            ++left
        }else{
            height[right] >= rightMax? (rightMax = height[right]) : res += (rightMax-height[right])
            --right
        }
    }
    return res
}
height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(trap(height))
height = [9, 6, 8, 8, 5, 6, 3]
console.log(trap(height))
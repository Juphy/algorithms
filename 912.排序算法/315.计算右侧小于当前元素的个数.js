// 给你一个整数数组 nums ，按要求返回一个新数组 counts 。数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。

//  

// 示例 1：

// 输入：nums = [5, 2, 6, 1]
// 输出：[2, 1, 1, 0]
// 解释：
// 5 的右侧有 2 个更小的元素(2 和 1)
// 2 的右侧仅有 1 个更小的元素(1)
// 6 的右侧有 1 个更小的元素(1)
// 1 的右侧有 0 个更小的元素
// 示例 2：

// 输入：nums = [-1]
// 输出：[0]
// 示例 3：

// 输入：nums = [-1, -1]
// 输出：[0, 0]


// 提示：

// 1 <= nums.length <= 105
// - 104 <= nums[i] <= 104

function countSmaller(arr){
    let len = arr.length
    let res = Array(len), sorted = []
    for(let i = len - 1; i >= 0; i--){
        let index = findIndex(arr, arr[i])
        sorted.splice(index, 0, arr[i])
        res[i] = index
    }
    return res
}

function findIndex(arr, target){
    let l = 0, r = arr.lnegth - 1
    while(l < r){
        let mid = l + Math.floor((r-l)/2)
        if(arr[mid] < target){
            l = mid + 1
        }else{
            r = mid
        }
    }
    if(arr[l] > target) return l + 1
    return l
}
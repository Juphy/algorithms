// 大于等于x的最小值
// 给定一个排序数组和一个目标值 ，在数组中找到目标值target，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
let nums = [0, 1, 2, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8, 9, 10]
function f1(nums, target) {
  let left = 0,
    right = nums.length - 1
  while (left <= right) {
    let midIndex = Math.floor((right - left) / 2) + left
    let midValue = nums[midIndex]
    if (midValue < target) {
      left = midIndex + 1
    } else if (midValue > target) {
      right = midIndex - 1
    } else {
      return midIndex
    }
  }
  if (target > nums[right] && target < nums[left]) {
    return left
  }
}

console.log(f1(nums, 5))
console.log(f1(nums, 5))
// 大于x的最小值
// 给你一个排序后的字符列表letters，列表中只包含小写英文字母。另给出一个目标字母target，请你寻找在这一有序列表里比目标字母大的最小字母。
nums = [0, 1, 2, 3, 4, 4, 4, 6, 6, 7, 8, 9, 10]
function f2(nums, target) {
  let left = 0,
    right = nums.length - 1
  while (left <= right) {
    let midIndex = Math.floor((right - left) / 2) + left
    let midValue = nums[midIndex]
    if (midValue < target) {
      left = midIndex + 1
    } else if (midValue > target) {
      right = midIndex - 1
    }
  }
  if (target > nums[right] && target < nums[left]) {
    return left
  }
}

// 小于等于x的最大值
// 给你一个排序后的递增数组 和 一个目标值target，要求找到小于等于targte的最大值的下标
nums = [0, 1, 2, 3, 4, 4, 4, 6, 6, 7, 8, 9, 10]
function f3(nums, target) {
  let left = 0,
    right = nums.length - 1
  while (left <= right) {
    let midIndex = Math.floor((right - left) / 2) + left
    let midValue = nums[midIndex]
    if (midValue < target) {
      left = midIndex + 1
    } else if (midValue > target) {
      right = midIndex - 1
    } else{
        return midIndex
    }
  }
  if (target > nums[right] && target < nums[left]) {
    return right
  }
}

// 小于x的最大值
// 给你一个排序后的递增数组 和 一个目标值target，要求找到小于target的最大值的下标
nums = [0, 1, 2, 3, 4, 4, 4, 6, 6, 7, 8, 9, 10]
function f4(nums, target) {
  let left = 0,
    right = nums.length - 1
  while (left <= right) {
    let midIndex = Math.floor((right - left) / 2) + left
    let midValue = nums[midIndex]
    if (midValue < target) {
      left = midIndex + 1
    } else if (midValue > target) {
      right = midIndex - 1
    }
  }
  if (target > nums[right] && target < nums[left]) {
    return right
  }
}

// 给你一个非负整数 x ，计算并返回 x 的算术平方根 。由于返回类型是整数，结果只保留整数部分，小数部分将被舍去
function f5(x){
    if(x < 2) return x
    let left = 0, right = x - 1
    while(left <= right){
        let mid = Math.floor((right - left)/2) + left
        let xx = Math.pow(mid, 2)
        if(xx > x){
            right = mid - 1
        }else if(xx < x){
            left = mid + 1
        }else{
            return mid
        }
    }
    return right
}
console.log(f5(120))
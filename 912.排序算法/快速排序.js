function quickSort(arr){
    let len = arr.length
    if(len < 2) return arr
    let midInex = Math.floor((len - 1) / 2)
    let midValue = arr[midInex]
    let left = [], right = []
    for(let i = 0; i < len; i++){
        if(i !== midInex){
            let value = arr[i]
            if(value > midValue){
                right.push(value)
            }else{
                left.push(value)
            }
        }
    }
    return quickSort(left).concat(arr[midInex], quickSort(right))
}
let nums = []
for(let i = 1000000; i >= 0; i--){
    nums.push(i)
}
console.time('start')
console.log(quickSort(nums))
console.timeEnd('start')

function quickSort1(nums){
    function f(nums, start, end){
        if(start >= end) return
        let left = start, right = end
          midVal = nums[Math.floor((start + end)/2)]
        // 两边指针置换midVal两边的数值  
        while(left <= right){
            while(left <= right && nums[left] < midVal){
                left++
            }
            while(left <= right && nums[right] > midVal){
                right--
            }
            if(left <= right){
                [nums[left], nums[right]] = [nums[right], nums[left]]
                left++
                right--
            }
        }
        f(nums, start, right)
        f(nums, left, end)  
    }
    f(nums, 0, nums.length - 1)
    return nums
}

let nums1 = []
for(let i = 1000000; i >= 0; i--){
    nums1.push(i)
}
console.time('start1')
console.log(quickSort1(nums1))
console.timeEnd('start1')
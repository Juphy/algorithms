function maxSubArray(nums){
    let res = nums[0], sum = nums[0], len = nums.length
    for(let i = 1; i < len; i++){
        let cur = nums[i]
        if(sum > 0){
            sum += cur
        }else{
            sum = cur
        }
        res = Math.max(res, sum)
    }
    return res
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([5, 4, -1, 7, 8]))
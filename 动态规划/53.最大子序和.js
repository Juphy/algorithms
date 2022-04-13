function maxSubArray(nums) {
    let res = nums[0], sum = nums[0], len = nums.length
    for (let i = 1; i < len; i++) {
        let cur = nums[i]
        if (sum > 0) {
            sum += cur
        } else {
            sum = cur
        }
        res = Math.max(res, sum)
    }
    return res
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubArray([1]))
console.log(maxSubArray([5, 4, -1, 7, 8]))

function maxSubArray(nums) {
    let max = -Infinity, len = nums.length;
    for (let i = 0; i < len; i++) {
        let sum = 0;
        for (let j = i; j < len; j++) {
            sum += nums[j]
            if (sum > max) max = sum
        }
    }
    return max
}

function maxSubArray(nums) {
    let len = nums.length, dp = [nums[0]], res = nums[0]
    for (let i = 1; i < len; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
        res = Math.max(res, dp[i])
    }
    return res
}

function maxSubArray(nums) {
    let len = nums.length, dp = nums[0], res = nums[0]
    for (let i = 1; i < len; i++) {
        dp = Math.max(dp + nums[i], nums[i])
        res = Math.max(res, dp)
    }
    return res
}

function maxSubArray(nums){
    let len = nums.length, max = nums[0], res = 0
    for(let i = 0; i < len; i++){
        let num = nums[i]
        if(sum + num > num){
            sum = sum + num
        }else{
            sum = num
        }
        res = Math.max(sum, res)
    }
    return res
}
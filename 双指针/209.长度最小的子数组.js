function minSubArrayLen(target, nums){
    let min = Infinity, res = 0
    let l = 0, r = 0, len = nums.length
    while(r < len){
        res += nums[r]
        r++
        if(res >= target){
            min = Math.min(min, r + 1 - l)
            res -= nums[l]
            l++
        }
    }
    return min === Infinity ? 0 : min
}
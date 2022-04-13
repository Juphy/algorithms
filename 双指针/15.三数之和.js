function threeSum(nums) {
    if (nums.length < 3) return []
    let res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (k > 0 && nums[k] === nums[k-1]) continue
        let left = i + 1, right = nums.length - 1
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] > 0) {
                right--
                while (left < right && nums[right] === nums[right + 1]) right--
            } else if (nums[i] + nums[left] + nums[right] < 0) {
                left++
                while (left < right && nums[left] === nums[left - 1]) left++
            } else {
                res.push([nums[i], nums[left], nums[right]])
                while(left < right&&nums[right] == nums[right-1]) right--
                while(left < right&&nums[left] == nums[left+1]) left++
                left++
                right--
            }
        }
    }
    return res
}
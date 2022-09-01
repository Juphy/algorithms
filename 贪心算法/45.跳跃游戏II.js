var jump = function (nums) {
    let len = nums.length;
    let max = nums[0], res = 0;
    for (let i = 1; i <= max; i++) {
        max = Math.max(nums[i] + i, max);
        res++
        if (max >= len - 1) return res;
    }
};
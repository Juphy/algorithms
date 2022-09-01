var largestSumAfterKNegations = function (nums, k) {
    nums = nums.sort((a, b) => Math.abs(a) - Math.abs(b));
    let len = nums.length - 1;
    for (let i = 0; i < len; i++) {
        let cur = nums[i];
        if (cur < 0 && k > 0) {
            nums[i] = -cur;
            k--
        }
    }
    if (k % 2 === 1) nums[len - 1] = -nums[len - 1];
    return nums.reduce((a, b) => a + b);
};
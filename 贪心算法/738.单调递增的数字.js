var monotoneIncreasingDigits = function (n) {
    let nums = n.toString().split('');
    let index, len = nums.length;
    for (let i = len - 1; i > 0; i--) {
        if (nums[i - 1] > nums[i]) {
            index = i;
            nums[i - 1]--
        }
    }
    for (let i = index; i < len; i++) {
        nums[i] = '9'
    }
    return Number(nums.join(''))
};
var canJump = function (nums) {
    let len = nums.length;
    if(len === 1) return true;
    let max = nums[0];
    for(let i = 1; i <= max; i++){
        max = Math.max(nums[i]+i, max);
        if(max >= len - 1) return true;
    }
    return false;
};
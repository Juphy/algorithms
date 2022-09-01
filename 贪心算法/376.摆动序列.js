var wiggleMaxLength = function (nums) {
    let len = nums.length
    let res = 0,
        preDiff = 0,
        curDiff = 0;
    for (let i = 0; i < len - 1; i++) {
        curDiff = nums[i + 1] - nums[i];
        if ((preDiff <= 0 && curDiff > 0) || (preDiff >= 0 && curDiff < 0)) {
            res++;
            preDiff = curDiff
        }
    }
    return res
}

var subsets = function (nums) {
    let res = [], path = [];
    function f(start) {
        res.push([...path])
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i])
            f(i + 1)
            path.pop()
        }
    }
    f(0)
    return res;
};
var permute = function (nums) {
    let res = [], len = nums.length;
    let path = [], used = {};
    function f() {
        if (path.length === len) {
            res.push([...path]);
            return;
        }
        for (let i = 0; i < len; i++) {
            if (used[i]) continue
            let cur = nums[i]
            used[i] = true;
            path.push(cur);
            f();

            used[i] = false
            path.pop();
        }
    }
    f();
    return res
}

console.log(permute([1, 2, 3]))
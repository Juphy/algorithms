var combine = function (n, k) {
    let res = [], path = [];
    function f(start) {
        if (path.length === k) {
            res.push([...path])
            return
        }
        for (let i = start; i <= n - (k - path.length) + 1; i++) {
            path.push(i);
            f(start + 1);
            path.pop();
        }
    }
    f(1)
    return res
};

console.log(combine(4, 2));

//           1 2 3 4
//       1     2     3     4
//      234   34     4
//   2 3 4   3 4     4

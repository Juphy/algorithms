var generateParenthesis = function (n) {
    let res = [];
    function f(s, l, r) {
        if (r > l || l > n) return;
        if (l === n && r === n) {
            res.push(s);
            return;
        }
        f(s + '(', l + 1, r);
        f(s + ')', l, r + 1);
    }
    f('', 0, 0);
    return res
}
console.log(generateParenthesis(1))
console.log(generateParenthesis(2))
console.log(generateParenthesis(3))

var generateParenthesis = function (n) {
    let res = []
    function f(s, l, r) {
        if (s.length === 2 * n) {
            res.push(s);
            return
        }
        if (l > 0) {
            f(s + '(', l - 1, r)
        }
        if (r > l) {
            f(s + ')', l, r - 1)
        }
    }
    f('', n, n);
    return res;
}
console.log(generateParenthesis(1))
console.log(generateParenthesis(2))
console.log(generateParenthesis(3))

var generateParenthesis = function (n) {
    if (n === 0) return [];
    let res = [];
    function backtrack(path, l, r) {
        if (path.length === 2 * n) {
            res.push(path.join(''))
            return
        }
        if (l > 0) {
            path.push('(');
            backtrack([...path], l - 1, r);
            path.pop();
        }
        if (r > l) {
            path.push(')');
            backtrack([...path], l, r - 1);
            path.pop()
        }
    }
    backtrack([], n, n)
    return res
}

console.log(generateParenthesis(1))
console.log(generateParenthesis(2))
console.log(generateParenthesis(3))

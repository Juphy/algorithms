var letterCombinations = function (digits) {
    if (digits.length === 0) return []
    let res = [], len = digits.length;
    map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };
    function f(str, i) {
        if (str.length === len) {
            res.push(str)
            return
        }
        let letters = map[digits[i]];
        for (let l of letters) {
            f(str + l, i + 1);
        }
    }
    f('', 0)
};

var letterCombinations = function (digits) {
    if (digits.length === 0) return []
    let res = [], len = digits.length;
    map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };
    let queue = [''];
    for (let i = 0; i < len; i++) {
        let size = queue.length;
        for(let j = 0; j < size; j++){
            let cur = queue.shift();
            let letters = map[digits[i]]
            for(let l of letters){
                queue.push(cur + l)
            }
        }
    }
    return queue
};
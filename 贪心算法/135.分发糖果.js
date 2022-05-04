var candy = function (ratings) {
    let len = ratings.length
    let res = new Array(len).fill(1)
    for (let i = 1; i < len; i++) {
        if (ratings[i] > ratings[i - 1]) {
            res[i] = res[i - 1] + 1
        }
    }
    for (let i = len - 2; i >= 0; i--) {
        if(ratings[i] > ratings[i+1]){
            res[i] = Math.max(res[i], res[i+1] + 1)
        }
    }
    return res.reduce((a, b) => a+b)
};
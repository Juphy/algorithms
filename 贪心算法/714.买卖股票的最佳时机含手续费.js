var maxProfit = function (prices, fee) {
    let len = prices, res = 0;
    let min = prices[0];
    for (let i = 1; i < len; i++) {
        let cur = prices[i];
        if (cur < min) min = cur;

        if (cur > min + fee) {
            res += cur - min - fee;
            min = cur - fee;
        }
    }
    return res
};
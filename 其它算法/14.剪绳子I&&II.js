var cuttingRope = function (n) {
    if (n === 1 || n === 2) return 1
    if (n === 3) return 2
    let sum = 1
    while (n > 4) {
        sum *= 3
        n -= 3
    }
    return sum * n
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let ind = 0
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) != 0) {
            ind++
        }
    }
    return ind
};

function cuttingRope(n){
    let dp = new Array(n+1).fill(0)
    dp[2] = 1
    dp[3] = 2
    for(let i = 4; i <= n; i++){
        for(let j = 1; j < i; j++){
            dp[i] = Math.max(dp[i], dp[i-j]*j, (i-j)*j)
        }
    }
    return dp[n]
}
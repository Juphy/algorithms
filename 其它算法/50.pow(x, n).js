function myPow(x, n){
    if(n === 0) return 1
    if(n === 1) return x
    if(n === -1) return 1/x
    let res = myPow(x, n>>1)
    res *= res
    if(n&1 === 1){
        res *= x
    }
    return res
}
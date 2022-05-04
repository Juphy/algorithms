// [0, 1)：0
// [0, 10)：相当于 10 个[0, 1)，且在[1, 1] 有 1 个个位上的 1，共(10 * 0 + 1) = 1
// [0, 100)：相当于 10 个[0, 10)，且在[10, 19] 有 10 个十位上的 1，共(10 * 1 + 10) = 20
// [0, 1000)：相当于 10 个[0, 100)，且在[100, 199] 有 100 个百位上的 1，共(10 * 20 + 100) = 300
// [0, 10000)：相当于 10 个[0, 1000)，且在[1000, 1999] 有 1000 个千位上的 1，共(10 * 300 + 1000) = 4000

function countDigitOne(n){
    let low = [0], high = [0]
    for(let i = 0; i < 10; i++){
        low.push((low[low.length-1] + high[high.length - 1]) * 10)
        high.push(10 ** i)
    }

    let res = 0, pow = 10
    while(n > 0){
        let div = Math.pow(10, pow)
        let sum = Math.floor(n / div)
        if( sum > 0){
            res += sum * (low[pow] + high[pow])
            res += sum === 1? n% div + 1: div
        }
        n %= div
        pow--
    }
}
// 给定一个整数 n，计算所有小于等于 n 的非负整数中数字 1 出现的个数。

//  

// 示例 1：

// 输入：n = 13
// 输出：6
// 示例 2：

// 输入：n = 0
// 输出：0


// 提示：

// 0 <= n <= 10^9
/**
 * 
 * f(0) = 0
 * f(1) = 10*f(0) + 10^(1-1)
 * f(2) = 10*f(1) + 10^(2-1)
 * f(3) = 10*f(2) + 10^(3-1)
 * ...
 * f(n) = 10*f(n-1) + 10^(n-1)
 * = 10*(10*f(n-2)+10^(n-2)) + 10^(n-1)
 * = (10^2)*f(n-2) + 2*(10^(n-1)) 
 */

function countDigitOne(n){
    let arr = new Array(11)
    arr[0] = 0
    for(let i = 1; i <= 10; i++){
        arr[i] = 10 ** (i-1) + 10*arr[i-1]
    }
    let count = 0, place = 0
    while(n){
        place++
        let num = n % 10
        if(num === 1){
            count += s%(10**(place-1)) + 1 + arr[place-1]
        }else if(num > 1){
            count += 10**(place-1) + num*arr[place-1]
        }
        n = Math.floor(n/10)
    }
    return count
}
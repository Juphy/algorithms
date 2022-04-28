// 请根据每日 气温 列表 temperatures ，重新生成一个列表，要求其对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替。

//

// 示例 1:

// 输入: temperatures = [73,74,75,71,69,72,76,73]
// 输出: [1,1,4,2,1,1,0,0]
// 示例 2:

// 输入: temperatures = [30,40,50,60]
// 输出: [1,1,1,0]
// 示例 3:

// 输入: temperatures = [30,60,90]
// 输出: [1,1,0]
//

// 提示：

// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100

function dailyTemperatures(temperatures) {
    let len = temperatures.length,
        res = new Array(len).fill(0)
    for (let i = 0; i < len; i++) {
        let start = temperatures[i]
        for (let j = i + 1; j < len; j++) {
            if (temperatures[j] > start) {
                res[i] = j - i
                break
            }
        }
    }
    return res
}
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
console.log(dailyTemperatures([30, 40, 50, 60]))
console.log(dailyTemperatures([30, 60, 90]))

function dailyTemperatures(temperatures){
    let len = temperatures.length,
        res = new Array(len).fill(0),
        stack = []
    for(let i = len - 1; i >= 0; i--){
        let cur = temperatures[i]
        while(stack.length && cur >= stack[stack.length - 1][0]){
            stack.pop()
        }
        res[i] = stack.length ? stack[stack.length - 1][1] - i : 0
        stack.push([cur, i])
    }
    return res   
}

const operatorMap = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 2,
    "%": 2
}
function convert(arr = []) {
    if (arr.length === 0) return []
    let ops = []
    let outputs = []
    let n = arr.length
    for (let i = 0; i < n; i++) {
        let cur = arr[i]
        if (/\d/.test(cur)) { // 数字合并
            outputs.push(cur)
            while (i + 1 < arr.length && /\d/.test(arr[i + 1])) {
                outputs[outputs.length - 1] += arr[i + 1]
                i++
            }
        } else if (cur === '(' || cur === '[' || cur === '{') { // 左边括号
            ops.push('(')
            if (arr[i + 1] === '-' || arr[i + 1] === '+') { // 左括号后面有+-运算符
                outputs.push('0')
            }
        } else if (cur === ')' || cur === ']' || cur === '}') {
            while (ops.length) {
                let op = ops.pop()
                if (op === '(') break;
                console.log(op)
                outputs.push(op)
            }
        } else {
            while (ops.length >= 0) {
                let topOp = ops[ops.length - 1]
                console.log(topOp, cur, ops, outputs)
                if (ops.length === 0 || topOp === '(' || operatorMap[cur] > operatorMap[topOp]) {
                    ops.push(cur)
                    break;
                } else {
                    outputs.push(ops.pop())
                }
            }
        }
    }
    while (ops.length) {
        outputs.push(ops.pop())
    }
    return outputs
}

function compute(left, right, op){
    switch(op){
        case "+":
            return left + right;
         case "-":
             return left-right;
        case '*':
            return left * right;
        case "/":
            return left / right;
        case '^':
            return left ** right;
        default: 
            throw Error('bad operator')                    
    }
}
function calc(strArr){
    let tmpArr = []
    strArr.forEach(key => {
        if(/\d/.test(key)){
            tmpArr.push(key)
        }else{
            let right = ~~tmpArr.pop()
            let left = ~~tmpArr.pop()
            if(isNaN(left) || isNaN(right)){

            }
            tmpArr.push(compute(left, right, key))
        }
    })
    return ~~tmpArr[0]
}
str = '3+2*{1+2*[-4/(8-6)+7]}'
const strArr = convert(str.split(''))
console.log(strArr)
console.log(calc(strArr))

// 其它进制转换成10进制
function ParseInt(s) {
    if (typeof s === 'number') s = s.toString()
    if (typeof s !== 'string') return NaN
    s = s.trim() // 移除两边的空格
    let radix
    if ((s.indexOf('0x') === 0 || s.indexOf('0X') === 0) && arguments.length < 2) {
        radix = 16
        s = s.slice(2)
    }
    if (!radix) {
        radix = arguments.length < 2 ? 10 : (Number(arguments[1]) || 10)
    }
    if (radix < 2 || radix > 36) return NaN
    let strToNumber = {}
    // 大于10进制
    for (let i = 65; i < 91; i++) {
        let k = String.fromCharCode(i);
        strToNumber[k] = (i - 55)
        strToNumber[k.toLocaleLowerCase()] = (i - 55)
        strToNumber[k.toLocaleUpperCase()] = (i - 55)
    }
    let ss = ''
    for (let i = 0, len = s.length; i < len; i++) {
        let _ = strToNumber[s[i]] || s[i]
        if (!isNaN(_) && _ < radix) {
            ss += s[i]
        } else {
            break // 跳出循环
        }
    }
    if (ss === '') return NaN
    let res = 0, len = ss.length - 1;
    for (let i = len; i >= 0; i--) {
        res += (strToNumber[ss[i]] || ss[i]) * Math.pow(radix, len - i)
    }
    return res
}

console.log(parseInt('c123ab', 12))
console.log(ParseInt('c123ab', 12))
console.log(ParseInt("F", '16'))
console.log(ParseInt("17", 8))
console.log(ParseInt("15", 10))
console.log(ParseInt(15.99, 10))
console.log(ParseInt("FXX123", 16))
console.log(ParseInt("1111", 2))
console.log(ParseInt("15*3", 10))
console.log(ParseInt("12", 13))


// 10进制数转换成其它进制
function toString(num, radix = 10){
    if(radix < 2 || radix > 36){
        throw new RangeError('toString() radix argument must be between 2 and 36')
    }
    let numToString = {}
    // 大于10进制
    for (let i = 65; i < 91; i++) {
        let k = String.fromCharCode(i);
        numToString[i-55] = k
        numToString[i-55] = k.toLocaleUpperCase()
        numToString[i-55] = k.toLocaleLowerCase()
    } 
    let res = ''
    while(num/radix >= 1){
        let mod = num % radix;
        res = (numToString[mod] || mod) + res;
        num = (num - mod)/radix;
    } 
    return num >= 1 ? (numToString[num] || num) + res : res
}
console.log((12389).toString(19))
console.log(toString(100, 7))

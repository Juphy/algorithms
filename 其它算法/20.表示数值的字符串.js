function isNumber(s){
    let i, len = s.length
    let numFlag = false, dotFlag = false, eFlag = false
    s = s.trim()
    for(i = 0; i < len; i++){
        if(s[i] >= '0' && s[i] <= '9'){
            numFlag = true            
        }else if(s[i] === '.' && !dotFlag && !eFlag){ // 如果是小数点，则不应该有小数点和e
            dotFlag = true
        } else if((s[i] === 'e' || s[i] === 'E') && !eFlag && numFlag){ // 如果是不应该有e，前面是数字，重置numFlag
            eFlag = true
            numFlag = false
        } else if((s[i] === '+' || s[i] === '-') && (i === 0 || (s[i-1] === 'e' || s[i+1] === 'E'))){

        } else{
            return false
        }
    }
    return numFlag
}
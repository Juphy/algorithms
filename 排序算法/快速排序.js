function quickSort(arr){
    let len = arr.length
    if(len < 2) return arr
    let midInex = Math.floor((len - 1) / 2)
    let midValue = arr[midInex]
    let left = [], right = []
    for(let i = 0; i < len; i++){
        if(i !== midInex){
            let value = arr[i]
            if(value > midValue){
                right.push(value)
            }else{
                left.push(value)
            }
        }
    }
    return quickSort(left).concat(arr[midInex], quickSort(right))
}
let nums = []
for(let i = 100000; i >= 0; i--){
    nums.push(i)
}
console.time('start')
console.log(quickSort(nums))
console.timeEnd('start')
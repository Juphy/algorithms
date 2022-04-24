let nums = [8, 7, 6, 2, 1, 5, 4, 10, 9, 3]
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

console.log(quickSort(nums))
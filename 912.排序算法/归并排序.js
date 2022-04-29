let mergeSort= function(arr){
    let len = arr.length
    if(len < 2) return arr
    let mid = Math.floor(len / 2)
    let left = arr.slice(0, mid), right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
    let i = 0, j = 0, m = left.length, n = right.length
    let res = []
    while(i < m && j < n){
        if(left[i] < right[j]){
            res.push(left[i++])
        }else{
            res.push(right[j++])
        }
    }
    while(i < m) res.push(left[i++])
    while(j < n) res.push(right[j++])
    return res
}
let nums = []
for(let i = 100000; i >= 0; i--){
    nums.push(i)
}
console.time('start')
console.log(mergeSort(nums))
console.timeEnd('start')
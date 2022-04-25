function bubbleSort(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
let nums = []
for (let i = 100000; i >= 0; i--) {
    nums.push(i)
}
console.time("start")
console.log(bubbleSort(nums))
console.timeEnd("start")

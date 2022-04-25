function heapSort(array) {
    // 建堆
    let heapSize = array.length
	for(var i = Math.floor(heapSize/2); i >= 0; i--){
		heapify(array, i, heapSize)
	}

	// 堆排序
	for(let i = heapSize - 1; i >= 0; i--){
		[array[0], array[i]] = [array[i], array[0]]
		heapify(array, 0, --heapSize)
	}
	return array
}

function heapify(arr, i, len){
	let l = 2*i + 1, r = 2*i + 2, max = i
	if(l < len&&arr[l] > arr[max]){
		max = l
	}
	if(r < len&&arr[r] > arr[max]){
		max = r
	}
	if(max !== i){
		[arr[max], arr[i]] = [arr[i], arr[max]]
		heapify(arr, max, len)
	}
}
let nums = []
for(let i = 100000; i >= 0; i--){
    nums.push(i)
}
console.time('start')
console.log(heapSort(nums))
console.timeEnd('start')
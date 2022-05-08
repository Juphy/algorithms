function minArray(numbers){
    let len = numbers.length
    let i = 0
    while(i < len - 1){
        if(numbers[i] > numbers[i+1]){
            return numbers[i]
        }
        i++
    }
}

function findMin(nums){
    let l = 0, r = nums.length - 1
    while(left < right){
        let center = Math.floor((left + right)/2)
        if(nums[center] < nums[r]){
            r = center
        }else if(nums[center] > nums[r]){
            l = center + 1
        }else{
            r--
        }
    }
    return nums[l]
}
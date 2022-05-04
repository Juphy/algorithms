function majorityElement(nums){
    let res = nums[0], count = 1, len = nums.length
    for(let i = 1; i < len; i++){
        if(res === nums[i]){
            count++
        }else{
            count--
            if(count===0) res = nums[i+1]
        }
    }
    return res
}
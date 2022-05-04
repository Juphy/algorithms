function subsets(nums){
    let res = []
    function dfs(nums, path, index){
        res.push([...path])
        for(let i = index; i < nums.length; i++){
            path.push(nums[i])
            dfs(nums, path, i+1)
            path.pop()
        }
    }
    dfs(nums, [], 0)
    return res
}
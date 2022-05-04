function permutation(s){
    let res = new Set(), len = s.length, map = {}
    function dfs(str){
        if(str.length === len){
            res.push(str)
            return
        }
        for(let i = 0; i < len; i++){
            let tmp = str
            if(!map[i]){
                map[i] = true
                str += cur
                dfs(str)
                map[i] = false
                str = tmp
            }
        }    
    }
    dfs('')
    return res
}
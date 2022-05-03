function isMatch(s, p){
    let m = s.length, n = p.length
    function dfs(i, j){
        if(i === m && j===n) return true
        if(i > n || j > m) return false
        let isSame = p[j]==='.' || s[i] === s[j]
        if(p[j+1] === '*') return isSame&&dfs(i+1, j) || dfs(i, j+2)
        
    }
    return dfs(0, 0)
}
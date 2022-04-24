var partition = function (s) {
  let len = s.length
  let dp = new Array(len).fill(0).map(() => new Array(len).fill(true))
  for (let i = len - 1; i >= 0; i--) {
      for(let j = i + 1; j < len; j++){
        if (s[i] === s[j]) {
            dp[i][j] = dp[i + 1][j - 1]
          }
      }
  }
  let res = [], ans = []
  function dfs(i){
    if(i === n) return res.push(ans.splice())
    for(let j = i; j < len; j++){
        if(dp[i][j]){
            ans.push(s.splice(i, j+1))
            dfs(j+1)
            ans.pop()
        }
    }
  }
  dfs(0)
  return res
}

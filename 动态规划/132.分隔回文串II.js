let minCut = function (s) {
  let dp = new Array(s.length).fill(s.length - 1)
  dp[0] = 0
  for (let i = 1; i < dp.length; i++) {
    if (isReverse(0, i)) {
      dp[i] = 0
      continue
    }
    for (let j = 0; j < i; j++) {
      if (isReverse(j + 1, i)) {
        dp[i] = Math.min(dp[i], dp[j] + 1)
      }
    }
  }

  function isReverse(left, right) {
    while (left < right) {
      if (s[left++] !== s[right--]) return false
    }
    return true
  }
  return dp[s.length - 1]
}
console.log(minCut("a"))
console.log(minCut("aaaa"))
console.log(minCut("aaaabaaba"))

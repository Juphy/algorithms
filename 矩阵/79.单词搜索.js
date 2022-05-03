// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

//  

// 示例 1：


// 输入：board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED"
// 输出：true
// 示例 2：


// 输入：board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "SEE"
// 输出：true
// 示例 3：


// 输入：board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCB"
// 输出：false


// 提示：

// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board 和 word 仅由大小写英文字母组成
function exist(board, word){
    let m = board.length, n = board[0].length
    let find =  false
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(board[i][j] === word[0]){
                let tmp = board[i][j]
                board[i][j] = ''
                f(i, j, 0)
                board[i][j] = tmp
            }
        }
    }
    function f(i, j, k){
        if(find) return
        let cur = board[i]&&board[i][j]
        if(cur !== word[k]) return
        if(k === word.length - 1){
            find = true
            return
        }
        if(i > 0 && board[i-1][j] === word[k+1]){
            let tmp = board[i-1][j]
            board[i-1][j] = ''
            dfs(i-1, j, k+1)
            board[i-1][j] = tmp
        }
        if (j > 0 && board[i][j-1] === word[k + 1]) {
            let tmp = board[i][j-1]
            board[i][j-1] = ''
            dfs(i, j-1, k + 1)
            board[i][j-1] = tmp
        }
        if (i < (m - 1) && board[i+1][j] === word[k + 1]) {
            let tmp = board[i+1][j]
            board[i+1][j] = ''
            dfs(i+1, j, k + 1)
            board[i+1][j] = tmp
        }
        if (j < (n - 1) && board[i][j+1] === word[k + 1]) {
            let tmp = board[i + 1][j]
            board[i][j+1] = ''
            dfs(i, j+1, k + 1)
            board[i][j+1] = tmp
        }                        
    }
    return find
}
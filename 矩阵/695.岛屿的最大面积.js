// 给你一个大小为 m x n 的二进制矩阵 grid 。

// 岛屿 是由一些相邻的 1(代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在 水平或者竖直的四个方向上 相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。

// 岛屿的面积是岛上值为 1 的单元格的数目。

// 计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

//  

// 示例 1：


// 输入：grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
// 输出：6
// 解释：答案不应该是 11 ，因为岛屿只能包含水平或垂直这四个方向上的 1 。
// 示例 2：

// 输入：grid = [[0, 0, 0, 0, 0, 0, 0, 0]]
// 输出：0


// 提示：

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] 为 0 或 1

var maxAreaOfIsland = function (grid) {
    let max = 0, count = 0;
    let m = grid.length, n = grid[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                count = 0;
                dfs(i, j)
            }
        }
    }
    function dfs(x, y) {
        let cur = grid[x] && grid[x][y]
        if (cur === undefined || cur === 0) return;
        grid[x][y] = 0;
        count++;
        max = Math.max(max, count);
        dfs(x + 1, y)
        dfs(x - 1, y)
        dfs(x, y + 1)
        dfs(x, y - 1)
    }

    return max
}


var maxAreaOfIsland = function (grid) {
    let max = 0,
        m = grid.length, n = grid[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                let queue = [[i, j]], count = 0
                while (queue.length > 0) {
                    let [x, y] = queue.shift()
                    let cur = grid[x] && grid[x][y]
                    if (cur === undefined || cur === 0) continue
                    count++
                    grid[x][y] = 0
                    queue.push([x + 1, y])
                    queue.push([x - 1, y])
                    queue.push([x, y + 1])
                    queue.push([x, y - 1])
                }
                max = Math.max(max, count)
            }
        }
    }
    return max
}
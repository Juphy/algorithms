// 在给定的二维二进制数组 A 中，存在两座岛。（岛是由四面相连的 1 形成的一个最大组。）

// 现在，我们可以将 0 变为 1，以使两座岛连接起来，变成一座岛。

// 返回必须翻转的 0 的最小数目。（可以保证答案至少是 1 。）

//  

// 示例 1：

// 输入：A = [[0, 1], [1, 0]]
// 输出：1
// 示例 2：

// 输入：A = [[0, 1, 0], [0, 0, 0], [0, 0, 1]]
// 输出：2
// 示例 3：

// 输入：A = [[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]]
// 输出：1


// 提示：

// 2 <= A.length == A[0].length <= 100
// A[i][j] == 0 或 A[i][j] == 1
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
    let m = grid.length, n = grid[0].length;
    let queue = [];
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                dfs(i, j);
                return bfs();
            }
        }
    }

    function dfs(x, y) {
        let cur = grid[x] && grid[x][y];
        if (cur === 1) {
            grid[x][y] = 2;
            queue.push([x, y]);
            dfs(x + 1, y);
            dfs(x - 1, y);
            dfs(x, y + 1);
            dfs(x, y - 1);
        }
    }

    function bfs() {
        let step = 0;
        while (queue.length) {
            let len = queue.length;
            step++;
            while (len--) {
                let [x, y] = queue.shift();
                for (let [_x, _y] of directions) {
                    let newx = x + _x, newy = y + _y;
                    let cur = grid[newx] && grid[newx][newy];
                    if (cur === 1) {
                        return step - 1
                    } else if (cur === 0) {
                        grid[newx][newy] = 2;
                        queue.push([newx, newy]);
                    }
                }

            }
        }
    }
    return 1
}
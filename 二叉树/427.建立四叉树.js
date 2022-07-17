// 给你一个 n * n 矩阵 grid ，矩阵由若干 0 和 1 组成。请你用四叉树表示该矩阵 grid 。

// 你需要返回能表示矩阵的 四叉树 的根结点。

// 注意，当 isLeaf 为 False 时，你可以把 True 或者 False 赋值给节点，两种值都会被判题机制 接受 。

// 四叉树数据结构中，每个内部节点只有四个子节点。此外，每个节点都有两个属性：

// val：储存叶子结点所代表的区域的值。1 对应 True，0 对应 False；
// isLeaf: 当这个节点是一个叶子结点时为 True，如果它有 4 个子节点则为 False 。
// class Node {
//     public boolean val;
//     public boolean isLeaf;
//     public Node topLeft;
//     public Node topRight;
//     public Node bottomLeft;
//     public Node bottomRight;
// }
// 我们可以按以下步骤为二维区域构建四叉树：

// 如果当前网格的值相同（即，全为 0 或者全为 1），将 isLeaf 设为 True ，将 val 设为网格相应的值，并将四个子节点都设为 Null 然后停止。
// 如果当前网格的值不同，将 isLeaf 设为 False， 将 val 设为任意值，然后如下图所示，将当前网格划分为四个子网格。
// 使用适当的子网格递归每个子节点。

// Definition for a QuadTree node.
function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
};


var construct = function (grid) {
    function dfs(a, b, c, d) {
        // a, b 索引
        // c, d 长度
        let flag = true;
        let cur = grid[a][b]
        for (let i = a; i <= c && flag; i++) {
            for (let j = b; j <= d && flag; j++) {
                if (grid[i][j] !== cur) flag = false;
            }
        }
        if (flag) return new Node(cur === 1, true)
        let root = new Node(cur === 1, false);
        let x = c - a + 1, y = d - b + 1
        root.topLeft = dfs(a, b, a + x / 2 - 1, b + y / 2 - 1)
        root.topRight = dfs(a, b + y / 2, a + x / 2 - 1, d)
        root.bottomLeft = dfs(a + x / 2, b, c, b + y / 2 - 1)
        root.bottomRight = dfs(a + x / 2, b + y / 2, c, d)
        return root
    }
    return dfs(0, 0, grid[0].length - 1, grid[0].length - 1)
};
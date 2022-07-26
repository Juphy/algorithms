// 完全二叉树 是每一层（除最后一层外）都是完全填充（即，节点数达到最大）的，并且所有的节点都尽可能地集中在左侧。

// 设计一种算法，将一个新节点插入到一个完整的二叉树中，并在插入后保持其完整。

// 实现 CBTInserter 类:

// CBTInserter(TreeNode root) 使用头节点为 root 的给定树初始化该数据结构；
// CBTInserter.insert(int v)  向树中插入一个值为 Node.val == val的新节点 TreeNode。使树保持完全二叉树的状态，并返回插入节点 TreeNode 的父节点的值；
// CBTInserter.get_root() 将返回树的头节点。
//  

// 示例 1：



// 输入
// ["CBTInserter", "insert", "insert", "get_root"]
// [[[1, 2]], [3], [4], []]
// 输出
// [null, 1, 2, [1, 2, 3, 4]]

// 解释
// CBTInserter cBTInserter = new CBTInserter([1, 2]);
// cBTInserter.insert(3);  // 返回 1
// cBTInserter.insert(4);  // 返回 2
// cBTInserter.get_root(); // 返回 [1, 2, 3, 4]


// 提示：

// 树中节点数量范围为[1, 1000]
// 0 <= Node.val <= 5000
// root 是完全二叉树
// 0 <= val <= 5000 
// 每个测试用例最多调用 insert 和 get_root 操作 104 次


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 */
var CBTInserter = function (root) {
    this.root = root;
    this.arr = [root];
    let queue = [root];
    while (queue.length) {
        let first = queue.shift();
        if (first.left) {
            this.arr.push(first.left);
            queue.push(first.left);
        }
        if (first.right) {
            this.arr.push(first.right);
            queue.push(first.right);
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
    let node = new TreeNode(val);
    this.arr.push(node);
    let len = this.arr.length;
    if (len % 2 === 0) {
        this.arr[len / 2 - 1].left = node
    } else {
        this.arr[Math.floor(len / 2) - 1].right = node
    }
    return this.arr[Math.floor(len / 2) - 1].val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
    return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
var levelOrderBottom = function (root) {
    if (root == null) return []
    let queue = [root], res = [];
    while (queue.length) {
        let size = queue.length, arr = []
        while (size--) {
            let cur = queue.shift();
            arr.push(cur.val);
            if (cur.left !== null) queue.push(cur.left);
            if (cur.right !== null) queue.push(cur.right);
        }
        res.unshift(arr);
    }
    return res
};
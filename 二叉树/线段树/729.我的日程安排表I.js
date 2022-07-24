// 实现一个 MyCalendar 类来存放你的日程安排。如果要添加的日程安排不会造成 重复预订 ，则可以存储这个新的日程安排。

// 当两个日程安排有一些时间上的交叉时（例如两个日程安排都在同一时间内），就会产生 重复预订 。

// 日程可以用一对整数 start 和 end 表示，这里的时间是半开区间，即[start, end), 实数 x 的范围为，  start <= x < end 。

// 实现 MyCalendar 类：

// MyCalendar() 初始化日历对象。
// boolean book(int start, int end) 如果可以将日程安排成功添加到日历中而不会导致重复预订，返回 true 。否则，返回 false 并且不要将该日程安排添加到日历中。


// 示例：

// 输入：
// ["MyCalendar", "book", "book", "book"]
// [[], [10, 20], [15, 25], [20, 30]]
// 输出：
// [null, true, false, true]

// 解释：
// MyCalendar myCalendar = new MyCalendar();
// myCalendar.book(10, 20); // return True
// myCalendar.book(15, 25); // return False ，这个日程安排不能添加到日历中，因为时间 15 已经被另一个日程安排预订了。
// myCalendar.book(20, 30); // return True ，这个日程安排可以添加到日历中，因为第一个日程安排预订的每个时间都小于 20 ，且不包含时间 20 。


// 提示：

// 0 <= start < end <= 109
// 每个测试用例，调用 book 方法的次数最多不超过 1000 次。

// 直接遍历比较
var MyCalendar = function () {
    this.calendars = [];
}
MyCalendar.prototype.book = function (start, end) {
    for (let calendar of this.calendars) {
        let l = calendar[0], r = calendar[1];
        if (start < r && end > l) return false
    }
    this.calendars.push([start, end])
    return true
}

function TreeNode(left, right) {
    this.left = left;
    this.right = right;
    this.lChild = null;
    this.rChild = null;
}

var MyCalendar = function () {
    this.root = null;
}

MyCalendar.prototype.book = function (start, end) {
    if (!this.root) {
        this.root = new TreeNode(start, end);
        return true;
    }
    let cur = this.root;
    while (true) {
        if (start >= cur.right) {
            if (!cur.rChild) {
                cur.rChild = new TreeNode(start, end);
                return true
            }
            cur = cur.rChild;
        } else if (end <= cur.left) {
            if (!cur.lChild) {
                cur.lChild = new TreeNode(start, end);
                return true
            }
            cur = cur.lChild
        } else {
            return false
        }
    }
}

var MyCalendar = function () {
    this.root = []
}

MyCalendar.prototype.findInsertIndex = function (start) {
    var left = 0;
    var right = this.root.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (this.root[mid][0] === start) {
            return mid
        } else if (this.root[mid][0] < start) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
}

MyCalendar.prototype.book = function (start, end) {
    let index = this.findInsertIndex(start);
    if (
        (this.root[index - 1] && start < this.root[index - 1][1]) ||
        (this.root[index] && end > this.root[index][0])
    ) {
        return false
    }
    this.root.splice(index, 0, [start, end]);
    return true
}

var MyCalendar = function () {
    this.tree = new Set();
    this.lazy = new Set();
}

MyCalendar.prototype.query = function (start, end, l, r, idx) {
    if (start > r || end < l) {
        return false
    }
    if (this.lazy.has(idx)) {
        return true
    }
    if (start <= l && r <= end) {
        return this.tree.has(idx)
    } else {
        let mid = (l + r) >> 1;
        if (end <= mid) {
            return this.query(start, end, l, mid, 2 * idx)
        } else if (start > mid) {
            return this.query(start, end, mid + 1, r, 2 * idx + 1)
        } else {
            return this.query(start, end, l, mid, 2 * idx) | this.query(start, end, mid + 1, r, 2 * idx + 1)
        }
    }
}

MyCalendar.prototype.update = function (start, end, l, r, idx) {
    if (r < start || l > end) {
        return
    }
    if (start <= l && end >= r) {
        this.tree.add(idx);
        this.lazy.add(idx);
    } else {
        let mid = (l + r) >> 1;
        this.update(start, end, l, mid, 2 * idx);
        this.update(start, end, mid + 1, r, 2 * idx + 1);
        this.tree.add(idx);
    }
}

MyCalendar.prototype.book = function (start, end) {
    if (thia.query(start, end - 1, 0, Math.pow(10, 9), 1)) {
        return false
    }
    this.update(start, end - 1, 0, Math.pow(10, 9), 1);
    return true
}


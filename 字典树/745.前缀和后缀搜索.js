// 设计一个包含一些单词的特殊词典，并能够通过前缀和后缀来检索单词。

// 实现 WordFilter 类：

// WordFilter(string[] words) 使用词典中的单词 words 初始化对象。
// f(string pref, string suff) 返回词典中具有前缀 prefix 和后缀 suff 的单词的下标。如果存在不止一个满足要求的下标，返回其中 最大的下标 。如果不存在这样的单词，返回 -1 。
//

// 示例：

// 输入
// ["WordFilter", "f"]
// [[["apple"]], ["a", "e"]]
// 输出
// [null, 0]
// 解释
// WordFilter wordFilter = new WordFilter(["apple"]);
// wordFilter.f("a", "e"); // 返回 0 ，因为下标为 0 的单词：前缀 prefix = "a" 且 后缀 suff = "e" 。
//
// 提示：

// 1 <= words.length <= 104
// 1 <= words[i].length <= 7
// 1 <= pref.length, suff.length <= 7
// words[i]、pref 和 suff 仅由小写英文字母组成
// 最多对函数 f 执行 104 次调用

// 利用JS的api
/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
    this.words = words;
};

/**
 * @param {string} pref
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function (pref, suff) {
    for (let i = this.words.length - 1; i >= 0; i--) {
        let word = this.words[i];
        if (word.startsWith(pref) && word.endsWith(suff)) {
            return i;
        }
    }
    return -1;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */

var WordFilter = function (words) {
    this.words = words;
};

WordFilter.prototype.f = function (prefix, suff) {
    let m = prefix.length,
        n = suff.length;
    for (let i = this.words.length - 1; i >= 0; i--) {
        let word = this.words[i];
        let len = word.length;
        if (len < m || len < n) continue;
        let flag = true;
        for (let i = 0; i < m && flag; i++) {
            if (word[i] !== prefix[i]) flag = false;
        }
        for (let i = n; i >= 0 && flag; i--) {
            if (word[len - 1 - i] !== suff[n - 1 - i]) flag = false;
        }
        if (flag) return i;
    }
    return -1;
};

var WordFilter = function (words) {
    let obj = {};
    this.arr = [];
    for (let k = 0; k < words.length; k++) {
        let word = words[k],
            len = word.length;
        if (obj[word]) {
            this.arr[k] = this.arr[obj[word]];
            this.arr[obj[word]] = null;
            continue;
        } else {
            obj[word] = k.toString();
            this.arr[k] = {};
        }
        for (let i = 0; i < len; i++) {
            let node = this.arr[k];
            for (let j = i; j < len; j++) {
                let w = word[j];
                if (!node[w]) {
                    node[w] = {};
                }
                node = node[w];
            }
            node.isEnd = true;
        }
    }
};

WordFilter.prototype.searchPrefix = function (node, pref) {
    for (let w of pref) {
        if (!node[w]) return false;
        node = node[w];
    }
    return true;
};

WordFilter.prototype.searchSuff = function (node, suff) {
    for (let w of suff) {
        if (!node[w]) return false;
        node = node[w];
    }
    return !!node.isEnd;
};

WordFilter.prototype.f = function (pref, suff) {
    let arr = this.arr;
    for (let i = arr.length; i >= 0; i--) {
        let node = arr[i];
        if (node) {
            if (this.searchPrefix(node, pref) && this.searchSuff(node, suff)) {
                return i;
            }
        }
    }
    return -1;
};

var wordFilter = new WordFilter(["apple"]);
console.log(wordFilter.f("a", "e"));

var WordFilter = function (words) {
    this.root1 = { idx: [] };
    this.root2 = { idx: [] };
    let obj = {};
    for (let i = words.length - 1; i >= 0; i--) {
        let word = words[i];
        if (obj[word]) continue;
        obj[word] = true;
        this.insert(word, i, true);
        this.insert(word, i, false);
    }
};

WordFilter.prototype.insert = function (word, index, isTurn) {
    let len = word.length,
        node = isTurn ? this.root1 : this.root2;
    node.idx.push(index);
    for (
        let i = isTurn ? 0 : len - 1;
        i >= 0 && i < len;
        i += isTurn ? 1 : -1
    ) {
        let w = word[i];
        if (!node[w]) {
            node[w] = {
                idx: [],
            };
        }
        node = node[w];
        node.idx.push(index);
    }
};

WordFilter.prototype.search = function (pre, suff) {
    let node1 = this.root1,
        node2 = this.root2;
    let m = pre.length,
        n = suff.length;
    for (let i = 0; i < m; i++) {
        let w = pre[i];
        if (!node1[w]) return -1;
        node1 = node1[w];
    }

    for (let i = n - 1; i >= 0; i--) {
        let w = suff[i];
        if (!node2[w]) return -1;
        node2 = node2[w];
    }

    let idx1 = node1.idx,
        idx2 = node2.idx;
    for (let i = 0, j = 0; i < idx1.length && j < idx2.length; ) {
        if (idx2[j] > idx1[i]) j++;
        if (idx2[j] < idx1[i]) i++;
        if (idx1[i] === idx2[j]) return idx1[i];
    }
    return -1;
};

WordFilter.prototype.f = function (pre, suff) {
    return this.search(pre, suff);
};

var wordFilter = new WordFilter(["apple"]);
console.log(wordFilter.f("a", "e"));

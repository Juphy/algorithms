// Trie（发音类似 "try"）或者说 前缀树 是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。这一数据结构有相当多的应用情景，例如自动补完和拼写检查。

// 请你实现 Trie 类：

// Trie() 初始化前缀树对象。
// void insert(String word) 向前缀树中插入字符串 word 。
// boolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回 false 。
// boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true ；否则，返回 false 。
//  

// 示例：

// 输入
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// 输出
// [null, null, true, false, true, null, true]

// 解释
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // 返回 True
// trie.search("app");     // 返回 False
// trie.startsWith("app"); // 返回 True
// trie.insert("app");
// trie.search("app");     // 返回 True
//  

// 提示：

// 1 <= word.length, prefix.length <= 2000
// word 和 prefix 仅由小写英文字母组成
// insert、search 和 startsWith 调用次数 总计 不超过 3 * 104 次

var Trie = function() {
    this.words = []
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    this.words.push(word)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    for(let _word of this.words){
        if(word === _word) return true
    }
    return false
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    for(let word of this.words){
        if(word.startsWith(prefix)) return true
    }
    return false
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// 字典树
var Trie = function(){
    this.children = {}
}

Trie.prototype.insert = function(word){
    let node = this.children;
    for(let w of word){
        if(!node[w]){
            node[w] = {}
        }
        node = node[w]
    }
    node.isEnd = true
}

Trie.prototype.searchPrefix = function(prefix){
    let node = this.children;
    for(let w of prefix){
        if(!node[w]) return false;
        node = node[w]
    }
    return node
}

Trie.prototype.search = function(word){
    const node = this.searchPrefix(word)
    return node!==undefined&&node.isEnd == true
}

Trie.prototype.startsWith = function(prefix){
    return !!this.searchPrefix(prefix)
}

// trie = {
//     children: {
//         a: {
//             p: {
//                 p: {
//                     l: {
//                         e:{
//                             isEnd: true
//                         }
//                     },
//                     isEnd: true
//                 }
//             }
//         },
//         f: {
//             o: {
//                 o: {
//                     d: {
//                         isEnd: true
//                     }
//                 }
//             }
//         }
//     }
// }

var trie = new Trie()
trie.insert('apple')
console.log(trie.children)
trie.insert('app')
console.log(trie.children)
trie.insert('food')
console.log(trie.children)

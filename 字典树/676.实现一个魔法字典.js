var MagicDictionary = function () {};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
    this.words = dictionary;
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
    for (let word of this.words) {
        if (word.length !== searchWord.length) continue;

        let count = 0;
        for (let i = 0; i < word.length; i++) {
            if (word[i] !== searchWord[i]) {
                count++;
                if (count > 1) break;
            }
        }
        if (count === 1) return true;
    }
    return false;
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
class Trie {
    constructor() {
        this.isFinished = false;
        this.child = {};
    }
}

var MagicDictionary = function () {
    this.root = new Trie();
};

MagicDictionary.prototype.buildDict = function (dictionary) {
    for (let word of dictionary) {
        let node = this.root;
        for (let w of word) {
            if (!node.child[w]) {
                node.child[w] = new Trie();
            }
            node = node.child[w];
        }
        node.isFinished = true;
    }
};

MagicDictionary.prototype.search = function (searchWord) {
    function dfs(node, i, modified) {
        if (i === searchWord.length) {
            return modified && node.isFinished;
        }
        let w = searchWord[i];
        if (node.child[w]) {
            return dfs(node.child[w], i + 1, modified);
        }
        if (!modified) {
            for (let key in node.child) {
                if (key !== w) {
                    return dfs(node.child[key], i + 1, true);
                }
            }
        }
        return false;
    }
    return dfs(this.root, 0, false);
};

var MagicDictionary = function() {
    this.root  = new Trie()
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    for(let word of dictionary){
        let node = this.root;
        for(let w of word){
            if(!node.child[w]){
                node.child[w] = new Trie()
            }
            node = node.child[w]
        }
        node.isFinished = true
    }
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    function dfs(node, i, modified){
        if(i === searchWord.length){
            return modified&&node.isFinished
        }
        let w = searchWord[i]
        if(node.child[w]){
            if(dfs(node.child[w], i+1, modified)) return true
        }
        if(!modified){
            for(let key in node.child){
                if(key !== w){
                    if(dfs(node.child[key], i+1, true)) return true
                }
            }
        }
        return false
    }
    return dfs(this.root, 0, false)
};

var magicDictionary = new MagicDictionary();

magicDictionary.buildDict(["hello","hallo","leetcode"]);
console.log(magicDictionary.search("hello")); // 返回 False
console.log(magicDictionary.search("hhllo")); // 将第二个 'h' 替换为 'e' 可以匹配 "hello" ，所以返回 True
console.log(magicDictionary.search("hell")); // 返回 False
console.log(magicDictionary.search("leetcoded")); // 返回 False

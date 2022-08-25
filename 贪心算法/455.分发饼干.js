var findContentChildren = function (g, s) {
    g.sort((a, b) => b-a);
    s.sort((a, b) => b-a);
    let start = 0, res = 0;
    for(let i = 0; i < g.length; i++){
        if(start < s.length && s[start] >= g[i]){
            start++;
            res++
        }
    }
    return res;
};
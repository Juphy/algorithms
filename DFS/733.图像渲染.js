var floodFill = function (image, sr, sc, newColor) {
    let oldValue = image[sr][sc]
    function dfs(x, y) {
        let cur = image[x] && image[x][y]
        if (cur !== oldValue || cur === newColor) return;
        image[x][y] = newColor
        dfs(x + 1, y);
        dfs(x - 1, y);
        dfs(x, y + 1);
        dfs(x, y - 1);
    }
    dfs(src, sc)
    return image
}

var floodFill = function (image, sr, sc, newColor) {
    let queue = [[sr, sc]], oldValue = image[sr][sc];
    while(queue.length){
        let [x, y] = queue.shift();
        let cur = image[x]&&image[x][y];
        if (cur !== oldValue || cur === newColor) continue;
        image[x][y] = newColor;
        queue.push([x+1, y]);
        queue.push([x-1, y]);
        queue.push([x, y+1]);
        queue.push([x, y-1]);
    }
    return image
}
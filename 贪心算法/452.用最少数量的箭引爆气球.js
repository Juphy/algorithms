var findMinArrowShots = function (points) {
    points.sort((a, b) => a[1] - b[1])
    let sum = 1, right = points[0][1], len = points.length;
    for(let i = 1; i < len; i++){
        if(points[i][0] > right){
            sum++;
            right = points[i][1]
        }
    }
    return sum
};
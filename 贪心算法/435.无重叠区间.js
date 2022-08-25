var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1]-b[1]);
    let res = 1, right = intervals[0][1], len = intervals.length;
    for(let i = 1; i < len; i++){
        if(right <= intervals[i][0]){
            res++;
            right = intervals[i][1]
        }
    }
    return len - res;
}
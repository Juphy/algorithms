var numRescueBoats = function (people, limit) {
    people.sort((a, b) => b - a);
    let len = people.length, sum = 0;
    let l = 0, r = len - 1;
    while(l <= r){
        if(people[l++] + people[r] <= limit){
            r--
        }
        sum++;
    }
    return sum
};
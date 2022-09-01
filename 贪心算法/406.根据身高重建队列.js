var reconstructQueue = function (people) {
    people.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]
        } else {
            return b[0] - a[0]
        }
    })
    let arr = []
    for (let i = 0; i < people.length; i++) {
        arr.splice(people[i][1], 0, people[i])
    }
    return arr    
};
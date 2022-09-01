var lemonadeChange = function (bills) {
    let len = bills.length, five = 0, ten = 0;
    for (let i = 0; i < len; i++) {
        let cur = bills[i];
        if (cur === 5) {
            five++
        }
        if (cur === 10) {
            if (five === 0) return false
            five--;
            ten++;
        }
        if (cur === 20) {
            if (five >= 1 && ten >= 1) {
                five--;
                ten--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};
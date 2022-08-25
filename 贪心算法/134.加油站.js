var canCompleteCircuit = function (gas, cost) {
    let sumGas = 0, sumCost = 0, len = gas.length;
    for (let i = 0; i < len; i++) {
        sumGas += gas[i];
        sumCost += cost[i];
    }
    if (sumCost > sumGas) return -1;
    let cur = 0, start = 0;
    for (let i = 0; i < len; i++) {
        cur += (gas[i] - cost[i]);
        if (cur < 0) {
            cur = 0;
            start = i + 1;
        }
    }
    return start
};
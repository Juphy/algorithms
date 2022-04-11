function fib1(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    return fib1(n - 1) + fib(n - 2)
}

let fib2 = (function () {
    let map = {}
    return function (n) {
        if (map[n]) return map[n]
        if (n === 0) return map[0] = 0
        if (n === 1) return map[1] = 1
        return map[n] = fib2(n - 1) + fib2(n - 2)
    }
})()

console.log(Date.now())
console.log(fib2(500))
console.log(Date.now())

function fib3(n) {
    let prev = 1n, prePrev = 0n
    for (let i = 2; i <= n; i++) {
        let current = prev + prePrev
        prePrev = prev
        prev = current
    }
    return prev
}
console.log(Date.now())
console.log(fib3(500))
console.log(Date.now())
let arr = [
    { pid: 0, id: 1, name: "1" },
    { pid: 1, id: 2, name: "2" },
    { pid: 2, id: 3, name: "3" },
    { pid: 2, id: 4, name: "4" },
    { pid: 3, id: 5, name: "5" },
    { pid: 4, id: 6, name: "6" },
    { pid: 5, id: 7, name: "7" },
    { pid: 5, id: 8, name: "8" },
    { pid: 6, id: 9, name: "9" }
]

function arrToTree(arr) {
    let result = [],
        map = {}
    for (let item of arr) {
        let pid = item.pid,
            id = item.id
        if (!map[id]) {
            map[id] = {
                children: []
            }
        }
        map[id] = {
            ...item,
            children: map[id].children
        }
        let mapItem = map[id]
        if (pid === 0) {
            result.push(mapItem)
        } else {
            if (!map[pid]) {
                map[pid] = {
                    children: []
                }
            }
            map[pid].children.push(mapItem)
        }
    }
    return result
}

console.log(arrToTree(arr))

let tree = arrToTree(arr)

function treeToArr1(tree){
    let res = [], arr = tree
    while(arr.length > 0){
        let last = arr.pop()
        res.push({ pid: last.pid, id: last.id, name: last.name })
        let children = last.children
        if(children&&children.length){
            for(let i = children.length - 1; i >= 0; i--){
                arr.push(children[i])
            }
        }
    }
    return res
}
console.log(treeToArr1(tree))

function treeToArr2(tree){
    let res = [], arr = tree
    while(arr.length > 0){
        let first = arr.shift()
        res.push({ pid: first.pid, id: first.id, name: first.name })
        let children = first.children
        if(children&&children.length){
            for(let i = 0; i < children.length; i++){
                arr.push(children[i])
            }
        }
    }
    return res
}

tree = arrToTree(arr)
console.log(treeToArr2(tree))


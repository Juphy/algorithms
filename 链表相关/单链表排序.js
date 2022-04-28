import ListNode from '../utils/ListNode'
function sortInList(head) {
    let arr = [], cur = head
    while(cur){
        arr.push(cur.val)
        cur = cur.next
    }
    arr.sort((a, b) => a-b)
    cur = head
    let len = arr.length
    for(let i = 0; i < len; i++){
        cur.val = arr[i]
        cur = cur.next
    }
    return head
}
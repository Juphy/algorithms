function reverseList(head){
    if(head == null || head.next == null){
        return head
    }
    let newHead = reverseList(head.next)
    head.next.next = head
    head.next = null
    return newHead
}

function reverseList(head){
    let cur = head, prev = null
    while(cur){
        let tmp = cur.next
        cur.next = prev
        prev = cur
        cur = tmp
    }
    return prev
}
// 1 -> 2 -> 3
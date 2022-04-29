import ListNode from "../utils/ListNode"
function sortInList(head) {
    let arr = [],
        cur = head
    while (cur) {
        arr.push(cur.val)
        cur = cur.next
    }
    arr.sort((a, b) => a - b)
    cur = head
    let len = arr.length
    for (let i = 0; i < len; i++) {
        cur.val = arr[i]
        cur = cur.next
    }
    return head
}

function sortList(head) {
    if (head == null || head.next == null) return head
    let fast = head,
        slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    let right = slow.next
    slow.next = null
    let left = head

    let dummy = new ListNode(-1)
    let cur = dummy
    while (left && right) {
        if (left.val < right.val) {
            cur.next = left
            left = left.next
        } else {
            cur.next = right
            right = right.next
        }
        cur = cur.next
    }
    cur.next = left == null ? right : left
    return dummy.next
}

function sortList(head){
    if(head == null || head.next == null) return head
    let [left, right] = splitList(head)
    return mergeList(sortList(left), sortList(right))
}

function mergeList(left, right){
    let dummy = new ListNode(-1)
    let cur = dummy
    while(left&&right){
        if(left.val < right.val){
            cur.next = left
            left = left.next
        }else{
            cur.next = right
            right = right.next
        }
        cur = cur.next
    }
    cur.next = left==null?right: left
    return dummy.next
}

function splitList(head){
    let fast = head.next, slow = head
    while(fast&&fast.next){
        fast = fast.next.next
        slow = slow.next
    }
    let right = slow.next
    slow.next = null
    return [head, right]
}
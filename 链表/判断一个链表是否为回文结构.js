import ListNode from "../utils/ListNode";
function isPail( head ) {
    if(head == null) return false
    if(head.next == null) return true
    let arr = []
    while(head){
        arr.push(head.val)
        head = head.next
    }
    let left = 0, right = arr.length - 1
    while(left < right){
        if(arr[left] !== arr[right]){
            return false
        }
        left++
        right--
    }
    return true
}

function reverseList(head){
    if(head == null) return false
    if(head.next == null) return true
    let fast = head, slow = head, pre = null
    while(fast&&fast.next){
        fast = fast.next.next
        let tmp = slow.next
        slow.next = pre
        pre = slow
        slow = tmp
    }
    if(fast) slow = slow.next
    while(pre&&slow){
        if(pre.val !== slow.val){
            return false
        }
        pre = pre.next
        slow = slow.next
    }
    return true
}
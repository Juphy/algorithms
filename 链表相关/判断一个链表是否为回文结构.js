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
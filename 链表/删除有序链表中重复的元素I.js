import ListNode from "../utils/ListNode";
function deleteDuplicates(head) {
    let cur = head
    while (cur) {
        if (cur.next && cur.val == cur.next.val) {
            cur.next  = cur.next.next
        }else{
            cur = cur.next
        }
    }
    return head
}
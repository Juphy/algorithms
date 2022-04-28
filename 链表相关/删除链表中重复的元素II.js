import ListNode from "../utils/ListNode";
function deleteDuplicates(head) {
    let dummy = new ListNode(-1)
    dummy.next = head
    let cur = head, p = dummy
    while(cur && cur.next){
        if(cur.val === cur.next.val){
            while(cur.val === cur.next.val){
                cur.next = cur.next.val
                if(!cur.next){
                    break
                }
            }
            p.next = cur.next
            cur = p.next
        }else{
            p = cur
            cur = cur.next
        }
    }
    return dummy.next
}
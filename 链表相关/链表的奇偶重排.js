import ListNode from "../utils/ListNode"
function oddEvenList(head) {
    let odd = new ListNode(0), even = new ListNode(0)
    let p1 = odd, p2 = even
    let i = 1, cur = head
    while(cur){
        if(i%2==0){
            p2.next = cur
            p2 = p2.next
        }else{
            p1.next = cur
            p1 = p1.next
        }
        i++
        cur = cur.next 
    }
    p2.next = null
    p1.next = even.next
    return odd.next
}
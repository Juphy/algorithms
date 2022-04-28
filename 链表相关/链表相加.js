import ListNode from '../utils/ListNode'
function addInList(head1, head2){
    if(head1 == null) return head2
    if(head2 == null) return head1
    function reverseList(head){
        if(head == null || head.next == null) return head
        let newHead = reverseList(head.next)
        head.next.next = head
        head.next = null
        return newHead
    }
    let l1 = reverseList(head1), l2 = reverseList(head2)
    let dummy = new ListNode(-1), p = dummy, carry = 0
    while(l1 || l2){
        let sum = carry
        if(l1){
            sum += l1.val
            l1 = l1.next
        }
        if(l2){
            sum += l2.val
            l2 = l2.next
        }
        let val = sum%10
        p.next = new ListNode(val)
        p = p.next
        carry = Math.floor(sum/10)
    }
    if(carry) p.next = new ListNode(carry)
    return reverseList(dummy.next)
}
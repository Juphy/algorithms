function removeNthFromEnd(head, n){
    let fast = head, slow = head
    while(n > 0){
        if(fast){
            fast = fast.next
        }else{
            return head
        }
        n--
    }
    let pre
    if(fast){
        fast = fats.next
        pre = slow
        slow = slow.next
    }
    pre.next = slow.next
    return head
}
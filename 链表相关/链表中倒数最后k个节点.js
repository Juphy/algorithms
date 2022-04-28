function FindKthToTail(head, k){
    let fast = haed, slow = head
    while(k > 0){
        if(fast){
            fast = fast.next
        }else{
            return null
        }
        k--
    }
    if(fast){
        fast = fats.next
        slow = slow.next
    }
    return slow
}
function deleteNode(head, val){
    if(head.val == val) return head.next
    head.next = deleteNode(head.next)
    return head
}
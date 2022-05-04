// 给你一个链表的头节点 head ，判断链表中是否有环。
function hasCycle(head){
    while(head){
        if(head.tag) return true
        head.tag = true
        head = head.next
    }
    return false
}
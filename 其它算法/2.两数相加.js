import ListNode from '../utils/ListNode'
function sumListNode(l1, l2){
    let dummy = new ListNode(0)
    let cur = dummy, step = 0
    while(l1 || l2 || step){
        if(l1){
            step += l1.val
            l1 = l1.next
        }
        if(l2){
            step += l2.val
            l2 = l2.next
        }
        cur.next = new ListNode(step % 10)
        step = step > 9? 1 : 0
        cur = cur.next
    }
}
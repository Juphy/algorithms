function FindFirstCommonNode(pHead1, pHead2){
    let l1 = pHead1, l2 = pHead2
    while(l1!==l2){
        l1 = l1!==null?l1.next: pHead1
        l2 = l2!==null?l2.next: pHead2
    }
    return l1
}
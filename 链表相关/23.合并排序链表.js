import ListNode from '../utils/ListNode'
function mergeKLists(lists){
    if(!lists.length) return null
    let cur = lists[0]
    for(let i = 1; i < lists.length; i ++){
        cur = mergeList(cur, lists[i])
    }

    function mergeList(list1, list2){
        let dummy = new ListNode(-1)
        let cur = dummy
        while(list1&&list2){
            if(list1.val < list2.val){
                cur.next = list1
                list1 = list1.next
            }else{
                cur.next = list2
                list2 = list2.next
            }
            cur = cur.next
        }
        cur.next  = list1 == null ? list1 : list2
        return dummy.next
    }
    return cur
}

function mergeKLists(lists){
    if(!lists.length) return null
    let dummy = new ListNode(-1)
    while(lists.length > 1){
        let i = 0, j = lists.length - 1
        while(i < j){
            let l1 = lists[i], l2 = lists[j], cur = dummy
            while(l1 && l2){
                if(l1.val < l2.val){
                    cur.next = l1
                    l1 = l1.next
                }else{
                    cur.next = l2
                    l2 = l2.next
                }
                cur = cur.next
            }
            cur.next = l1 == null ? l2 : l1
            list[i] = dummy.next
            lists.pop()
            i++
            j--
        }        
    }
    return lists[0]
}
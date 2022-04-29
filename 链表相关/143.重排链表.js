import ListNode from "../utils/ListNode"

// 先切割 再反转 在合并
var reorderList = function(head) {
    if(head == null || head.next == null) return head
    let fast = head, slow = head
    while(fast&&fast.next){
        fast = fast.next.next
        slow = slow.next
    }
    let right = slow.next
    slow.next = null
    let left = head

    let cur = right, pre = null
    while(cur){
        let tmp = cur.next
        cur.next = pre
        pre = cur
        cur = tmp
    }
    right = pre
    let dummy = new ListNode(-1)
    let cure = dummy
    while(left&&right){
        cure.next = left
        left = left.next
        cure = cure.next
        cure.next = right
        right = right.next
        cure = cure.next
    }
    cure.next = left == null ? right: left
    return dummy.next
}

// 遍历放入数组，双指针修改当前arr[i]的next(arr[len-1-i]),以及next.next的指向arr[i+1]
function reorderList(head){
    let arr = []
    while(head){
        let tmp = head.next
        head.next = null
        arr.push(head)
        head = tmp
    }
    let i = 0, j = arr.length-1
    while(i < j){
        arr[i].next = arr[j]
        if(j !== i+1){
            arr[j].next = arr[i+1]
        }
        i++
        j--
    }
    return arr[0]
}

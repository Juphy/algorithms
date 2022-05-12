// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

//  

// 示例 1：


// 输入：head = [1, 2, 3, 4, 5], n = 2
// 输出：[1, 2, 3, 5]
// 示例 2：

// 输入：head = [1], n = 1
// 输出：[]
// 示例 3：

// 输入：head = [1, 2], n = 1
// 输出：[1]


// 提示：

// 链表中结点的数目为 sz
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

import ListNode from '../utils/ListNode'

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

function removeNthFromEnd(head, n){
    let dummy = new ListNode(-1)
    let fast = dummy, slow = dummy
    while(fast.next){
        fast = fast.next
        n--
        if(n < 0){
            slow = slow.next
        }
    }
    slow.next = slow.next.next
    return dummy.next
}
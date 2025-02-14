/*
 * @lc app=leetcode.cn id=92 lang=javascript
 * @lcpr version=30005
 *
 * [92] 反转链表 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {

  // const reverseN = function (head, n) {
  //   if (head == null || head.next == null) {
  //     return head;
  //   }
  //   let pre, cur, nxt;
  //   pre = null; cur = head; nxt = head.next;
  //   while (n > 0) {
  //     cur.next = pre;
  //     pre = cur;
  //     cur = nxt;
  //     if (nxt != null) {
  //       nxt = nxt.next;
  //     }
  //     n--;
  //   }
  //   // 此时的 cur 是第 n + 1 个节点，head 是反转后的尾结点
  //   head.next = cur;

  //   // 此时的 pre 是反转后的头结点
  //   return pre;
  // }
  // if (left === 1) {
  //   return reverseN(head, right)
  // }
  // const n = right - left + 1
  // let cur = head
  // for (let i = 1; i < left - 1; i++) {
  //   cur = cur.next
  // }
  // cur.next = reverseN(cur.next, n)
  // return head
  let successor = null
  const reverseN = (head, n) => {
    if (n === 1) {
      successor = head.next
      return head
    }
    let last = reverseN(head.next, n - 1)
    head.next.next = head
    head.next = successor
    return last
  }

  if (left === 1) {
    return reverseN(head, right)
  }
  head.next = reverseBetween(head.next, left - 1, right - 1)
  return head
};
// @lc code=end



/*  
// @lcpr case=start
// [1,2,3,4,5]\n2\n4\n
// @lcpr case=end

// @lcpr case=start
// [5]\n1\n1\n
// @lcpr case=end

 */


/*
 * @lc app=leetcode.cn id=142 lang=javascript
 * @lcpr version=30005
 *
 * [142] 环形链表 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head, fast = head
    while(fast && fast.next){
      slow = slow.next
      fast = fast.next.next
      if(slow === fast){
        break
      }
    }
    if(fast === null || fast.next === null){
      return null
    }
    slow = head
    while(slow !== fast){
      slow = slow.next
      fast = fast.next
    }
    return slow
};
// @lc code=end



/*
// @lcpr case=start
// [3,2,0,-4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n0\n
// @lcpr case=end

// @lcpr case=start
// [1]\n-1\n
// @lcpr case=end

 */


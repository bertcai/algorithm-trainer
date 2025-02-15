/*
 * @lc app=leetcode.cn id=83 lang=javascript
 * @lcpr version=30005
 *
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if(!head){
    return head
  }
    const dummy = new ListNode(null, head)
    let slow = head, fast = head, p = head
    while(p.next){
      fast = fast.next
      if(slow.val !== fast.val){
        slow.next = fast
        slow = slow.next
      }
      p = p.next
    }
    slow.next = null
    return dummy.next
};
// @lc code=end



/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2,3,3]\n
// @lcpr case=end

 */


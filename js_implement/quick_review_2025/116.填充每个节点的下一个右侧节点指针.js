/*
 * @lc app=leetcode.cn id=116 lang=javascript
 * @lcpr version=30005
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  const traverse = (node1, node2) => {
    if (!node1 || !node2) {
      return
    }
    node1.next = node2
    traverse(node1.left, node1.right)
    traverse(node2.left, node2.right)

    traverse(node1.right, node2.left)
  }
  if (!root) return root
  root.next = null
  traverse(root.left, root.right)
  return root
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5,6,7]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */


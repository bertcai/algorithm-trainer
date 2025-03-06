/*
 * @lc app=leetcode.cn id=222 lang=javascript
 * @lcpr version=30005
 *
 * [222] 完全二叉树的节点个数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  let l = root, r = root
  let hl = 0, hr = 0
  while (l !== null) {
    l = l.left
    hl++
  }
  while (r !== null) {
    r = r.right
    hr++
  }
  if (hl === hr) {
    return Math.pow(2, hl) - 1
  }
  return 1 + countNodes(root.left) + countNodes(root.right)
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5,6]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */


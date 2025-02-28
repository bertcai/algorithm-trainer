/*
 * @lc app=leetcode.cn id=543 lang=javascript
 * @lcpr version=30005
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0
  const maxDepth = (node) => {
    if (node === null) return 0
    const left = maxDepth(node.left)
    const right = maxDepth(node.right)
    maxDiameter = Math.max(maxDiameter, left + right)
    return Math.max(left, right) + 1
  }
  maxDepth(root)
  return maxDiameter
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */


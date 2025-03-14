/*
 * @lc app=leetcode.cn id=257 lang=javascript
 * @lcpr version=30005
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = []
  const traverse = (node, now) => {
    if (!node) {
      return
    }
    let temp = now ? now + '->' + node.val : node.val + ''
    if (!node.left && !node.right) {
      res.push(temp)
      return
    }
    traverse(node.left, temp)
    traverse(node.right, temp)
  }
  traverse(root, '')
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,null,5]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */


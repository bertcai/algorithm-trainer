/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 * @lcpr version=30005
 *
 * [1022] 从根到叶的二进制数之和
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
var sumRootToLeaf = function (root) {
  const res = []
  const path = []
  const traverse = (root) => {
    if (!root) return
    if (!root.left && !root.right) {
      path.push(root.val)
      res.push(parseInt(path.join(''), 2))
      path.pop()
      return
    }
    path.push(root.val)
    traverse(root.left)
    traverse(root.right)
    path.pop()
  }
  traverse(root)
  return res.reduce((sum, cur) => sum += cur, 0)
};
// @lc code=end



/*
// @lcpr case=start
// [1,0,1,0,1,0,1]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */


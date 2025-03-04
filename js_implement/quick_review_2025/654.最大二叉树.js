/*
 * @lc app=leetcode.cn id=654 lang=javascript
 * @lcpr version=30005
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) return null
  if (nums.length === 1) return new TreeNode(nums[0])
  const max = Math.max(...nums)
  const index = nums.findIndex(v => v === max)
  const node = new TreeNode(max)
  // console.log(nums.slice(0, index), nums.slice(index + 1))
  node.left = constructMaximumBinaryTree(nums.slice(0, index))
  node.right = constructMaximumBinaryTree(nums.slice(index + 1))
  return node
};
// @lc code=end



/*
// @lcpr case=start
// [3,2,1,6,0,5]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,1]\n
// @lcpr case=end

 */


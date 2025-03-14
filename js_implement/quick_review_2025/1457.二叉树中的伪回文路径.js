/*
 * @lc app=leetcode.cn id=1457 lang=javascript
 * @lcpr version=30005
 *
 * [1457] 二叉树中的伪回文路径
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
var pseudoPalindromicPaths = function (root) {
  let res = 0
  const path = []
  const isPalindromic = (arr) => {
    let count = Array(10).fill(0)
    for (let a of arr) {
      count[a]++
    }
    if (count.filter(a => a % 2 === 1).length > 1) {
      return false
    } else {
      return true
    }
  }
  const traverse = (root) => {
    if (!root) return
    if (!root.left && !root.right) {
      path.push(root.val)
      if (isPalindromic(path)) {
        res++
      }
      path.pop()
      return
    }
    path.push(root.val)
    traverse(root.left)
    traverse(root.right)
    path.pop()
  }
  traverse(root)
  return res
};
// @lc code=end



/*
// @lcpr case=start
// [2,3,1,3,1,null,1]\n
// @lcpr case=end

// @lcpr case=start
// [8,6,9,null,null,null,4,4,1,5,4,null,null,null,null,8]\n
// @lcpr case=end

// @lcpr case=start
// [9]\n
// @lcpr case=end

 */


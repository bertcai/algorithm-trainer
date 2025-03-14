/*
 * @lc app=leetcode.cn id=988 lang=javascript
 * @lcpr version=30005
 *
 * [988] 从叶结点开始的最小字符串
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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  const path = []
  let res = null
  const traverse = (root) => {
    if (!root) return
    if (!root.left && !root.right) {
      path.push(String.fromCharCode('a'.charCodeAt(0) + root.val))
      path.reverse()
      const temp = path.join('')
      if (res === null || res.localeCompare(temp) > 0) {
        res = temp
      }
      path.reverse()
      path.pop()
      return
    }
    path.push(String.fromCharCode('a'.charCodeAt(0) + root.val))
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
// [0,1,2,3,4,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [25,1,3,1,3,0,2]\n
// @lcpr case=end

// @lcpr case=start
// [2,2,1,null,1,0,null,0]\n
// @lcpr case=end

 */


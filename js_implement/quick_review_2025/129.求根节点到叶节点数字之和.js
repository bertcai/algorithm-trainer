/*
 * @lc app=leetcode.cn id=129 lang=javascript
 * @lcpr version=30005
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function (root) {
  const numArr = []
  const traverse = (node, path) => {
    if (!node) {
      return
    }
    if (!node.left && !node.right) {
      path.push(node.val)
      numArr.push(Number(path.join('')))
      path.pop()
      return
    }
    path.push(node.val)
    traverse(node.left, path)
    traverse(node.right, path)
    path.pop()
  }
  traverse(root, [])
  // console.log(numArr)
  return numArr.reduce((sum, cur) => sum += cur, 0)
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [4,9,0,5,1]\n
// @lcpr case=end

 */


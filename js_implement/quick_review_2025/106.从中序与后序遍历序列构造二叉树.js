/*
 * @lc app=leetcode.cn id=106 lang=javascript
 * @lcpr version=30005
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const v2index = new Map()
  for (let i = 0; i < inorder.length; i++) {
    v2index.set(inorder[i], i)
  }
  const build = (postorder, postS, postE, inorder, inS, inE) => {
    if (postS > postE) return null
    const rootVal = postorder[postE]
    const index = v2index.get(rootVal)
    const root = new TreeNode(rootVal)
    root.left = build(postorder, postS, postS + index - inS - 1, inorder, inS, index - 1)
    root.right = build(postorder, postS + index - inS, postE - 1, inorder, index + 1, inE)
    return root
  }
  return build(postorder, 0, postorder.length - 1, inorder, 0, inorder.length - 1)
};
// @lc code=end



/*
// @lcpr case=start
// [9,3,15,20,7]\n[9,15,7,20,3]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */


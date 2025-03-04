/*
 * @lc app=leetcode.cn id=889 lang=javascript
 * @lcpr version=30005
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  const v2index = new Map()
  for (let i = 0; i < postorder.length; i++) {
    v2index.set(postorder[i], i)
  }
  const build = (preorder, preS, preE, postorder, postS, postE) => {
    if (preS > preE) return null
    if (preS === preE) return new TreeNode(preorder[preE])
    const rootVal = preorder[preS]
    const root = new TreeNode(rootVal)
    const leftRootVal = preorder[preS + 1]
    const index = v2index.get(leftRootVal)
    root.left = build(preorder, preS + 1, preS + index - postS + 1, postorder, postS, index)
    root.right = build(preorder, preS + index - postS + 2, preE, postorder, index + 1, postE - 1)
    return root
  }
  return build(preorder, 0, preorder.length - 1, postorder, 0, postorder.length - 1)
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,4,5,3,6,7]\n[4,5,2,6,7,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n[1]\n
// @lcpr case=end

 */


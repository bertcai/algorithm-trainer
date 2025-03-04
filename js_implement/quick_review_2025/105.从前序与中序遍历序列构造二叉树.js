/*
 * @lc app=leetcode.cn id=105 lang=javascript
 * @lcpr version=30005
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const v2index = new Map()
  for (let i = 0; i < inorder.length; i++) {
    v2index.set(inorder[i], i)
  }
  const build = (preorder, preS, preE, inorder, inS, inE) => {
    if (preS > preE) return null
    const rootVal = preorder[preS]
    const index = v2index.get(rootVal)
    const root = new TreeNode(rootVal)
    root.left = build(preorder, preS + 1, preS + index - inS, inorder, inS, index - 1)
    root.right = build(preorder, preS + index - inS + 1, preE, inorder, index + 1, inE)
    return root
  }
  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
};
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,15,7]\n[9,3,15,20,7]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */


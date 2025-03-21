/*
 * @lc app=leetcode.cn id=236 lang=javascript
 * @lcpr version=30005
 *
 * [236] 二叉树的最近公共祖先
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const find = (root, p, q) => {
    if (!root) return null
    if (root.val === p.val || root.val === q.val) {
      return root
    }
    const left = find(root.left, p, q)
    const right = find(root.right, p, q)
    if (left !== null && right !== null) {
      return root
    }
    return left !== null ? left : right
  }
  return find(root, p, q)
};
// @lc code=end



/*
// @lcpr case=start
// [3,5,1,6,2,0,8,null,null,7,4]\n5\n1\n
// @lcpr case=end

// @lcpr case=start
// [3,5,1,6,2,0,8,null,null,7,4]\n5\n4\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n2\n
// @lcpr case=end

 */


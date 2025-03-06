/*
 * @lc app=leetcode.cn id=235 lang=javascript
 * @lcpr version=30005
 *
 * [235] 二叉搜索树的最近公共祖先
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
  const min = Math.min(p.val, q.val)
  const max = Math.max(p.val, q.val)
  const find = (root, min, max) => {
    if (!root) return null
    if (root.val < min) {
      return find(root.right, min, max)
    }
    if (root.val > max) {
      return find(root.left, min, max)
    }
    return root
  }
  return find(root, min, max)
};
// @lc code=end



/*
// @lcpr case=start
// [6,2,8,0,4,7,9,null,null,3,5]\n2\n8\n
// @lcpr case=end

// @lcpr case=start
// [6,2,8,0,4,7,9,null,null,3,5]\n2\n4\n
// @lcpr case=end

 */


/*
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
    function dfs(root, minVal, maxVal) {
        if (!root) return true
        if (root.val <= minVal || root.val >= maxVal) return false
        return dfs(root.left, minVal, root.val) && dfs(root.right, root.val, maxVal)
    }
    return dfs(root, -Infinity, Infinity)
};
// @lc code=end


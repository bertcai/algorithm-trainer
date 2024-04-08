/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0
    const maxDepth = (root) => {
        if (!root) return 0
        const left = maxDepth(root.left)
        const right = maxDepth(root.right)
        diameter = Math.max(left + right, diameter)
        return Math.max(left, right) + 1
    }
    maxDepth(root)
    return diameter
};
// @lc code=end


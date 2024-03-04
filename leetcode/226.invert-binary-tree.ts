/*
 * @lc app=leetcode id=226 lang=typescript
 *
 * [226] Invert Binary Tree
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

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return null
    }
    const invert = (node) => {
        if (!node) return
        const left = node?.left || null
        const right = node?.right || null
        node.right = left
        invert(node.right)
        node.left = right
        invert(node.left)
    }
    invert(root)
    return root
};
// @lc code=end


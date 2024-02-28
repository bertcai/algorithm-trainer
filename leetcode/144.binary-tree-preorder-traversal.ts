/*
 * @lc app=leetcode id=144 lang=typescript
 *
 * [144] Binary Tree Preorder Traversal
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

function preorderTraversal(root: TreeNode | null): number[] {
    const res = []
    if (!root) {
        return res
    }

    const stack = []
    stack.push(root)
    while (stack.length) {
        const cur = stack.pop()
        res.push(cur.val)
        if (cur?.right) {
            stack.push(cur.right)
        }
        if (cur?.left) {
            stack.push(cur.left)
        }
    }
    return res
};
// @lc code=end


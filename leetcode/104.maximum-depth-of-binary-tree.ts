/*
 * @lc app=leetcode id=104 lang=typescript
 *
 * [104] Maximum Depth of Binary Tree
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

// function maxDepth(root: TreeNode | null): number {
//     let res = 0
//     let depth = 0
//     const traverse = (root) => {
//         if (!root) return
//         depth++
//         if (root.left === null && root.right === null) {
//             res = Math.max(res, depth)
//         }
//         traverse(root.left)
//         traverse(root.right)
//         depth--
//     }
//     traverse(root)
//     return res
// };

function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0
    const left = maxDepth(root.left)
    const right = maxDepth(root.right)
    return Math.max(left, right) + 1
};
// @lc code=end


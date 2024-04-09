/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
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

function minDepth(root: TreeNode | null): number {
    if (!root) return 0
    let q = [root]
    let depth = 1
    while (q.length > 0) {
        let size = q.length
        for (let i = 0; i < size; i++) {
            let cur = q.shift()
            if (cur.left === null && cur.right === null) {
                return depth
            }
            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)
        }
        depth++
    }
    return depth
};
// @lc code=end


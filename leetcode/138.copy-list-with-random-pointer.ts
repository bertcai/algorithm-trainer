/*
 * @lc app=leetcode id=138 lang=typescript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
    if (!head) return null
    let copyHead = new Node()
    let copyNode = copyHead

    const map = new Map()

    let curr = head
    while (curr) {
        copyNode.val = curr.val
        copyNode.next = curr.next ? new Node() : null
        map.set(curr, copyNode)
        curr = curr.next
        copyNode = copyNode.next
    }

    curr = head
    copyNode = copyHead
    while (curr) {
        copyNode.random = curr.random ? map.get(curr.random) : null
        copyNode = copyNode.next
        curr = curr.next
    }
    return copyHead
};
// @lc code=end


/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
 */

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) {
        return null
    }
    let dummy = new ListNode()
    let p = dummy
    let pq = new PQ()
    for (let i = 0; i < lists.length; i++) {
        lists[i] ? pq.add(lists[i]) : ''
    }
    while (!pq.isEmpty()) {
        let node = pq.shift()
        p.next = node
        if (node?.next) {
            pq.add(node.next)
        }
        p = p.next
    }
    return dummy.next
};

class PQ {
    queue: ListNode[]
    size
    constructor() {
        this.queue = [new ListNode()]
        this.size = 0
    }

    add(item) {
        this.queue.push(item)
        this.size++
        this.swim(this.size)
    }

    shift() {
        let min = this.queue[1]
        this.swap(1, this.size)
        this.queue.pop()
        this.size--
        this.sink(1)
        return min
    }

    swim(x) {
        while (x > 1 && this.large(this.parent(x), x)) {
            this.swap(this.parent(x), x)
            x = this.parent(x)
        }
    }

    sink(x) {
        while (this.left(x) <= this.size) {
            let min = this.left(x)
            if (this.right(x) <= this.size && this.large(min, this.right(x))) {
                min = this.right(x)
            }
            if (this.large(min, x)) {
                break
            }
            this.swap(x, min)
            x = min
        }
    }

    swap(i, j) {
        [this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]]
    }

    parent(x) {
        return Math.floor(x / 2)
    }

    left(x) {
        return 2 * x
    }

    right(x) {
        return 2 * x + 1
    }

    large(x, y) {
        return this.queue[x].val > this.queue[y].val
    }
    isEmpty() {
        return this.size === 0
    }
}
// @lc code=end


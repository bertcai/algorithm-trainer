/*
 * @lc app=leetcode id=373 lang=typescript
 *
 * [373] Find K Pairs with Smallest Sums
 */

// @lc code=start
function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    const pq = new PQ()
    const res: number[][] = []
    nums1.forEach((item, index) => {
        pq.add([nums1[index], nums2[0], index, 0])
    })

    while (k > 0) {
        const cur = pq.shift() as number[]
        const i = cur[2], j = cur[3]
        res.push([cur[0], cur[1]])
        k--
        if (i < nums1.length && j + 1 < nums2.length) {
            pq.add([nums1[i], nums2[j + 1], i, j + 1])
        }
        // console.log(k, pq)
    }
    return res
};

class PQ {
    queue: number[][]
    size: number
    constructor() {
        this.queue = [[0, 0, 0, 0]]
        this.size = 0
    }

    parent(x: number) {
        return Math.floor(x / 2)
    }
    left(x: number) {
        return 2 * x
    }
    right(x: number) {
        return 2 * x + 1
    }

    less(x: number, y: number) {
        return this.queue[x][0] + this.queue[x][1] < this.queue[y][0] + this.queue[y][1]
    }

    swap(x: number, y: number) {
        [this.queue[x], this.queue[y]] = [this.queue[y], this.queue[x]]
    }

    isEmpty() {
        return this.size === 0
    }

    swim(x: number) {
        while (x > 1 && this.less(x, this.parent(x))) {
            this.swap(x, this.parent(x))
            x = this.parent(x)
        }
    }

    sink(x: number) {
        while (this.left(x) <= this.size) {
            let min = this.left(x)
            if (this.right(x) <= this.size && this.less(this.right(x), min)) {
                min = this.right(x)
            }
            if (this.less(x, min)) {
                break
            }
            this.swap(min, x)
            x = min
        }
    }

    add(item: number[]) {
        this.size++
        this.queue[this.size] = item
        this.swim(this.size)
    }

    shift() {
        if (this.isEmpty()) {
            return null
        }
        const res = this.queue[1]
        this.swap(1, this.size)
        this.size--
        this.sink(1)
        return res
    }
}
// kSmallestPairs([1, 7, 11], [2, 4, 6], 3)
// @lc code=end


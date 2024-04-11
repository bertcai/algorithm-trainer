/*
 * @lc app=leetcode id=378 lang=typescript
 *
 * [378] Kth Smallest Element in a Sorted Matrix
 */

// @lc code=start
function kthSmallest(matrix: number[][], k: number): number {
    let rowLength = matrix.length
    let colLength = matrix[0].length
    let pq = new PQ()
    let res = matrix[0][0]
    for (let i = 0; i < rowLength; i++) {
        pq.add([matrix[i][0], i, 0])
    }
    while (k > 0 && !pq.isEmpty()) {
        const cur = pq.shift() as number[]
        const i = cur[1], j = cur[2]
        res = cur[0]
        k--
        if (j + 1 < colLength) {
            pq.add([matrix[i][j + 1], i, j + 1])
        }
    }
    return res
};

class PQ {
    queue: number[][]
    size: number
    constructor() {
        this.queue = [[0, 0, 0]]
        this.size = 0
    }
    parent(x: number) {
        return Math.floor(x / 2);
    }
    left(x: number) {
        return x * 2
    }
    right(x: number) {
        return x * 2 + 1
    }

    swap(x: number, y: number) {
        [this.queue[x], this.queue[y]] = [this.queue[y], this.queue[x]]
    }

    less(x: number, y: number) {
        return this.queue[x][0] < this.queue[y][0]
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
            this.swap(x, min)
            x = min
        }
    }

    add(x: number[]) {
        this.size++
        this.queue[this.size] = x
        this.swim(this.size)
    }

    shift() {
        if (this.isEmpty()) {
            return null;
        }
        const res = this.queue[1]
        this.swap(1, this.size)
        this.size--
        // console.log('before sink', this.queue)
        this.sink(1)
        // console.log('after sink', this.queue)
        return res
    }

    isEmpty() {
        return this.size === 0;
    }
}
// @lc code=end


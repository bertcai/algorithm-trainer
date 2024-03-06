/*
 * @lc app=leetcode id=215 lang=typescript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
    const heap: number[] = []
    let n = 0
    const len = nums.length
    function createHeap() {
        for (let i = 0; i < k; i++) {
            insert(nums[i])
        }
    }

    function updateHeap() {
        for (let i = k; i < len; i++) {
            if (nums[i] > heap[0]) {
                heap[0] = nums[i]
                downHeap(0, k)
            }
        }
    }

    function downHeap(low, high) {
        let i = low, j = 2 * i + 1

        while (j < high) {
            if (j + 1 < high && heap[j + 1] < heap[j]) {
                j = j + 1
            }

            if (heap[i] > heap[j]) {
                const temp = heap[j]
                heap[j] = heap[i]
                heap[i] = temp

                i = j
                j = 2 * i + 1
            } else {
                break
            }
        }
    }

    function upHeap(low, high) {
        let i = high
        let j = Math.floor((i - 1) / 2)

        while (j >= low) {
            if (heap[j] > heap[i]) {
                const temp = heap[j]
                heap[j] = heap[i]
                heap[i] = temp
                i = j
                j = Math.floor((i - 1) / 2)
            } else {
                break
            }
        }
    }

    function insert(x) {
        heap[n] = x
        upHeap(0, n)
        n++
    }

    createHeap()
    updateHeap()
    return heap[0]
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=862 lang=javascript
 * @lcpr version=30005
 *
 * [862] 和至少为 K 的最短子数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  const n = nums.length
  const preSum = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    preSum[i] = preSum[i - 1] + nums[i - 1]
  }
  let left = 0, right = 0
  let window = new MonotonicQueue()
  let res = Infinity
  while (right < n + 1) {
    window.push(preSum[right])
    right++
    while (right < n + 1 && window.size() && preSum[right] - window.min() >= k) {
      res = Math.min(res, right - left)
      window.pop()
      left++
    }
  }
  // console.log(res)
  return res === Infinity ? -1 : res
}

class MonotonicQueue {
  constructor() {
    this.q = []
    this.maxQ = []
    this.minQ = []
  }
  // 标准队列 API，向队尾加入元素
  push(elem) {
    this.q.push(elem)
    while (this.maxQ.length && this.maxQ[this.maxQ.length - 1] < elem) {
      this.maxQ.pop()
    }
    while (this.minQ.length && this.minQ[this.minQ.length - 1] > elem) {
      this.minQ.pop()
    }
    this.maxQ.push(elem)
    this.minQ.push(elem)
  }

  // 标准队列 API，从队头弹出元素，符合先进先出的顺序
  pop() {
    const n = this.q.shift()
    if (n === this.maxQ[0]) {
      this.maxQ.shift()
    }
    if (n === this.minQ[0]) {
      this.minQ.shift()
    }
  }

  // 标准队列 API，返回队列中的元素个数
  size() {
    return this.q.length
  }

  // 单调队列特有 API，O(1) 时间计算队列中元素的最大值
  max() {
    return this.maxQ[0]
  }

  // 单调队列特有 API，O(1) 时间计算队列中元素的最小值
  min() {
    return this.minQ[0]
  }
}
// @lc code=end



/*
// @lcpr case=start
// [84,-37,32,40,95]\n167\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n4\n
// @lcpr case=end

// @lcpr case=start
// [2,-1,2]\n3\n
// @lcpr case=end

 */


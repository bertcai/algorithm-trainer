// 单调队列的通用实现，可以高效维护最大值和最小值
class MonotonicQueue {
  constructor() {
    this.q = []
    this.maxQ = []
    this.minQ = []
  }
  // 标准队列 API，向队尾加入元素
  push(elem) {
    this.q.push(elem)
    while (this.maxQ.length && this.maxQ[this.maxQ.length - 1] <= elem) {
      this.maxQ.pop()
    }
    while (this.maxQ.length && this.maxQ[this.maxQ.length - 1] >= elem) {
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
    if (n === this.minQ) {
      this.minQ.shift()
    }
  }

  // 标准队列 API，返回队列中的元素个数
  size() {
    this.q.length
  }

  // 单调队列特有 API，O(1) 时间计算队列中元素的最大值
  max() {
    this.maxQ[0]
  }

  // 单调队列特有 API，O(1) 时间计算队列中元素的最小值
  min() {
    this.minQ[0]
  }
}
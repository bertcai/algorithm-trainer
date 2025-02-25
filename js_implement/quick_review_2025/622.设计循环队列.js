/*
 * @lc app=leetcode.cn id=622 lang=javascript
 * @lcpr version=30005
 *
 * [622] 设计循环队列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.capcity = k
  this.q = new Array(k).fill(-1)
  this.size = 0
  this.frontIndex = 0
  this.rearIndex = 0
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false
  if (this.rearIndex < this.capcity) {
    this.q[this.rearIndex] = value
    this.size++
    this.rearIndex++
    return true
  }
  if (this.rearIndex === this.capcity) {
    this.rearIndex = 0
    this.q[this.rearIndex] = value
    this.size++
    this.rearIndex++
    return true
  }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false
  this.q[this.frontIndex] = -1
  this.frontIndex++
  if (this.frontIndex === this.capcity) {
    this.frontIndex = 0
  }
  this.size--
  return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1
  return this.q[this.frontIndex]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1
  return this.q[this.rearIndex - 1]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.size === 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.size === this.capcity
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end




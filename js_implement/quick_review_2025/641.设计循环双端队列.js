/*
 * @lc app=leetcode.cn id=641 lang=javascript
 * @lcpr version=30005
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.q = []
  this.rearIndex = null
  this.frontIndex = null
  this.size = 0
  this.capacity = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false
  if (this.frontIndex === null) {
    this.frontIndex = this.capacity - 1
    this.q[this.frontIndex] = value
    this.size++
    if (this.rearIndex === null) {
      this.rearIndex = this.frontIndex
    }
    return true
  }
  if (this.frontIndex > 0) {
    this.frontIndex--
    this.q[this.frontIndex] = value
    this.size++
    return true
  }
  if (this.frontIndex === 0) {
    this.frontIndex = this.capacity - 1
    this.q[this.frontIndex] = value
    this.size++
    return true
  }
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false
  if (this.rearIndex === null) {
    this.rearIndex = 0
    this.q[this.rearIndex] = value
    this.size++
    if (this.frontIndex === null) {
      this.frontIndex = this.rearIndex
    }
    return true
  }
  if (this.rearIndex < this.capacity - 1) {
    this.rearIndex++
    this.q[this.rearIndex] = value
    this.size++
    return true
  }
  if (this.rearIndex === this.capacity - 1) {
    this.rearIndex = 0
    this.q[this.rearIndex] = value
    this.size++
    return true
  }
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false
  this.q[this.frontIndex] = -1
  this.frontIndex++
  if (this.frontIndex === this.capacity) {
    this.frontIndex = 0
  }
  this.size--
  return true
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false
  this.q[this.rearIndex] = -1
  this.rearIndex--
  if (this.rearIndex < 0) {
    this.rearIndex = this.capacity - 1
  }
  this.size--
  return true
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1
  return this.q[this.frontIndex]
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1
  return this.q[this.rearIndex]
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.size === 0
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.size === this.capacity
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end




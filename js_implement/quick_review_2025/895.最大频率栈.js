/*
 * @lc app=leetcode.cn id=895 lang=javascript
 * @lcpr version=30005
 *
 * [895] 最大频率栈
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

var FreqStack = function () {
  this.maxFreq = 0
  this.freqToVal = new Map()
  this.valToFreq = new Map()
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  let freq = (this.valToFreq.get(val) || 0) + 1;
  this.valToFreq.set(val, freq);
  if (!this.freqToVal.has(freq)) {
    this.freqToVal.set(freq, [])
  }
  this.freqToVal.get(freq).push(val);
  this.maxFreq = Math.max(this.maxFreq, freq)
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const stack = this.freqToVal.get(this.maxFreq)
  const res = stack.pop()
  this.valToFreq.set(res, this.valToFreq.get(res) - 1)
  if (!stack.length) {
    this.maxFreq--
  }
  return res
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
// @lc code=end



/*
// @lcpr case=start
// ["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"],[[],[5],[7],[5],[7],[4],[5],[],[],[],[]]\n
// @lcpr case=end

 */


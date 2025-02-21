/*
 * @lc app=leetcode.cn id=1094 lang=javascript
 * @lcpr version=30005
 *
 * [1094] 拼车
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  const diff = new Array(1001).fill(0)
  trips.forEach(trip => {
    diff[trip[1]] += trip[0]
    diff[trip[2]] -= trip[0]
  })
  const res = []
  res.push(diff[0])
  for (let i = 1; i < 1001; i++) {
    res[i] = res[i - 1] + diff[i]
  }
  // console.log(res)
  return !res.some(cap => cap > capacity)
};
// @lc code=end



/*
// @lcpr case=start
// [[2,1,5],[3,3,7]]\n4\n
// @lcpr case=end

// @lcpr case=start
// [[2,1,5],[3,5,7]]\n3\n
// @lcpr case=end

 */


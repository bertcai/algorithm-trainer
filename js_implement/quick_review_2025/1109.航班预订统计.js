/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 * @lcpr version=30005
 *
 * [1109] 航班预订统计
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  const diff = new Array(n).fill(0)
  bookings.forEach(book => {
    diff[book[0] - 1] += book[2]
    diff[book[1]] -= book[2]
  })
  const result = []
  result.push(diff[0])
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] + diff[i]
  }
  return result
};
// @lc code=end



/*
// @lcpr case=start
// [[1,2,10],[2,3,20],[2,5,25]]\n5\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,10],[2,2,15]]\n2\n
// @lcpr case=end

 */


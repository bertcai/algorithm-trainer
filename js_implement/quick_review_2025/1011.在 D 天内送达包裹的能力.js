/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 * @lcpr version=30005
 *
 * [1011] 在 D 天内送达包裹的能力
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let left = Math.max(...weights)
  let right = weights.reduce((acc, cur) => acc + cur, 0)
  const calcDays = (w) => {
    let p = 0;
    let day = 1;
    let currentWeight = 0;
    while (p < weights.length) {
      if (currentWeight + weights[p] > w) {
        day++;
        currentWeight = 0;
      }
      currentWeight += weights[p];
      p++;
    }
    return day;
  }
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    const time = calcDays(mid)
    if (time === days) {
      right = mid - 1
    } else if (time > days) {
      left = mid + 1
    } else if (time < days) {
      right = mid - 1
    }
  }
  return left
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5,6,7,8,9,10]\n5\n
// @lcpr case=end

// @lcpr case=start
// [3,2,2,4,1,4]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,1,1]\n4\n
// @lcpr case=end

 */


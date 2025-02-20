/*
 * @lc app=leetcode.cn id=410 lang=javascript
 * @lcpr version=30005
 *
 * [410] 分割数组的最大值
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  const calcK = (w) => {
    let p = 0;
    let day = 1;
    let currentWeight = 0;
    while (p < nums.length) {
      if (currentWeight + nums[p] > w) {
        day++;
        currentWeight = 0;
      }
      currentWeight += nums[p];
      p++;
    }
    return day;
  }
  let left = Math.max(...nums), right = nums.reduce((acc, cur) => acc + cur, 0)
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    const tarK = calcK(mid)
    if (tarK === k) {
      right = mid - 1
    } else if (tarK > k) {
      left = mid + 1
    } else if (tarK < k) {
      right = mid - 1
    }
  }
  return left
};
// @lc code=end



/*
// @lcpr case=start
// [7,2,5,10,8]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,4,4]\n3\n
// @lcpr case=end

 */


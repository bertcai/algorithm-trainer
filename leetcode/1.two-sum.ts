/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] | undefined {
  // 两层循环，暴力求解，不推荐
  // for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //         if (nums[i] + nums[j] === target) {
  //             return [i, j];
  //         }
  //     }
  // }
  // hashmap
  const map = new Map();
  for( let i =0; i < nums.length; i++){
    const num = nums[i];
    const diff = target - num;
    if(map.has(diff)){
      return [map.get(diff), i];
    } else {
      map.set(num, i);
    }
  }
};
// @lc code=end


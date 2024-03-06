/*
 * @lc app=leetcode id=322 lang=typescript
 *
 * [322] Coin Change
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
    const f: number[] = []
    f[0] = 0
    for (let i = 1; i <= amount; i++) {
        f[i] = Infinity
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                f[i] = Math.min(f[i - coins[j]] + 1, f[i])
            }
        }
    }
    if (f[amount] === Infinity) return -1
    return f[amount]
};
// @lc code=end


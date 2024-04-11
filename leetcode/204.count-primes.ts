/*
 * @lc app=leetcode id=204 lang=typescript
 *
 * [204] Count Primes
 */

// @lc code=start
function countPrimes(n: number): number {
    if (n < 2) return 0
    const isPrimes = new Array(n).fill(true)
    for (let i = 2; i * i < n; i++) {
        if (isPrimes[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrimes[j] = false
            }
        }
    }

    let count = 0
    for (let i = 2; i < n; i++) {
        if (isPrimes[i]) {
            count++
        }
    }
    return count
};
// @lc code=end


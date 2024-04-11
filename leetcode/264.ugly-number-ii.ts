/*
 * @lc app=leetcode id=264 lang=typescript
 *
 * [264] Ugly Number II
 */

// @lc code=start
function nthUglyNumber(n: number): number {
    let p1 = 1, p2 = 1, p3 = 1;
    let product1 = 1, product2 = 1, product3 = 1
    let ugly = new Array(n + 1)
    let p = 1
    while (p <= n) {
        let min = Math.min(product1, product2, product3)
        ugly[p] = min
        if (min === product1) {
            product1 = ugly[p1] * 2
            p1++
        }
        if (min === product2) {
            product2 = ugly[p2] * 3
            p2++
        }
        if (min === product3) {
            product3 = ugly[p3] * 5
            p3++
        }
        p++
    }
    return ugly[n]
};
// @lc code=end


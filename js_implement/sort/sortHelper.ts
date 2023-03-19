export const SortHelper = () => {
    // 生成有n个元素的随机数组,每个元素的随机范围为[rangeL, rangeR]
    const genRandom = (n, rangeL, rangeR) => {
        console.assert(rangeL < rangeR)
        const arr = new Array(n)
        arr.fill(10)
        const b = arr.map(e => Math.random() * (rangeR - rangeL))
        return b
    }
    // 生成一个近乎有序数组，只交换了n次顺序
    const genNearlyOrdered = (n, swapTimes) => {
        const arr = new Array(n)
        for (let i = 0; i < n; i++) {
            arr[i] = i
        }
        for (let i = 0; i < swapTimes; i++) {
            const posx = Math.floor(Math.random() * n)
            const posy = Math.floor(Math.random() * n)
            const temp = arr[posx]
            arr[posx] = arr[posy]
            arr[posy] = temp
        }
        return arr
    }
    // 判断arr数组是否有序
    const isSorted = (arr, n) => {
        for (let i = 0; i < n - 1; i++) {
            if (arr[i + 1] < arr[i]) {
                return false
            }
        }
        return true
    }
    // 测试sort排序算法排序arr数组所得到结果的正确性和算法运行时间
    const testSort = (sortName, sort, arr, n) => {
        const start = new Date().getTime()
        sort(arr, n)
        const end = new Date().getTime()
        console.assert(isSorted(arr, n))
        console.log(`${sortName}: ${end - start}`)
    }
    return {
        genRandom,
        testSort,
        isSorted,
        genNearlyOrdered
    }
}
export const SortHelper = () => {
    // 生成有n个元素的随机数组,每个元素的随机范围为[rangeL, rangeR]
    const genRandom = (n, rangeL, rangeR) => {
        console.assert(rangeL < rangeR)
        const arr = new Array(n)
        arr.map(() => {
            return Math.random() * (rangeR - rangeL)
        })
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
        isSorted
    }
}
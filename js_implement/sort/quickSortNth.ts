// 在一个数组中快速找到第n大的元素
// 1. 选择一个基准元素
// 2. 将数组分为两部分，左边的元素都比基准元素大，右边的元素都比基准元素小
// 3. 如果基准元素的索引刚好是n，那么基准元素就是第n大的元素

export const quickSortNth = <T>(arr: T[], n: number) => {
    return quickSortNthHelper(arr, 0, arr.length - 1, n)
}

const quickSortNthHelper = <T>(arr: T[], l: number, r: number, n: number) => {
    if (l >= r) return
    let p = partition(arr, l, r)
    if (p === n) return arr[p]
    else if (p > n) quickSortNthHelper(arr, l, p - 1, n)
    else quickSortNthHelper(arr, p + 1, r, n)
}

const partition = <T>(arr: T[], l: number, r: number) => {
    const v = arr[l]
    let j = l
    for (let i = l + 1; i <= r; i++) {
        if (arr[i] > v) {
            [arr[j + 1], arr[i]] = [arr[i], arr[j + 1]]
            j++
        }
    }
    return j
}
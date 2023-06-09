import { insertionSort } from "./insertionSort"

/**
 * 对泛型数组 arr 进行快速排序
 * @param arr 待排序的数组
 * @param n 数组长度
 */
export const quickSort = <T>(arr: T[], n: number) => {
    __quickSort(arr, 0, n - 1)
}

/**
 * 快速排序辅助函数
 * @param arr 待排序的数组
 * @param l 数组左边界
 * @param r 数组右边界
 */
const __quickSort = <T>(arr: T[], l: number, r: number) => {
    if (r - l <= 15) { // 当区间长度小于等于 15 时，使用插入排序
        insertionSort(arr, l, r)
        return
    }
    const p = __partition2(arr, l, r) // 将区间 [l, r] 分为两个部分
    __quickSort(arr, l, p - 1) // 分别对左右两部分进行递归
    __quickSort(arr, p + 1, r)
}

/**
 * 快速排序核心代码：将区间 [l, r] 分为两个部分
 * @param arr 待排序的数组
 * @param l 区间左端点
 * @param r 区间右端点
 * @returns 返回分割后中轴元素的下标
 */
const __partition = <T>(arr: T[], l: number, r: number): number => {
    const randomIndex = Math.floor(Math.random() * (r - l + 1)) + l;
    const v = arr[randomIndex] // 选取区间中的一个元素作为中轴元素
    let j = l; // 初始化 j 指向区间左边界
    for (let i = l + 1; i <= r; i++) { // i 从区间左边界的下一个元素开始扫描
        if (arr[i] < v) { // 如果当前元素小于中轴元素，将其与 j+1 处的元素交换位置
            [arr[j + 1], arr[i]] = [arr[i], arr[j + 1]]
            j++
        }
    }
    [arr[l], arr[j]] = [arr[j], arr[l]] // 将中轴元素与 j 处的元素交换位置 
    return j // 返回中轴元素的下标
}

const __partition2 = <T>(arr: T[], l: number, r: number): number => {
    const randomIndex = Math.floor(Math.random() * (r - l + 1)) + l;
    [arr[l], arr[randomIndex]] = [arr[randomIndex], arr[l]] // 将中轴元素与 l 处的元素交换位置
    const v = arr[l] // 选取区间中的一个元素作为中轴元素
    let i = l + 1, j = r
    while (true) {
        while (i <= r && arr[i] < v) i++
        while (j >= l + 1 && arr[j] > v) j--
        if (i > j) break
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
    }
    [arr[l], arr[j]] = [arr[j], arr[l]] // 将中轴元素与 j 处的元素交换位置
    return j // 返回中轴元素的下标
}

export const quickSort3Ways = <T>(arr: T[], n: number) => {
    __quickSort3Ways(arr, 0, n - 1)
}

const __quickSort3Ways = <T>(arr: T[], l: number, r: number) => {
    if (r - l <= 15) { // 当区间长度小于等于 15 时，使用插入排序
        insertionSort(arr, l, r)
        return
    }
    const [lt, gt] = __partition3(arr, l, r) // 将区间 [l, r] 分为三个部分
    __quickSort3Ways(arr, l, lt - 1) // 分别对左中右三部分进行递归
    __quickSort3Ways(arr, gt, r)
}

const __partition3 = <T>(arr: T[], l: number, r: number): number[] => {
    const randomIndex = Math.floor(Math.random() * (r - l + 1)) + l;
    [arr[l], arr[randomIndex]] = [arr[randomIndex], arr[l]] // 将中轴元素与 l 处的元素交换位置
    const v = arr[l] // 选取区间中的一个元素作为中轴元素
    let lt = l, gt = r + 1, i = l + 1
    while (i < gt) {
        if (arr[i] < v) {
            [arr[i], arr[lt + 1]] = [arr[lt + 1], arr[i]]
            lt++
            i++
        } else if (arr[i] > v) {
            [arr[i], arr[gt - 1]] = [arr[gt - 1], arr[i]]
            gt--
        } else {
            i++
        }
    }
    [arr[l], arr[lt]] = [arr[lt], arr[l]] // 将中轴元素与 lt 处的元素交换位置
    return [lt, gt] // 返回中轴元素的下标
}
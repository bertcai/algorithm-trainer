// 求一组数据中逆序对的个数
// 逆序对：前面的数比后面的数大，就是逆序对
// 例如：[1, 3, 2, 4, 5]，逆序对有(3, 2)和(1, 2)，所以逆序对的个数为2
// 思路：归并排序的思想，将数组分成两部分，分别求出两部分的逆序对个数，然后求出两部分之间的逆序对个数，最后将三个数相加即可

export const inverseCount = <T>(arr: T[], n: number) => {
    return inverseCountHelper(arr, 0, n - 1)
}

const inverseCountHelper = <T>(arr: T[], l: number, r: number) => {
    if (l >= r) return 0
    let mid = Math.floor((l + r) / 2)
    let res = inverseCountHelper(arr, l, mid) + inverseCountHelper(arr, mid + 1, r)
    let aux: T[] = []
    for (let i = l; i <= r; i++) {
        aux[i - l] = arr[i]
    }
    let i = l, j = mid + 1
    for (let k = l; k <= r; k++) {
        if (i > mid) {
            arr[k] = aux[j - l]
            j++
        } else if (j > r) {
            arr[k] = aux[i - l]
            i++
        } else if (aux[i - l] > aux[j - l]) {
            arr[k] = aux[j - l]
            j++
            res += mid - i + 1
        } else {
            arr[k] = aux[i - l]
            i++
        }
    }
    return res
}
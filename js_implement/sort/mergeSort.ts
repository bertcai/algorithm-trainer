import { insertionSort } from "./insertionSort"

export const mergeSort = <T>(arr: T[], n: number) => {
    __mergeSort(arr, 0, n - 1)
}

export const mergeSortBU = <T>(arr: T[], n: number) => {
    for (let size = 1; size <= n; size += size) {
        for (let i = 0; i + size < n; i += size + size) {
            if (size + size <= 15) {
                insertionSort(arr, i, Math.min(i + size + size - 1, n - 1))
            }
            if (arr[i + size - 1] > arr[i + size]) {
                __merge(arr, i, i + size - 1, Math.min(i + size + size - 1, n - 1))
            }
        }
    }
}

const __mergeSort = <T>(arr: T[], l: number, r: number) => {
    if (r - l <= 15) {
        insertionSort(arr, l, r)
        return
    }
    let mid = Math.floor((l + r) / 2)
    __mergeSort(arr, l, mid)
    __mergeSort(arr, mid + 1, r)
    if (arr[mid] > arr[mid + 1]) __merge(arr, l, mid, r)
}

const __merge = <T>(arr: T[], l: number, mid: number, r: number) => {
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
        } else {
            arr[k] = aux[i - l]
            i++
        }
    }
}
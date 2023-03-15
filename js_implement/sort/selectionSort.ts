import {SortHelper} from "./sortHelper";

let temp: any = NaN
const selectionSort = <T>(arr: T[], n: number) => {
    for (let i = 0; i < n; i++) {
        let minIndex = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
}
const helper = SortHelper()
const n = 100000
let arr = helper.genRandom(n, 0, 100000)

selectionSort(arr, n)

helper.testSort('selectionSort', selectionSort, arr, n)
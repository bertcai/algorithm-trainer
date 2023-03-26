import { bubbleSort } from "./bubbleSort"
import { insertionSort } from "./insertionSort"
import { mergeSort, mergeSortBU } from "./mergeSort"
import { quickSort, quickSort3Ways } from "./quickSort"
import { selectionSort } from "./selectionSort"
import { shellSort } from "./shellSort"
import { SortHelper } from "./sortHelper"

const helper = SortHelper()
const n = 1000000
// const arr = helper.genNearlyOrdered(n, 1000)
const arr = helper.genRandom(n, 0, n)
const arr2 = JSON.parse(JSON.stringify(arr))
const arr3 = JSON.parse(JSON.stringify(arr))
const arr4 = JSON.parse(JSON.stringify(arr))
const arr5 = JSON.parse(JSON.stringify(arr))
const arr6 = JSON.parse(JSON.stringify(arr))
const arr7 = JSON.parse(JSON.stringify(arr))
const arr8 = JSON.parse(JSON.stringify(arr))
// helper.testSort('selection sort', selectionSort, arr, n)
// helper.testSort('insertion sort', insertionSort, arr2, n)
// helper.testSort('bubble sort', bubbleSort, arr3, n)
// helper.testSort('shell sort', shellSort, arr4, n)
helper.testSort('merge sort', mergeSort, arr5, n)
helper.testSort('merge sort BU', mergeSortBU, arr6, n)
helper.testSort('quick sort', quickSort, arr7, n)
helper.testSort('quick sort 3 ways', quickSort3Ways, arr8, n)

const nearlyOrderArr = helper.genNearlyOrdered(n, 100)
const nearlyOrderArr2 = JSON.parse(JSON.stringify(nearlyOrderArr))
const nearlyOrderArr3 = JSON.parse(JSON.stringify(nearlyOrderArr))
const nearlyOrderArr4 = JSON.parse(JSON.stringify(nearlyOrderArr))

helper.testSort('nearly order merge sort', mergeSort, nearlyOrderArr, n)
helper.testSort('nearly order merge sort BU', mergeSortBU, nearlyOrderArr2, n)
helper.testSort('nearly order quick sort', quickSort, nearlyOrderArr3, n)
helper.testSort('nearly order quick sort 3 ways', quickSort3Ways, nearlyOrderArr4, n)
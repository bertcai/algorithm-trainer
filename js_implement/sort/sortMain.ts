import { bubbleSort } from "./bubbleSort"
import { insertionSort } from "./insertionSort"
import { selectionSort } from "./selectionSort"
import { shellSort } from "./shellSort"
import { SortHelper } from "./sortHelper"

const helper = SortHelper()
const n = 10000
const arr = helper.genNearlyOrdered(n, 1000)
const arr2 = JSON.parse(JSON.stringify(arr))
const arr3 = JSON.parse(JSON.stringify(arr))
const arr4 = JSON.parse(JSON.stringify(arr))
helper.testSort('selection sort', selectionSort, arr, n)
helper.testSort('insertion sort', insertionSort, arr2, n)
helper.testSort('bubble sort', bubbleSort, arr3, n)
helper.testSort('shell sort', shellSort, arr4, n)
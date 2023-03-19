import { insertionSort } from "./insertionSort"
import { selectionSort } from "./selectionSort"
import { SortHelper } from "./sortHelper"

const helper = SortHelper()
const n = 10000
const arr = helper.genNearlyOrdered(n, 100)
const arr2 = JSON.parse(JSON.stringify(arr))
helper.testSort('selection sort', selectionSort, arr, n)
helper.testSort('insertion sort', insertionSort, arr2, n)
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mergeSort_1 = require("./mergeSort");
var quickSort_1 = require("./quickSort");
var sortHelper_1 = require("./sortHelper");
var helper = (0, sortHelper_1.SortHelper)();
var n = 1000000;
// const arr = helper.genNearlyOrdered(n, 1000)
var arr = helper.genRandom(n, 0, n);
var arr2 = JSON.parse(JSON.stringify(arr));
var arr3 = JSON.parse(JSON.stringify(arr));
var arr4 = JSON.parse(JSON.stringify(arr));
var arr5 = JSON.parse(JSON.stringify(arr));
var arr6 = JSON.parse(JSON.stringify(arr));
var arr7 = JSON.parse(JSON.stringify(arr));
var arr8 = JSON.parse(JSON.stringify(arr));
// helper.testSort('selection sort', selectionSort, arr, n)
// helper.testSort('insertion sort', insertionSort, arr2, n)
// helper.testSort('bubble sort', bubbleSort, arr3, n)
// helper.testSort('shell sort', shellSort, arr4, n)
helper.testSort('merge sort', mergeSort_1.mergeSort, arr5, n);
helper.testSort('merge sort BU', mergeSort_1.mergeSortBU, arr6, n);
helper.testSort('quick sort', quickSort_1.quickSort, arr7, n);
var nearlyOrderArr = helper.genNearlyOrdered(n, 100);
var nearlyOrderArr2 = JSON.parse(JSON.stringify(nearlyOrderArr));
var nearlyOrderArr3 = JSON.parse(JSON.stringify(nearlyOrderArr));
helper.testSort('nearly order merge sort', mergeSort_1.mergeSort, nearlyOrderArr, n);
helper.testSort('nearly order merge sort BU', mergeSort_1.mergeSortBU, nearlyOrderArr2, n);
helper.testSort('nearly order quick sort', quickSort_1.quickSort, nearlyOrderArr3, n);

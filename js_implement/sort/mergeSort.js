"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSortBU = exports.mergeSort = void 0;
var insertionSort_1 = require("./insertionSort");
var mergeSort = function (arr, n) {
    __mergeSort(arr, 0, n - 1);
};
exports.mergeSort = mergeSort;
var mergeSortBU = function (arr, n) {
    for (var size = 1; size <= n; size += size) {
        for (var i = 0; i + size < n; i += size + size) {
            if (size + size <= 15) {
                (0, insertionSort_1.insertionSort)(arr, i, Math.min(i + size + size - 1, n - 1));
            }
            if (arr[i + size - 1] > arr[i + size]) {
                __merge(arr, i, i + size - 1, Math.min(i + size + size - 1, n - 1));
            }
        }
    }
};
exports.mergeSortBU = mergeSortBU;
var __mergeSort = function (arr, l, r) {
    if (r - l <= 15) {
        (0, insertionSort_1.insertionSort)(arr, l, r);
        return;
    }
    var mid = Math.floor((l + r) / 2);
    __mergeSort(arr, l, mid);
    __mergeSort(arr, mid + 1, r);
    if (arr[mid] > arr[mid + 1])
        __merge(arr, l, mid, r);
};
var __merge = function (arr, l, mid, r) {
    var aux = [];
    for (var i_1 = l; i_1 <= r; i_1++) {
        aux[i_1 - l] = arr[i_1];
    }
    var i = l, j = mid + 1;
    for (var k = l; k <= r; k++) {
        if (i > mid) {
            arr[k] = aux[j - l];
            j++;
        }
        else if (j > r) {
            arr[k] = aux[i - l];
            i++;
        }
        else if (aux[i - l] > aux[j - l]) {
            arr[k] = aux[j - l];
            j++;
        }
        else {
            arr[k] = aux[i - l];
            i++;
        }
    }
};
